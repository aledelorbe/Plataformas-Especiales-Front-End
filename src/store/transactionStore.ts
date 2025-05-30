import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { transactionRequestType, transactionResponseType } from '../types'
import { getTransactions, postTransaction } from '../services/transactionService'

type TransactionState = {
    transactionsResponses: transactionResponseType[]

    fetchTransactions: () => Promise<void>
    addTransaction: (transaction: transactionRequestType) => Promise<void>
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

        // To register new transactions
        addTransaction: async (transaction) => { 
        
            await postTransaction(transaction)
        },

    }), 
))