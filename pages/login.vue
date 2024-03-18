<script setup lang="ts">
import { useGlobalConfig } from 'element-plus';
import { thirdLogin, mainLogin } from '../composables/login'
// import { Iphone, Lock } from '@element-plus/icon-vue'

const username = ref('tsci')
const password = ref('123456')
const { public: apiBase } = useRuntimeConfig()
console.log(apiBase)
const login = async () => {
    const res = await thirdLogin(username.value, password.value)
    console.log(res)
    if (res.result === '1') {
        console.log('调用token成功')
        login1()
    }
}

const login1 = async () => {
    const res = await mainLogin(username.value, password.value)
    console.log(res)
}

</script>


<template>
    <div class="outer">

        <img class="logo" src="/img/logo.png" width="118" height="78.61" alt="" srcset="">
        <div class="inner">
            <div class="tab">
                <span>实盘</span>
                <span>模拟</span>
            </div>
            <el-input placeholder="请输入用户名" v-model="username" :prefix-icon="ElIconIphone"></el-input>
            <el-input placeholder="请输入密码" v-model="password" :prefix-icon="ElIconLock" style="margin-top:24px"></el-input>
            <el-button type="primary" style="width:100%;margin-top:20px" @click="login">登录</el-button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.outer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 460px;
    height: 580px;
    box-shadow: 0px 0px 0px 1px #cccccca6;
    border-radius: 4px;
    background: url('/img/loginBg.png');
    background-position: (0, 0);
    background-size: 100%;
}

.inner {
    padding: 54px 80px 113px 80px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    border-radius: 40px 40px 0 0;

    .tab {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -200%);

        span {
            font-family: Microsoft YaHei, Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 17px;
            font-size: 13px;
        }
    }
}

.logo {
    margin: 46px 171px 0 171px;
}
</style>
