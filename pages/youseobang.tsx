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
        slug: 'youseobang',
        title: '유서방 회떠가시다',
        date: '2020-03-16T05:35:07.322Z',
        coverImage: '/assets/blog/youseobang/cover.jpg',
        excerpt: 'string',
        ogImage: {
            url: '/assets/blog/youseobang/cover.jpg',
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

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="font-bold">
                                    1. 재료 공수부터 손질까지, 오너쉐프의 한끗이 살아 있는 회포장 전문점
                                    “유서방 회떠가시다”
                                </p>
                                <p>
                                    남해엔 맛있는 회를 즐길 수 있는 곳이 많지만, 회로 먹기 힘들다는 살이
                                    통통하게 오른 신선한 고등어회를 먹을 수 있는 곳도 있습니다. 바로바로
                                    남해군 미조면 팔랑마을에 있는 회 포장 전문점 '유 서방 회 떠가시다'에서요!
                                </p>
                                <p>
                                    아시다시피 고등어는 바다 밖에서는 오래 살지 못합니다. 더러운 성격? 때문은
                                    아니고 고등어나 전어, 참치 같은 붉은 살 생선은 바닷속에서 쉴 새 없이
                                    움직여야 산소를 공급받을 수 있거든요. 그래서 고등어나 전어 같은 붉은 살
                                    생선은 네모난 수조에 두지 않고, 둥그런 수조에서 빙빙 돌게 두는 것이라고
                                    해요. 그렇게라도 계속 움직여야 오래 견디니까요. (일해야 먹고 사는 우리네
                                    인생 같네요. 크흡.)
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'고등어'} src={'/assets/blog/youseobang/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="font-bold">고등어야 힘내!</p>
                                <p>
                                    그래서 우리가 고등어를 횟집에서 우럭이나 광어처럼 쉬이 먹기 어렵습니다. 안
                                    팔리면 수조에 둘 수밖에 없는데 빨리 고등어별로 가버리니.. 그리고 수조에
                                    두면 살이 빠지는데, 그럼 기름기부터 빠지죠. 붉은 생선의 매력인 감칠맛은
                                    지방과 함께 떠나버립니다. 고등어는 죽으면 부패하는 속도도 빨라서 유통이
                                    힘들어 신선한 활 고등어회를 즐길 수 있는 곳이 그렇게 흔하지 않습니다.
                                </p>
                                <p>
                                    #유서방 회떠가시다 만의 경쟁력! “횟감의 신선도”와 오너셰프 사장님의
                                    “전천후 회뜨기 스킬~” 이리 귀한 고등어회를 남해군 ‘유서방 회떠가시다’에서
                                    맛볼 수 있습니다. 이곳에서는 남해 바다에 펼쳐진 가두리 어장에서 놀던
                                    고등어를 거의 매일 공수해 맛있고 신선한 고등어회를 판매중입니다. 이렇게
                                    유통과정이 짧아서 다른 곳 고등어 회 대비 가격도 착합니다. 고등어회뿐만
                                    아니라 다른 회도 다 너무 맛있어서 '어찌 그리 맛있습니까?'라고 묻는 제게,
                                    '신선함이 70%는 넘는다'라며 겸손하게 답하시는 사장님이 운영하시는
                                    곳이에요. 하지만 사장님의 회뜨기 스킬이 이 좋은 식재료의 맛을 최대로
                                    끌어올렸다고 생각합니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'고등어'} src={'/assets/blog/youseobang/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="font-bold">남해 몽돌 바닷가에서 먹는 고등어회 대꿀맛!</p>
                                <p className="font-bold">#고등어회 맛있게 먹는 법!</p>
                                <p>
                                    사장님께 여쭤보았습니다. "고등어 회, 어떻게 먹어야 최고로 맛있나요?"
                                    <br />
                                    1. 일단, 회를 좋아하신다면 아무것도 안 찍고 고등어회만 먹어보라
                                    하셨습니다. 그냥 회만 입에 넣고 꼭꼭 씹으며 올라오는 감칠맛을 충분히
                                    즐기면 됩니다. 입안에 퍼지는 풍미를 즐긴 뒤, 소주를 일 잔! 하면 되겠죠!
                                    <br />
                                    2. 다음엔 사장님 외엔 아무도 레시피를 모른다는 이곳만의 ’고등어 전용
                                    양념장‘에 고등어를 찍어서 김에 싸서 양파랑 같이 먹습니다. 이 양념장이 정말
                                    안 그래도 맛있는 고등어를 더 맛있게 해주는 뭐랄까... 삼손의 머리털, 아냐
                                    아냐, 어머니들의 일상 속 임영웅 노래.. 여하튼 그만큼 중요한 역할을 한다고
                                    생각합니다. 통통하게 기름이 오른 고등어에 이 양념장을 찍어 먹으면 진실의
                                    미간이 찡그려지며 박수가 일정한 속도로 짝. 짝. 짝. 터져 나옵니다.
                                    <br />
                                    3. 이다음엔 같이 주시는 묵은지도 올리고, 마늘도 곁들이시고요. 이때부터는
                                    취향의 영역입니다. 하나씩 추가해서 드시면서 자신의 취향을 찾아보시면
                                    됩니다.
                                </p>
                                <p className="font-bold"># 주정뱅이가 엄선한 고등어회와 어울리는 알코올~</p>

                                <p>
                                    고등어회와 어울리는 술로는, 영롱한 초록병 ‘소주’가 최고라고 생각합니다.
                                    클래식은 영원하죠. 와인을 좋아하신다면, 3~5만 원 사이는 오이스터 베이, 도
                                    그 포인트, 클라우디 베이가 잘 어울린다고 합니다. 특히 ‘클라우디 베이’가
                                    최고라며 와인 처돌이 친구가 이야기해 주더라고요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'고등어'} src={'/assets/blog/youseobang/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    해산물엔 화이트가 정설이라지만, 살이 통통하게 오른 고등어회의 감칠맛이
                                    드라이한 레드 와인과도 잘 어울렸습니다. (물 아니고, 술입니다...... 물잔
                                    아니고 술잔이고요. 음주는 건강에 해롭습니다.)
                                    <br />
                                </p>
                                <p className="font-bold">#회만으로 아쉽다면, “ 반건조 갑오징어”추가요!</p>
                                <p>
                                    신선한 갑오징어를 서해에서 공수하셔서 직접 반건조해서 포장 판매하시는데
                                    같이 주시는 알배추에 특제 마요네즈 소스를 푹 찍어 마늘과 함께 먹으면...
                                    이게 진짜 멈출 수가 없습니다. 아주 엄격한 식용? 방법이 있어서 그대로 해야
                                    해요. 일단 이 마요네즈 소스를 섞으면 안 되고, 통통한 갑오징어를 집어
                                    소스를 아래서부터 위로 푹 떠 올리세요. 알배추에 놓고, 마늘 놓고 쌈장 올려
                                    한입에 왕! 드셔야 합니다. <strong>소스 섞지 마세요! 메모!</strong>
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'고등어'} src={'/assets/blog/youseobang/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="font-bold">#포장 전문점! 3~4시간 전 예약 필수!</p>

                                <p>
                                    이곳은 홀 영업은 안 하시고 포장만 전문으로 하세요. 늘어나는 주문 때문에
                                    홀까지는 하실 수 없어서 닫아 놓은 상태라고 합니다. 홍보도 하지 않으시는데,
                                    사람들이 '남해 맛집'을 검색해서 오시다가 알음알음 입소문이 났다고 합니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'고등어'} src={'/assets/blog/youseobang/5.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    고등어를 포함한 모둠회 포장에 회마다 무슨 회인지 스티커를 붙여주셔서
                                    도시에서 온 ‘회알못’이 점점 '이거 무슨 회네?' 하면서 거들먹거릴 수 있게
                                    되었습니다. 사장님께 일일이 스티커를 붙이려면 힘들지 않으시냐고
                                    여쭤봤더니, 손님들이 무슨 회인지 알고 드시면 맛있었던 회를 기억할 수 있고,
                                    더 맛있게 드실 것 같아서 디자인을 의뢰해 만들어 붙이기 시작하셨다고 해요.
                                    붙이는 데 5초~10초 정도 걸리는데 이것으로 손님들에게 감동을 줄 수 있다면
                                    감내할 만하다며 웃으셨습니다. (모야... )
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'고등어'} src={'/assets/blog/youseobang/6.jpg'} />
                        <CoverImage title={'고등어'} src={'/assets/blog/youseobang/7.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    모둠회는 참돔, 우럭, 고등어가 고정 멤버고요, (고등어가 떨어지기 전까진)
                                    그때그때 다른 종이 추가된다고 합니다. 이곳은 포장 주문만 가능하고, 적어도
                                    3~4시간 전에 연락하셔야 원하는 시간에 픽업 가능합니다. 생선을 미리
                                    잡아두시지 않고 주문 시간에 맞춰서 착착 생선 잡아 회 뜨시니 미리미리
                                    연락하셔서 "몇 시에 가지러 갑니다~" 하시면 됩니다.
                                </p>
                                <p className="font-bold">
                                    # 모둠회 및 고등어회 가격 (2022년 기준)
                                    <br />
                                    2인 35,000원
                                    <br />
                                    넉넉 2인 45,000원
                                    <br />
                                    3인 55,000원
                                </p>
                                <p>
                                    남해에 오시면 꼭 '유 서방 회 떠가시다'에서 고등어회를 드셔보시는 것을
                                    추천합니다. 이 고등어회만으로도 남해에 오실 이유가 충분하다고 자부합니다.
                                    남해 귀촌 9개월 차 먹도리의 원픽, 올겨울엔 고등어회로 목구멍에 기름칠해
                                    보자고요. 공지사항 등 영업에 대한 안내는 포털 사이트 네이버로 확인하시는
                                    것이 가장 빠르고 정확하다고 합니다.
                                </p>
                                <p>그럼 얼른 남해로 고등어회 드시러 오시다. (~시다는 남해군 방언입니다.)</p>
                                <p className="font-bold">* 인스타그램 계정 회 떠가시다(@husband_yoo) </p>
                            </div>
                        </div>
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
