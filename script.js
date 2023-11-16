const img = document.querySelector('#img')
const row = document.querySelector('.row')
const compound = document.querySelector('#compound')
const name = document.querySelector('#name')
const all = document.querySelector('#all')
const search = document.querySelector('#search')
const inner = document.querySelector('.inner')
const poisk = document.querySelector("#poisk")
const searchInput = document.querySelector("#searhInput")
const searchBox = document.querySelector('#hiddenWrapper')
const searchImg = document.querySelector('#searchImg')


// all.addEventListener('change', () => {
//     if (all.checked) {
//         row.classList.remove('hidden')
//         search.classList.add('hidden')
//     }
// })
//
// search.addEventListener('change', () => {
//     if (search.checked) {
//         search.classList.remove('hidden')
//         row.classList.add('hidden')
//     }
// })



const handleGetCountries = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v2/1/popular.php`)
        .then(res => res.json())
        .then(json => {
            json.drinks.forEach(drink => {
                row.innerHTML += `
            <div class = "col-4">
                <div class = "card">
                  <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h2 class="card-title">${drink.strDrink}<?h2>
                    <p class="card-text">${drink.strInstructions}</p>
                  </div>
                </div>
            </div>
            `
            })
        })

}

handleGetCountries()


all.addEventListener('change', () => {
    if (all.checked) {
        row.classList.remove('hidden')
        searchBox.classList.add('hidden')
    }
})

search.addEventListener('change', () => {
    if (search.checked) {
        searchBox.classList.remove('hidden')
        row.classList.add('hidden')
    }
})


poisk.addEventListener('click',()=>{
    const value = searchInput.value;
    fetch(`https://www.thecocktaildb.com/api/json/v2/1/popular.php?s=${value}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            name.innerHTML = json.drinks[0].strDrink
            compound.innerHTML = json.drinks[0].strInstructions
            searchImg.innerHTML = json.drinks[0].strDrinkThumb
        })
})

