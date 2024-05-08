import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";

const listOfBooks = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    isbn: "9780807286005",
    price: "9.99",
    publicationDate: "1997-06-26",
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    author: "John Ronald Reuel Tolkien",
    isbn: "9788845292613",
    price: "14.99",
    publicationDate: "1954-07-29",
  },
];

function App() {
  const [books, setBooks] = useState(listOfBooks);
  const [selectedBook, setSelectedBook] = useState({
    id: "",
    title: "",
    author: "",
    isbn: "",
    price: "",
    publicationDate: "",
  });

  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const timeZoneOffset = -date.getTimezoneOffset() / 60;
    const timeZoneOffsetString =
      (timeZoneOffset >= 0 ? "+" : "") +
      timeZoneOffset.toString().padStart(2, "0") +
      "00";

    return `${
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]
    } ${
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ][date.getMonth()]
    } ${day} ${year} ${hours}:${minutes}:${seconds} GMT${timeZoneOffsetString} (Източноевропейско лятно часово време)`;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedBook({ ...selectedBook, [name]: value });
  };

  const handleSave = () => {
    if (
      !selectedBook.title ||
      !selectedBook.author ||
      !selectedBook.isbn ||
      !selectedBook.price ||
      !selectedBook.publicationDate
    ) {
      alert("All fields are mandatory!");
      return;
    }

    const formattedDate = dateFormat(selectedBook.publicationDate);

    if (selectedBook.id) {
      const updatedBooks = books.map((book) =>
        book.id === selectedBook.id
          ? { ...selectedBook, publicationDate: formattedDate }
          : book
      );
      setBooks(updatedBooks);
    } else {
      const newBook = {
        ...selectedBook,
        id: books.length + 1,
        publicationDate: formattedDate,
      };
      setBooks([...books, newBook]);
    }
    handleClear();
  };

  const handleDelete = (id) => {
    const updatedBooks = books
      .filter((book) => book.id !== id)
      .map((book, index) => ({ ...book, id: index + 1 }));
    setBooks(updatedBooks);
    handleClear();
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleClear = () => {
    setSelectedBook({
      id: "",
      title: "",
      author: "",
      isbn: "",
      price: "",
      publicationDate: "",
    });
  };

  return (
    <div className="App">
      <Navbar />
      <BookDetails
        selectedBook={selectedBook}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
        handleClear={handleClear}
      />
      <BookList
        books={books}
        handleSelectBook={handleSelectBook}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
