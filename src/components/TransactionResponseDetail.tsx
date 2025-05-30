import { transactionResponseType } from "../types"

type TransactionResponseDetailProps = {
    transactionResponse: transactionResponseType
}

export default function TransactionResponseDetail({ transactionResponse }: TransactionResponseDetailProps) {

    return (
        <>
            <div className='text-sm sm:text-sm md:text-base bg-white px-4 py-6 leading-loose rounded-lg shadow-lg mb-8'>
                
                <p className='text-zinc-800 font-bold uppercase'>
                    Id: <span className='font-semibold capitalize'>{transactionResponse.id}</span>
                </p>
                <p className='text-zinc-800 font-bold uppercase'>
                    Status: <span className='font-semibold capitalize'>{transactionResponse.status}</span>
                </p>
                <p className='text-zinc-800 font-bold uppercase'>
                    Reference: <span className='font-semibold normal-case'>{transactionResponse.reference}</span>
                </p>
                <p className='text-zinc-800 font-bold uppercase'>
                    Operation: <span className='font-semibold normal-case'>{transactionResponse.operation}</span>
                </p>

            </div>
        </>
    )
}
