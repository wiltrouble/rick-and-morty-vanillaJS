import API from './API.js';
import Character from './Character.js'

const api = new API();
var currentCharacter = 1;
const loadNext = document.querySelector('#load-next');

loadNext.addEventListener('click', async () => {
    const characterData = await api.getCharacter(++currentCharacter)
    new Character(characterData)
})


async function initApp(initCharacterId) {
    const characterData = await api.getCharacter(initCharacterId)
    console.log(characterData)
    new Character(characterData)
}

initApp(currentCharacter)


