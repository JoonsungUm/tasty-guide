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
        slug: 'yoons-kitchen',
        title: '윤스 키친',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/yoons-kitchen/cover.jpg',
        excerpt: 'string',
        ogImage: {
            url: '/assets/blog/yoons-kitchen/cover.jpg',
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
                                <p>* 오너셰프 열전</p>
                                <p className="">기간을 정하여 바뀌는 가정식 밥집, 윤스 키친</p>
                                <p>
                                    경남 남해군 미조면 미조로 168 2동 1층
                                    <br />
                                    매일 11:30~20:00, 15:00~17:30 브레이크 타임, 19:30 라스트 오더
                                    <br />- 월요일 외 평일 1일 휴무 인스타 또는 전화로 운영 여부 확인 요망,
                                    가게 앞 주차 가능
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'기간 한정 메뉴'} src={'/assets/blog/yoons-kitchen/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    #매력 뽀인트 1: now or never, 망설이다간 사라지는 기간 한정 메뉴
                                </p>
                                <p>
                                    윤스키친은 오너 셰프님이 혼자서 운영하시며 기간을 정해두고 메뉴가 바뀌는
                                    가정식 밥집입니다. 주로 제철 음식을 활용하여 맛있는 한 상을 내어주시는
                                    곳인데, 직접 공수한 음식 재료를 활용하시기도 하여 신선하고 푸짐한 한 상을
                                    기간마다 다채롭게 즐길 수 있습니다. 얼마 전엔 ‘쭈꾸미 파스타’가 메뉴에
                                    있었는데, 새벽에 직접 쭈꾸미를 낚아 오시더라고요!? 이것이 바로 바닷가
                                    맛집의 매력 아니겠습니까? 방금까지 바다에서 헤엄치던 쭈꾸미를 잡아 바로
                                    손질해서 당일에 바로 파스타에 넣어주시니 맛이 없으려야 없을 수 없겠죠?
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'통창'} src={'/assets/blog/yoons-kitchen/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    #매력 뽀인트 2: 아름다운 남해 미조 바다가 보이는 통창, 사장님이 직접 만든
                                    소품이 가득한 아늑한 인테리어!
                                </p>
                                <p>
                                    남해 미조 바닷가 앞에 있는 윤스키친 매장에 들어서면, 통창에서 햇살이
                                    쏟아지고 귀여운 코바늘 인형들이 삼삼오오 모여 앉아있습니다. (사장님의
                                    취미이신 듯 합니다.) 너무 귀여워서 들어가자마자 취향을 저격당했어요.
                                    이웃집 토토로부터 잠수부, 보노보노 등 귀여운 캐릭터 손뜨개 인형들이
                                    손님들을 반기고 있었습니다. 음식을 기다리는 동안 이 소품을 구경하는 재미가
                                    쏠쏠해요. 기간마다 음식 메뉴도 바꾸시고 저런 취미생활까지 하시다니,
                                    아무래도 사장님은 저와는 다른 24시간을 보내고 계신듯했습니다. ‘오로지 먹고
                                    자는 삶을 사는 나의 인생은 무엇인가….’ 잠시 잠깐 고뇌에 빠져봅니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'인테리어'} src={'/assets/blog/yoons-kitchen/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    #매력 뽀인트3: 망설이면 사라져요! 기간 한정 먹을 수 있는 맛있고 혜자스런
                                    푸짐한 계절 한 상 차림
                                </p>
                                <p>
                                    윤스키친에서는 ‘정성 가득한 따뜻한 한 끼를 선물해드리는 가정식 밥집’이라는
                                    가게 슬로건 답게 선물 같은 푸짐한 한 끼를 만들어주십니다. 메뉴는 기간을
                                    정하여 계절에 맞는 가정식으로 정하시는데 주메뉴와 함께 차려지는 찬까지
                                    양이 정말 많아요. 고독한 대식가인 저에게도 많은 양이니, 양이 많은 분들이
                                    드시기에도 부족함이 없을 것입니다. 저는 파스타 한 상 차림 시즌에 방문한
                                    적이 있는데, 본 메뉴인 파스타는 말할 것도 없고 식전 빵부터 샐러드,
                                    피클까지 음식 하나하나에 재료와 정성을 아낌없이 많이 쏟으시는 것을 느낄 수
                                    있었습니다. 게살 파스타에 꽃게가 한 마리 그냥 들어가 있더라고요. (꽃게와
                                    눈빛 교환 가능) 정말 요리 잘하는 쉐프 친구가 친한 친구들이 놀러 와서
                                    재료를 아낌없이 넣어서 맛있는 것을 해주는 느낌이었달까요? 푸짐하고
                                    깔끔하고 맛있어서 배부르고 황송하기까지 했습니다. 김장철이 한창인 요즘엔
                                    보쌈 정식으로 메뉴가 바뀌었더라고요. 이렇게 계절에 어울리는 메뉴를 준비해
                                    주셔서 언제 가더라도 맛있는 한 상을 드실 수 있습니다.
                                    <br />
                                    정말 한 끼를 정말 제대로 든든하고 맛있게 먹고 싶을 때! 윤스키친을
                                    추천합니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'파스타'} src={'/assets/blog/yoons-kitchen/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    #기간별로 바뀌는 메뉴 확인 및 운영 시간은 윤스키친 인스타그램을
                                    참고해주세요!
                                </p>

                                <p>
                                    윤스키친 인스타그램 계정을 확인하셔서 메뉴를 확인하고 방문해보세요! 평일에
                                    비정기적인 휴무일이 있고, 재료 소진으로 조기 마감할 수 있어서 미리 영업
                                    여부를 확인하시고 방문하시는 것을 추천해 드립니다.
                                    <br />
                                    남해 미조면 윤스키친으로 가보세요! 오직 그때만 먹을 수 있는 맛있고 푸짐한
                                    한 상이 여러분을 기다리고 있습니다. 메뉴 및 휴무 관련 공지는 윤스 키친
                                    인스타그램 계정을 참고해주세요.
                                    <br />
                                    <br />
                                    윤스키친(@yoon_kitchen_)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'윤스키친'} src={'/assets/blog/yoons-kitchen/7.jpg'} />
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
