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
        slug: 'pod-pies',
        title: '팥파이스',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/pod-pies/cover.jpg',
        excerpt: '디저트에 담긴 진심',
        ogImage: {
            url: '/assets/blog/pod-pies/cover.jpg',
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
                                <p className="">* 디저트에 담긴 진심, 팥파이스</p>
                                <p>
                                    국내산 팥과 유기농 밀가루로 만드는, 팥 디저트 전문점
                                    <br />
                                    경상남도 남해군 삼동면 동부대로1876번길 34-1 1층
                                    <br />
                                    오전 11시-7시 (수요일 휴무), 택배 발송 가능(전화, 인스타그램 DM, 네이버
                                    톡톡)
                                    <br />
                                    전화: 070-8994-8823
                                </p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    바람이 차가워지면 사나이, 아니 맛도리 가슴을 두드리는 호빵과 붕어빵이
                                    길거리 곳곳에 보이곤 합니다. 여름엔 시원한 팥빙수를 1일 1빙수하고
                                    싶어지죠. 팥빙수, 붕어빵, 단팥빵 등 우리나라 사람들은 팥이 들어간 디저트를
                                    참 좋아하는 것 같아요. 특히 팥이 들어간 디저트는 나이불문, 성별불문
                                    모두에게 사랑받는 디저트가 아닐까 싶습니다. 남해군 지족에 팥에 진심인
                                    사랑스런 팥 디저트 전문점이 있습니다. 국내산 팥과 유기농 밀가루로 만드는
                                    팥 디저트 전문점, 팥파이스입니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'팥파이'} src={'/assets/blog/pod-pies/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    이름부터 너무 귀여운 팥파이스! 어릴 때 치킨 먹으러 파파이스에 자주
                                    갔었는데 말입니다. 팥파이스에는 치킨은 없고 팥과 팥파이가 있습니다. 팥도
                                    있고, 파이도 있으니, 팥파이스 맞네요. 여기에 팥빙수까지 있습니다! 올레!
                                    로고에 아예 국내산 팥과 유기농 밀가루로 만든다고 못 박으실 정도로 팥파이스
                                    사장님께서는 사용하는 재료에 자부심이 높으신 것 같았습니다. 국내산 팥 쓰기
                                    어려운데.. 국내산 팥에 거기다 유기농 밀가루라니.. 남는 것이 있으신가요?!
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'팥죽'} src={'/assets/blog/pod-pies/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    재료에 한번 놀란 가슴은 팥죽 비주얼을 보면 두 번 놀라고 맙니다. 뜨거우니
                                    조심해서 잘 저어서 드시라는 사장님의 친절한 설명이 잘 들리지 않을 정도로
                                    팥죽 비주얼이 장난이 아니에요. 아니, 팥죽 위에 고명이 무슨 일일까요?
                                    해바라기씨에 호박씨에 아몬드에 떡에.. 견과류와 쫀득한 떡이 듬뿍 들어간
                                    팥죽이 너무 예뻐서 먹기 전부터 벌써 기분이 좋았습니다. 살면서 이렇게
                                    푸짐하게 고명이 올라간 고급스럽고 예쁜 팥죽은 처음 보는 것 같아요.
                                    뜨거우니까 조심하여 잘 저어서 한술 떠보았습니다. 단팥죽도 짭짤하고 쌀이
                                    많이 씹히는 동지 팥죽도 조금씩 아쉬운 점이 있었는데, 팥파이스 팥죽은 많이
                                    달지도 많이 짜지도 않고, 정말 적절하게 달아 너무 너무 맛있었습니다. 팥알을
                                    하나하나 골라서 정성을 담아 만든다고 하시던데 맛에서 정말 많은 정성을
                                    쏟으셨다는 것이 느껴지더라고요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'고명'} src={'/assets/blog/pod-pies/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    팥 파이는 타르트지의 풍미와 팥이 잘 어우러져서 정말 고소했습니다. 좋은
                                    버터를 쓰신다는 것이 확 느껴지는 맛이었어요. 팥 파이 위에 올라간 아몬드랑
                                    같이 씹는 식감도 일품이더라고요. 커피 마시고 파이 먹고, 우유 마시고, 팥죽
                                    먹고, 끝없이 들어가는 조합이었습니다. 저는 팥과 흰 우유 조합이 정말 너무
                                    좋아요. 팥파이스 커피도 정말 맛있어서 지족에서 맛있는 커피를 찾는
                                    친구들에게 팥파이스 커피를 추천하곤 합니다. 팥 디저트는 호불호가 크게
                                    갈리지 않고, 남녀노소 좋아해서 선물용으로도 딱인 것 같습니다. 팥 파이는
                                    택배 발송도 가능하다고 해요.
                                </p>

                                <p>
                                    팥 파이는 한 조각에 3,500원, 한 판(8조각)에 22,000원에 판매 중이었습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'팥파이'} src={'/assets/blog/pod-pies/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    팥파이스 팥빙수도 많이 달지 않아 한 그릇 뚝딱할 수 있는 맛입니다. 아래부터
                                    잘 저어 먹어야 해요. 여름에도 맛있지만 겨울에도 먹고 싶은 것이 팥빙수인데
                                    팥파이스에서는 겨울에도 빙수를 먹을 수 있어서 너무 좋습니다. 원래
                                    아이스크림과 냉면, 빙수는 겨울에 먹는 것이 더 맛있더라고요. 이한 치한의
                                    자세로 겨울에도 쉼 없이 팥빙수를 먹습니다.
                                    <br />
                                    팥빙수(5,000원)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'팥빙수'} src={'/assets/blog/pod-pies/5.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    팥파이스는 남해로 귀촌한 사장님께서 이물질이 들어가지 않도록 국내산 팥을
                                    하나하나 손으로 골라내며 진심을 다해 팥 디저트를 만드는 곳입니다. 사장님의
                                    진심과 팥 디저트가 주는 따뜻하고 다정한 느낌이 공간 전체에 스며들어있던
                                    곳이었어요.
                                </p>

                                <p>
                                    팥파이스 주변에 초록 스토어나 아마도 책방, 뜻밖의 수확 등 가볼 만한 곳도
                                    많고, 남해 칼국수, 마루옥, 하동균 중화요리 등 맛집도 많기 때문에 함께
                                    들러보셔도 좋을 것 같습니다.
                                    <br />
                                    팥파이스(@pod.pies)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'인테리어'} src={'/assets/blog/pod-pies/7.jpg'} />
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
