import { player_bio } from "./bio.js";

const name = document.getElementById('name')
name.innerHTML = player_bio.name

const age = document.getElementById('age')
age.innerHTML = player_bio.age


const position = document.getElementById('position')
position.innerHTML = player_bio.position

const archetype = document.getElementById('archetype')
archetype.innerHTML = player_bio.archetype

const draft = document.getElementById('draft')
draft.innerHTML = player_bio.draft

const college = document.getElementById('college')
college.inert = player_bio.college

const contrct = document.getElementById('contract')
contrct.innerHTML = player_bio.contract