import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { transactionRequestType, transactionResponseType } from '../types'

type TransactionState = {
    transactionsResponses: transactionResponseType[]

    addTransaction: (transaction: transactionRequestType) => void
}


export const useTransactionStore = create<TransactionState>()(
    devtools( 
        (set) => ({
        transactionsResponses: [],

        // Para registrar nuevos pacientes
        addTransaction: (transaction) => { 
        
            // Se agrega al arreglo de patients
            set((state) => ({
                patients: [...state.patients, patientCompleted]
            }))
        },

    }), 
))