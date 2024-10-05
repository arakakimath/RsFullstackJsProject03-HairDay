import { apiConfig } from "../../services/api-config";

export async function scheduleCancel({ id }){
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    // Verifica se a resposta tem status de sucesso (2xx)
    if (!response.ok) {
      throw new Error('Erro ao cancelar o agendamento'); // Lança um erro se o status não for 2xx
    }

    alert("Agendamento cancelado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível cancelar o agendamento")
  }
}