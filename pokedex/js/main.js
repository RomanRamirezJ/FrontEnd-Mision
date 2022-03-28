const pokebola = "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png";
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clear = document.querySelector(".clear");
icon.onclick = function () {
    search.classList.toggle('active');
}

clear.onclick = function () {
    document.getElementById('pokeName').value = '';
}

const fetchPokemon = (e) => {

    if (e.keyCode === 13 && !e.shiftKey) {
        const pokeNameInput = document.getElementById("pokeName");
        let pokeName = pokeNameInput.value;
        pokeName = pokeName.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        fetch(url).then((res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage(pokebola)
            } else {
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);
                pokeNombre(data.species.name);
                pokeType(data.types);
                pokeMoves(data.moves);
                pokeStats(data.stats);

                pokeImageCompleto(pokeImg);
                pokeNombreCompleto(data.species.name);
                pokeTypeCompleto(data.types);
                pokeMovesCompleto(data.moves);
                pokeStatsCompleto(data.stats);
            }
        });
    }

}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokemon");
    pokePhoto.src = url;
}
const pokeNombre = (data) => {
    document.getElementById("nombrePokemon").innerText = data;
}

const pokeType = (data) =>{
    typePoke = document.getElementById('tipoPokemon');
    dataLength = data.length;

    dataLength = dataLength > 3 ? 3 : dataLength;

    for(var i = 0; i < dataLength; i++) {
        const span = document.createElement("span");
        span.innerText = data[i].type.name;

        typePoke.appendChild(span);
    }

    // for (const element of data) {
    //     const span = document.createElement("span");
    //     span.innerText = element.type.name;

    //     typePoke.appendChild(span);
    // }

}

const pokeMoves = (data) => {
    console.log(data);
    pokemove = document.getElementById('movimientos');
    dataLength = data.length;

    dataLength = dataLength > 3 ? 3 : dataLength;

    for(var i = 0; i < dataLength; i++) {
        const span = document.createElement("span");
        span.innerText = data[i].move.name;

        pokemove.appendChild(span);
    }
}

const pokeStats = (data) => {
    console.log(data);
    pokeStat = document.getElementById('stats');
    dataLength = data.length;

    dataLength = dataLength > 3 ? 3 : dataLength;

    for(var i = 0; i < dataLength; i++) {
        const span = document.createElement("span");
        span.innerText = data[i].stat.name + ': ' + data[i].base_stat;

        pokeStat.appendChild(span);
    }
}

const pokeImageCompleto = (url) => {
    const pokePhotoCompleto = document.getElementById("pokemonCompleto");
    pokePhotoCompleto.src = url;
}
const pokeNombreCompleto = (data) => {
    document.getElementById("nombrePokemonCompleto").innerText = data;
}

const pokeTypeCompleto = (data) =>{
    typePokeCompleto = document.getElementById('tipoPokemonCompleto');

    for (const element of data) {
        const span = document.createElement("span");
        span.innerText = element.type.name;

        typePokeCompleto.appendChild(span);
    }

}

const pokeMovesCompleto = (data) => {
    console.log(data);
    pokemoveCompleto = document.getElementById('movimientosCompleto');

    for (const element of data) {
        const span = document.createElement("span");
        span.innerText = element.move.name;

        pokemoveCompleto.appendChild(span);
    }
}

const pokeStatsCompleto = (data) => {
    pokeStatCompleto = document.getElementById('statsCompleto');

    for (const element of data) {
        const span = document.createElement("span");
        span.innerText = element.stat.name + ': ' + element.base_stat;

        pokeStatCompleto.appendChild(span);
    }
}