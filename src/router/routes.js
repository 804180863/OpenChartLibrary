import oneList from '../components/optionList/oneList.vue'
import TwoList from '../components/optionList/twoList.vue'
import ThreeList from '../components/optionList/threeList.vue'
import FourList from '../components/optionList/fourList.vue'
import FiveList from '../components/optionList/fiveList.vue'
export default [
    {
      path: '/oneList',
      component: oneList,
      meta: {
        showFooter: false
      }
    },
    {
        path: '/TwoList',
        component: TwoList,
        meta: {
            showFooter: true
          }
      },
      {
        path: '/ThreeList',
        component: ThreeList,
        meta: {
            showFooter: true
          }
      },
      {
        path: '/FourList',
        component: FourList,
        meta: {
            showFooter: true
          }
      },
      {
        path: '/FiveList',
        component: FiveList,
        meta: {
            showFooter: true
          }
      },
      {
        path: '/',
        redirect: '/oneList',
        meta: {
            showFooter: true
          }
      }
  ]