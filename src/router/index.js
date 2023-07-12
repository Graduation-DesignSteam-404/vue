// 后台管理
import admin from '@/components/view/admin/adminIndex.vue'
// 用户
import user from '@/components/view/user/userIndex.vue'

// 用户子业务
// 书架
import bookShelf from '@/components/view/user/bookShelf.vue'
// 用户注册
import register from "@/components/view/user/register.vue";
// 借阅图书
import borrowingBook from "@/components/view/user/borrowingBook.vue";
// 归还图书
import returnBook from "@/components/view/user/returnBook.vue";

// 管理员子业务
// 书架列表
import bookList from "@/components/view/admin/bookList.vue";
// 用户列表
import userList from "@/components/view/admin/userList.vue";
// 添加图书
import appendBook from "@/components/view/admin/appendBook.vue";
// 删除图书
import removeBook from "@/components/view/admin/removeBook.vue";
// 添加用户
import appendUser from "@/components/view/admin/appendUser.vue";
// 删除用户
import removeUser from "@/components/view/admin/removeUser.vue";


import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/admin', component: admin,
        children: [
            {
                path: '/bookList',
                component: bookList,
            },
            {
                path: '/userList',
                component: userList,
            },
            {
                path: '/appendBook',
                component: appendBook,
            },
            {
                path: '/removeBook',
                component: removeBook,
            },
            {
                path: '/appendUser',
                component: appendUser,
            },
            {
                path: '/removeUser',
                component: removeUser,
            }
        ]
    },
    {
        path: '/user', component: user,
        children: [
            {
                path: '/bookShelf',
                component: bookShelf
            },
            {
                path: '/register',
                component: register,
            },
            {
                path: '/borrowingBook',
                component: borrowingBook,
            },
            {
                path: '/returnBook',
                component: returnBook
            }
        ]
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router