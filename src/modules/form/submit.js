import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Carrega a data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Data atual para o input
selectedDate.value = inputToday 

// Define a data mínima como sendo a data atual.
selectedDate.min = inputToday

form.onsubmit = (event) => {
  event.preventDefault()

  console.log("Enviado!")
}