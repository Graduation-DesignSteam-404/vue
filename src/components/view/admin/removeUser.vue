<!--删除用户-->
<template>
    <el-input
            v-model="username"
            autosize
            type="textarea"
            placeholder="name"
    />
    <el-button @click="removeUser" type="danger">删除</el-button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import axios from "axios";
import {ElMessage} from "element-plus";

const removeUserUrl=ref('http://localhost:8080/removeUser')
const username = ref('')

const removeUser = (): void => {
    removeUserUrl.value+='?name='+username.value;
    axios.post(removeUserUrl.value)
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
const clearData=():void=>{
    removeUserUrl.value='http://localhost:8080/removeUser';
    username.value='';
}
</script>


<style>

</style>