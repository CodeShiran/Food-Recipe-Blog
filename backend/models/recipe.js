import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    content : {
        type: String,
        required: true,
    },
    nutritionalInfo: {
        calories: {
            type: Number,
            required: true,
        },
        protein: {
            type: Number,
            required: true,
        },
        carbs: {
            type: Number,
            required: true,
        },
        fats: {
            type: Number,
            required: true,
        },
    },
    prepTime: {
        type: Number,
        required: true,
    },
    cookTime: {
        type: Number,
        required: true,
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: String,
                required: false,
            },
        },
    ],
    Directions: [
        {
            step: {
                type: String,
                required: true,
            },
        },
    ], 
    image: {
        type: String,
        default: "https://via.placeholder.com/600x400?text=No+Image",
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;