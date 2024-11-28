import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../Redux/action";
import BookForm from "./BookForm";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const [isEditing, setIsEditing] = React.useState(false);
  const [currentBook, setCurrentBook] = React.useState(null);

  const dispatch = useDispatch();

  const handleEdit = (book) => {
    setCurrentBook(book);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const containerStyles = {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const listStyles = {
    listStyleType: "none",
    padding: 0,
    margin: "1rem 0",
  };

  const listItemStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 1rem",
    margin: "0.5rem 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: "0.5rem",
  };

  const buttonStyles = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const editButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#007bff",
    color: "#fff",
  };

  const deleteButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#dc3545",
    color: "#fff",
  };

  return (
    <div style={containerStyles}>
      {isEditing ? (
        <BookForm currentBook={currentBook} setIsEditing={setIsEditing} />
      ) : (
        <BookForm />
      )}
      <ul style={listStyles}>
        {books.map((book) => (
          <li key={book.id} style={listItemStyles}>
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <div style={buttonGroupStyles}>
              <button
                style={editButtonStyles}
                onClick={() => handleEdit(book)}
              >
                Edit
              </button>
              <button
                style={deleteButtonStyles}
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
