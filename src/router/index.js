/*
 * @Description: Vue Router config.js
 * @FilePath: \wb_litoob\src\router\index.js
 * @LastEditTime: 2020-08-03 21:41:14
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home');
const Login = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Login');
const Register = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Register');
const SelectLine = () => import('@vie/SelectLine');  // 线路切换

// 主页
const HomePage = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/homePage/HomePage');
const EditLottery = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/homePage/EditLottery');//编辑彩票
const LotteryCentre = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/homePage/LotteryCentre');
const Recharge = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/homePage/Recharge');
const News = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/homePage/News'); // 消息
const MyFriend = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/homePage/MyFriend'); // 我的好友
const SelectRecipients = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/homePage/SelectRecipients');//选择收信人
const MassMessage = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/homePage/MassMessage'); // 群发

// 开奖走势
const TrendList = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/trend/TrendList');
const LotteryDetails = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/trend/LotteryDetails');
// 公告
const NoticeList = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/notice/NoticeList');
const NoticeDetails = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/notice/NoticeDetails');

// 个人中心
const MyPage = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/myPage/MyPage');
const TransferAccount = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/myPage/TransferAccount');  // 转账
const Withdrawal = () => import('@vie/myPage/Withdrawal');  // 提现
const TopUp = () => import('@vie/myPage/TopUp');  // 充值
const MemberManage = () => import('@vie/myPage/MemberManage');  // 成员管理
const RebateSettings = () => import('@vie/myPage/RebateSettings');  // 返点设置
const PromoteAccountOpen = () => import('@vie/myPage/PromoteAccountOpen');  // 推广开户
const HourlyWageSetting = () => import('@vie/myPage/HourlyWageSetting');  // 代理中心下，小时工资设定
const HourlyWageSettingDetails = () => import('@vie/myPage/HourlyWageSettingDetails');  // 代理中心下，小时工资设定 - 详情
const AccountChangeRecord = () => import('@vie/myPage/AccountChangeRecord');  // 账变记录
const PersonalReport = () => import('@vie/myPage/PersonalReport');  // 个人报表
const GameRecord = () => import('@vie/myPage/GameRecord');  // 游戏记录
const WithdrawalRecord = () => import('@vie/myPage/WithdrawalRecord');  // 提现记录
const RechargeRecord = () => import('@vie/myPage/RechargeRecord');  // 充值记录
const TeamReport = () => import('@vie/myPage/TeamReport');  // 团队报表
const TeamReportToUserDetails = () => import('@vie/myPage/TeamReportToUserDetails');  // 团队报表-用户详情
const TeamReportHour = () => import('@vie/myPage/TeamReportHour');  // 团队报表（小时）
const HourlyWage = () => import('@vie/myPage/HourlyWage');  // 小时工资
const SecurityCenter = () => import('@vie/myPage/SecurityCenter');  // 安全中心
const LoginPwd = () => import('@vie/myPage/LoginPwd');  // 安全中心-登录密码
const FundPwd = () => import('@vie/myPage/FundPwd');  // 安全中心-资金密码
const SecuritySettings = () => import('@vie/myPage/SecuritySettings');  // 安全中心-密保设置
const BankCardSet = () => import('@vie/myPage/BankCardSet');  // 安全中心-银行卡设置
const AddCard = () => import('@vie/myPage/AddCard');  // 安全中心-银行卡设置-添加银行卡
const LoginAddress = () => import('@vie/myPage/LoginAddress');  // 安全中心-登录地址
const NumberTracingRecord = () => import('@vie/myPage/NumberTracingRecord');  // 追号记录
const ActivityCenter = () => import('@vie/myPage/ActivityCenter');  // 活动中心
const SetUp = () => import('@vie/myPage/SetUp');  // 设置
const LotteryBetting = () => import('@vie/lottery/index');  // 彩票投注
const GameRecord2 = () => import('@vie/lottery/gameRecord.vue');  // 游戏记录


// 测试页
const Test = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Test');

const routes = [{
	path: '/',
	redirect: '/index',
},
// 主页面
{
	path: '/index',
	name: 'Home',
	explain: '主页面',
	component: Home,
	redirect: '/index/homePage',
	children: [{
		path: 'homePage',
		name: 'homePage',
		explain: '主页面',
		component: HomePage
	},
	{
		path: 'trendList',
		name: 'TrendList',
		explain: '开奖页面',
		component: TrendList
	},
	{
		path: 'noticeList',
		name: 'NoticeList',
		explain: '公告页面',
		component: NoticeList
	},
	{
		path: 'myPage',
		name: 'MyPage',
		explain: '个人页面',
		component: MyPage
	},
	]
},
// 登录页面
{
	path: '/login',
	name: 'Login',
	explain: '登录页面',
	component: Login
},
// 注册页面
{
	path: '/register',
	name: 'Register',
	explain: '注册页面',
	component: Register
},
// 线路切换
{
	path: '/selectLine',
	name: 'SelectLine',
	explain: '线路切换',
	component: SelectLine
},

//#region 主页
{
	path: '/EditLottery',
	name: 'EditLottery',
	explain: '编辑彩票',
	component: EditLottery
},
{
	path: '/lotteryCentre',
	name: 'LotteryCentre',
	explain: '彩票中心',
	component: LotteryCentre
},
{
	path: '/LotteryBetting',
	name: 'LotteryBetting',
	explain: '投注',
	component: LotteryBetting
},
{
	path: '/GameRecord2',
	name: 'GameRecord2',
	explain: '游戏记录',
	component: GameRecord2
},
{
	path: '/Recharge',
	name: 'Recharge',
	explain: '充值',
	component: Recharge
},
{
	path: '/News',
	name: 'News',
	explain: '消息',
	component: News
},
{
	path: '/MyFriend',
	name: 'MyFriend',
	explain: '我的好友',
	component: MyFriend
},
{
	path: '/SelectRecipients',
	name: 'SelectRecipients',
	explain: '选择收信人',
	component: SelectRecipients
},
{
	path: '/MassMessage',
	name: 'MassMessage',
	explain: '群发',
	component: MassMessage
},
//#endregion

//#region 开奖走势
{
	path: '/lotteryDetails',
	name: 'LotteryDetails',
	explain: '彩种走势详情页面',
	component: LotteryDetails
},
//#endregion

//#region 公告
{
	path: '/noticeDetails',
	name: 'NoticeDetails',
	explain: '公告详情页面',
	component: NoticeDetails
},

//#endregion

//#region 个人中心
{
	path: '/TransferAccount',
	name: 'TransferAccount',
	explain: '转账页面',
	component: TransferAccount
},
{
	path: '/accountChangeRecord',
	name: 'AccountChangeRecord',
	explain: '账变记录页面',
	component: AccountChangeRecord
},
{
	path: '/Withdrawal',
	name: 'Withdrawal',
	explain: '提现页面',
	component: Withdrawal
},
{
    path: '/TopUp',
    name: 'TopUp',
    explain: '充值',
    component: TopUp
},
{
    path: '/MemberManage',
    name: 'MemberManage',
    explain: '成员管理',
    component: MemberManage
},
{
    path: '/RebateSettings',
    name: 'RebateSettings',
    explain: '返点设置',
    component: RebateSettings
},
{
    path: '/PromoteAccountOpen',
    name: 'PromoteAccountOpen',
    explain: '推广开户',
    component: PromoteAccountOpen
},
{
    path: '/HourlyWageSetting',
    name: 'HourlyWageSetting',
    explain: '小时工资设定',
    component: HourlyWageSetting
},
{
    path: '/HourlyWageSettingDetails',
    name: 'HourlyWageSettingDetails',
    explain: '小时工资设定 - 详情',
    component: HourlyWageSettingDetails
},
{
    path: '/PersonalReport',
    name: 'PersonalReport',
    explain: '个人报表',
    component: PersonalReport
},
{
    path: '/GameRecord',
    name: 'GameRecord',
    explain: '游戏记录',
    component: GameRecord
},
{
    path: '/WithdrawalRecord',
    name: 'WithdrawalRecord',
    explain: '提现记录',
    component: WithdrawalRecord
},
{
    path: '/RechargeRecord',
    name: 'RechargeRecord',
    explain: '充值记录',
    component: RechargeRecord
},
{
    path: '/TeamReport',
    name: 'TeamReport',
    explain: '团队报表',
    component: TeamReport
},
{
    path: '/TeamReportToUserDetails',
    name: 'TeamReportToUserDetails',
    explain: '用户详情',
    component: TeamReportToUserDetails
},
{
    path: '/TeamReportHour',
    name: 'TeamReportHour',
    explain: '团队报表（小时）',
    component: TeamReportHour
},
{
    path: '/HourlyWage',
    name: 'HourlyWage',
    explain: '小时工资',
    component: HourlyWage
},
{
    path: '/SecurityCenter',
    name: 'SecurityCenter',
    explain: '安全中心',
    component: SecurityCenter
},
{
    path: '/LoginPwd',
    name: 'LoginPwd',
    explain: '安全中心-登录密码',
    component: LoginPwd
},
{
    path: '/FundPwd',
    name: 'FundPwd',
    explain: '安全中心-资金密码',
    component: FundPwd
},
{
    path: '/SecuritySettings',
    name: 'SecuritySettings',
    explain: '安全中心-密保设置',
    component: SecuritySettings
},
{
    path: '/BankCardSet',
    name: 'BankCardSet',
    explain: '安全中心-银行卡设置',
    component: BankCardSet
},
{
    path: '/AddCard',
    name: 'AddCard',
    explain: '安全中心-银行卡设置-添加银行卡',
    component: AddCard
},
{
    path: '/LoginAddress',
    name: 'LoginAddress',
    explain: '安全中心-登录地址',
    component: LoginAddress
},
{
    path: '/NumberTracingRecord',
    name: 'NumberTracingRecord',
    explain: '追号记录',
    component: NumberTracingRecord
},
{
    path: '/ActivityCenter',
    name: 'ActivityCenter',
    explain: '活动中心',
    component: ActivityCenter
},
{
    path: '/SetUp',
    name: 'SetUp',
    explain: '设置',
    component: SetUp
},
//#endregion



// 测试页（例如框架控件不生效测试等）
{
	path: '/Test',
	name: 'Test',
	explain: '本文件仅供测试',
	component: Test
}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router