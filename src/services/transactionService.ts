import axios from 'axios'  
import { transactionResponseSchema, transactionsResponseSchema } from '../schema/transactionSchema'
import { transactionRequestType } from '../types'

// Funcion que hace una peticion para llenar el arreglo de 
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

export async function postTransaction(transaction: transactionRequestType) {

    const transUrl = 'http://localhost:8085/api/transactions'

    try{
        console.log('Enviando transacción:', transaction)

        const { data } = await axios.post(transUrl, transaction ) // realizar peticion

        console.log(data)

        const validacion = transactionResponseSchema.safeParse(data)

        // si se cumple la validacion retornar la respuesta a validacion
        if(validacion.success){
            console.log('Respuesta bien formada')
            console.log(validacion.data)
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