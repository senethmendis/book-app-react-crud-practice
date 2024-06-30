import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "", // Corrected spelling
    price: 0,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/books/" + bookId, book);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1>Update Books</h1>
      <div className="form">
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
          placeholder="Cover"
          name="cover"
          onChange={handleChange}
        />

        <button onClick={handleClick}>Add book</button>
      </div>
    </>
  );
};

export default Update;
