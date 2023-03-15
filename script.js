function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
}



const apiKey = '01d8e062689a4e85888210f86c35d588';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const articles = data.articles.slice(2, 5); 
    articles.forEach((article, index) => {
      const card = document.querySelectorAll('.card_ul')[index];
      const img = card.querySelector('.card_img');
      const author = card.querySelector('.john_text');
      const sana = card.querySelector('.sana');
      const content = card.querySelector('.content_p');
      const title = card.querySelector('.title_h3')
      console.log(article);
      img.src = article.urlToImage;
      img.alt = article.title;

      title.textContent = article.title
      sana.textContent = article.publishedAt
      author.textContent = article.author;

      content.textContent = article.content;
       

    //   if (article.aut) {
        
    //   }
    });
  });



