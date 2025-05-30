
type SubtitleDetailProps = {
    subtitle: string
}

export default function SubtitleDetail({ subtitle }: SubtitleDetailProps) {
    return (
        <>
            <div className='text-center mb-6'>
                <p className='text-xl sm:text-xl md:text-2xl font-bold leading-relaxed'>
                    {subtitle}
                </p>
            </div>
        </>
    )
}
