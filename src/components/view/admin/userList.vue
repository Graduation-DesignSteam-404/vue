<!--用户列表-->
<template>
    <el-table :data="userList" v-loading="loading">
        <el-table-column prop="id" label="id"/>
        <el-table-column prop="createData" label="注册时间"/>
        <el-table-column prop="name" label="姓名"/>
    </el-table>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';

interface UserData {
    id: number;
    createDate: string;
    name: string;
}

const userListUrl = 'http://localhost:8080/allUser';
const userList = ref<UserData[]>([]);
const loading = ref(true);

const getUserList = (): void => {
    axios.get(userListUrl)
        .then((response) => {
            console.log(response);
            userList.value = response.data;
            loading.value = false;
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    getUserList();
});
</script>