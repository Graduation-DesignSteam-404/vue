<!--添加图书-->
<template>
    <el-input
        v-model="bookName"
        autosize
        type="textarea"
        placeholder="请输入书名"
    />
    <el-input
        v-model="bookAuthor"
        autosize
        type="textarea"
        placeholder="请输入作者名"
    />
    <el-button @click="appendBook" type="primary">提交</el-button>
    <el-button @click="clear">清空</el-button>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import axios from "axios";
import {ElMessage} from "element-plus";

const postAppendBookUrl = ref('http://localhost:8080/appendBook');
const bookName = ref();
const bookAuthor = ref();
const postAppendBook = (): void => {
    axios.post(postAppendBookUrl.value)
        .then((response) => {
            console.log(response)
        })
        .catch((error => {
            console.log(error)
        }))
}
const appendBook = (): void => {
    postAppendBookUrl.value+='?name='+bookName.value;
    postAppendBookUrl.value+='&author='+bookAuthor.value;
    console.log(postAppendBookUrl)
    axios.post(postAppendBookUrl.value)
        .then((response)=>{
            console.log(response)
            if(response.data===1){
                ElMessage.success('添加成功,厉害捏!');
                clearData();
            }else {
                ElMessage.warning('waring:有个异常欸');
                clearData();
            }
        })
        .catch((error)=>{
            console.log(error)
        })
}
const clear=():void=>{
    bookName.value='';
    bookAuthor.value='';
}
const clearData=():void=>{
    postAppendBookUrl.value='http://localhost:8080/appendBook';
    bookName.value='';
    bookAuthor.value='';
}
</script>

<style>

</style>