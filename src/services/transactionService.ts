import axios from 'axios'  
import { transactionResponseSchema, transactionsResponseSchema } from '../schema/transactionSchema'
import { transactionRequestType } from '../types'

// Function that makes a request to fill the transactions array
export async function getTransactions() {

    const transUrl = 'http://localhost:8085/api/transactions'

    try{
        const { data } = await axios(transUrl) // make request

        console.log(data)

        const validacion = transactionsResponseSchema.safeParse(data)

        // if the validation is met, return the response to validation
        if(validacion.success){
            console.log('Respuesta bien formada')
            console.log(validacion.data)
            return validacion.data
        }
        // otherwise, return nothing
        else {
            console.log('Respuesta mal formada')
            return
        }

    } catch (error) {
      console.log(error)
    }
} 

// Function that sends the information about a new transaction
export async function postTransaction(transaction: transactionRequestType) {

    const transUrl = 'http://localhost:8085/api/transactions'

    try{
        console.log('Enviando transacción:', transaction)

        const { data } = await axios.post(transUrl, transaction ) // make request

        console.log(data)

        const validacion = transactionResponseSchema.safeParse(data)

        // if the validation is met, print the data
        if(validacion.success){
            console.log('Respuesta bien formada')
            console.log(validacion.data)
        }
        // otherwise, return nothing
        else {
            console.log('Respuesta mal formada')
            return
        }

    } catch (error) {
      console.log(error)
    }
} 