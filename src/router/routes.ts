/* only page components */
const routes = [
  {
    path: '/',
    component: (r: any) => (require as any).ensure([], () => r(require('@/App')), 'App'),
    children: [
      {
        path: '',
        redirect: '/home' // default router, redirect to '/login'
      },
      {
        path: '/home',
        /* Asynchronous loading components */
        component: (r: any) => (require as any).ensure([], () => r(require('@/views/Home')), 'Home')
      },
      {
        path: '/login',
        component: (r: any) => (require as any).ensure([], () => r(require('@/views/login/Login')), 'Login')
      },
      {
        path: '/about',
        component: (r: any) => (require as any).ensure([], () => r(require('@/views/about/About')), 'about')
      }
    ]
  }
];
export default routes;
