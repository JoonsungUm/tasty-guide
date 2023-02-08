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
        slug: 'daon-bakeshop',
        title: '다온 제과',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/daon-bakeshop/cover.jpg',
        excerpt: '남해군 빵지순례',
        ogImage: {
            url: '/assets/blog/daon-bakeshop/cover.jpg',
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
                                <p className="">
                                    * 차원이 다른 에그타르트, 모든 좋은 것들이 다가오는 “다온제과”
                                </p>
                                <p>
                                    경남 남해군 남해읍 남해대로 2849-1, 12:00 - 19:00(디저트 소진 시 마감,
                                    정기휴무: 일, 월)
                                    <br />
                                    구움과자 라인업 및 정확한 영업시간: 다온제과 인스타그램 참조
                                    (@daon_bakeshop)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'인테리어'} src={'/assets/blog/daon-bakeshop/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    이번에 소개해드릴 ‘빵순돌이들이 꼭 방문해야 하는 남해군 디저트 맛집’은
                                    지난 2022년 3월에 개업해 남해 대표 구움 과자 전문점으로 자리매김한
                                    다온제과입니다. 다온제과는 남해읍 터미널 쪽 대로변에 있는 구움과자 포장
                                    전문점인데요, 작은 세움 간판 뿐이라 위치를 찾기 쉽지 않아서 보물찾기를
                                    하는 것 같다는 리뷰를 본적이 있는데, 원래 찐 맛집은 지도앱을 켜고 더듬더듬
                                    찾아가야 제맛이죠. 자, 눈을 크게 뜨고 따라오시죠!
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'디저트'} src={'/assets/blog/daon-bakeshop/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    처음 다온제과에서 맛보았던 에그타르트와 바나나푸딩 맛에 반해서 이제는 아주
                                    단골이 되어버렸답니다. 이곳 에그타르트 먹으면 에그타르트에 대한 기준이
                                    너무 높아져 버리니 주의하셔야 해요. 진짜 재료를 아끼지 않고 넣으십니다.
                                    바나나 푸딩도 뉴욕에 가보지 않았지만, 바로 이것이 바로 제대로된 바나나
                                    푸딩의 맛이 아닐까 싶어요. 고급진 바닐라 맛이 ‘나..잘 살고 있구나.’ 라는
                                    알 수 없는 안도감을 느끼게 합니다. (응?) 진한 아메리카노랑 먹으면 그곳이
                                    바로 천국인 거 아시죠? 지금 저만 진심... 아닌 거죠?
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'휘낭시에'} src={'/assets/blog/daon-bakeshop/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    구움과자 라인업은 그날 그날 조금씩 달라서 다온제과 인스타그램 계정을
                                    호시탐탐 염탐하며 좋아하는 구움과자가 나오면 사러가곤 합니다. 휘낭시에도
                                    맛있고, 머랭쿠키도 맜있고, 통밀쿠키도... 케이크도... 맛있고... 네.
                                    맞습니다. 사실 다 맛있습니다. 홀케이크도 미리 주문하면 구매할 수 있어요!
                                    가나슈 초코 케이크가 꾸덕하고 맛있어서 2022년 송년회 때 다온제과에서
                                    가나슈 홀케이크를 주문해서 가져갔더니 친구들에게 박수 갈채를 받았습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'가나슈 홀케이크'} src={'/assets/blog/daon-bakeshop/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    크리스마스 모임　땐 다른 친구가 다온제과에서 생크림 케이크를 사 와서
                                    다온제과 생크림 케이크도 먹어봤는데, 케이크 위에 올라간 오브제도 너무
                                    예쁘고 생크림도 많이 달지 않아서 생크림 케이크가 지금은 제 마음속
                                    1등입니다. (네. 매일 바뀝니다.)
                                </p>

                                <p>
                                    홀 케이크는 미리 주문하시면 원하는 날짜와 시간에 픽업 가능하다고 합니다.
                                    저는 3일 전에 예약하긴 했었어요. 그 외에 선물 포장 주문도 미리 말씀드리니
                                    알아서 포장 용기에 잘 담아주시더라고요!
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'생크림 케이크'} src={'/assets/blog/daon-bakeshop/5.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    티라미수가 나올 때도 있던데 새해에는 다온제과 티라미수를 꼭
                                    먹어봐야겠습니다. 다이어트는 언제 해야 할까요? 이런 제 맘을 아셨는지,
                                    다온제과에서는 샐러드 정기배송도 하십니다. 디저트 먹고 부풀어진 몸을
                                    샐러드 먹고 줄여야 하니까, 샐러드 정기배송을 심각하게 고려 중이에요.
                                    새해에는 꼭 열심히 운동하고 한 끼는 건강한 채소를 많이 먹어야겠습니다.
                                    다온제과 샐러드는 월 단위로 정기배송 주문할 수 있고, 주 3회 당일 생산한
                                    신선한 샐러드를 배송한다고 합니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'샐러드'} src={'/assets/blog/daon-bakeshop/6.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    홀케이크에, 디저트에, 샐러드 배송까지 하시는 사장님께 언젠가 어떻게 이렇게
                                    많은 일을 하시느냐고 여쭤보았더니, 사장님께서는 웃으시며 "새벽에요."
                                    하셨습니다. 그때 '아, 이분 약간 김연아 선수 같은 분이시구나.'라고
                                    느꼈습니다. '그냥 하면 되는 것'이란 마음으로 유난 떨지 않고, 묵묵히 할
                                    일을 하시는 분이요. 꾸준하고 자기의 자리에서 할 수 있는 일을 해 나가시는
                                    분 같았어요. 매사 왕 유난 떠는 제게는 특히나 더 멋져 보여서 팬이
                                    되어버렸습니다. (멋있어...)
                                </p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    이런 사장님께서 만드시는 음식이라 다온제과의 디저트도 꼭 사장님처럼 늘
                                    믿음직스럽게 맛있나 봅니다. 맛이 품위가 있고, 어떤 타협이 없달까요?
                                </p>
                                <p>
                                    이번에 남해 쪽에도 예상치 못하게 눈이 내려 사장님께서 접촉사고가 났었는데,
                                    사고가 날 때 제일 먼저 든 생각이 '샐러드 배송 어떻게 하지?'였다고 합니다.
                                    이분, 말 다 했죠. 뭐.
                                    <br />
                                    포장 비용은 500원이 추가됩니다. 용기를 가져가면 담아주세요. 포장 용품도
                                    자연 생분해되는 포장 용품을 사용하시고, 일회용 컵이나 빨대도 다 친환경
                                    용품을 사용하시더라고요
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'친환경 포장 용품'} src={'/assets/blog/daon-bakeshop/7.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    다온제과의 '다온'은 ‘모든 좋은 것들이 다가온다.’라는 뜻이라고 합니다.
                                    사장님의 귀여운 반려묘의 이름이기도 하대요. 귀여운 사장님의 반려묘,
                                    다온이가 그려진 작은 세움 간판을 보시면 주저하지 말고 들어가세요! 한 땀 한
                                    땀 정성으로 맛있게 만든 디저트와 샐러드까지, 모든 좋은 것들이 다가올
                                    것입니다.
                                </p>
                                <p>
                                    남해읍 지역은 배달의 민족 서비스를 통해서 배달 주문도 가능합니다.
                                    다온제과의 대표 인기 상품인 에그타르트는 네이버 스마트 스토어를 통해
                                    온라인으로 구매도 가능합니다.
                                    <br />
                                    <br />
                                    남해 다온제과(@daon_bakeshop)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'다온 제과'} src={'/assets/blog/daon-bakeshop/8.jpg'} />
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
