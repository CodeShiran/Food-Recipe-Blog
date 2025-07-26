import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type:String,
        default: "https://www.gravatar.com/avatar/0000000000000000000000000000000?d=mp&f=y",
    }


}, { timestamps: true });

const User = mongoose.model("User", userSchema)

export default User;