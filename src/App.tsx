import { AcademicCapIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/outline';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import FormPatient from './components/FormTransaction';
import SubtitleDetail from './components/SubtitleDetail';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TransactionResponse from './components/TransactionResponse';
import { useEffect } from 'react';
import { useTransactionStore } from './store/transactionStore';

export default function App() {

    const { fetchTransactions } = useTransactionStore()

    const currentYear = new Date().getFullYear(); // To print the year in the footer

    useEffect(() => {
        fetchTransactions()
    }, [fetchTransactions]);

    return (
        <>
            {/* HEADER VIEW */}
            <header className="px-3 sm:px-8 md:px-10 lg:px-12 xl:px-14 flex justify-between items-center py-14 bg-red-800">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
                    Transactions
                </h1>
                <h1 className="opacity-0">
                    nothing
                </h1>
            </header>

            <div className='flex flex-col sm:flex-row justify-center items-center sm:justify-around sm:items-stretch mb-6 pt-6'>
                {/* LEFT SIDE */}
                <div className='w-4/5 sm:w-2/5'>
                    <SubtitleDetail
                        key={1}
                        subtitle='Register'
                    />

                    {/* FORM CONTENT */}
                    <FormPatient />
                </div>

                {/* RIGHT SIDE */}
                <div className='w-4/5 sm:w-2/5'>
                    <TransactionResponse />
                </div>
            </div>

            {/* FOOTER CONTENT */}
            <footer className="pt-6 bg-red-800 pb-8 text-white">
                <h2 className="text-center font-medium text-xl">All rights reserved by Alejandro Granados &copy; {currentYear} </h2>

                <div className="flex flex-col pl-6 sm:flex-row sm:justify-around sm:pl-0 mt-3">
                    <div>
                        <h3 className="font-medium text-base sm:text-xl my-2 text-left">Contact me</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="https://github.com/aledelorbe" target="_blank" >
                                    <svg className="inline w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                                        <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                                    </svg> {'  '}
                                    <span className="font-semibold text-sm sm:text-base">aledelorbe</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <svg className="inline w-6 h-6 sm:w-10 sm:h-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                                </svg> {'  '}
                                <span className="font-semibold text-sm sm:text-base">alejandro.magb@gmail.com </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h3 className="font-medium text-base mt-4 mb-2 sm:text-xl sm:my-2 text-left"> About me </h3>
                            <ul >
                                <li>
                                    <AcademicCapIcon className="size-5 sm:size-7 inline" /> {' '}
                                    <span className="font-semibold text-sm sm:text-base">
                                        Engineer in Telematics
                                    </span>
                                </li>
                                <li className="mt-4">
                                    <MapPinIcon className="size-5 sm:size-7 inline" /> {' '}
                                    <span className="font-semibold text-sm sm:text-base">
                                        Ixtapaluca, State of Mexico
                                    </span>
                                </li>
                                <li className="mt-4 pl-1">
                                    <PhoneIcon className="size-4 sm:size-6 inline" /> {' '}
                                    <span className="font-semibold text-sm sm:text-base">
                                        +52 5538977026
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <ToastContainer />
        </>
    )
}
