<script>

</script>
<template>
    <div id="main">
        <p><strong>图书管理系统</strong></p>
        <div id="link">
            <el-button type="primary" plain>
                <router-link to="/user">
                    <el-icon>
                        <Avatar/>
                    </el-icon>
                    用户
                </router-link>
            </el-button>
            <el-button type="primary" plain>
                <router-link to="/admin">
                    <el-icon>
                        <UserFilled/>
                    </el-icon>
                    后台
                </router-link>
            </el-button>
        </div>
        <br>
        <div id="view">
            <router-view></router-view>
        </div>
    </div>
</template>
<style>
html{
    height: 100%;
    background: linear-gradient(45deg,#4AD2CB,#67b26F);
}
#main {
    width: 100%;
    height: auto;
}

#main p {
    display: block;
    text-align: center;
    font-family: sans-serif;
    font-size: 3.5vh;
}

a {
    text-decoration: none;
    color: black;
    font-weight: bolder;
}
a:hover{
    color: aqua;
}
a:active{
    color: #a32bff;
}
#link {
    text-align: center;
}

#view {
    text-align: center;
}
</style>