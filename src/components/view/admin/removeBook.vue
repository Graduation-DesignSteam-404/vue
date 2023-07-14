<!--删除图书-->
<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";

const bookName=ref('')
const removeBookUrl=ref('http://localhost:8080/removeBook')

const removeBook=():void=>{
    removeBookUrl.value+='?name='+bookName.value
    axios.post(removeBookUrl.value)
        .then((response)=>{
            console.log(response)
            if(response.data>=1){
                ElMessage.success('删除成功');
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
const clearData=():void=>{
    removeBookUrl.value='http://localhost:8080/removeBook';
    bookName.value='';
}
</script>

<template>
    <el-input
            v-model="bookName"
            autosize
            type="text"
            placeholder="请输入需要删除的书名"
    />
  <el-button @click="removeBook" type="danger">删除</el-button>
  <el-button>清空</el-button>
</template>

<style>

</style>