import React from "react";

function BookList({ books, handleSelectBook, handleDelete }) {
  return (
    <section className="content-list">
      <h2>List of Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleSelectBook(book)}>
            <p className="id">ID: {book.id}</p>
            <p className="field1">Title: {book.title}</p>
            <p className="field2">Author: {book.author}</p>
            <p className="field3">ISBN: {book.isbn}</p>
            <p className="field4">Price: {book.price}</p>
            <p className="field5">Publication Date: {book.publicationDate}</p>
            <button
              className="deleteButton"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookList;
