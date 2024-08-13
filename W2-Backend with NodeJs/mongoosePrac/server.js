const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

// Define a Schema
const unitSchema = new mongoose.Schema({
  _id: String,
  name: String,
  credit: Number,
});

// then, Create a Model
const Unit = new mongoose.model("Unit", unitSchema);

const unit = new Unit({
  _id: "sit313",
  name: "developing client server web app",
  credit: 1,
});

const unit1 = new Unit({
  _id: "sit314",
  name: "developing server",
  credit: 2,
});

// insert to DB
unit.save((err) => {
  if (err) console.log(err);
  else console.log("Inserted successfully");
});

// To insert many, => every object should be in an array
Unit.insertMany([unit, unit1], (err) => {
  if (err) console.log(err);
  else console.log("Inserted 2 units");
});

// Find method
Unit.Find((err, units) => {
  if (err) console.log(err);
  else console.log(units);
});

// Data  validation examples

const studentSchema = new mongoose.Schema({
  _id: { type: string, required: true },
  name: String,
  credit: { type: Number, min: 0, max: 3 },
});

const Student = new mongoose.model("Student", studentSchema);

const studen1 = new Student({
  _id: "123",
  name: "zaad",
  credit: 2,
});
