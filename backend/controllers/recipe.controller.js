import Recipe from "../models/recipe.js";

export const createRecipe = async (req, res) => {
    try {
        const body = req.body || {};
        const {
            title,
            description,
            type,
            content,
            prepTime,
            cookTime,
            author
        } = body;

        // Parse JSON fields safely
        const nutritionalInfo = typeof body.nutritionalInfo === "string"
  ? JSON.parse(body.nutritionalInfo)
  : body.nutritionalInfo || null;

const ingredients = typeof body.ingredients === "string"
  ? JSON.parse(body.ingredients)
  : body.ingredients || null;

const directions = typeof body.directions === "string"
  ? JSON.parse(body.directions)
  : body.directions || null;

        const image = req.file ? req.file.path : undefined;


    console.log("Body", req.body)
        console.log("File", req.file);
        if (
  !title || !description || !type || !content || !nutritionalInfo ||
  !prepTime || !cookTime || !ingredients || !directions
) {
  return res.status(400).json({message: 'Please fill all fields'});
}

        const newRecipe = new Recipe({
            title,
            description,
            type,
            content,
            nutritionalInfo,
            prepTime,
            cookTime,
            ingredients,
            directions,
            image,
            author
        });

        await newRecipe.save();
        if (req.file) {
  console.log("File uploaded to Cloudinary:", req.file.path); // Cloudinary URL
} else {
  console.log("No file uploaded.");
    
}
        
        console.log("Recipe created successfully:", newRecipe);
        res.status(201).json({message: 'Recipe created successfully', recipe: newRecipe});
    } catch (error) {
        console.error("Error creating recipe:", error.message);
        res.status(500).json({message: "Internal server error"});
    }
}

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({})
        res.status(200).json({recipes});
    } catch (error) {
        console.error("Error fetching recipes:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const getRecipe = async (req, res) => {
    const {id} = req.params

    try {
        const recipe = await Recipe.findById(id)
        if (!recipe) {
            return res.status(404).json({message: 'Recipe not found'});
        }
        res.status(200).json({recipe});
    } catch (error) {
        console.error("Error fetching recipe:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const editRecipe = async (req, res) => {
    const {id} = req.params

    const {title, description, content, nutritionalInfo, prepTime, cookTime, ingredients, directions, image} = req.body;
    if (!title && !description && !content && !nutritionalInfo && !prepTime && !cookTime && !ingredients && !directions && !image) {
        return res.status(400).json({message: 'Please fill at least one field to update'});
    }

    const updatedFields = {}
    if (title) updatedFields.title = title;
    if (description) updatedFields.description = description;
    if (content) updatedFields.content = content;
    if (nutritionalInfo) updatedFields.nutritionalInfo = nutritionalInfo;
    if (prepTime) updatedFields.prepTime = prepTime;
    if (cookTime) updatedFields.cookTime = cookTime;
    if (ingredients) updatedFields.ingredients = ingredients;
    if (directions) updatedFields.directions = directions;
    if (image) updatedFields.image = image;

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, updatedFields, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({message: 'Recipe not found'});
        }
        res.status(200).json({message: 'Recipe updated successfully', recipe: updatedRecipe});
    } catch (error) {
        console.error("Error editing recipe:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const deleteRecipe = async (req, res) => {
    const {id} = req.params

    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id)
        if (!deletedRecipe) {
            return res.status(404).json({message: 'Recipe not found'});
        }
        res.status(200).json({message: 'Recipe deleted successfully'});
    } catch (error) {
        console.error("Error deleting recipe:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}