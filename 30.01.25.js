let massiv = []
let container = document.querySelector('.container')

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
    massiv = JSON.parse(localStorage.getItem('films')) || []
    let filmName = document.getElementById('name')
    let genre = document.getElementById('ganre')
    let image = document.getElementById('link')

    if(filmName.value && genre.value && image.value){
        massiv.push({filmName: filmName.value, genre: genre.value, image: image.value})

        localStorage.setItem('films', JSON.stringify(massiv))

        document.getElementById('form').reset()
        displayfilms()
    }else{
        alert('Please fill all the fields')
    }
})

document.getElementById('add-film').addEventListener('click', function() {
    document.getElementById('form').style.display = 'block'
})

document.getElementById('clear').addEventListener('click', function() {
    localStorage.removeItem('films')
    massiv = []
    displayfilms()
})

function displayfilms(){
    container.innerHTML = ''
    massiv = JSON.parse(localStorage.getItem('films')) || []

    if (massiv.length > 0) {
        massiv.forEach((film, index) => {
            let div = document.createElement('div')

            div.innerHTML = `
                <img src="${film.image}" width="200px"/>
                <h2>${film.filmName}</h2>
                <p>${film.genre}</p>
                <button onclick="deleteFilm(${index})">Delete</button>`
            container.appendChild(div)
        })
    } else {
        fetchData()
    }
}

function deleteFilm(index) {
    massiv.splice(index, 1)
    localStorage.setItem('films', JSON.stringify(massiv))
    displayfilms()
}

async function fetchData() {
    try {   
        let response = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films')
        if (!response.ok) {
            throw new Error('Very bad!')
        }
        let data = await response.json()
        data.forEach(film => {
            massiv.push(film)
        })

        console.log("api dan kelgen akparat", data)
        console.log("massiv", massiv)

        localStorage.setItem('films', JSON.stringify(massiv))

        displayfilms()
        
    } catch (err) {
        console.log(err)
    }
}

displayfilms()