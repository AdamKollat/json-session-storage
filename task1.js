let shelf = document.getElementById('bookShelf')
let books = []

function myLoad() {
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("books", JSON.stringify(books));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        books = JSON.parse(sessionStorage.getItem("books"));//Get the array of book objects from sessionStorage and assign it to the array 'books'
        let i = 0;
        books.forEach(function(b) {//Loop through each book (b) in the books array
            /*For each book in the array create an option element that displays 
            that person's name and add it to the select (dropdown) element on the HTML page */
            let paragraph = document.createElement("p");
            paragraph.innerHTML = `Title: ${b.title} | author: ${b.author} | genre: ${b.genre} | rating: ${b.rating}`
            shelf.appendChild(paragraph);
        });
    }
}

function Book(title, author, genre, rating) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.rating = rating;
}


const newBook = () => {
    books = JSON.parse(sessionStorage.getItem('books'))
    let newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("genre").value,
        document.getElementById("rating").value,
    );
    books.push(newBook);
    sessionStorage.setItem('books', JSON.stringify(books));
}
