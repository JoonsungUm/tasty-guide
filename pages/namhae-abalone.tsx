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
        slug: 'namhae-abalone',
        title: '남해 전복 물회',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/namhae-abalone/cover.jpg',
        excerpt: '곁들임 광어 미역국까지 끝내주는',
        ogImage: {
            url: '/assets/blog/namhae-abalone/cover.jpg',
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
                                <p>곁들임 광어 미역국까지 끝내주는</p>
                                <p className="">* 남해 전복 물회</p>
                                <p>
                                    경상남도 남해군 이동면 남해대로 2436
                                    <br />
                                    11:00~19:30 영업, 매주 월 정기휴무
                                    <br />
                                    주요 메뉴: 전복 물회 18,000원, 전복죽 15,000원 (미역국은 써어비스!)
                                    주차장도 따로 있고, 공간도 여유로운 편.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'물회'} src={'/assets/blog/namhae-abalone/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    남해군은 바다를 낀 지역이다 보니 신선한 해산물 요리를 즐길 수 있는 곳들이
                                    많은데요. 회를 먹기엔 조금 부담스럽지만 해산물이 먹고 싶을 때, 가볍고
                                    맛있게 물회 한 그릇 어떨까요? 특히 여러분이 밥보다 면을 좋아하는
                                    면순돌이라면, 이곳에 꼭 들러보세요!
                                </p>
                            </div>
                        </div>

                        {/* <CoverImage title={'고등어'} src={'/assets/blog/namhae-abalone/2.jpg'} /> */}

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    남해 물회 맛집 ‘남해전복물회’는 남해읍 터미널에서 멀지 않은 이동면에
                                    있습니다. 뚜벅이 여행자들이 남해 터미널로 돌아가기 전 남해읍에서 가까운
                                    이동면에서 시워언하게 물회를 한 그릇 하고 가신다면, 여러분은 반드시 남해로
                                    다시 돌아올 것이라고 자부합니다.
                                </p>
                            </div>
                        </div>

                        {/* <CoverImage title={'고등어'} src={'/assets/blog/namhae-abalone/3.jpg'} /> */}

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    사실 물회는 여름에 많이 즐기지만, 겨울에 먹는 냉면이 별미이듯 겨울에 먹는
                                    물회가 정말 맛있습니다. 특히 남해 전복 물회에서는 곁들임으로 싱싱한 생선을
                                    넣은 미역국을 주시는데, 이 미역국이 속을 확 풀어주는 ‘별미 중의
                                    별미’입니다. 남해 사람들 중에서는 이곳을 ‘미역국 맛집’이라고 하시는 분들도
                                    계세요. 찬 음식을 먹으면 속이 헛헛할 때가 있는데, 이 미역국이 물회로
                                    차가워진 속을 따스히 감싸주기 때문에 물회를 더 맛있게 먹을 수 있는
                                    곳이랍니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'미역국'} src={'/assets/blog/namhae-abalone/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    메뉴로는 물회, 전복죽, 회덮밥이 있고, 전 메뉴 포장 가능합니다. 물회는 면
                                    사리와 밥 중에 선택할 수 있습니다. 전복죽은 조리 시간이 20분 정도 걸린다고
                                    하니 방문 전에 미리 주문하고 가시거나 물회를 먼저 드신 후 후식으로 드시는
                                    것을 추천해 드립니다. 가게 내부가 널찍하고 쾌적한데다가 같이 나오는 곁들임
                                    반찬도 깔끔하니 맛있습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'밑반찬'} src={'/assets/blog/namhae-abalone/6.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    남해 전복 물회에서는 SNS 이벤트도 진행 중이었습니다. 해시태그를 포함해서
                                    업로드 뒤 직원에게 보여주면 한 팀당 음료 1병을 무료로 제공하고 있습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'이벤트'} src={'/assets/blog/namhae-abalone/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    비주얼부터가 침샘이 폭발하지 않나요? 싱싱한 해산물이 올라간 전복 물회가
                                    왔습니다. 꼬독 꼬독한 전복이 씹히는 전복 물회가 아주 일품이었습니다.
                                    육수는 따로 없고 먹다 보면 얼음이 녹아서 육수가 됩니다. 살얼음 육수와
                                    푸짐한 해산물을 살살 저어 면이나 밥과 함께 비벼 드시면 됩니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'전복물회'} src={'/assets/blog/namhae-abalone/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    저는 면순이인지라 이곳에 가면 늘 사리 면을 고릅니다. 물회 맛있게 먹는
                                    방법에 쓰인 대로 사리를 4등분해서 물회에 넣고 비볐습니다. 살얼음 양념이
                                    녹으면서 시원하고 맛있는 물회가 완성되었어요. 물회에서 고소한 들기름 향이
                                    났는데, 그래서 더 고소하고 개운합니다. 특히 중간중간 씹히는 전복이나
                                    생선이 너무 신선해서 하나도 비리지 않습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'면사리'} src={'/assets/blog/namhae-abalone/5.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    물회를 열심히 먹다 보면 미역국을 큰 접시에 한 그릇 가져다주십니다.
                                    소문대로 이 미역국이 정말 물건입니다. 광어 등 신선한 생선이 들어간 생선
                                    미역국인데, 맛이 깊어요. 당장 밥 한 그릇 시켜서 김치랑 함께 먹고 싶은
                                    맛이지만, 물회 양이 정말 많아서 따뜻한 국물로 차가워진 속을 데우는
                                    용으로만 먹었습니다. 남해 전복 물회 미역국에는 소고기도 조개류도 아닌
                                    싱싱한 활어를 넣어 만든 미역국이라 어디에서도 먹어보지 못했던 색다른
                                    시원한 맛이었습니다.
                                </p>
                                <p>
                                    바닷가에 왔으니 싱싱한 해산물이 듬뿍 들어간 물회 한 사발 하셔야죠? 남해에
                                    와서 깔끔한 물회 생각이 나신다면 남해 전복 물회를 추천합니다. 아기 의자도
                                    준비되어 있고, 미역국이나 전복죽 같은 아이들이 먹을 수 있는 메뉴도 있으니
                                    가족 동반으로 오기에도 좋은 물회 전문점 ‘남해전복물회’ 였습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'남해전복물회'} src={'/assets/blog/namhae-abalone/7.jpg'} />
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
