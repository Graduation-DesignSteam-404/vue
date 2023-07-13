<!--前台-->
<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "user"
})
</script>

<template>
    <el-button type="success" plain>
        <router-link to="/bookShelf">
            书架
            <span class="mdi mdi-bookshelf"></span>
        </router-link>
    </el-button>
    <el-button type="success" plain>
        <router-link to="/register">
            注册
            <span class="mdi mdi-account-plus"></span>
        </router-link>
    </el-button>
    <el-button type="success" plain>
        <router-link to="/borrowingBook">
            借阅图书
            <span class="mdi mdi-arrow-down-bold"></span>
        </router-link>
    </el-button>
    <el-button type="success" plain>
        <router-link to="/returnBook">
            归还图书
            <span class="mdi mdi-arrow-up-bold"></span>
        </router-link>
    </el-button>
    <router-view></router-view>
</template>

<style>

</style>