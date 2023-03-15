function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
}


const row = document.querySelector('.row');
const form = document.querySelector('.form');
const key = '01d8e062689a4e85888210f86c35d588';
async function myfunn() {
    const input = document.querySelector('.startup_search');
    let url;
    if (input.value) {
        url = `https://newsapi.org/v2/everything?q=${input.value}&from=2023-03-11&to=2023-03-11&sortBy=popularity&apiKey=${key}`
        console.log(url);
    } else {
        url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`
    }
    try {
        const repon = await fetch(url)
        const data = await repon.json()
        row.innerHTML='';
        const allData = data.articles.map((typ) => {
            console.log(typ);
            return `
            <div class="card" >
            <img src="${typ.urlToImage}" class="card-img-top" alt="${typ.author}">
            <div class="card-body">
            
            <h5 class="card-title">${typ.author}</h5>
            <p class="card-text">${typ.content}</p>
            </div>
            </div>
            `
        })
        row.innerHTML = allData.join('')
    } catch (error) {
        console.error(error);
    }
    
}
const input = document.querySelector('.startup_search');
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        myfunn()
    }
})
myfunn()