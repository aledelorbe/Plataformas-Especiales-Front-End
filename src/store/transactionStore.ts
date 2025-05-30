import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { transactionResponseType } from '../types'
import { getTransactions } from '../services/transactionService'

type TransactionState = {
    transactionsResponses: transactionResponseType[]

    fetchTransactions: () => Promise<void>
    // addTransaction: (transaction: transactionRequestType) => void
}


export const useTransactionStore = create<TransactionState>()(
    devtools( 
        (set) => ({
        transactionsResponses: [],

        // Funcion que manda a llamar la peticion de llenar el arreglo de criptomonedas
        fetchTransactions: async () => { 

            const trans = await getTransactions()

            set(() => ({
                transactionsResponses: trans
            }))
        },

        // // Para registrar nuevos pacientes
        // addTransaction: (transaction) => { 
        
        //     // Se agrega al arreglo de patients
        //     set((state) => ({
        //         patients: [...state.patients, patientCompleted]
        //     }))
        // },

    }), 
))