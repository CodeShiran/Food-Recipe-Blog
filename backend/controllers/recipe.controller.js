import Recipe from "../models/recipe.js";

export const createRecipe = async (req, res) => {
    const {title, description, content, nutritionalInfo, prepTime, cookTime, ingredients, directions, image, author} = req.body;
    if (!title || !description || !content || !nutritionalInfo || !prepTime || !cookTime || !ingredients || !directions) {
        return res.status(400).json({message: 'Please fill all fields'});
    }

    try {
        const newRecipe = new Recipe({
            title,
            description,
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
        res.status(201).json({message: 'Recipe created successfully', recipe: newRecipe});
    } catch (error) {
        console.error("Error creating recipe:", error.message);
        res.status(500).json({error: 'Internal server error'});
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