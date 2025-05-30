import { z } from 'zod'

// schema for a transaction
export const transactionResponseSchema = z.object({
    id: z.number(),
    status: z.string(),
    reference: z.string(),
    operation: z.string(),
})

// schema of an array of transactions
export const transactionsResponseSchema = z.array(transactionResponseSchema)
