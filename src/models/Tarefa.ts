import { Titulo } from '../components/Tarefa/styles'
import * as enums from '../Utils/enums/Tarefa'

class Tarefa {
    titulo: string
    prioridade: enums.Prioridade
    status: enums.Status
    descricao: string
    id: number

    constructor(
        titulo: string,
        prioridade: enums.Prioridade,
        status: enums.Status,
        descricao: string,
        id: number
    ) {
        this.titulo = titulo
        this.prioridade = prioridade
        this.status = status
        this.descricao = descricao
        this.id = id
    }
}

export default Tarefa
