import { useMemo } from "react"
import SubtitleDetail from "./SubtitleDetail"
import TransactionResponseDetail from "./TransactionResponseDetail"
import { useTransactionStore } from "../store/transactionStore"

export default function TransactionResponse() {

    const { transactionsResponses } = useTransactionStore()

    // Para validar si hay pacientes o no
    const hasTransactions = useMemo(() => transactionsResponses.length, [transactionsResponses])

    return (
        <>
            {!hasTransactions ? (
                <>
                    {/* VISTA SI NO HAY PACIENTES */}
                    <SubtitleDetail 
                        key={2}
                        subtitle='There aren´t any transactions'
                    />
                </>
            ) :
                (
                    <>
                        {/* CONTENIDO DE LA INFORMACION DE LOS PACIENTES */}
                        <SubtitleDetail 
                            key={3}
                            subtitle='List of transactions'
                        />

                        {/* INFORMACION DE CADA PACIENTE */}
                        {transactionsResponses.map(transactionResponse => (
                            <TransactionResponseDetail key={transactionResponse.id}
                                transactionResponse={transactionResponse}
                            />
                        ))}
                    </>
                )}
        </>
    )
}
