// import mongoose from "mongoose";
const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    serial: { type: String, required: true },
    id: { type: String, required: true },
    nickname: { type: String },
    name: { type: String },
    description: { type: String },
    blood: { type: String },
    gender: { type: String },
    birthdate: { type: String }, // Changed to Date type
    religion: { type: String },
    photo: { type: String },
    address: { type: String },
    city: { type: String },
    division: { type: String },
    zipcode: { type: String },
    country: { type: String },
    uniName: { type: String },
    degree: { type: String },
    major: { type: String },
    uniStartYear: { type: Number },
    graduationDate: { type: Number },
    contactNumber: { type: String },
    eduMail: { type: String },
    education: [
      {
        level: { type: String }, // school,college,university
        ID: { type: String },
        background: { type: String }, // science,commerce,arts
        institution: { type: String },
        major: { type: String },
        result: { type: Number }, // gpa
        passingYear: { type: Number },
        startYear: { type: Number },
        edumail: {
          type: String,
        },
        board: {
          type: String,
        },
      },
    ],
    social: [
      {
        platform: { type: String }, // facebook,instagram,linkedin,
        link: { type: String },
      },
    ],
    codingProfile: [
      {
        platform: { type: String }, // codeforces,codechef,leetcode
        handle: { type: String },
      },
    ],
    educationalBackground: { type: String },
    collegeId: { type: String },
    clgName: { type: String },
    clgPYear: { type: Number },
    schoolId: { type: String },
    schoolName: { type: String },
    schoolPYear: { type: Number },
    status: { type: Boolean },
    fatherName: { type: String },
    fatherOC: { type: String },
    motherName: { type: String },
    motherOC: { type: String },
    guardianName: { type: String },
    email: { type: String, required: true },
    phone_number: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
    skype: { type: String },
    whatsapp: { type: String },
    googleplus: { type: String },
    pinterest: { type: String },
    snapchat: { type: String },
    vk: { type: String },
    youtube: { type: String },
    website: { type: String },
    github: { type: String },
    codeforces: { type: String },
    skills: { type: [String] },
    hobby: { type: [String] },
    extraCurricularActivity: { type: [String] },
    award: { type: [String] },
    publication: { type: [String] },
    achievement: { type: [String] },
    language: { type: [String] },
    height: { type: String },
    weight: { type: String },
    complexion: { type: String },
    bodyType: { type: String },
    eyeSight: { type: String },
    hairColor: { type: String },
    maritalStatus: { type: mongoose.Schema.Types.Mixed },
    spouseName: { type: String },
    role: { type: String },
    results: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Result",
      },
    ],
  }

  // {
  //   timestamps: true,
  // }
);

module.exports = mongoose.model("Student", studentSchema, "cse13batch");
