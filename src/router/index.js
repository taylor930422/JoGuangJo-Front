import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


// 태현씨 qna 게시판
import QnaBoardListView from "@/views/boards/qna/QnaBoardListView.vue"
import QnaBoardRegisterView from "@/views/boards/qna/QnaBoardRegisterView.vue"
import QnaBoardReadView from "@/views/boards/qna/QnaBoardReadView.vue"
import QnaBoardModifyView from "@/views/boards/qna/QnaBoardModifyView.vue"

// 채율씨 공지 게시판으로 바뀔 예정
import NoticeBoardListView from "@/views/boards/notice/NoticeBoardListView.vue"
import NoticeBoardRegisterView from "@/views/boards/notice/NoticeBoardRegisterView.vue"
import NoticeBoardReadView from "@/views/boards/notice/NoticeBoardReadView.vue"
import NoticeBoardModifyView from "@/views/boards/notice/NoticeBoardModifyView.vue"

// 성희씨 회원가입, 로그인 페이지
import SignUpView from "@/views/member/SignUpView.vue"
import SignInView from "@/views/member/SignInView.vue"
import SearchMemberPasswordView from "@/views/member/SearchMemberPasswordView.vue"

// 지영씨 기부 페이지, 마이페이지-나의기부내역
import DonateRegisterView from "@/views/boards/donate/DonateRegisterView.vue"
import DonateListView from "@/views/boards/donate/DonateListView.vue"
import DonateReadView from "@/views/boards/donate/DonateReadView.vue"
import DonateModifyView from "@/views/boards/donate/DonateModifyView.vue"


// 진우씨 상품 게시판
import ProductListView from "@/views/boards/product/ProductListView.vue"
import ProductRegisterView from "@/views/boards/product/ProductRegisterView.vue"
import ProductReadView from "@/views/boards/product/ProductReadView.vue"
import ProductModifyView from "@/views/boards/product/ProductModifyView.vue"
import ProductOrderView from '@/views/boards/product/ProductOrderView.vue';


// 성희씨 마이 페이지
import MyPage from "@/views/mypage/MyPageView.vue"
import ChangeAddress from "@/views/mypage/ChangeAddressView.vue"
import PassWordChange from "@/views/mypage/PassWordChangeView.vue"
import MemberTypeRequest from "@/views/mypage/MemberTypeRequestView.vue"
import MemberTypeRequestListView from "@/views/mypage/MemberTypeRequestListView.vue"
import MemberTypeRead from "@/components/mypage/MemberTypeReadForm.vue"


// 태현씨 장바구니
import CartListView from "@/views/cart/CartListView.vue"

// 채율씨 소개페이지
import IntroductionView from "@/views/IntroductionView.vue"

