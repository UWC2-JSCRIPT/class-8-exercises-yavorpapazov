document.addEventListener("DOMContentLoaded", function() {
  const formEl = document.getElementById('best-books-form')
  const yearEl = document.getElementById('year')
  const monthEl = document.getElementById('month')
  const dateEl = document.getElementById('date')
  //const titleEl = document.getElementById('title')
  //const authorEl = document.getElementById('author')
  //const descriptionEl = document.getElementById('description')

  formEl.addEventListener('submit', function(e) {
    e.preventDefault()

    const year = yearEl.value
    const month = monthEl.value
    const date = dateEl.value

    // Fetch bestselling books for date and add top 5 to page
    const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json`
    const API_KEY = 'iUk6gAe1K9oarQC0qJ3bXn2tX1i5UFym'
    const url = `${BASE_URL}?api-key=${API_KEY}`

    async function getBooks() {
      let response = await fetch(url)
      let responseData = await response.json()
      let booksContainer = document.getElementById('books-container')
      for(let i = 0; i < 5; i++) {
        booksContainer.append(
          document.createElement('h1').textContent = responseData.results.books[i].title,
          document.createElement('br'),
          document.createElement('h3').textContent = responseData.results.books[i].author,
          document.createElement('br'),
          document.createElement('p').textContent = responseData.results.books[i].description,
          document.createElement('br'),
          document.createElement('br')
        )
      }
    }
    getBooks()
  })
})