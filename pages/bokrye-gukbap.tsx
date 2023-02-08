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
        slug: 'bokrye-gukbap',
        title: '복례 가마솥 국밥',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/bokrye-gukbap/cover.jpg',
        excerpt: '남해에서 지인한 남해식 돼지국밥을 드시고 싶다면?',
        ogImage: {
            url: '/assets/blog/bokrye-gukbap/cover.jpg',
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
                                    * 남해에서 지인한 남해식 돼지국밥을 드시고 싶다면? 복례가마솥국밥
                                </p>
                                <p>
                                    경상남도 남해군 남해읍 화전로96번가길 15-1
                                    <br />
                                    월~일 07:00~21:00, 055-863-5939
                                </p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    남해읍 전통시장 안쪽 골목에 있는 이곳은 무려 아침 7시부터 운영해서 아침
                                    식사도 가능합니다. (남해 터미널에서 가까워요! 도보 10분 내외) 남해에서
                                    휴무 없이 7시부터 저녁 9시까지 운영하시다니…. 이런 일 흔치 않아요. 엄청난
                                    영업시간을 자랑하는 남해읍 찐 로컬 맛집입니다. 식사 시간에 가보시면 발
                                    디딜 틈이 없으니, 눈치 게임을 잘하셔야 합니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'국밥'} src={'/assets/blog/bokrye-gukbap/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    겨울에는 뜨끈한 국밥 한 그릇이면 추위가 다 날아가죠. 복례 가마솥 국밥은
                                    깊은 국물 맛에 속 재료도 듬뿍 들어 있어서 아주 든든하게 한 끼를 드실 수
                                    있습니다. 부산식 돼지국밥에는 '부추' 일명 정구지를 듬뿍 넣어줘야 하는데요,
                                    복례가마솥국밥에서도 곁들임 부추를 아주 넉넉하게 주십니다. 뚝배기에서
                                    보글보글 끓는 국밥이 나오자마자 부추를 바로 넣어서 부추 향이 확 나도록
                                    하는 것이 돼지국밥의 포인트인 것, 다들 아시죠?
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'겉절이'} src={'/assets/blog/bokrye-gukbap/5.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    입맛 따라 조제해 먹는 것이 국밥의 매력 중 하나인데, 복례가마솥국밥은
                                    새우젓과 다진 양념을 조금 넣어 먹는 것이 제 입맛에는 딱 맞았습니다. 같이
                                    나오는 깍두기와 겉절이 김치도 아주 굿이에요, 굿! 그리고 국밥의 친구는
                                    스테인리스 공깃밥 그릇에 든 KGB, 공깃밥이자나요? 이 쌀밥의 퀄리티가
                                    국밥계에선 아주 중요한데요, 복례가마솥국밥집은 이 공깃밥도 압력밥솥으로
                                    지으신 것인지 밥알에서 윤기가 촤르르 흐르는 것이 달고 맛있었습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'깍두기'} src={'/assets/blog/bokrye-gukbap/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    남해군에서 너무나 사랑받는 맛집이라, 언제 가도 손님이 끊이지 않습니다.
                                    그래서 만남의 장이기도 한데요, 남해분들이 이곳에서 다른 테이블에 앉은
                                    분들과 인사를 나누는 것을 자주 보았습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'먹는법'} src={'/assets/blog/bokrye-gukbap/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    ​복례 가마솥 국밥은 100퍼센트 돼지 사골로 우려낸 담백한 남해식 국밥이라고
                                    해요. 남해식 국밥이라니, 궁금하지 않으신가요? 확실히 부산식보다 더
                                    깔끔합니다. 테이블에 국밥 맛있게 먹는 법이 있어서 정독해보았는데요,
                                    <br />
                                    <br />
                                    첫째로는 '정구지'를 듬뿍 넣고, (정구지는 부추의 옛 방언입니다.
                                    경상도에서는 정구지라고 부르죠.) 담백한 국물에 부추 향이 입힙니다. 식감도
                                    더 풍성해집니다.
                                    <br />
                                    <br />
                                    둘째로는 새우젓으로 간을 맞춥니다. 복례 가마솥 국밥의 육수는 간이 따로
                                    되어있지 않다고 합니다. 소금보다는 새우젓으로 간을 맞추면 감칠맛을 느낄 수
                                    있다고 해요.
                                    <br />
                                    <br />
                                    셋째로는 다진 양념을 넣어 얼큰하게도 먹어봅니다. 이 양념을 ‘다대기’라고
                                    많이 부르는데, 이 말은 일본어이니 다진 양념으로 순화해서 사용하자고
                                    쓰여있었습니다. 사장님의 국어 사랑이 느껴졌습니다!
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'원산지'} src={'/assets/blog/bokrye-gukbap/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    원산지가 모두 국내산이었어요. 고춧가루까지 국내산이기 쉽지 않은데, 복례
                                    가마솥 국밥에서는 전 재료를 국내산으로 사용하고 있었습니다. 좌식 좌석도
                                    있고, 신발을 벗고 앉는 좌석도 있습니다. 가게엔 멋진 다랭이논 사진과 남해
                                    풍경 사진이 가득해요.
                                    <br />
                                    아침 9시에 가도 소주 한잔하시는 로컬 분들이 가득!　국밥에 소주 못 참죠.
                                    (이런 분위기 너무 사랑합니다.)
                                    <br />
                                    ​돼지국밥과 순대 국밥, 그리고 섞어 국밥, 김치국밥, 소머리 국밥, 수육도
                                    있습니다. 순대와 돼지고기 모두를 즐기고 싶다면, 섞어 국밥을 추천해
                                    드립니다. 전 늘, 섞어를 먹어요. 욕심쟁이라서. 섞어 국밥에도 순대와 돼지 둘
                                    다 듬뿍 들어 있어서 둘 다 즐기고 싶거나, 선택 장애가 있으신 분들에게 딱
                                    맞습니다. 섞어인데 순대국밥이 잘못 왔나 싶을 정도로 순대가 많이
                                    들어있거든요. 순대국밥을 시킨 친구들을 불쌍한 얼굴로 쳐다보지 않아도
                                    됩니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'계절 메뉴'} src={'/assets/blog/bokrye-gukbap/6.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    깍두기와 밥만 먹어도 맛있고, 그날그날 버무리시는 듯한 겉절이 김치도 달고
                                    맛있었습니다. 복례가마솥국밥은 특히 안에 들어 있는 고기가 잡내가 없고
                                    부드러웠습니다.
                                    <br />
                                    ​가게 앞에 붙어 있는 돼지 사진을 보니 괜스레 미안해지지만, 복례 가마솥
                                    국밥에서 국밥을 정말 맛있게 먹고 나왔습니다.
                                    <br />
                                    겨울철엔 메기탕과 대구탕도 하신다고 하니, 겨울엔 복례 가마솥 국밥에서
                                    메기탕과 대구탕을 즐기실 수도 있겠습니다.
                                    <br />
                                    남해에서 맛있는 국밥을 찾으신다면, 복례 가마솥 국밥을 추천합니다!
                                </p>

                                <p>
                                    ​돼지 국밥 8,000원, 소머리 국밥 9,000원
                                    <br />
                                    수육 25,000~
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'복례가마솥국밥'} src={'/assets/blog/bokrye-gukbap/7.jpg'} />
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
