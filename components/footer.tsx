import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-3/4">
                        위 칼럼은 남해군 청년정착지원사업의 지원을 받아 향유록에 의뢰하여 작성했습니다.
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-12 lg:w-1/4 lg:max-w-[200px] max-w-[120px]">
                        <Image width={346} height={259} src="/hyangurock-logo.png" alt="Hyangurock Logo" />
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
