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
