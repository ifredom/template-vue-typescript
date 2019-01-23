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
        /* Asynchronous loading components */
        component: (r: any) => (require as any).ensure([], () => r(require('@/views/Login')), 'Login')
      }
    ]
  }
];
export default routes;
