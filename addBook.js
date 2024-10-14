// Function to add a new book to the library
function addBookToLibrary(book) {
    const library = document.getElementById("library");
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.setAttribute("data-title", book.title);
    bookCard.setAttribute("data-author", book.author);

    bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title} Cover">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <button class="preview-btn" onclick="openModal('${book.pdf}')">Preview Book</button>
    `;

    library.appendChild(bookCard);
}

// Example of how to use the function to add a book
function addNewBook() {
    const newBook = {
        title: "New Book Title",
        author: "New Author",
        image: "https://via.placeholder.com/200x300",
        pdf: "https://example.com/newbook.pdf"
    };

    addBookToLibrary(newBook);
}
