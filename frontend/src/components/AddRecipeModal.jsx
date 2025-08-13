import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const initialIngredient = { name: "", quantity: "" };
const initialDirection = { step: "" };
const initialNutrition = { calories: "", protein: "", carbs: "", fats: "" };

const AddRecipeModal = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [nutritionalInfo, setNutritionalInfo] = useState(initialNutrition);
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState([initialIngredient]);
  const [directions, setDirections] = useState([initialDirection]);
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState(""); // Should be user id
  const {currentUser} = useContext(AppContext)

  const handleIngredientChange = (idx, field, value) => {
    const updated = ingredients.map((ing, i) =>
      i === idx ? { ...ing, [field]: value } : ing
    );
    setIngredients(updated);
  };

  const handleDirectionChange = (idx, value) => {
    const updated = directions.map((dir, i) =>
      i === idx ? { step: value } : dir
    );
    setDirections(updated);
  };

  const handleNutritionChange = (field, value) => {
    setNutritionalInfo({ ...nutritionalInfo, [field]: value });
  };

  const addIngredient = () => setIngredients([...ingredients, initialIngredient]);
  const addDirection = () => setDirections([...directions, initialDirection]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("content", content);
    formData.append("nutritionalInfo", JSON.stringify({
      calories: Number(nutritionalInfo.calories),
      protein: Number(nutritionalInfo.protein),
      carbs: Number(nutritionalInfo.carbs),
      fats: Number(nutritionalInfo.fats),
    }));
    formData.append("prepTime", prepTime);
    formData.append("cookTime", cookTime);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("directions", JSON.stringify(directions));
    if (image) formData.append("image", image); // image should be a File object
    formData.append("author", currentUser.id);
    console.log(currentUser.id)

  onSubmit(formData);
  console.log({title, description, content, nutritionalInfo, prepTime, cookTime, ingredients, directions, author: currentUser.id, image});
  onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Add Recipe</h2>
        <input value={title} onChange={e => setTitle(e.target.value)} required placeholder="Title" className="border p-2 rounded" />
        <input value={description} onChange={e => setDescription(e.target.value)} required placeholder="Description" className="border p-2 rounded" />
        <select value={type} onChange={e => setType(e.target.value)} required className="border p-2 rounded">
          <option value="">Select type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="dessert">Dessert</option>
        </select>
        <textarea value={content} rows={6} onChange={e => setContent(e.target.value)} required placeholder="Content" className="border p-2 rounded min-h-[120px] resize-y" />
        <div>
          <h3 className="font-semibold">Nutritional Info</h3>
          <input value={nutritionalInfo.calories} onChange={e => handleNutritionChange("calories", e.target.value)} required placeholder="Calories" type="number" className="border p-2 rounded mr-2" />
          <input value={nutritionalInfo.protein} onChange={e => handleNutritionChange("protein", e.target.value)} required placeholder="Protein" type="number" className="border p-2 rounded mr-2" />
          <input value={nutritionalInfo.carbs} onChange={e => handleNutritionChange("carbs", e.target.value)} required placeholder="Carbs" type="number" className="border p-2 rounded mr-2" />
          <input value={nutritionalInfo.fats} onChange={e => handleNutritionChange("fats", e.target.value)} required placeholder="Fats" type="number" className="border p-2 rounded" />
        </div>
        <input value={prepTime} onChange={e => setPrepTime(e.target.value)} required placeholder="Prep Time (min)" type="number" className="border p-2 rounded" />
        <input value={cookTime} onChange={e => setCookTime(e.target.value)} required placeholder="Cook Time (min)" type="number" className="border p-2 rounded" />
        <div>
          <h3 className="font-semibold">Ingredients</h3>
          {ingredients.map((ing, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input type='text' value={ing.name} onChange={e => handleIngredientChange(idx, "name", e.target.value)} required placeholder="Name" className="border p-2 rounded" />
              <input type='text' value={ing.quantity} onChange={e => handleIngredientChange(idx, "quantity", e.target.value)} placeholder="Quantity" className="border p-2 rounded" />
            </div>
          ))}
          <button type="button" onClick={addIngredient} className="text-blue-500 underline">+ Add Ingredient</button>
        </div>
        <div>
          <h3 className="font-semibold">Directions</h3>
          {directions.map((dir, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input value={dir.step} onChange={e => handleDirectionChange(idx, e.target.value)} required placeholder={`Step ${idx + 1}`} className="border p-2 rounded w-full" />
            </div>
          ))}
          <button type="button" onClick={addDirection} className="text-blue-500 underline">+ Add Step</button>
        </div>
        <input type='file' accept='image/*' onChange={e => setImage(e.target.files[0])} className="border p-2 rounded bg-black text-white" />
        <div className="flex gap-4 mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Recipe</button>
          <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeModal;