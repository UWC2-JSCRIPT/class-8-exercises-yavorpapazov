document.addEventListener("DOMContentLoaded", function() {
  const formEl = document.getElementById('best-books-form')
  const yearEl = document.getElementById('year')
  const monthEl = document.getElementById('month')
  const dateEl = document.getElementById('date')
  const booksContainer = document.getElementById('books-container')

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
      for(let i = 0; i < 5; i++) {
        let singleBookContainer = document.createElement('div')
        let titleEl = document.createElement('h1')
        titleEl.textContent = responseData.results.books[i].title
        let authorEl = document.createElement('h3')
        authorEl.textContent = responseData.results.books[i].author
        let imageEl = document.createElement('img')
        imageEl.src = responseData.results.books[i].book_image
        let descriptionEl = document.createElement('p')
        descriptionEl.textContent = responseData.results.books[i].description
        singleBookContainer.append(titleEl, authorEl, imageEl, descriptionEl)
        booksContainer.append(singleBookContainer)
      }
    }
    getBooks()
  })
})