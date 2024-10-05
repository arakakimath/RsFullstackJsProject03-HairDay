import dayjs from "dayjs"

import { schedulesDay } from "../schedules/load"

import { scheduleNew } from "../../services/schedule-new"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Carrega a data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Data atual para o input
selectedDate.value = inputToday 

// Define a data mínima como sendo a data atual.
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  
  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim() // Remove espaços extras
    
    if(!name) {
      return alert("Informe o nome do cliente!")
    }

    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected){
      return alert("Informe o horário do agendamento.")
    }

    // Recupera somente e hora
    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    
    // Gera um ID
    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when,
    })

    // Atualiza a página após agendamento
    await schedulesDay()
    // Limpa o campo de nome
    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}