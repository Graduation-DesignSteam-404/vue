<!--归还图书-->
<template>
    <el-input
            v-model="book"
            autosize
            type="textarea"
            placeholder="书名"
    />
    <el-input
            v-model="user"
            autosize
            type="textarea"
            placeholder="归还者"
    />
    <el-button @click="postBorrowingBook" type="primary">归还</el-button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import axios from "axios";
import {ElMessage} from "element-plus";

const borrowingBookUrl=ref('http://localhost:8080/returnBook');
const book=ref('')
const user=ref('')

const postBorrowingBook=():void=>{
    borrowingBookUrl.value+='?book='+book.value;
    borrowingBookUrl.value+='&user='+user.value;
    console.log(borrowingBookUrl.value)
    axios.post(borrowingBookUrl.value)
        .then((response)=>{
            clear();
            console.log(response)
            if(response.data>=1){
                ElMessage.success('归还成功')
            }else if(response.data===-1){
                ElMessage.warning('图书不存在')
            }else if(response.data===-2){
                ElMessage.warning('用户不存在')
            }
        })
        .catch((error)=>{
            console.log(error)
            clear();
        })
}
const clear=():void=>{
    borrowingBookUrl.value='http://localhost:8080/returnBook';
    book.value='';
    user.value='';
}
</script>

<style>

</style>