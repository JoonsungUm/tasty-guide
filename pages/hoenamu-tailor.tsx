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
        slug: 'hoenamu-tailor',
        title: '회나무양복점 다이닝',
        date: '2020-03-16T05:35:07.322Z',
        coverImage: '/assets/blog/hoenamu-tailor/cover.jpg',
        excerpt: 'string',
        ogImage: {
            url: '/assets/blog/hoenamu-tailor/cover.jpg',
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
                                <p>
                                    * 남해의 고요한 밤, 맛있는 안주에다 떠들썩하게 한잔하고 싶을 때 남해읍
                                    안주 맛집, “회나무양복점 다이닝”으로
                                </p>
                                <p className="">
                                    남해군에는 저녁 늦게까지 영업을 하는 식당이 많이 없는데요, 그래서 남해에서
                                    밤에 한 잔 생각이 날 땐 포장해온 음식이나, 집에서 야식을 만들어서 한 잔을
                                    하곤 합니다. 하지만 가끔씩은 신나는 분위기에서 남이 해주는 맛있는 안주에
                                    한잔 하고 싶을 때가 있잖아요? 이런 아쉬운 밤에 갈 수 있는 맛있는 안주로
                                    유명한 남해 안주 맛집, 회나무 양복점 다이닝을 소개합니다.
                                </p>
                                <p>
                                    경남 남해군 남해읍 화전로 52-8 52-8, 1층, 070-7746-8282
                                    <br />
                                    17:00~24:00, 매우 월요일 정기휴무
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'회나무양복점 야경'} src={'/assets/blog/hoenamu-tailor/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">#매력 포인트 1 :　남해에서 밤 12시까지 영업하는 곳이라니!</p>
                                <p>
                                    남해의 청년 상인 창업거리 조성 사업으로 청년거리가 생긴 남해의 회나무
                                    아랫길에 있는 '회나무양복점 다이닝'은 오후 5시부터 불을 밝힙니다. 저녁
                                    8시면 영업을 하는 곳이 거의 없는 남해에서 5시에 영업을 시작해 밤 12시까지
                                    영업을 한다는 것은 아주 드문 경우이죠. 빈티지하고 레트로한 인테리어에
                                    맛있는 안주까지 가득한 이곳은 남해읍 안주 맛집이자 분위기 맛집입니다.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">#매력 포인트 2: 테일러샵에 방문한 듯한 레트로한 인테리어</p>
                                <p>
                                    위치도 찾기 쉽습니다. 남해읍 롯데리아 골목으로 들어와 조금만 직진하면 찾을
                                    수 있는데요, 외관도 멋스러워요. 가게로 들어서면 바로 보이는 오픈 주방에,
                                    양복점을 연상케 하는 소품들이 가득합니다. 가게 내부가 굉장히 깔끔했습니다.
                                    마치 몸에 맞춰서 양복을 짓듯이, 우리의 입맛에 맞춰서 안주를 준비해
                                    주신다는 뜻일까요?
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'돈까스'} src={'/assets/blog/hoenamu-tailor/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    #매력포인트 3: 이것은 식사인가 안주인가, 안주빨?을 세우게 만드는 안주들
                                </p>
                                <p>
                                    단순히 술을 마시기 위해서 구실만 맞추는 안주가 아닌, 안주 하나하나 식사
                                    메뉴로도 손색없는 메뉴가 가득했습니다. 안주가 맛있기로 소문난 곳이라
                                    이것저것 주문해서 식사 겸 술을 마시기에 좋은 곳입니다. 밥을 먹지 않고
                                    술자리에 갔을 때, 마땅히 먹을 것이 없는 경우가 많잖아요. 이곳은 돈까스부터
                                    연어, 떡볶이, 사태 등 든든하고 푸짐하게 먹을 수 있는 안주가 가득했고,
                                    하나하나 빠짐없이 맛있었습니다. 돈까스는 빠삭하고, 연어는 신선했습니다.
                                    센스있게 돈까스 소스도 따로 주셔서 끝까지 바삭하게 돈까스를 즐길 수
                                    있었습니다. 일행 중에 소스를 돈까스에 부어 살짝 눅눅하게 먹는 것을
                                    좋아하는 친구는 한쪽에 소스를 부어 먹기도 했지만 돈까스는 찍먹이죠. 카레도
                                    있어서 카레에다 돈까스를 찍어 먹을 수도 있습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'사태'} src={'/assets/blog/hoenamu-tailor/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    인기 메뉴인 사태 한 판도 시켜봅니다. 몸보신이 될 것 같은 비주얼의 안주가
                                    침샘을 자극합니다. 불고기 전골 맛도 나고, 샤브샤브 같기도 해서 술이 술술
                                    넘어갔습니다. (지나친 음주는 건강에 해로운 거는 다들 아시지요?^^)
                                    <br />
                                    하지만 남해 회나무 양복점 다이닝의 최고 인기 메뉴, 이곳에서 꼭 시켜 먹어야
                                    하는 메뉴는 바로바로 '누룽지에 빠진 영계'입니다. 치킨 맛도 알고 누룽지
                                    맛도 아는데 이 누룽지에 빠진 치킨 맛은 어디에서도 먹어본 적 없는
                                    맛이었어요. 아주 중독적입니다. 고소하면서도 감칠맛이 나서 숟가락을 멈출
                                    수가 없습니다. 구수하지만 하나도 느끼하지 않고, 초록병 친구와도 아주 잘
                                    어울려요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'누룽지에 빠진 영계'} src={'/assets/blog/hoenamu-tailor/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    회나무 양복점은 떡볶이 맛집으로도 유명합니다. 이곳 떡볶이는 즉석떡볶이
                                    스타일인데, 차돌박이가 들어가서 국물이 구수하고, 떡은 쫄깃합니다. 과연
                                    떡볶이 맛집다워요. 남해에서 즉석떡볶이를 먹고 싶을 때, 회나무 양복점
                                    다이닝을 추천합니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'떡볶이'} src={'/assets/blog/hoenamu-tailor/5.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    가게도 깔끔하고, 사장님도 친절하시고 안주도 맛있고, 분위기까지 좋아서
                                    맛있는 안주와 한잔하면서 든든히 먹기 좋은 곳이었습니다.
                                    <br />
                                    남해에서 맛있는 안주에 시원한 한 잔이 생각나실 때, 회나무양복점 다이닝에
                                    가보시는 것은 어떨까요?
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'회나무양복점'} src={'/assets/blog/hoenamu-tailor/6.jpg'} />
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
