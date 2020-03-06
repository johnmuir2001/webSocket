const btn = document.getElementById("button")
const input = document.getElementById("input")
const messages = document.getElementById("messages")

const socket = io()

socket.on('message', (text) => {
    messages.innerHTML += `<li>${text}</li>`
})

btn.addEventListener("click", () => {
    console.log("button check")

    socket.emit('inputMessage', input.value)
})