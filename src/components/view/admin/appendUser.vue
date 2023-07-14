<!--添加用户-->
<template>
    <el-input
            v-model="username"
            autosize
            type="textarea"
            placeholder="name"
    />
    <el-button @click="appendUser" type="success">添加</el-button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import axios from "axios";
import {ElMessage} from "element-plus";

const username=ref('');
const appendUserUrl=ref('http://localhost:8080/appendUser');
const appendUser=():void=>{
    appendUserUrl.value+='?name='+username.value
    axios.post(appendUserUrl.value)
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
const clearData=():void =>{
    appendUserUrl.value='http://localhost:8080/appendUser';
    username.value='';
}
</script>

<style>

</style>