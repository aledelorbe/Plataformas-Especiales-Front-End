
export type transactionRequestType = {
    operation: string,
    amount: string,
    clientName: string,
    secret: string,
}

export type transactionResponseType = {
    id: number,
    status: string,
    reference: string,
    operation: string,
}