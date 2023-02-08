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
        slug: 'cafe-saemseong',
        title: '카페 샘성',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/cafe-saemseong/cover.jpg',
        excerpt: '빵지순례자들이 꼭 들러야 하는 남해군 디저트 맛집',
        ogImage: {
            url: '/assets/blog/cafe-saemseong/cover.jpg',
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
                                    빵지순례자들이 꼭 들러야 하는 남해군 디저트 맛집
                                    <br />
                                    전국 빵순이, 빵돌이들은 빵이 맛있다면 어디든 가곤 합니다. 저도 어디를
                                    여행하던지 그곳에 있는 유명한 빵집은 꼭 찾아 들르는데요. 남해로 내려와서도
                                    가장 먼저 찾은 곳은 빵 맛집이었습니다. 오늘은 제가 발로 뛰어 찾은 남해
                                    디저트 맛집을 소개합니다.
                                </p>
                                <p className="">* 카페 샘성</p>
                                <p>
                                    경남 남해군 삼동면 죽방로 24
                                    <br />
                                    월: AM 11시-PM 7시, 수-일: AM 11시-PM 9시
                                    <br />
                                    매주 화요일 휴무 055.867.8080
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'창밖풍경'} src={'/assets/blog/cafe-saemseong/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    남해 창선교와 지족항을 바라보고 있는 지족 바닷가에 멋진 베이커리 카페가
                                    하나 생겼습니다. 그런데 카페 이름이... 삼성?! 재드래곤 님의 그.. 삼성?
                                    아니네요. 카페 ‘샘성’입니다! 이곳은 남해가 좋아 남해로 귀촌한 젊은 부부
                                    사장님이 운영하는 곳으로 마치 외쿡인들이 ‘삼성’을 발음하는 것 같은 이
                                    독특한 카페 이름은 두 분 성함에서 한 글자씩 따온 것이라고 합니다. 두분
                                    성함에 '샘' 자와 '성'자가 각각 들어가서 카페 이름을 '샘성'이라고
                                    지으셨다고 해요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'샘성'} src={'/assets/blog/cafe-saemseong/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    이름부터 깨가 쏟아지는 카페 샘성에 가면 한없이 친절한 사장님 내외분께서
                                    우리를 반겨주시는데요, 사장님들뿐만 아니라 맛있는 프랑스식 빵들도
                                    진열대에서 우리를 기다리고 있어요! “빵순돌이들아, 왔느냐? 니가 찾던 곳이
                                    바로 이곳이다.” 하면서요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'매진'} src={'/assets/blog/cafe-saemseong/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    하지만 이 빵들이 오랫동안 기다려주지 않으니 카페 샘성에 빵을 드시러
                                    가시려면 서두르셔야 합니다. 일찍 일어나는 새가 벌레를 잡아먹는 법이죠?
                                    빵의 세계도 다르지 않아요. 일찍 일어나는 빵순이, 빵돌이가 맛있는 빵을 먹는
                                    법입니다. 첫 방문 때 아무것도 모르고 털레털레 오후 3시쯤 들렸더니 이미
                                    빵은 모두 팔리고 없었습니다. 빵이 분명 있었을텐데... 없었어요. 지역에서
                                    이미 소문난 빵 맛집이라 공급이 수요를 못 따라가요. 빈 쇼케이스를 바라보는
                                    그 허망한 심정은 겪어보신 분은 다 아실 것입니다. 한 번의 실패를 경험한
                                    뒤부터는 카페 샘성에 빵을 사러 갈 때는 항상 일찍 서두릅니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'쇼케이스'} src={'/assets/blog/cafe-saemseong/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    카페 샘성은 프랑스식 빵을 주로 만드시는데요, 빨미까레 3,800원, 남해 유자
                                    페스츄리 4,300원, 바게트 3,500원, 에그타르트 1,800원, 커스터드 페스츄리
                                    4,300원으로 가격도 괜찮습니다. (변동 가능)
                                </p>

                                <p>
                                    남해의 특산물인 유자로 만든 페스츄리는 빵 좋아하는 친구에게 남해 갔다
                                    사왔다며 안겨주기에도 좋습니다. '밀가루 반죽에 유지를 넣고 접었다 밀대로
                                    미는 과정을 반복하여 여러 겹의 얇은 층과 결이 생기도록 반죽하여 구운 과자
                                    또는 빵'을 통칭하여 '페스츄리'라고 한다고 해요. (네이버 국어사전) 카페
                                    샘성은 요 페스츄리 류, 크루와상 류가 참 맛있어요. 반달 모양의 작은 빵을
                                    프랑스에선 크루아상이라고 부르죠. 버터를 발라 겹겹이 말아 구운 고소한
                                    빵으로 유럽에서는 사람들이 아침 식사로도 자주 즐기는 빵이라고 합니다.
                                    샘성은 스콘, 식빵, 바게트 등 식사빵 종류가 많고 또 맛있어서 식사 대용으로
                                    먹을 빵을 사기에 좋은 곳이에요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'뺑오 쇼콜라'} src={'/assets/blog/cafe-saemseong/5.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    물론 달달한 디저트류도 있습니다. 뺑오 쇼콜라(4,000원)와 초코
                                    크루아상(4,300원)처럼 초코가 들어간 빵도 인기메뉴입니다. 뺑은 빵이란 뜻의
                                    프랑스어이고, 쇼콜라는 초코라는 뜻이라고 해요.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    저는 앙버터를 좋아해서 어디를 가든 앙버터를 사먹는 편인데, 샘성에는 프레첼
                                    속에 버터와 팥을 넣은 앙버터프레첼이 있었습니다. 바게트가 프랑스빵으로
                                    유명한 것처럼 프레첼은 서구권에서는 독일을 상징하는 빵으로 유명하죠!
                                    강염기성 용액을 코팅하여 굽는 것이 특징이라 겉이 약간 짭짜름한 빵입니다.
                                    달달한 팥 앙금과 고소한 버터에 짭짤한 빵까지 모였으니 맛이 없을 수가 없는
                                    조합이지만, 샘성의 앙버터 프레첼은 특히나 더 맛있었습니다. 짭조름한 빵이
                                    밀도 높고 부드러웠고 버터와 앙금의 조화가 엄청 맛있었어요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'앙버터'} src={'/assets/blog/cafe-saemseong/6.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    카페 샘성에서는 빵을 먹기 좋게 잘라서 가져다 주시기까지 합니다.
                                    개인적으로는 일을 줄이시고 건강을 챙기시며 적게 일하고 많이 버시길
                                    바라는데... 부디 샘과 성 사장님들의 부귀와 안녕을 빕니다. 이렇게 맛있는
                                    빵집 절대 못 잃어!
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'빨미까레'} src={'/assets/blog/cafe-saemseong/7.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    * 남해 카페 샘성에서 사용하는 일회용품은 생분해가 가능한 제품이라고
                                    합니다.
                                    <br />
                                    남해에서 빵과 커피가 생각나신다면, 카페 샘성에 들러보시는 것은 어떨까요?
                                    <br />
                                    대신 너무 늦지 않게 들러주세요!
                                    <br />
                                    <br />
                                    Instagram의 카페샘성(@cafe_saemseong)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'샘성'} src={'/assets/blog/cafe-saemseong/8.jpg'} />
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
