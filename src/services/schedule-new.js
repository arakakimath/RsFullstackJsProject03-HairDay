import { apiConfig } from "./api-config";
import { schedulesDay } from "../modules/schedules/load";

export async function scheduleNew({ id, name, when }) {
  try {
    // Faz a requisição para enviar os dados do agendamento.
    await fetch(
      `${apiConfig.baseURL}/schedules`, 
      {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when })
      }
    )

    // Atualiza a página após agendamento
    schedulesDay()

    // Exibe mensagem de agendamento realizado.
    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível agendar. Tente novamente.")
  }
}