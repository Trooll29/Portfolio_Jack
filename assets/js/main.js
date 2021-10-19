function enviar() {
    event.preventDefault()
    let senha = document.querySelector('#senha').value;
    document.querySelector('.texto').innerHTML = `Tua senha é (${senha})`;
}
