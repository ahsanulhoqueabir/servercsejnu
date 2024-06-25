const { socailPlatforms, codingPlatforms } = require("../data/site.js");
const Students = require("../models/Student.js");
const projection = {
  id: 1,
  social: 1,
  codingProfile: 1,
  education: 1,
  nickname: 1,
  name: 1,
  description: 1,
  blood: 1,
  gender: 1,
  birthdate: 1,
  religion: 1,
  photo: 1,
  address: 1,
  uniName: 1,
  uniStartYear: 1,
  graduationDate: 1,
  clgName: 1,
  clgPYear: 1,
  schoolName: 1,
  educationalBackground: 1,
  schoolPYear: 1,
  email: 1,
  phone_number: 1,
  facebook: 1,
  linkedin: 1,
  instagram: 1,
  youtube: 1,
  website: 1,
  github: 1,
  codeforces: 1,
  codechef: 1,
  leetcode: 1,
  skills: 1,
  hobby: 1,
  phone: 1,
  role: 1,
};
const createStudent = async (req, res) => {
  const newStudent = new Students(req.body);
  try {
    await newStudent.save();
    res.status(200).json({
      data: newStudent,
      message: "Student created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json({ data: students });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const BasicInfo = async (req, res) => {
  try {
    const projection = {
      email: 1,
      name: 1,
      nickname: 1,
      id: 1,
      role: 1,
    };
    const query = req.query;
    const students = await Students.find(query, projection).sort({
      id: 1,
    });
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getSortedData = async (req, res) => {
  try {
    let sort_by = req.query.sortby;
    let sort_order = req.query.order || "asc";

    const query = {};
    const options = {};
    options[sort_by] = sort_order === "asc" ? 1 : -1;

    const students = await Students.find(query, projection).sort(options);
    students.map((student) => {
      if (student.education && Array.isArray(student.education)) {
        student.education.sort((a, b) => b.passingYear - a.passingYear);
      }
    });
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const queryData = async (req, res) => {
  try {
    const query = req.query;
    const students = await Students.find(query, projection).populate({
      path: "results",
      select: "-createdAt -updatedAt -__v -student -studentId",
      populate: {
        path: "results.course",
        select: "",
      },
    });
    students.map((student) => {
      if (student.education && Array.isArray(student.education)) {
        student.education.sort((a, b) => b.passingYear - a.passingYear);
      }
    });

    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const updateStudent = async (req, res) => {
  try {
    const query = req.query;
    const newData = await req.body;

    const student = await Students.updateOne({ email: query.email }, newData, {
      new: true,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const addNewField = async (req, res) => {
  try {
    const newField = req.query.fieldname;
    const value = req.query.value;
    const allStudents = await Students.find();
    allStudents.map(async (student) => {
      student[newField] = value;
      await student.save();
    });

    res.status(200).json({
      message: `${newField} added successfully`,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const updateSpecificField = async (req, res) => {
  try {
    const { id, field, value } = req.query;
    const student = await Students.findByIdAndUpdate(
      id,
      {
        $set: {
          [field]: value,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const addResult = async (req, res) => {
  try {
    const query = req.query;
    const result = await req.body;
    const cgpa = result.BSc.info.cgpa;
    const newData = result;
    newData.BSc.info.cgpa = cgpa;
    const student = await Students.updateOne(query, {
      $set: newData,
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getResult = async (req, res) => {
  try {
    const query = req.query;
    const student = await Students.find(query, { id: 1, results: 1 }).populate({
      path: "results",
      select: "-createdAt -updatedAt -__v -student -studentId",
      populate: {
        path: "results.course",
      },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const deleteField = async (req, res) => {
  try {
    await Students.updateMany(
      {},
      {
        $unset: {
          results: [],
        },
      }
    );

    res.status(200).json({
      message: ` deleted successfully`,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const modifyData = async (req, res) => {
  try {
    const students = await Students.find();

    students.map(async (student) => {
      const social = [];
      const codingProfile = [];
      socailPlatforms.map((item) => {
        if (student[item] && student[item] !== "") {
          social.push({
            platform: item,
            link: student[item],
          });
        }
      });
      codingPlatforms.map((item) => {
        if (student[item] && student[item] !== "") {
          codingProfile.push({
            platform: item,
            handle: student[item],
          });
        }
      });

      student.social = social;
      student.codingProfile = codingProfile;
      await student.save();
    });

    res.status(200).json({
      message: ` modified successfully`,
      // length: cursor.length,
      data: students,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createStudent,
  getStudents,
  BasicInfo,
  getSortedData,
  queryData,
  updateStudent,
  addNewField,
  addResult,
  getResult,
  updateSpecificField,
  deleteField,
  modifyData,
};
