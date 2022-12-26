import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
            {/* <div className="max-h-8">
                <Image width={987} height={253} src="/namhae-life-logo.png" alt="Namhae Life Logo" />
            </div> */}
            <Link href="/" className="hover:underline">
                처음으로
            </Link>
            .
        </h2>
    )
}

export default Header
