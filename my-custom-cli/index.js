#!/usr/bin/env node
// import fetch from "node-fetch";
// const fetch = require ("node-fetch")

console.log("codevulation pokedex");
const printFiveMoves = async (pokemonName)=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({move})=>move.name);
    console.log(moves.slice(0,5))
};
printFiveMoves("charmander")