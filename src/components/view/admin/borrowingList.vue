<template>
    <el-table :data="borrowingList" v-loading="loading">
        <el-table-column prop="book" label="书名" />
        <el-table-column prop="time" label="借阅时间" />
        <el-table-column prop="user" label="借阅人" />
        <el-table-column prop="state" label="状态" />
    </el-table>
</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue'
import axios from 'axios'
const loading=ref(true)

const borrowingUrl=ref('http://localhost:8080/recordBusiness');
const borrowingList=ref('');

const borrowing=():void=>{
    axios.post(borrowingUrl.value)
        .then((response)=>{
            console.log(response)
            borrowingList.value=response.data;
            loading.value=false;
        })
        .catch((error)=>{
            console.log(error)
        })
}
onMounted(()=>{
    borrowing();
})
</script>
<style>

</style>