<!--后台-->
<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "adminIndex"
})
</script>

<template>
    <el-button type="success" plain>
        <router-link to="/bookList">
            图书列表
            <i class="mdi mdi-format-list-numbered"></i>
        </router-link>
    </el-button>
    <el-button type="success" plain>
        <router-link to="/userList">
            用户列表
            <i class="mdi mdi-human-queue"></i>
        </router-link>
    </el-button>
    <el-button type="success" plain>
        <router-link to="/appendBook">
            添加新图书
            <span class="mdi mdi-plus"></span>
        </router-link>
    </el-button>
    <el-button type="success" plain>
        <router-link to="/removeBook">
            删除图书
            <i class="mdi mdi-delete"></i>
        </router-link>
    </el-button>
    <el-button type="success" plain>
        <router-link to="/appendUser">
            添加用户
            <span class="mdi mdi-account-plus"></span>
        </router-link>
    </el-button>
    <el-button type="success" plain>
        <router-link to="/removeUser">
            删除用户
            <span class="mdi mdi-account-remove"></span>
        </router-link>
    </el-button>
    <router-view></router-view>
</template>

<style>
router-view {
    width: 100%;
    height: auto;
}
</style>