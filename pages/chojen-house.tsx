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
        slug: 'chojen-house',
        title: '초전집',
        date: '2020-03-16T05:36:07.322Z',
        coverImage: '/assets/blog/chojen-house/cover.jpg',
        excerpt: '남해산 꼬막과 투플 한우를 가득 담은 한 상',
        ogImage: {
            url: '/assets/blog/chojen-house/cover.jpg',
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
                                <p className="">
                                    * 남해산 꼬막과 투플 한우를 가득 담은 한 상 “몽돌 바다, 바람 소리 타고,
                                    초전집으로”
                                </p>
                                <p>
                                    경남 남해군 미조면 동부대로 9
                                    <br />
                                    11시~19:30 (19시 라스트 오더), 매주 화요일 정기휴무,
                                    www.chojen.cityfood.co.kr
                                    <br />
                                    주말(성수기) 주차 안내: 초전집 앞 또는 길 건너 지중해 모텔 아래쪽 주차장
                                </p>
                            </div>
                        </div>

                        {/* <CoverImage title={'대표 메뉴'} src={'/assets/blog/chojen-house/0.jpg'} /> */}

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    * 대표메뉴
                                    <br />
                                    육전 꼬막 비빔밥(2인) 32,000원
                                    <br />
                                    육회 꼬막 비빔밥(2인) 34,000원
                                    <br />닭 다리 살 숯불구이 19,000원
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'유기 식기'} src={'/assets/blog/chojen-house/1.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    그거 아세요? 맛집은 물부터 맛있다는 사실을... 씹고 뜯고 맛본 맛도리 인생
                                    30여 년을 살면서 쌓아온 맛집 데이터로 미뤄 보건대, 맛있는 집은 거의 물부터
                                    맛있었습니다. 손님들이 먹는 것, 하나하나에 다 신경을 쓰시는 것이죠.
                                    초전집에 갔을 때, 물통에서 조르륵 나온 물이 고소한 보리차라 이 집! 제대로
                                    하는 곳이란 것을 본능적으로 느꼈습니다. 게다가 귀여운 유기 수저까지!
                                    수라상인가요?
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'고등어'} src={'/assets/blog/chojen-house/2.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    대표메뉴는 투플러스 한우가 올라간 꼬막 비빔밥입니다. 꼬막 비빔밥에 한우
                                    육전을 올릴 것인가, 한우 육회를 올릴 것인가. 그것이 문제? 아니죠. 행복한
                                    고민입니다. 남해 초전집에서는 꼬막은 남해 설천 진목 꼬막, 남해 창선 강진만
                                    꼬막을 사용하고, 한우는 투플러스를 고집한다고 해요. 초전집만의 특제 액젓
                                    소스도 남해에서 잡은 멸치로 만든 액젓 소스를 넣어 만드시고요. 사장님께서
                                    남해에서 나고 자라신 오너 셰프셔서인지, 남해안의 신선한 재료를 활용해 특색
                                    있는 음식을 내놓으시려는 고민이 엿보였습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'밑반찬'} src={'/assets/blog/chojen-house/3.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">#반찬맛있는집</p>

                                <p>
                                    반찬의 민족답게 저는 반찬에 진심인데요, 초전집 물김치, 깍두기, 그리고 유자
                                    동치미에 모두 합격 드리고 싶습니다. 특히 유자가 들어간 하얀 무 반찬이 정말
                                    상큼하고 맛있습니다. 물도 맛있는데 식전 샐러드랑 반찬까지 맛있는 초전집!
                                    발사믹 소스로 화룡점정 한 샐러드를 먹으면 입맛이 더 확 살아납니다. 식욕을
                                    컨트롤하실 줄 아시는 곳이더군요.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'샐러드'} src={'/assets/blog/chojen-house/4.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">#사진은 그만 찍고 먹고 싶지만, 자꾸만 찍고 싶은 비주얼</p>
                                <p>
                                    드디어 메인 메뉴가 등판했습니다. 된장찌개와 함께 나타난 영롱하고 아름다운
                                    한우 육회 꼬막 비빔밥의 자태를 감상해 보십시다. 양도 정말 많아서 고독한
                                    대식가는 기분이 아주 좋습니다. 중간에 수줍게 올라가있는 전복까지...
                                    수라상이 맞았습니다. 유기그릇에 나오더니... 하지만 기미 상궁에게 기미를
                                    맡길 수는 없습니다. 한 숟갈이라도 빨리 더 먹어야 되니까요. 꼬막 비빔밥에
                                    취향껏 더해서 먹을 수 있는 소스도 따로 주셔서 간이 조금 싱겁다고
                                    느끼신다면 더 추가해서 먹을 수 있습니다. 저는 더 추가하지 않아도 딱
                                    좋았습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'메인 메뉴'} src={'/assets/blog/chojen-house/5.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    남해산 꼬막이 아주 듬뿍 들어가 있어서 밥에 슥슥 비벼서 먹었습니다. 목이 좀
                                    막힐 때쯤 같이 나온 된장찌개를 한 입 했는데, 아니 이게 무슨 일일까요?
                                    된장찌개에 고기가 들어있고 된장찌개 단독으로 흰밥에다 먹고 싶을 만큼
                                    맛있었습니다. 어느 한 쪽 섭섭하지 않게 된장찌개 한 입, 비빔밥 한 입
                                    먹어봅니다. 굽는 데 시간이 좀 걸린다고 하셨던 닭 숯불구이도 생각보다 빨리
                                    나왔습니다. 정갈하게 검은깨, 통깨가 줄을 지어서 닭 다리 살을 감싼 닭 다리
                                    살 숯불구이! 같이 주신 부추, 양파 절임과 함께 한 입 콱 베어 물었습니다.
                                    <br />
                                    소문으로 듣던 대로 정말 부드럽고 달콤 짭조름한 것이 맛있더군요. 맛이
                                    강하지 않아서 같이 주신 쌈무나 겉절이와도 아주 잘 어울렸습니다. 어떻게
                                    이렇게 촉촉하고 부드럽죠? 집에 돌아와서도 이 닭 다리 살 숯불구이 생각이
                                    가장 많이 났습니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'닭다리 살 숯불구이'} src={'/assets/blog/chojen-house/6.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p className="">
                                    초전집에서 유명한 것이 또, 곱창김이라고 하던데요. 이 곱창김만 따로 판매할
                                    정도로 인기가 많다고 합니다. 이 곱창김은 사장님께서 일대의 온갖 김을 다
                                    먹어보시고 고심하여 고르셨는데 신안, 완도에서 생산하는 일 년에 한 달만
                                    나오는 귀하고 맛있는 김이라고 합니다. 비빔밥을 김에다 싸먹는 것은
                                    국룰이잖아요. 그냥 흰밥에 이 김을 싸먹기만 해도 맛있습니다. 초전집에서는
                                    이 곱창김을 ‘털보김’이라는 귀여운 이름을 달고 따로 판매하고 있습니다. 왜
                                    털보김인가 했더니 사장님 얼굴에 털이 많으시더라고요. 효심을 발휘해 부모님
                                    가져다드리려고 냉큼 구매했습니다. 살짝 구워 먹어도 맛있고 생김으로 먹어도
                                    맛있어요. 이거 진짜 맛있다면서 가져갔을 때 무슨 김 가지고 생색이냐던 저희
                                    아버지가 제일 좋아하시더라고요? 호불호가 갈리지 않는 선물이라 남해 여행
                                    기념품으로 구매해도 좋을 것 같았습니다.
                                    <br />* 초전집 털보김 가격 : 1봉 16,000원, 2봉 30,000원
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'털보김'} src={'/assets/blog/chojen-house/7.jpg'} />

                        <div className="max-w-2xl mx-auto">
                            <div className={markdownStyles['markdown']}>
                                <p>
                                    초전집 털보김에 꼬막 비빔밥 한 숟갈 올리고 육회에 무순 추가해서 한 입 크게
                                    야무지게 싸먹으면 행복은 바로바로 제 입안에 있습니다. 이 맛있는 한 끼를
                                    여러분에게도 추천합니다.
                                </p>
                            </div>
                        </div>

                        <CoverImage title={'한 숟갈'} src={'/assets/blog/chojen-house/8.jpg'} />
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
