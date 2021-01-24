<!--
 * @Description: 登录页面
 * @FilePath: \wb_litoob\src\views\Login.vue
 * @LastEditTime: 2020-07-06 11:34:15
--> 
<template>
    <div class="Login">
        <div class="header">
            <div class="logo_bg">
                <img class="logo_img" src="@/assets/images/img-logo.png" alt="logo" />
                <span class="logo_txt">百事娱乐</span>
            </div>
        </div>
        <div class="content">
            <van-form class="login_box" @submit="loginEvent">
                <van-field
                    v-model="params.username"
                    label="用户名"
                    size="large"
                    placeholder="请输入登陆账号"
                    :rules="[{required: true, message: '用户名不能为空'}]"
                />
                <van-field
                    v-model="params.password"
                    label="密码"
                    size="large"
                    type="password"
                    placeholder="请输入密码"
                    :rules="[{required: true, message: '密码不能为空'}]"
                />
                <van-field
                    center
                    clearable
                    v-model="params.code"
                    label="验证码"
                    placeholder="请输入验证码"
                    :rules="[{required: true, message: '验证码不能为空'}]"
                >
                    <template #button>
                        <img class="codeImg" :src="verifyCode" @click="getCodeImg" alt />
                    </template>
                </van-field>
                <div class="login_btn">
                    <van-button type="info" native-type="submit" block>立即登录</van-button>
                </div>
            </van-form>
        </div>
        <div class="mt_20">
            <van-row style="text-align:center;">
                <van-col span="8">
                    <van-icon name="service-o" />
                    <span class="ml_10">联系客服</span>
                </van-col>
                <van-col span="8">
                    <van-icon name="down" />
                    <span class="ml_10">APP下载</span>
                </van-col>
                <van-col span="8">
                    <van-icon name="exchange" />
                    <span class="ml_10">更换线路</span>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
import { setlocalStorage, removelocalStorageKey } from "@uit/comtool";
export default {
    name: "Login",
    data() {
        return {
            params: {
                uuid: "",
                code: "",
                username: "test11",
                password: "Aa123456"
            },
            verifyCode: ""
        };
    },

    methods: {
        // 获取验证码
        getCodeImg() {
            this.fetchget("/api/captchaImage").then(res => {
                this.params.uuid = res.uuid;
                this.verifyCode = "data:image/gif;base64," + res.img;
            });
        },
        // 登录事件
        loginEvent() {
            // 表单转化
            let formData = this.formDataObject(this.params);
            this.fetchpost("/api/login", formData).then(res => {
                this.$toast(res.msg);
                if (res.code === 500) {
                    this.getCodeImg();
                    this.params.code = "";
                } else {
                    setlocalStorage("AUTH_PARAM", res.token);
                    this.$router.push("/index/homePage");
                }
            });
        }
    },
    mounted() {
        // 获取图形验证码
        this.getCodeImg();
        // 清除本地 token  userinfo 数据
        removelocalStorageKey("AUTH_PARAM", "AUTH_INFO");
    }
};
</script>

<style lang="scss" scoped>
.ml_10 {
    margin-left: 10px;
}

.header {
    width: 100%;
    background-color: #0468a5;
    padding: 15px 0;
    text-align: center;
    box-sizing: border-box;
    .logo_bg {
        display: inline-block;
        .logo_img {
            display: inline-block;
            width: 30px;
            vertical-align: middle;
        }
        .logo_txt {
            margin-left: 10px;
            font-size: 22px;
            color: #ffffff;
        }
    }
}
.content {
    width: 100%;
    .login_box {
        width: 90%;
        margin-top: 80px;
        margin-left: 5%;
    }
    .login_btn {
        width: 100%;
        margin-top: 20px;
        padding: 0 5px;
        box-sizing: border-box;
    }
    .codeImg {
        width: 69px;
        height: 29px;
        background: #eaeaea;
        border-radius: 5px;
    }
}

.mt_20 {
    width: 100%;
    margin-top: 40px;
    padding: 0 20px;
    font-size: 14px;
    color: $themeColor;
}
</style>