import Image from 'next/image'

const Intro = () => {
    return (
        <section className="flex-col md:flex-row flex items-center mt-16 mb-16 md:mb-12">
            <div className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight max-h-48 px-8">
                <Image width={987} height={253} src="/namhae-life-logo.png" alt="Namhae Life Logo" />
                {/* <div className="w-40">
                    <Image width={346} height={259} src="/hyangurock-logo.png" alt="Hyangurock Life Logo" />
                </div> */}
            </div>
            <h4 className="text-center md:text-left text-2xl mt-5">
                남해에서 가볼 만한 맛집들을 소개합니다.
            </h4>
        </section>
    )
}

export default Intro
