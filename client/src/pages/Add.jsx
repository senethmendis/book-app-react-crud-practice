import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "", // Corrected spelling
    price: 0,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/books", book);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-2xl mb-3">Add an New Book</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description" // Corrected spelling
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="add cover url"
        name="cover"
        onChange={handleChange}
      />

      <button className="bg-blue-500" onClick={handleClick}>
        Add book
      </button>
    </div>
  );
};

export default Add;
