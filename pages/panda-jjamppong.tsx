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
        slug: 'panda-jjamppong',
        title: '판다 짬뽕',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/panda-jjamppong/cover.jpg',
        excerpt: '압도적 비주얼에 ‘와’ 소리 절로 나오는',
        ogImage: {
            url: '/assets/blog/panda-jjamppong/cover.jpg',
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
                                <p className="">* 압도적 비주얼에 ‘와’ 소리 절로 나오는 판다해물짬뽕</p>
                                <p>
                                    경상남도 남해군 남해읍 남해대로 2541 1층
                                    <br />
                                    이용 시간: 매주 월 ~ 일 10:00 ~ 20:00, 19:50 라스트 오더, 오후 8시~ 새벽
                                    2시 배달 가능
                                    <br />
                                    매달 2, 4번째 수요일 정기 휴무
                                    <br />
                                    055-863-5559
                                </p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    * 대표메뉴
                                    <br />
                                    쟁반 짜장 16,000원
                                    <br />
                                    판다 차돌박이 짬뽕 12,000
                                    <br />
                                    판다 해물 짬뽕 13,000원
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'판다'} src={'/assets/blog/panda-jjamppong/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    남해에 여행을 조금 길게 오셨거나, 남해에 살고 계신다면, 이거저거 다
                                    먹어보고 이제 중화요리가 당길 때가 되셨을 것입니다. 짬뽕, 짜장면,
                                    탕수육으로 대표되는 중화요리는 주기적으로 먹어줘야 하는 한국인들이
                                    사랑하는 대표 외식 메뉴죠. 그래도 바닷가에 왔으니, 통오징어 하나 제대로
                                    올라간 해물 짬뽕을 드셔야 하지 않을까요? 게다가 남해 특산물인 유자가
                                    들어간 상큼한 유자 탕수육까지 먹을 수 있다면? 그런 곳이 있냐고요? 네,
                                    있습니다. 귀여운 판다가 반겨주는 ‘판다해물짬뽕’으로 가보시죠!
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'인테리어'} src={'/assets/blog/panda-jjamppong/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    가게 앞에 널널하게 주차도 가능하고, 오붓하게 일행들끼리 즐길 수 있는 넓은
                                    룸도 있습니다. 중국을 상징하는 동물인 판다가 귀엽게 면 요리 위에서 놀고
                                    있는 그림이 가득한 내부는 넓고 쾌적했습니다. 중화요리 전문점이지만 가게
                                    이름에 ‘짬뽕’이 들어가는 만큼 짬뽕이 주메뉴인 것 같습니다.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    짜장면 6,000원, 간짜장 7,000원, 짬뽕 7,000원입니다. 요리류에는 남해 대표
                                    특산물인 유자를 넣은 ‘유자탕수육’도 있습니다.
                                </p>

                                <p>
                                    1인이 즐길 수도 있는 12,000원짜리 탕수육도 있어서 중국집에 가면 탕수육은
                                    꼭 먹어야 하는 혼밥러들도 큰 부담 없이 탕수육을 시켜 먹을 수 있겠어요!
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'해물짬뽕'} src={'/assets/blog/panda-jjamppong/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    짜장면을 먹느냐, 짬뽕을 먹느냐. 인생은 선택의 연속이라지만 이 선택만큼은
                                    피하고 싶은 우리나라 사람들은 짬짜면을 탄생시켰죠. 저는 짜장파이지만,
                                    판다짬뽕에서는 짬뽕이 대표 메뉴이니 짬뽕에 힘을 실어보기로 했습니다.
                                    판다해물짬뽕에 일반짜장, 유자 탕수육을 주문했어요. 판다해물짬뽕에는
                                    통오징어와 전복이 통째로 올라가 있습니다. 메뉴가 나오자 주변에 있는
                                    사람들까지도 ‘우와’하시며 그냥 짬뽕을 해물짬뽕으로 바꾸시더라고요. 그
                                    정도로 푸짐하게 해물이 올라가 있습니다. 가격은 13,000원으로 일반 짬뽕의
                                    2배 가격이지만, 해산물 양을 보니 납득할 수 있었습니다. ​판다차돌짬뽕에도
                                    차돌이 굉장히 많이 들어있다는 평이 많더라고요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'탕수육과 소주'} src={'/assets/blog/panda-jjamppong/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    ​유자탕수육은 상큼하고 고소했습니다. 저는 보통 탕수육을 더 좋아하긴
                                    하지만, 가끔씩 별미로 먹고 싶은 맛이었습니다. 유자는 어디에 들어가도
                                    산미를 올려주어 음식을 더 맛있게 만드는 것 같아요. 짜장면은 약간 팥 맛이
                                    느껴지는 구수한 맛이 났는데, 어디서도 먹어보지 못한 독특한 맛이었습니다.
                                    상큼한 유자 탕수육을 먹고, 짬뽕 국물로 입가심을 한 뒤 짜장면 한 입하고
                                    소주를 한 잔 먹습니다. 짜장면과 소주는 제가 제일 좋아하는 최애 조합이에요.
                                    언젠가 영화에서 영화배우 하정우 님이 중국요리를 먹고 소주로 가글하듯 먹는
                                    모습을 보고 따라한 적이 있는데, 그 뒤로 짜장면과 소주 조합에 빠져버리고
                                    말았습니다. (전 왜 이럴까요...) 짬뽕과 소주도 맛있지만, 짜장면과 소주
                                    조합이 참 맛있어요. 짜장면 먹고 소주 마시고 짬뽕으로 입가심하기! 메모!
                                    특히 판다해물짬뽕에는 해산물이 정말 많이 들어 있어서 해산물을 좋아하시는
                                    분들에게 딱입니다.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    판다짬뽕은 남해읍과도 가깝고, 오후 8시부터 새벽 2시까지는 배달도
                                    가능합니다. 셀프바에서 반찬 리필도 가능하고, 직원분들도 친절하셨어요.
                                </p>

                                <p>
                                    ​시원한 국물에 전복, 통 오징어, 홍합까지. 몸보신 제대로 하면서 시원한
                                    짬뽕까지 즐기고 싶다면, 판다짬뽕의 판다해물짱뽕을 추천합니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'판다짬뽕'} src={'/assets/blog/panda-jjamppong/5.jpg'} />
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
