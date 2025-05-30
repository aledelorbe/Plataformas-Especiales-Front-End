import { useForm } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import { toast } from 'react-toastify'
import { Element } from 'react-scroll';
import { useTransactionStore } from '../store/transactionStore';
import { transactionRequestType } from '../types';
import CryptoJS from "crypto-js";

// Keys
const key = CryptoJS.enc.Utf8.parse("12345678901234567890123456789012"); // 32 chars
const iv = CryptoJS.enc.Utf8.parse("1234567890123456"); // 16 chars

export default function FormTransaction() {

    const { addTransaction } = useTransactionStore()

    // To handle the form
    const { register, handleSubmit, formState: { errors }, reset } = useForm<transactionRequestType>()

    // To process the data of the form
    const transactionRegister = (data: transactionRequestType) => {

        data.secret = encrypt(data.secret)

        addTransaction(data)
        toast.success('Transaction registered successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })

        reset() // To clean the form
    }

    // To encrypt de word
    function encrypt(text: string) {
        const encrypted = CryptoJS.AES.encrypt(text, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });

        return encrypted.toString();
    }

    return (
        <>
            <Element name="myScrollToElement">
                <div className='flex justify-around h-auto mb-20'>
                    <form
                        className='text-sm sm:text-sm md:text-base bg-white w-full px-5 pt-4 pb-7 flex flex-col gap-4 shadow-lg rounded-lg'
                        onSubmit={handleSubmit(transactionRegister)}
                    >
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="operation" className='font-semibold '>
                                Operation:
                            </label>
                            <input
                                placeholder='Operation'
                                type="text"
                                id="operation"
                                className="px-2 py-1 rounded-md border-2 border-slate-300 focus:border-indigo-500 focus:outline-none bg-gray-50"
                                {...register("operation", {
                                    required: "The operation is required",
                                })}
                            />

                            {errors.operation && (
                                <ErrorMessage>{errors.operation?.message?.toString()}</ErrorMessage>
                            )}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="amount" className='font-semibold '>
                                Amount:
                            </label>
                            <input
                                placeholder='Amount'
                                type="text"
                                id="amount"
                                className="px-2 py-1 rounded-md border-2 border-slate-300 focus:border-indigo-500 focus:outline-none bg-gray-50"
                                {...register("amount", {
                                    required: "The amount is required",
                                })}
                            />

                            {errors.amount && (
                                <ErrorMessage>{errors.amount?.message?.toString()}</ErrorMessage>
                            )}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="client" className='font-semibold '>
                                Client name:
                            </label>
                            <input
                                placeholder='Client name'
                                type="text"
                                id="client"
                                className="px-2 py-1 rounded-md border-2 border-slate-300 focus:border-indigo-500 focus:outline-none bg-gray-50"
                                {...register("client", {
                                    required: "The client name is required",
                                })}
                            />

                            {errors.client && (
                                <ErrorMessage>{errors.client?.message?.toString()}</ErrorMessage>
                            )}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="secret" className='font-semibold '>
                                Secret:
                            </label>
                            <input
                                placeholder='Secret'
                                type="text"
                                id="secret"
                                className="px-2 py-1 rounded-md border-2 border-slate-300 focus:border-indigo-500 focus:outline-none bg-gray-50"
                                {...register("secret", {
                                    required: "The secret is required",
                                })}
                            />

                            {errors.secret && (
                                <ErrorMessage>{errors.secret?.message?.toString()}</ErrorMessage>
                            )}
                        </div>

                        <input
                            type="submit"
                            value='Register Data'
                            className='uppercase rounded-md bg-indigo-700 font-bold text-white py-1 mt-5 hover:cursor-pointer hover:bg-indigo-900'
                        />
                    </form>
                </div>

            </Element>

        </>
    )
}
