import mongoose from "mongoose";
const studentSchema = new mongoose.Schema(
  {
    serial: { type: String, required: true },
    id: { type: String, required: true },
    nickname: { type: String, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    blood: { type: String, required: false },
    gender: { type: String, required: false },
    birthdate: { type: String, required: false }, // Changed to Date type
    religion: { type: String, required: false },
    photo: { type: String, required: false },
    address: { type: String, required: false },
    city: { type: String, required: false },
    division: { type: String, required: false },
    zipcode: { type: String, required: false },
    country: { type: String, required: false },
    uniName: { type: String, required: false },
    degree: { type: String, required: false },
    major: { type: String, required: false },
    uniStartYear: { type: Number, required: false },
    graduationDate: { type: Number, required: false },
    contactNumber: { type: String, required: false },
    eduMail: { type: String, required: false },
    educationalBackground: { type: String, required: false },
    collegeId: { type: String, required: false },
    clgName: { type: String, required: false },
    clgPYear: { type: Number, required: false },
    schoolId: { type: String, required: false },
    schoolName: { type: String, required: false },
    schoolPYear: { type: Number, required: false },
    status: { type: Boolean, required: false },
    fatherName: { type: String, required: false },
    fatherOC: { type: String, required: false },
    motherName: { type: String, required: false },
    motherOC: { type: String, required: false },
    guardianName: { type: String, required: false },
    email: { type: String, required: true },
    phone_number: { type: String, required: false },
    facebook: { type: String, required: false },
    twitter: { type: String, required: false },
    linkedin: { type: String, required: false },
    instagram: { type: String, required: false },
    skype: { type: String, required: false },
    whatsapp: { type: String, required: false },
    googleplus: { type: String, required: false },
    pinterest: { type: String, required: false },
    snapchat: { type: String, required: false },
    vk: { type: String, required: false },
    youtube: { type: String, required: false },
    website: { type: String, required: false },
    github: { type: String, required: false },
    codeforces: { type: String, required: false },
    skills: { type: [String], required: false },
    hobby: { type: [String], required: false },
    extraCurricularActivity: { type: [String], required: false },
    award: { type: [String], required: false },
    publication: { type: [String], required: false },
    achievement: { type: [String], required: false },
    language: { type: [String], required: false },
    height: { type: String, required: false },
    weight: { type: String, required: false },
    complexion: { type: String, required: false },
    bodyType: { type: String, required: false },
    eyeSight: { type: String, required: false },
    hairColor: { type: String, required: false },
    maritalStatus: { type: mongoose.Schema.Types.Mixed, required: false },
    spouseName: { type: String, required: false },
    role: { type: String, required: false },
    results: {
      type: {
        BSc: {
          info: {
            cgpa: { type: Number, required: false },
          },
          allsem: { type: mongoose.Schema.Types.Mixed, required: false },
        },
      },
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Student", studentSchema, "cse13batch");