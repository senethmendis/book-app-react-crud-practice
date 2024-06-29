import { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState("");

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

  return <div>Books</div>;
};

export default Books;
