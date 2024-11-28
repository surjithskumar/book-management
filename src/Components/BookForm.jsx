import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../Redux/action";

const BookForm = ({ currentBook, setIsEditing }) => {
  const [title, setTitle] = useState(currentBook ? currentBook.title : "");
  const [author, setAuthor] = useState(currentBook ? currentBook.author : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: currentBook ? currentBook.id : Date.now(), title, author };
    if (currentBook) {
      dispatch(editBook(currentBook.id, book));
      setIsEditing(false);
    } else {
      dispatch(addBook(book));
    }
    setTitle("");
    setAuthor("");
  };

  const formStyles = {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "1.5rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const titleStyles = {
    textAlign: "center",
    color: "#333",
    marginBottom: "1.5rem",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    margin: "0.5rem 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const buttonStyles = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const buttonHoverStyles = {
    backgroundColor: "#0056b3",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h3 style={titleStyles}>Book Management System</h3>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyles}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={inputStyles}
      />
      <button
        type="submit"
        style={buttonStyles}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
      >
        {currentBook ? "Update" : "Add"} Book
      </button>
    </form>
  );
};

export default BookForm;