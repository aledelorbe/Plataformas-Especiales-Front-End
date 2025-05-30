import axios from 'axios'  
import { transactionsResponseSchema } from '../schema/transactionSchema'

// Funcion que hace una peticion para llenar el arreglo de criptomonedas
export async function getTransactions() {

    const transUrl = 'http://localhost:8085/api/transactions'

    try{
        const { data } = await axios(transUrl) // realizar peticion

        console.log(data)

        const validacion = transactionsResponseSchema.safeParse(data)

        // si se cumple la validacion retornar la respuesta a validacion
        if(validacion.success){
            console.log('Respuesta bien formada')
            console.log(validacion.data)
            return validacion.data
        }
        // en caso contrario no retornar nada
        else {
            console.log('Respuesta mal formada')
            return
        }

    } catch (error) {
      console.log(error)
    }
} 