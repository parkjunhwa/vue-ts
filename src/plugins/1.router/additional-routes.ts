import type { RouteRecordRaw } from 'vue-router/auto'

const emailRouteComponent = () => import('@/pages/apps/email/index.vue')

// 👉 Redirects
export const redirects: RouteRecordRaw[] = [
  // ℹ️ 역할에 따라 다른 페이지로 리디렉션합니다.
  // 참고: 역할은 UI 목적을 위한 것입니다. ACL은 권한을 기반으로 합니다.
  {     
    path: '/',     
    name: 'index',     
    redirect: to => {       
      // TODO: 백엔드에서 타입 가져오기
      const userData = useCookie<Record<string, unknown> | null | undefined>('userData')
      const userRole = userData.value?.role       

      if (userRole === 'admin')
        return { name: 'pages-home' }
      if (userRole === 'client')
        return { name: 'access-control' }

      return { name: 'login', query: to.query }
    },   
  },

  {     
    path: '/pages/user-profile',     
    name: 'pages-user-profile',     
    redirect: () => ({ name: 'pages-user-profile-tab', params: { tab: 'profile' } }),   
  },

  {     
    path: '/pages/account-settings',     
    name: 'pages-account-settings',     
    redirect: () => ({ name: 'pages-account-settings-tab', params: { tab: 'account' } }),   
  },
]

export const routes: RouteRecordRaw[] = [
  // 이메일 필터
  {     
    path: '/apps/email/filter/:filter',     
    name: 'apps-email-filter',     
    component: emailRouteComponent,     
    meta: {       
      navActiveLink: 'apps-email',
      layoutWrapperClasses: 'layout-content-height-fixed',
    },   
  },

  // 이메일 라벨
  {     
    path: '/apps/email/label/:label',     
    name: 'apps-email-label',     
    component: emailRouteComponent,     
    meta: {       
      // contentClass: 'email-application',
      navActiveLink: 'apps-email',
      layoutWrapperClasses: 'layout-content-height-fixed',
    },   
  },
]
