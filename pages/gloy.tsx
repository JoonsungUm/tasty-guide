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
        slug: 'gloy',
        title: '글로이',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/gloy/cover.jpg',
        excerpt: '남해군 여성 1인 오너 셰프의 맛있고도 멋진 이야기',
        ogImage: {
            url: '/assets/blog/gloy/cover.jpg',
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
                                    그녀의 하루는 48시간일까? 남해군 여성 1인 오너 셰프의 맛있고도 멋진 이야기
                                    <br />
                                    독일마을, 다랭이 마을, 금산 보리암 등 유명한 관광지가 많은 남해군이지만,
                                    남해군도 사람 사는 곳이죠! 남해군민들의 삶에 꼭 필요한 남해군청 등
                                    행정기관은 남해군에서도 보통 남해읍에 있는데요. 그래서 남해읍에는
                                    관광객보다는 남해군민들이 많이 활동하는? 곳입니다. 그래서 로컬이 인정하는
                                    찐 로컬 맛집들이 많은데요, 오늘은 그중에서도 젊은 여성 1인 오너셰프가
                                    운영하는 찐찐 로컬 맛집을 소개합니다.
                                </p>
                                <p className="">* 주인 혼자 지지고 볶아, 남녀노소에게 행복 주는 글로이</p>
                                <p>
                                    경남 남해군 남해읍 화전로 96번다길 10 1층
                                    <br />
                                    11:00~21:00, (브레이크 타임 15:00~17:00), 매주 일, 월 정기휴무
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'파스타와 음료'} src={'/assets/blog/gloy/6.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    이미 남해 사람들에게는 없어선 안될 찐 맛집으로 소문난 이곳은 바로바로,
                                    남녀노소, "Gentleman, Lady, Old, Young" 모두가 좋아하는 이탈리안 레스토랑,
                                    GLOY입니다! (쏘리 질러!) 남해읍 전통시장 아래쪽에 있는 이곳은 남해군으로
                                    귀촌한 지 1년째인 셰프이자 오너이신 사장님께서 혼자 지지고 볶으며 맛있게
                                    가꿔오고 계신 곳입니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'르 꼬르동 블루 수료증'} src={'/assets/blog/gloy/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    매장 한 벽면에 ‘르 꼬르동 블루’ 과정 수료증... 와우..! 셰프님께서는 서울에
                                    있는 이탈리안 레스토랑에서 일하다가 오셨다고 들었는데, 숙명여대와 프랑스
                                    최고 요리학교 르 꼬르동 블루의 연계과정도 이수하셨다고 하는군요. 매장은
                                    환하고 넓고 깨끗하고 쾌적했습니다. 글로이 최고 인기 메뉴는
                                    함박스테이크인데요, 저도 글로이 함박스테이크를 너무 좋아해서 갈 때마다 꼭
                                    시켜 먹습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'함박스테이크'} src={'/assets/blog/gloy/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    글로이 음식이 언제 먹어도 맛있는 이유는 셰프님께서 그때그때 상황에 맞게
                                    가장 맛있는 음식을 내어주시기 때문입니다. 함박스테이크에 올라간 가니시를
                                    크게 구워주시기도 하시고, 잘게 썰어서 비벼 먹을 수 있게 주시기도 하시고,
                                    제철 재료를 더하거나 빼주시기도 합니다. 언제 가서 먹어도 늘 예상보다 더
                                    만족스러워요. 글로이 사장님께서는 음식을 내주신 뒤에 오셔서 음식이
                                    괜찮은지 물어보시고 고기 굽기나 음식의 간이 괜찮은지 물어봐 주시기도
                                    하는데, 음식을 만들고 대접하는 일에 진심이시라는 것을 알 수 있었습니다.
                                    예전에 이탈리아에 여행을 갔을 때도 음식을 먹고 있으면 꼭 웨이터분이 오셔서
                                    '음식이 괜찮으냐'하고 물어봐서 인상적이었거든요! 글로이 셰프님도 혼자
                                    지지고 볶으며 바쁘신 와중에도 손님들이 맛있는 식사를 하고 있는지 체크하고
                                    고객들의 의견에 늘 귀를 기울이셔서 남녀노소가 좋아하는 식당이 된 것
                                    같습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'맥앤치즈와 와인'} src={'/assets/blog/gloy/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    가녀린 몸으로 이런 음식들을 다 어떻게 혼자서 하시는 건지 상상이 안 되지만,
                                    먹는 사람은 먹어야죠... 식기도 다 너무 예쁘고 따뜻한 느낌이 가득하달까요?
                                    글로이에서 거의 모든 메뉴를 먹어본 것 같은데, 하나같이 다 맛있고 간이 세지
                                    않아서 아무리 먹어도 질리지가 않습니다.
                                </p>

                                <p>
                                    셰프님께서는 요리 공부를 시작할 때부터 식재료에 관한 공부를 특히 좋아하고
                                    많이 하셨다고 해요. 이런 공부가 바탕이 되어서인지, 확실히 글로이의 메뉴
                                    안에 들어 있는 재료들은 신선하고 맛있는 데다 식감도 잘 어울리고 소화도
                                    잘되었던 것 같아요. 글로이에서 외식을 하고 나면, 건강하고 맛있는 식사를 한
                                    느낌이 확 옵니다. 그때그때 제철 재료를 활용한 신메뉴나 시즌 메뉴도 자주
                                    만들어주셔서 새로운 메뉴를 먹으러가야 하니, 단골이 되지 않을 수가
                                    없습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'홍가리비 바질 파스타'} src={'/assets/blog/gloy/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    저의 해장을 책임졌던 맥 앤치즈 파스타, 홍가리비 철에만 잠시 등장해서 너무
                                    아쉬웠던 홍가리비 바질 파스타! 비주얼만 보셔서도 아시겠지만, 글로이 이곳,
                                    음식 제대로 하십니다. 직접 만드시는 샹그리아도 물건입니다. 상큼하고 시원한
                                    것이 파스타와 페어링이 참 좋습니다.
                                </p>

                                <p>
                                    네이버 리뷰를 보니 아이들이 먹기에도 좋은 음식이라는 평이 많더라고요. 그
                                    정도로 많은 분이 건강하고 맛있는 음식이라고 생각하시는 거겠죠? 차원이 다른
                                    맛은 기본이고, 청결함과 꼼꼼함, 고객에 대한 세심한 배려 등 남녀노소
                                    모두에게 사랑받을 이유가 충분한 글로이!
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'맥앤치즈 파스타'} src={'/assets/blog/gloy/7.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    남해에 오시면, 가녀린 몸으로 혼자 지지고 볶으며 남녀노소 많은 분들에게
                                    기쁨을 드리고 있는 이 반짝이는 식당으로 와보시지 않으시겠어요?
                                </p>
                                <p>
                                    * 영업시간 등 자세한 사항은 인스타그램 계정을 참고해 주세요.
                                    <br />
                                    GLOY(@gloy_namhae)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'글로이'} src={'/assets/blog/gloy/8.jpg'} />
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
