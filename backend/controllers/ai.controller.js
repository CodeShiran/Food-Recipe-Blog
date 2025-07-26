
import dotenv from 'dotenv'
import { generateRecipe } from '../services/ai.service'
dotenv.config()



export const SearchFoods = async (req, res) => {
    const {foodName} = req.body

    try {
        const recipe = await generateRecipe(foodName)
        res.json({recipe})

    } catch (error) {
        console.log("Error Fetching Data:",error.message)
        res.status(500).json({error: 'failed to generate recipe'})
    }
}