<!--书架-->
<template>
    <p>书架</p>
    <div id="main">
        <el-table :data="bookList">
            <el-table-column prop="id" label="id"/>
            <el-table-column prop="name" label="书名"/>
            <el-table-column prop="author" label="作者"/>
        </el-table>
    </div>
</template>
<script setup lang="ts">
import {ref, onMounted} from "vue";
import axios from "axios";

const allBookUrl = ref('http://localhost:8080/allBook')
const bookList = ref('')

const getBookShelf = (): void => {
    axios.get(allBookUrl.value)
        .then((response) => {
            console.log(response)
            bookList.value = response.data;
        })
        .catch((error) => {
            console.log(error)
        })
}
onMounted(() => {
    getBookShelf();
})
</script>

<style>

</style>