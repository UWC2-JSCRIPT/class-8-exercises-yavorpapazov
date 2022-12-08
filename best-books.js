document.addEventListener("DOMContentLoaded", function() {
  const formEl = document.getElementById('best-books-form');
  const yearEl = document.getElementById('year');
  const monthEl = document.getElementById('month');
  const dateEl = document.getElementById('date');

  formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const year = yearEl.value;
    const month = monthEl.value;
    const date = dateEl.value;

    // Fetch bestselling books for date and add top 5 to page
    const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/2022-01-11/hardcover-fiction.json'
    const API_KEY = 'iUk6gAe1K9oarQC0qJ3bXn2tX1i5UFym'
    const url = `${BASE_URL}?api-key=${API_KEY}`

    async function getBooks() {
      let response = await fetch(url)
      let responseData = await response.json()
      console.log(responseData.results.books)
    }
    getBooks()
  })
})