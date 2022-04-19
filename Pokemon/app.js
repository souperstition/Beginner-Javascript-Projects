// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const showPoke = document.querySelector('#show-pokemon');
const btn = document.querySelector('button');
const input = document.querySelector('input');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
            
const closeBtn = () => {
    showPoke.classList.add('hidden');
    const pokeImg = document.querySelector('img');
    const h2 = document.querySelector('h2');
    pokeImg.remove();
    h2.remove();
    input.value=('');
}

const createEls = (i) => {
    const h2 = document.createElement('h2');
    const pokeImg = document.createElement('img'); 
    pokeImg.src = `${baseURL}${i}.png`;
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response=>response.json())    
            .then(poke=> {
                h2.innerHTML = `#${i}. ${poke.name}<button class="x">x</button>`;
                showPoke.append(h2);
                showPoke.append(pokeImg);

                const x = document.querySelector('.x');
        
                x.addEventListener('click', () => {
                    closeBtn();
                })
            })
}

const replaceEls = (i) => {
    const pokeImg = document.querySelector('img');
    const h2 = document.querySelector('h2');
    pokeImg.src = `${baseURL}${i}.png`;
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response=>response.json())    
            .then(poke=> {
                h2.innerHTML = `#${i}. ${poke.name}<button class="x">x</button>`;

                const x = document.querySelector('.x');
        
                x.addEventListener('click', () => {
                    closeBtn();
                })
            })
}

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);

    newImg.addEventListener('click', ()=> {
        input.value=('');
        if(showPoke.classList.contains('hidden')) {
            showPoke.classList.remove('hidden');
            createEls(i);
        } else {
            replaceEls(i);
        }   
    })
}

btn.addEventListener('click', () => {
    container.classList.toggle('hidden');
    btn.classList.toggle('collapse');
    if (btn.innerText === 'View All Pokemon') btn.innerText = 'Close List';

    else if (btn.innerText ==='Close List') btn.innerText = 'View All Pokemon';
    
});

input.addEventListener('input', () => {
    const i = parseInt(input.value);
    if(!i) {
        showPoke.classList.add('hidden');
        closeBtn();
    } else if(showPoke.classList.contains('hidden')) {
        showPoke.classList.remove('hidden');
        createEls(i);
    } else {
        replaceEls(i);
    } 
})



