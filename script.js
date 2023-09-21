const modalForm = document.querySelector('#modal');
const submitPlayers = document.querySelector(".start-game");

submitPlayers.addEventListener('click', (e)=> {
    e.preventDefault();
    modalForm.close();
});

modalForm.showModal();
