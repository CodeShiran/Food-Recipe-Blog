import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { assets } from "../assets/assets";
import SmallCard from "../components/SmallCard";
import EmailBox from "../components/EmailBox";
import AddBlogModal from "../components/AddBlogModal";
import Chat from "../components/Chat";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";



const recipes = [
  {
    id: 1,
    title: "Healthy Japanese Fried Rice",
    image: assets.chickenMeatballsSm,
    person: "John Doe",
  },
  {
    id: 2,
    title: "Spaghetti Carbonara",
    image: assets.creamyChickenSm,
    person: "Jane Smith",
  },
  {
    id: 3,
    title: "Chicken Tikka Masala",
    image: assets.potChickensm,
    person: "Alice Johnson",
  },
];

const BlogList = () => {
  const { blogPosts } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.personName.toLowerCase().includes(search.toLowerCase())
  );
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = filteredPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  return (
    <div className="md:px-[50px] px-[25px]">
      <Chat />
      <div className="mt-[50px] flex flex-col justify-center items-center mx-auto">
        <h1 className="text-4xl font-bold">Blog & Article</h1>
        <p className="text-sm text-center mt-4 text-gray-500">
          Welcome to our blog section! Here you will find a variety of articles
          and posts related to food recipes, cooking tips, and culinary
          inspiration. <br /> Stay tuned for our latest updates!
        </p>
        <div className="flex flex-row items-center justify-between mt-6 rounded-2xl p-2 shadow-md border-1 border-gray-300 bg-white max-w-[600px] w-full">
          <input
            onChange={(e) => {setSearch(e.target.value); setCurrentPage(1);}} // Reset to first page on search
            type="text"
            className="p-2 focus:outline-none"
            placeholder="Search articles..."
          />
          <button
            onClick={postsToShow}
            className="bg-black text-white w-[100px] rounded-md p-2 ml-2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-2.5">
        <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add New Blog</button>
      </div>
      {showModal && (
        <AddBlogModal
          onSubmit={(newPost) => {
            // Handle new post submission
            console.log("New Post:", newPost);
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6 w-full">
          {postsToShow.map((post) => (
            <BlogCard
              key={post._id}
              title={post.title}
              description={post.description}
              postImg={post.image}
              personImg={post.personImg}
              personName={post.personName}
              date={new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
            />
          ))}
        </div>
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Related Recipes</h2>
          <div className="grid grid-cols-1 gap-4">
            {recipes.map((recipe) => (
              <SmallCard
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                person={recipe.person}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-[50px]">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 px-4 py-2 rounded-lg border transition-all duration-200
    ${
      currentPage === i + 1
        ? "bg-blue-500 text-white font-bold border-blue-500 shadow"
        : "bg-white text-blue-500 border-gray-300 hover:bg-blue-100 hover:border-blue-400"
    }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div>
        <EmailBox />
      </div>
    </div>
  );
};

export default BlogList;
