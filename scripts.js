// Open the modal and load the PDF into the iframe
function openModal(url) {
    const modal = document.getElementById("pdfModal");
    const iframe = document.getElementById("pdfFrame");
    const closeButton = document.getElementById("closeBtn");
    
    iframe.src = url; // Set the PDF URL
    modal.style.display = "block"; // Show the modal
    closeButton.style.display = "block"; // Show the close button
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("pdfModal");
    const iframe = document.getElementById("pdfFrame");
    const closeButton = document.getElementById("closeBtn");
    
    iframe.src = ""; // Clear the PDF source
    modal.style.display = "none"; // Hide the modal
    closeButton.style.display = "none"; // Hide the close button
}

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("pdfModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Search function
function searchBooks() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const library = document.getElementById("library");
    const books = library.getElementsByClassName("book-card");

    Array.from(books).forEach(book => {
        const title = book.getAttribute("data-title").toLowerCase();
        const author = book.getAttribute("data-author").toLowerCase();

        if (title.includes(input) || author.includes(input)) {
            book.style.display = "block"; // Show book
        } else {
            book.style.display = "none"; // Hide book
        }
    });
}


