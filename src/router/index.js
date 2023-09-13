import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../views/layout/index'
import { getToken, getRoles } from '@/utils/auth'
import store from '@/store'

// const authMiddleware = (to, from, next) => {
//   if (getToken === '') {
//     next('/login');
//   } else {
//     next();
//   }
// };

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  },
  {
    path: '/',
    component: Layout,
    name: 'Home',
    meta: { requiresAuth: true,
      requiredRoleMaster: false
    },
    children: [
      {
        path: 'index',
        component: HomeView,
        name: 'Dashboard',
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    name: 'About',
    meta: { requiresAuth: true,
      requiredRoleMaster: false
    },
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    name: 'Test',
    meta: { requiresAuth: true,
      requiredRoleMaster: false
    },
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('../views/test/test')
      }
    ]
  },
  {
    path: '/upload-task',
    component: Layout,
    name: 'Upload-task',
    meta: { requiresAuth: true,
      requiredRoleMaster: true
    },
    children: [
      {
        path: '/upload-task',
        name: 'uploadTask',
        component: () => import('../views/uploadTask/index')
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    name: 'table',
    meta: { requiresAuth: true,
      requiredRoleMaster: true
    },
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import('../views/table/index')
      }
    ]
  },
  {
    path: '/report',
    component: Layout,
    name: 'Report',
    meta: { requiresAuth: true,
      requiredRoleMaster: false
    },
    children: [
      {
        path: '/report',
        name: 'report',
        component: () => import('../views/report/index')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && to.matched.some(record => record.meta.requiredRoleMaster)) {
    console.log('kiem tra 1')
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!getToken()) {
      next('/login'); // Chuyển hướng về trang đăng nhập
    }else if (getRoles() === 'MASTER' || getRoles() === 'ADMIN') {
      next()
    } else {
      //
    }
  }else if (to.matched.some(record => record.meta.requiresAuth) && !to.matched.some(record => record.meta.requiredRoleMaster)) {
    console.log('kiem tra 2')
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!getToken()) {
      next('/login'); // Chuyển hướng về trang đăng nhập
    } else {
      next(); // Cho phép điều hướng tiếp theo
    }
  } else {
    next()
  }
});

export default router
