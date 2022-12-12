let container = document.getElementById('container')
let books = []

function myLoad() {
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("books", JSON.stringify(books));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        books = JSON.parse(sessionStorage.getItem("books"));//Get the array of person objects from sessionStorage and assign it to the array 'pers'
        let i = 0;
        books.forEach(function(b) {//Loop through each person (p) in the pers array
            /*For each person in the array create an option element that displays 
            that person's name and add it to the select (dropdown) element on the HTML page */
            let optItem = document.createElement("option");
            optItem.innerHTML = b.title;
            optItem.value = i;
            i = i + 1;
            htmlSelect.appendChild(optItem);
        });
        if (i > 0) {//Only make the select element visible once there is at least one person object added that the user can select.
            htmlSelect.style.visibility = "visible";
        }
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
