import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
  import { toast } from "react-toastify";

const AddBlogModal = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(""); // Should be user id
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const {addBlog, currentUser} = useContext(AppContext)



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", currentUser.id);
    formData.append("description", description);
    if (image) formData.append("image", image);

    const result = await onSubmit(formData);
    if (result) {
      onClose()
      toast.success("Blog post added successfully!");
    }
    else {
      toast.error("Failed to add blog post. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg flex flex-col gap-4 overflow-y-auto max-h-[90vh]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Add Blog Post</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
          className="border p-2 rounded"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Description"
          className="border p-2 rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Content"
          className="border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border bg-black text-white p-2 rounded max-w-[250px] w-full"
        />
        <div className="flex gap-4 mt-4">
          <button
          
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Blog
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogModal;