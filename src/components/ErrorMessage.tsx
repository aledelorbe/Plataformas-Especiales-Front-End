export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-xs sm:text-sm text-center my-2 bg-red-600 text-white font-bold p-2 uppercase">
            {children}
        </p>
    )
}