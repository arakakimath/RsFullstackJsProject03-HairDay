import { schedulesDay } from "../schedules/load"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horários quando o input de data mudar.
selectedDate.onchange = schedulesDay; // O uso de parênteses na função implicaria que ela fosse executada assim que o código é lido.
                                     //  Sem os parênteses, ela só é executada quando o evento onchange é disparado.