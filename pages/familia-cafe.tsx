import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import PostBody from '../components/post-body'
import Header from '../components/header'
import PostHeader from '../components/post-header'
import Layout from '../components/layout'
import { getPostBySlug, getAllPosts } from '../lib/api'
import PostTitle from '../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'
import type PostType from '../interfaces/post'
import markdownStyles from '../components/markdown-styles.module.css'
import CoverImage from '../components/cover-image'

export default function Post() {
    const post = {
        slug: 'familia-cafe',
        title: '파밀리아 카페',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/familia-cafe/cover.jpg',
        excerpt: '맛있는 한 입을 위한 노력',
        ogImage: {
            url: '/assets/blog/familia-cafe/cover.jpg',
        },
        content: 'string',
    }

    return (
        <Layout preview={false}>
            <Container>
                <Header />
                <>
                    <article className="mb-32">
                        <Head>
                            <title>{post.title} | 록슐랭가이드</title>
                            <meta property="og:image" content={post.ogImage.url} />
                        </Head>
                        <PostHeader title={post.title} coverImage={post.coverImage} />

                        <div className="max-w-2xl mx-auto text-lg md:text-2xl">
                            <div className={markdownStyles['markdown']}>
                                <p className="">* 맛있는 한 입을 위한 노력, 카페 파밀리아</p>
                                <p>
                                    경남 남해군 남해읍 망운로 20 1층
                                    <br />
                                    월~금 10:00~21:00, 토 10:00~18:00 (휴무: 일)
                                    <br />
                                    남해읍 지역 배달의 민족 주문 가능
                                    <br />
                                    홀케이크 예약: 카카오채널 https://open.kakao.com/o/sbYYwDyd, 전화
                                    0507-1458-3604
                                    <br />
                                    맛있는 케이크는 언제나 우리에게 특별한 추억을 만들어줍니다. 이제 갓 두
                                    살이 된 저희 조카도 가족끼리 모여서 케이크에 초를 켜고 ‘후~’ 하고 부는
                                    것을 가장 좋아합니다. 아무날이 아니어도, 케이크에 초를 꽂아 소원을 빌고
                                    ‘후’하고 불면 특별하고 즐거운 날이 되잖아요. (혹시 알아요, 공유 같은
                                    도깨비가 나타날지. 정신 차리자. 나 자신)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'구움과자'} src={'/assets/blog/familia-cafe/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    이런 마법 같은 추억을 만들어주는, 케이크 맛집 ‘카페 파밀리아’를
                                    소개합니다. 카페 파밀리아는 이미 남해 지역 주민들에게는 생크림 케이크
                                    맛집으로 소문난 곳입니다. 너무 유명해서 낮 동안에 케이크가 품절 되어버리는
                                    경우가 많다고 합니다. 케이크, 쿠키, 스콘 등 구움 과자류와 수제 뮤즐리,
                                    수제 그릭 요거트, 커피 등 음료류를 정성껏 준비하시는 이곳은, 내부
                                    인테리어도 낭만적이고 편안해서 자주 들를 수밖에 없는 카페입니다.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    파밀리아를 좋아하는 이유는 안 그래도 맛있는 게 많은데 자꾸만 더 맛있는
                                    것을 열심히 만드시는 데 있지 않나 싶어요. 또 메뉴를 개발하고 만드는 과정을
                                    공유해주셔서 이야기를 따라가는 재미도 있달까요? 이번에 새로 나온 메뉴인
                                    잠봉뵈르 스콘을 개발하실 때도 다양한 잠봉과 버터를 이용해 여러 테스트를
                                    거친 뒤 ‘소금집’ 잠봉을 넣은 지금의 잠봉뵈르 스콘을 완성하셨다고 해요.
                                    그렇게 얘기하니까 더 먹어보고 싶은 거 아시죠? 내가 만든 것도 아닌데
                                    응원하게 되는 그 느낌? 그냥 메뉴를 턱, 하고 내놓으셨어도 맛있게
                                    먹었겠지만, 그 과정에서 어떤 시도와 노력을 하셨는지 과정까지 알려주시니까
                                    살짝 몰입이 되어버렸어요. 저, 영업당했나요? 그런데 맛까지 있으니까, 그냥
                                    이 영업에서 헤어나오지 않으려고 합니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'녹차음료'} src={'/assets/blog/familia-cafe/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    음료 개발도 꾸준히 하시는데, 생크림 케이크 맛집답게 크림이 부드럽고
                                    달콤해서 크림이 올라간 음료들이 매력적입니다. 크림이 느끼하지 않아서
                                    쌉싸름한 말차와도 잘 어울리고, 커피랑 조합도 좋습니다. 저는 항상 휘핑은
                                    빼달라고 하고, 케이크을 먹을 때도 크림을 걷고 먹을 정도로 크림을 별로
                                    좋아하지 않는데, 카페 파밀리아에서만큼은 예외입니다. 이곳 크림은 크림까지
                                    싹싹 먹을 정도로 크림이 부담스럽지 않고 맛있습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'무화과 생크림 케이크'} src={'/assets/blog/familia-cafe/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    무화과 철엔 무화과를, 딸기철엔 딸기를! 파밀리아에서는 시즌마다 제철 과일을
                                    넣어 맛있는 케이크를 개발하십니다. 생크림의 단짝은 딸기이다보니, 딸기
                                    생크림 케이크 시즌에는 케이크가 금방 품절 또 품절이더라고요. 케이크
                                    라인업은 그때마다 다르니, 파밀리아 인스타그램 계정을 참고해 주세요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'컵'} src={'/assets/blog/familia-cafe/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    카페 파밀리아 곳곳에는 예쁜 감성 소품이 가득한데요, 이 소품들을 구경하고
                                    사진 찍는 재미도 쏠쏠합니다. 사장님께서 준비해두신 서적들도 하나같이 다
                                    너무 읽고 싶은 책들뿐이었어요. 준비해 주신 책도 매장 내에서는 읽을 수
                                    있었습니다.
                                    <br />
                                    뮤즐리와 과일이 듬뿍 들어간 수제 요거트볼도 인기가 많은 것 같았는데요,
                                    건강한 한 끼 식사로도 충분해 보였습니다.
                                    <br />
                                    직접 만드시는 수제 뮤즐리는 집에서도 즐길 수 있도록 판매 중이었습니다.
                                    (12,000원)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'수제 요거트볼'} src={'/assets/blog/familia-cafe/5.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    조각 케이크 등 디저트 구움 과자류는 빨리 소진되니, 드시고 싶으신 케이크가
                                    있으실 땐 서둘러주세요.
                                    <br />
                                    저는 개인적으로 파밀리아 생크림 케이크를 좋아하지만, 최근에 바스크
                                    치즈케이크를 먹어봤는데 정말 꾸덕꾸덕하고 맛이 풍부했습니다.
                                    <br />
                                    케이크 주문 및 상담은 카카오톡 채널, 전화를 통해 가능합니다. 예약은 최소
                                    2~3일 전에 해야 합니다. 픽업시간에 맞추어 제작하기 때문에 갑작스러운 픽업
                                    시간 변경은 어렵다고 해요. 당일 홀케이크 구매는 불가능하다고 해요!
                                </p>

                                <p>파밀리아 카페(@familia_cafe_official)</p>
                            </div>
                        </div>

                        <CoverImage title={'아인슈패너'} src={'/assets/blog/familia-cafe/6.jpg'} />
                    </article>
                </>
            </Container>
        </Layout>
    )
}

type Params = {
    params: {
        slug: string
    }
}
