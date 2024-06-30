import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3001/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1 className="text-4xl my-5 font-bold">Book Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {books.map((book) => (
          <div
            key={book.id}
            className="book flex-1 flex flex-col gap-3 items-center"
          >
            {book.cover != null ? (
              <img src={book.cover} alt="" />
            ) : (
              <img src="" alt="" />
            )}
            <h2 className="text-2xl font-bold">{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
            <button
              className="bg-red-500"
              onClick={() => handleDelete(book.id)}
            >
              Detele
            </button>
            <button className="bg-green-500">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button className="my-5 bg-blue-500 w-1/2">
        <Link to="/add">Add New Book</Link>
      </button>
    </div>
  );
};

export default Books;
