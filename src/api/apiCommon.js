/*
 * @Author: your name
 * @Date: 2020-07-21 19:54:03
 * @LastEditTime: 2020-10-18 16:35:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wb_litoob\src\api\apiCommon.js
 */ 
export default {

    captchaImage: '/captchaImage',  // 获取验证码
    login: '/login',  // 登录
    getSysConfig: '/getSysConfig', // 获取彩种配置
    getLottery: '/getLottery', // 获取彩种配置
    getLotteryOpenTime: '/getLotteryOpenTime', // 获取下期倒计时
    getLotteryOpenCode: '/getLotteryOpenCode', // 获取近期开奖结果
    userBetsGeneral: '/userBetsGeneral', // 投注
    getUserMoney: '/getUserMoney', // 获取余额
    UserBetsChase: '/api/UserBetsChase', // 保存追号

}