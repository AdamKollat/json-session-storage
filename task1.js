let shelf = document.getElementById('bookShelf')
let books = []
let n = 0;

function myLoad() {
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("books", JSON.stringify(books));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        books = JSON.parse(sessionStorage.getItem("books")); //Get the array of book objects from sessionStorage and assign it to the array 'books'
        books.forEach(function (b) {
           
            let paragraph = document.createElement("p");
            paragraph.innerHTML = `Title: ${b.title} | Author: ${b.author} | Genre: ${b.genre} | Rating: ${b.rating}`
            paragraph.id = n;
            n++;
            paragraph.classList.add('bookObj');
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

document.getElementById('bookShelf').addEventListener('click', e => {
    let edit = prompt('Would you like to\nEdit - E\nDelete - D?')
    if (edit === 'e' || edit === 'E') {
    let choice = prompt('Please choose what would you like to edit:\nTitle - T\nAuthor - A\nGenre - G\nRating - R');
    if (choice === 't' || choice === 'T') {
        let targetID = e.target.id;
        let currentTitle = books[targetID].title;
        let newTitle = prompt('Enter new title:');
        books[targetID].title = newTitle;
        let sessionShelf = JSON.parse(sessionStorage.getItem('books'));
        sessionShelf[targetID].title = newTitle;
        sessionStorage.setItem('books', JSON.stringify(sessionShelf))
        let replace = document.getElementById(targetID).innerHTML.replace(currentTitle, newTitle);
        document.getElementById(targetID).innerHTML = replace;
    } else if (choice === 'a' || choice === 'A') {
        let targetID = e.target.id;
        let currentAuthor = books[targetID].author;
        let newAuthor = prompt('Enter new author:');
        books[targetID].author = newAuthor;
        let sessionShelf = JSON.parse(sessionStorage.getItem('books'));
        sessionShelf[targetID].author = newAuthor;
        sessionStorage.setItem('books', JSON.stringify(sessionShelf));
        let replace = document.getElementById(targetID).innerHTML.replace(currentAuthor, newAuthor);
        document.getElementById(targetID).innerHTML = replace;
    } else if (choice === 'g' || choice === 'G') {
        let targetID = e.target.id;
        let currentGenre = books[targetID].genre;
        let newGenre = prompt('Enter new genre:');
        books[targetID].genre = newGenre;
        let sessionShelf = JSON.parse(sessionStorage.getItem('books'));
        sessionShelf[targetID].genre = newGenre;
        sessionStorage.setItem('books', JSON.stringify(sessionShelf));
        let replace = document.getElementById(targetID).innerHTML.replace(currentGenre, newGenre);
        document.getElementById(targetID).innerHTML = replace;
    } else if (choice === 'r' || choice === 'R') {
        let targetID = e.target.id;
        let currentRating = books[targetID].rating;
        let newRating = prompt('Enter new rating:');
        books[targetID].rating = newRating;
        let sessionShelf = JSON.parse(sessionStorage.getItem('books'));
        sessionShelf[targetID].rating = newRating;
        sessionStorage.setItem('books', JSON.stringify(sessionShelf))
        let replace = document.getElementById(targetID).innerHTML.replace(currentRating, newRating);
        document.getElementById(targetID).innerHTML = replace;
    } else {
        alert('Invalid selection. Please try again.')
    }
} else if (edit === 'd' || edit === 'D') {
    let choice = prompt('Please choose what would you like to delete:\nTitle - T\nAuthor - A\nGenre - G\nRating - R');
    if (choice === 't' || choice === 'T') {
        let targetID = e.target.id;
        let currentTitle = books[targetID].title;
        let replace = document.getElementById(targetID).innerHTML.replace(`Title: ${currentTitle} | `, '');
        document.getElementById(targetID).innerHTML = replace;
        delete currentTitle;
        let sessionShelf = JSON.parse(sessionStorage.getItem('books'));
        delete sessionShelf[targetID].title;
        sessionStorage.setItem('books', JSON.stringify(sessionShelf))       
} else if (choice === 'a' || choice === 'A') {
    let targetID = e.target.id;
    let currentAuthor = books[targetID].author;
    let replace = document.getElementById(targetID).innerHTML.replace(`Author: ${currentAuthor} | `, '');
    document.getElementById(targetID).innerHTML = replace;
    delete currentAuthor;
    let sessionShelf = JSON.parse(sessionStorage.getItem('books'));
    delete sessionShelf[targetID].author;
    sessionStorage.setItem('books', JSON.stringify(sessionShelf))       
} else if (choice === 'g' || choice === 'G') {
    let targetID = e.target.id;
    let currentGenre = books[targetID].genre;
    let replace = document.getElementById(targetID).innerHTML.replace(`Genre: ${currentGenre} | `, '');
    document.getElementById(targetID).innerHTML = replace;
    delete currentGenre;
    let sessionShelf = JSON.parse(sessionStorage.getItem('books'));
    delete sessionShelf[targetID].genre;
    sessionStorage.setItem('books', JSON.stringify(sessionShelf))     
} else if (choice === 'r' || choice === 'R') {
    let targetID = e.target.id;
    let currentRating = books[targetID].genre;
    let replace = document.getElementById(targetID).innerHTML.replace(`Rating: ${currentRating} | `, '');
    document.getElementById(targetID).innerHTML = replace;
    delete currentRating;
    let sessionShelf = JSON.parse(sessionStorage.getItem('books'));
    delete sessionShelf[targetID].rating;
    sessionStorage.setItem('books', JSON.stringify(sessionShelf))     
} 
}
})