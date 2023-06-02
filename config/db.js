import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://pblcare99:dXnnSTzf1dwhkhy1@cluster0.pglux1o.mongodb.net/"
    )
    .then(() => console.log(`Datebase Connected`))
    .catch((error) => console.log(error.message));
};
export default connectDB;
// pblcare99;
// dXnnSTzf1dwhkhy1;
