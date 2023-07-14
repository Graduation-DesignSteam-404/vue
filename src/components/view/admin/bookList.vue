<!--书架列表-->
<template>
    <el-table :data="bookList" v-loading="loading">
        <el-table-column prop="id" label="id"/>
        <el-table-column prop="name" label="书名"/>
        <el-table-column prop="author" label="作者"/>
    </el-table>
</template>
<script setup lang="ts">
import {ref, onMounted} from 'vue'
import axios from "axios";

interface bookList {
    id: number;
    name: String;
    author: String;
}
const bookListUrl='http://localhost:8080/allBook';
const bookList=ref<bookList[]>([]);
const loading=ref(true);
const getBookList = (): void => {
    axios.get(bookListUrl)
        .then((response)=>{
            console.log(response)
            bookList.value=response.data;
            loading.value=false;
        })
        .catch((error)=>{
            console.log(error)
        })
}
onMounted(()=>{
    getBookList();
})
</script>

<style>

</style>