import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://pblcare99:hQOhOyfygEF7lI8e@cluster0.bj46ie7.mongodb.net/"
    )
    .then(() => console.log(`Datebase Connected`))
    .catch((error) => console.log(error.message));
};
export default connectDB;
// pblcare99;
// dXnnSTzf1dwhkhy1;

// pblcare99;
// hQOhOyfygEF7lI8e;

// mongodb+srv://pblcare99:<password>@cluster0.bj46ie7.mongodb.net/
0;
