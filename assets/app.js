const cariPokemons = async (nomor) => {
    for (let i=1; i<=nomor; i++) {
        await cariPokemon(i);
    }
}

const cariPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    console.log(pokemon.sprites.front_default);
    
    isidata(pokemon);
}

const borderColor = {
	fire: '#C67D6D',
	grass: '#5DAD65',
	electric: '#D0B34A',
	water: '#6F9ECA',
	ground: '#D0A068',
	rock: '#957D59',
	fairy: '#C77FBC',
	poison: '#8A4A95',
	bug: '#A2C170',
	dragon: '#724CAE',
	psychic: '#A44094',
	flying: '#A485CC',
	fighting: '#B1664F',
	normal: '#959595'
};

const backColor = {
	fire: '#E69D8D',
	grass: '#8DD694',
	electric: '#E7C859',
	water: '#8DC6E6',
	ground: '#EFBE85',
	rock: '#B99D72',
	fairy: '#EEA1E2',
	poison: '#A55DB1',
	bug: '#BDDD7A',
	dragon: '#8859D5',
	psychic: '#D053BC',
	flying: '#C9ADEC',
	fighting: '#E07F60',
	normal: '#B1B1B1'
};

const mainTypes = Object.keys(backColor);

function isidata(pokemon) {
    const warna = document.createElement('div');
    warna.classList.add('pokemon');

	const nomor = pokemon.id;
    const types = pokemon.types.map(elemen => elemen.type.name); 
	const type = mainTypes.find(type => types.indexOf(type) > -1)
    const nama = pokemon.name;
    const image = pokemon.sprites.front_default;
	const bgcolor = backColor[type];
	const bdcolor = borderColor[type];

	console.log(type);

	warna.style.backgroundColor = bgcolor;
	warna.style.borderColor = bdcolor;

    const pokeInnerHTML = `
        <div class="kartu">
			<p style="margin-top: 0;">${nomor}</p>
			<p>${nama}</p>
            <img src="${image}">
            <p class="type">Type: <span>${type}</p>
        </div>
    `;

    warna.innerHTML = pokeInnerHTML;
    kartu.appendChild(warna);
};
