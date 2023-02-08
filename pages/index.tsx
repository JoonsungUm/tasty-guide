import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import CoverImage from '../components/cover-image'

type Props = {
    allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
    const heroPost = allPosts[0]
    const morePosts = [
        {
            slug: 'youseobang',
            title: '유서방 회떠가시다',
            date: '2020-03-16T05:35:07.322Z',
            coverImage: '/assets/blog/youseobang/cover.jpg',
            excerpt: '재료 공수부터 손질까지, 오너쉐프의 한끗이 살아 있는 회포장 전문점',
            ogImage: {
                url: '/assets/blog/youseobang/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'yoons-kitchen',
            title: '윤스키친',
            date: '2020-03-16T05:35:07.322Z',
            coverImage: '/assets/blog/yoons-kitchen/cover.jpg',
            excerpt: '기간을 정하여 바뀌는 가정식 밥집',
            ogImage: {
                url: '/assets/blog/yoons-kitchen/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'hoenamu-tailor',
            title: '회나무양복점 다이닝',
            date: '2020-03-16T05:35:07.322Z',
            coverImage: '/assets/blog/hoenamu-tailor/cover.jpg',
            excerpt: '남해의 고요한 밤, 맛있는 안주에다 떠들썩하게 한잔하고 싶을 때 남해읍 안주 맛집',
            ogImage: {
                url: '/assets/blog/hoenamu-tailor/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'cafe-saemseong',
            title: '카페 샘성',
            date: '2020-03-16T05:36:07.322Z',
            coverImage: '/assets/blog/cafe-saemseong/cover.jpg',
            excerpt: '빵지순례자들이 꼭 들러야 하는 남해군 디저트 맛집',
            ogImage: {
                url: '/assets/blog/cafe-saemseong/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'namhae-abalone',
            title: '남해 전복 물회',
            date: '2020-03-16T05:36:07.322Z',
            coverImage: '/assets/blog/namhae-abalone/cover.jpg',
            excerpt: '곁들임 광어 미역국까지 끝내주는',
            ogImage: {
                url: '/assets/blog/namhae-abalone/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'gloy',
            title: '글로이',
            date: '2020-03-16T05:36:07.322Z',
            coverImage: '/assets/blog/gloy/cover.jpg',
            excerpt: '남해군 여성 1인 오너 셰프의 맛있고도 멋진 이야기',
            ogImage: {
                url: '/assets/blog/gloy/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'daon-bakeshop',
            title: '다온 제과',
            date: '2020-03-16T05:36:07.322Z',
            coverImage: '/assets/blog/daon-bakeshop/cover.jpg',
            excerpt: '남해군 빵지순례',
            ogImage: {
                url: '/assets/blog/daon-bakeshop/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'familia-cafe',
            title: '파밀리아 카페',
            date: '2020-03-16T05:36:07.322Z',
            coverImage: '/assets/blog/familia-cafe/cover.jpg',
            excerpt: '맛있는 한 입을 위한 노력',
            ogImage: {
                url: '/assets/blog/familia-cafe/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'bokrye-gukbap',
            title: '복례 가마솥 국밥',
            date: '2020-03-16T05:36:07.322Z',
            coverImage: '/assets/blog/bokrye-gukbap/cover.jpg',
            excerpt: '남해에서 지인한 남해식 돼지국밥을 드시고 싶다면?',
            ogImage: {
                url: '/assets/blog/bokrye-gukbap/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'chojen-house',
            title: '초전집',
            date: '2020-03-16T05:36:07.322Z',
            coverImage: '/assets/blog/chojen-house/cover.jpg',
            excerpt: '남해산 꼬막과 투플 한우를 가득 담은 한 상',
            ogImage: {
                url: '/assets/blog/chojen-house/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'panda-jjamppong',
            title: '판다 짬뽕',
            date: '2020-03-16T05:36:07.322Z',
            coverImage: '/assets/blog/panda-jjamppong/cover.jpg',
            excerpt: '압도적 비주얼에 ‘와’ 소리 절로 나오는',
            ogImage: {
                url: '/assets/blog/panda-jjamppong/cover.jpg',
            },
            content: 'string',
        },
        {
            slug: 'pod-pies',
            title: '팥파이스',
            date: '2020-03-16T05:36:07.322Z',
            coverImage: '/assets/blog/pod-pies/cover.jpg',
            excerpt: '디저트에 담긴 진심',
            ogImage: {
                url: '/assets/blog/pod-pies/cover.jpg',
            },
            content: 'string',
        },
    ]
    return (
        <>
            <Layout>
                <Head>
                    <title>남해라이프 맛집 가이드</title>
                </Head>
                <Container>
                    <Intro />
                    <div className="mb-8 md:mb-16">
                        <CoverImage title={'다랭이마을'} src={'/assets/blog/intro/cover.jpg'} />
                    </div>
                    {/* {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )} */}
                    <section className="mb-16 md:mb-32">
                        <div className="max-w-2xl mx-auto text-lg md:text-2xl">
                            <p>
                                파면 팔수록 고구마처럼 끝없이 줄줄 딸려 나오는 남해의 맛집들, 맛도리 유록이의
                                록슐랭 가이드
                            </p>
                            <br />
                            록슐랭 가이드는 오너셰프가 직접 요리하는 남해군의 음식점들을 비롯하여 한식, 양식,
                            중식 등 다양한 음식점을 소개하고 있습니다. 이곳을 통해 남해군의 전통적인 음식과
                            지역 특산품을 즐길 수 있는 식당들을 찾아볼 수 있습니다. 또한 남해군 내의
                            음식점들과 남해읍내에서 한잔하기 좋은 곳, 디저트로 유명한 곳들 소개하고 있으며,
                            이러한 음식들은 남해에서 나는 재료를 사용해 만들어지기 때문에 제공되는 음식의 질이
                            높고 지역 정취가 강합니다.
                        </div>
                    </section>
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

    return {
        props: { allPosts },
    }
}
