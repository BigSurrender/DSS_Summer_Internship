import React from "react";

function BookDetails({
  selectedBook,
  handleInputChange,
  handleSave,
  handleClear,
}) {
  return (
    <section className="content-details">
      <h2>Book Details</h2>
      <form>
        <input
          type="text"
          id="field1"
          name="title"
          value={selectedBook ? selectedBook.title : newBook.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          id="field2"
          name="author"
          value={selectedBook ? selectedBook.author : newBook.author}
          onChange={handleInputChange}
          placeholder="Author"
        />
        <input
          type="text"
          id="field3"
          name="isbn"
          value={selectedBook ? selectedBook.isbn : newBook.isbn}
          onChange={handleInputChange}
          placeholder="ISBN"
        />
        <input
          type="text"
          id="field4"
          name="price"
          value={selectedBook ? selectedBook.price : newBook.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <input
          type="date"
          id="field5"
          name="publicationDate"
          value={
            selectedBook
              ? selectedBook.publicationDate
              : newBook.publicationDate
          }
          onChange={handleInputChange}
          placeholder="Publication Date"
        />
        <button type="button" id="saveButton" onClick={handleSave}>
          Save
        </button>
        <button type="button" id="clearButton" onClick={handleClear}>
          Clear
        </button>
      </form>
    </section>
  );
}

export default BookDetails;
