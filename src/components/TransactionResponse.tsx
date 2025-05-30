import { useMemo } from "react"
import SubtitleDetail from "./SubtitleDetail"
import TransactionResponseDetail from "./TransactionResponseDetail"
import { useTransactionStore } from "../store/transactionStore"

export default function TransactionResponse() {

    const { transactionsResponses } = useTransactionStore()

    // To check if there are some transactions or not
    const hasTransactions = useMemo(() => transactionsResponses.length, [transactionsResponses])

    return (
        <>
            {!hasTransactions ? (
                <>
                    {/* VIEW IF THERE ARE NO TRANSACTIONS */}
                    <SubtitleDetail 
                        key={2}
                        subtitle='There aren´t any transactions'
                    />
                </>
            ) :
                (
                    <>
                        {/* CONTENT OF THE TRANSACTIONS INFORMATION */}
                        <SubtitleDetail 
                            key={3}
                            subtitle='List of transactions'
                        />

                        {/* INFORMATION OF EACH TRANSACTION */}
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
