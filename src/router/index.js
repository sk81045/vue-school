import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'dashboard' }
    }]
  },

  {
    path: '/test',
    component: Layout,
    redirect: '/test',
    children: [{
      path: 'test',
      name: 'test',
      component: () => import('@/views/test/test'),
      meta: { title: '教育局简介', icon: 'dashboard' }
    }]
  },

  {
    path: '/charts',
    component: Layout,
    redirect: '/charts',
    children: [{
      path: 'over',
      name: 'Over',
      component: () => import('@/views/charts/map'),
      meta: { title: '学校概况', icon: 'dashboard' }
    }]
  },


  {
    path: '/analysis',
    component: Layout,
    redirect: '/analysis',
    children: [{
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/analysis/analysis'),
      meta: { title: '教学质量分析表', icon: 'dashboard' }
    }]
  },

  {
    path: '/school',
    component: Layout,
    redirect: '/school/list',
    name: '学校信息',
    meta: { title: '学校信息', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/school/list'),
        meta: { title: '学校列表', icon: 'tree' }
      },
      {
        path: 'school',
        name: 'School',
        component: () => import('@/views/school/index'),
        meta: { title: '学校管理', icon: 'tree' }
      },
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '教师列表', icon: 'table' }
      },
    ]
  },


  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/index',
    name: '师资',
    meta: { title: '师资情况', icon: 'example' },
    children: [
      {
        path: 'teacher',
        name: 'Table',
        component: () => import('@/views/teacher/index'),
        meta: { title: '教师列表', icon: 'table' }
      },
      {
        path: 'assets',
        name: 'assets',
        component: () => import('@/views/teacher/assets'),
        meta: { title: '师资情况', icon: 'tree' }
      }
    ]
  },

  {
    path: '/student',
    component: Layout,
    redirect: '/example/table',
    name: '学生信息',
    meta: { title: '学生信息', icon: 'example' },
    children: [
      {
        path: 'student',
        name: 'Student',
        component: () => import('@/views/student/index'),
        meta: { title: '学生列表', icon: 'table' }
      },
      {
        path: 'school',
        name: 'School',
        component: () => import('@/views/student/count'),
        meta: { title: '学生各项信息统计', icon: 'tree' }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: '组件',
    meta: { title: '组件', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '树形图', icon: 'tree' }
      },
      {
        path: 'charts',
        name: 'Charts',
        component: () => import('@/views/charts/index'),
        meta: { title:'图表', icon: 'table'}
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/charts/map'),
        meta: { title:'地图', icon: 'table'}
      },
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import('@/views/charts/tab'),
        meta: { title:'Tab', icon: 'table'}
      },
      {
        path: 'drawer',
        name: 'Drawer',
        component: () => import('@/views/charts/drawer'),
        meta: { title:'抽屉',icon: 'table'}
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
