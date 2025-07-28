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