// 채율씨 나의글찾기페이지
import FindMyPostView from "@/views/mypage/FindMyPostView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },


  //태현씨 qna 게시판
  {
    path: '/qna-list',
    name: 'QnaBoardListView',
    component: QnaBoardListView
  },
  {
    path: '/qna-register',
    name: 'QnaBoardRegisterView',
    component: QnaBoardRegisterView
  },
  {
  path: '/qna-read/:qnaBoardId',
  name: 'QnaBoardReadView',
  components: {
    default: QnaBoardReadView
    },
    props: {
      default: true
    }
  },
  {
    path: '/qna-modify/:qnaBoardId',
    name: 'QnaBoardModifyView',
    components: {
      default: QnaBoardModifyView
      },
      props: {
        default: true
      }
  },


  //채율씨 이름없는 게시판 -> 태현씨가 공지(notice) 게시판으로 바꿀 예정
  {
    path: '/notice-list',
    name: 'NoticeBoardListView',
    component: NoticeBoardListView
  },
  {
    path: '/notice-register',
    name: 'NoticeBoardRegisterView',
    component: NoticeBoardRegisterView
  },
  {
    path: '/notice-read/:noticeBoardId',
    name: 'NoticeBoardReadView',
    components: {
      default: NoticeBoardReadView
    },
    props: {
      default: true
    }
  },
  {
    path: '/notice-modify/:noticeBoardId',
    name: 'NoticeBoardModifyView',
    components: {
      default: NoticeBoardModifyView
    },
    props: {
      default: true
    }
  },


  //성희씨 회원가입, 로그인 페이지
  {
    path: '/sign-up',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/sign-in',
    name: 'SignInView',
    component: SignInView
  },
  {
    path: '/search-password',
    name: 'SearchMemberPasswordView',
    component: SearchMemberPasswordView
  },

  

  //지영씨 기부 페이지, 마이페이지-기부내역
  {
    path: '/donate-register',
    name: 'DonateRegisterView',
    component: DonateRegisterView,
  },
  {
    path: '/mypage/donate-list',
    name: 'DonateListView',
    component: DonateListView
  },
  {
    path: '/mypage/donate-read/:donateId',
    name: 'DonateReadView',
    components: {
      default: DonateReadView
      },
      props: {
        default: true
      }
  },
  {
    path: '/mypage/donate-modify/:donateId',
    name: 'DonateModifyView',
    components: {
      default: DonateModifyView
    },
    props: {
      default: true
    }
  },


  //진우씨 상품게시판
  {
    path: '/product-list',
    name: 'ProductListView',
    component: ProductListView
  },
  {
    path: '/product-register',
    name: 'ProductRegisterView',
    component: ProductRegisterView
  },
  {
    path: '/product-read/:productId',
    name: 'ProductReadView',
    components: {
      default: ProductReadView
    },
    props: {
      default: true
    }
  },
  {
    path: '/product-modify/:productId',
    name: 'ProductModifyView',
    components: {
      default: ProductModifyView
    },
    props: {
      default: true
    }
  },
  {
    path: '/product/order/:productId',
    name: 'ProductOrderView',
    component: ProductOrderView,
    props: true,
  },

  
  // 성희씨 마이페이지
  {
    path: '/mypage',
    name: 'MyPage',
    components: {
      default: MyPage
    }
  },
  {
    path: '/change-address',
    name: 'ChangeAddress',
    components: {
      default: ChangeAddress
    }
  },
  {
    path: '/change-password',
    name: 'PasswordChange',
    components: {
      default: PassWordChange
    }
  },
  {
    path: '/memberType-request',
    name: 'MemberTypeRequest',
    component: MemberTypeRequest
  },
  {
    path: '/memberType-request-list',
    name: 'MemberTypeRequestListView',
    components: {
      default: MemberTypeRequestListView
    }
  },
  {
    path: "/memberType-read/:id",
    name: "MemberTypeReadForm",
    components: {
      default: MemberTypeRead
    },
    props: {
      default: true
    }
  },


  // 태현씨 장바구니

  {
    path: '/cart-list-view',
    name: 'CartListView',
    component: CartListView,
  },

  // SNS 이동
  {
    path: '/instagram',
    name: 'Instagram',
    beforeEnter: (to, from, next) => {
      window.location = 'https://www.instagram.com/bookyoulove.proj/';
      // to : 이동하려는 라우트의 'Route' 객체
      // from : 현재 라우트의 'Route' 객체
      // next : 다음 단계로 진행하기 위해 호출해야 하는 함수
      // 현재는 필요 없는 매개변수
    }
  },
  {
    path: '/youtube',
    name: 'youtube',
    beforeEnter: (to, from, next) => {
      window.location = 'https://www.youtube.com/@_BYL';
    }
  },
  {
    path: '/facebook',
    name: 'facebook',
    beforeEnter: (to, from, next) => {
      window.location = 'https://www.facebook.com/profile.php?id=100090712311488&mibextid=ZbWKwL';
    },
  },

  // 채율씨 소개페이지
  {
    path: '/introduction',
    name: 'IntroductionView',
    component: IntroductionView,
  },

  // 채율씨 나의 게시글찾기
  {
    path: '/mypage/FindMyPost',
    name: 'FindMyPostView',
    component: FindMyPostView,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
