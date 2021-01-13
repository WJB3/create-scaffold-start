// 菜单路由
import Dashboard from '@/view/base/index' // 首页仪表盘
import Shopwxshop from '@/view/base/shop/wxshop' // 微信门店管理 
import Comments from '@/view/base/shop/comments' // 门店评论  
import Staffleader from '@/view/base/shopstaff/salesperson/leaderlist' // 门店管理员
import Accountmanagement from '@/view/base/account/management' // 平台管理员 --
import Accountroles from '@/view/base/account/roles' // 角色管理 --
import Basearticle from '@/view/base/article/index' // 文章管理 
 
import Brandcustomer from '@/view/brand/wechat/customservice' // 公众号客服管理  
  
import Goodscategory from '@/view/mall/goods/category' // 商品分类
import Goodsmaincategory from '@/view/mall/goods/maincategory' // 商品分类
 
import Goodsphysical from '@/view/mall/goods/physical/list' // 实体类商品
import Physicalupload from '@/view/mall/goods/physical/normalGoodsUpload' // 实体商品导入
import Physicalstoreupload from '@/view/mall/goods/physical/normalGoodsStoreUpload' // 实体商品库存导入
import Physicalprofitupload from '@/view/mall/goods/physical/normalGoodsProfitUpload' // 实体商品分润导入
import Goodsbrand from '@/view/mall/goods/attributes/brand' // 商品品牌管理 
  
import Tradedrugorders from '@/view/mall/trade/normalorders/drugList' // 药品需求单
import Tradepayment from '@/view/mall/trade/list' // 交易单管理
import Tradeverification from '@/view/mall/trade/salesmanWorkRecords' // 服务核销单
import Shippingtemplates from '@/view/mall/trade/shipping/templates' // 运费模版
import Marketingdistributor from '@/view/mall/marketing/distributor' // 店铺管理
import Marketingdistributor_editor from '@/view/mall/marketing/distributor_editor' // 店铺编辑Marketing
import Marketingdistributor_template from '@/view/mall/marketing/distributor_template' // 店铺编辑Marketing
import Marketingdistribution_orders from '@/view/mall/marketing/distributionOrders' // 店铺订单
import Distributortags from '@/view/mall/marketing/distributortags' // 商品标签
import Distributorrel_items from '@/view/mall/marketing/distributorRelItems' // 店铺关联商品 
import Distributorinvoice from '@/view/mall/marketing/distributorInvoice' // 店铺发票
import Marketinglog from '@/view/mall/marketing/distributionLog' // 店铺记录
import ShopDecoration from '@/view/mall/marketing/shopDecoration' // 微商城店铺装修
import DistributorCode from '@/view/mall/marketing/distributorCode' // 微商城店铺装修 
import ShoppingGuideTask_statistics from '@/view/guide/shoppingGuideTaskStatistics' // 导购任务统计
  
 
import SalesmanRelationship from '@/view/guide/salesman_relationship' // 导购会员关系 
import Reservationsetting from '@/view/mall/reservation/setting/index' // 预约设置
import Mallreservation from '@/view/mall/reservation/resourcesetting/index' // 预约管理
import Reservationorder from '@/view/mall/reservation/resourcesetting/reservation' // 预约单
import Mallrecharge from '@/view/mall/storeddeposit/index' // 会员账户储值 
import Fapiaolist from '@/view/mall/fapiao/list' //发票列表
import Fapiao_set from '@/view/mall/fapiao/set' // 发票设置
import Fapiao_set_detail from '@/view/mall/fapiao/add' //添加发票
import Member from '@/view/member/members/list' // 会员管理
import Manageinfomation from '@/view/member/registersetting/index' // 会员注册信息
import Managecard from '@/view/member/membercard/index' // 会员卡与等级设置
import Managecardorder from '@/view/member/membercard/list' // 会员卡购买记录
import Managecustomer from '@/view/member/members/uploade' // 会员信息导入 **
import Managetag from '@/view/member/members/tags' // 会员标签
import Analysisrights from '@/view/member/members/rightsList' // 会员权益管理
import AnalysisrightsContent from '@/view/member/members/analysisrightsContent' // 会员权益管理
import Membermarketing from '@/view/member/cardticket/coupon' // 优惠券管理 
import Smssend from '@/view/member/members/list' // 群发短信，与会员管理同一组件  
     
import Popularizegoods from '@/view/popularize/goods' // 推广商品    
   
import Wxapp from '@/view/wxapp/index' // 小程序列表 
import Batemplateedit from '@/view/wxapp/bamanagement' // ba小程序模板编辑
import Pctemplate from '@/view/pc/homePage/default' // pc首页模板编辑
import Pcviptemplate from '@/view/pc/vipPage/default' // pc vip页面模板编辑
import Pcfootertext from '@/view/pc/footerPage/default' // pc 底部文案
import Tdkglobalset from '@/view/pc/tdk/globalset' // Tdk全局设置
import Tdkgivenset from '@/view/pc/tdk/givenset' // Tdk全局设置
import Pccustompage from '@/view/pc/custompage' // pc 自定义页面  
import Floorguide from '@/view/wxapp/floor_guide' // 自定义楼层引导页面  
import Ordersetting from '@/view/mall/trade/ordersetting' // 订单时效配置
import Goodsattributes from '@/view/mall/goods/attributes/attributes' // 商品规格列表
import Goodsparams from '@/view/mall/goods/attributes/params' // 商品参数列表
import Storeshopitemanagement from '@/view/mall/storeshop/itemlist' // 店铺商品列表 
import Merchantstaffroles from '@/view/base/account/storeroles' // 商城（店铺）员工角色管理
  
import Planting from '@/view/base/planting/index' // 种草列表
import Articlecolumns from '@/view/base/article/columns' // 文章栏目
 
 

import Itemtags from '@/view/mall/goods/tags' // 商品标签
import Goodsaudit from '@/view/mall/goods/audit/list' // 商品标签
import Goodsaudit_editor from '@/view/mall/goods/audit/add' // 商品标签

import Selfdeliveryaddress from '@/view/base/address/setting' // 设置固定自提地址 

import Ordercartsetting from '@/view/mall/trade/cartadsetting' // 购物车广告营销语
 
 
 

import Rate from '@/view/mall/trade/rate/list' // 订单评价 
 

// import Basic_setting from '@/view/mall/marketing/basicSetting' // 基础配置
// import Onecode from '@/view/brand/codegoods/thingslist' // 商品码管理
// import Things from '@/view/brand/codegoods/thingsedit' // 新增编辑物品
// import Batchs from '@/view/brand/codegoods/batchsedit' // 批次管理&&新增编辑批次
// import Thingsbatchs_detail from '@/view/brand/codegoods/thingsbatchsdetail' //物品批次详情
// import Withdraw from '@/view/mall/marketing/withdraw' // 提现申请
// import Surveillance from '@/view/mall/marketing/surveillance' // 店铺二维码
// import Distributorlog from '@/view/mall/marketing/logByDistributor' // 商家店铺记录
// import List from '@/view/mall/reservation/resourcesetting/list' // 资源位管理
// import registerRromotionsAdd from '@/view/member/promotions/distributorEdit'

import Selformelementsetting from '@/view/member/selfservice/formsettinglist'   // 自助表单元素配置
import Selformtempsetting from '@/view/member/selfservice/formtemplatelist'     // 自助表单模板配置
// import Physicalmeasurement_detail from '@/view/member/selfservice/userdaliyrecord'   // 用户体测详情报表
import Physicalmeasurement from '@/view/member/selfservice/templatepreview'     // 用户体测列表和配置

/***********member tag category begin*************/
import Membertagcategory from '@/view/member/members/tagcategory.vue'     // 用户体测列表和配置
/***********member tag category end*************/
/***********新的门店 begin*************/
import Distributorshops from '@/view/mall/marketing/shops/lists' // 店铺管理
import Distributorshops_editor from '@/view/mall/marketing/shops/edit' // 店铺管理
/***********新的门店 end*************/ 
 

import Weburlsetting from '@/view/base/setting/weburlsetting'  //外部链接配置

// 隐藏路由
import Home from '@/view/home' // 主框架
import Layout from '@/view/layout' // 主结构
import Authloading from '@/view/authloading' // 绑定微信
import Shopwxshop_editor from '@/view/base/shop/editshop' // 添加修改门店
import Basearticle_editor from '@/view/base/article/editor' // 添加编辑文章 
 
import Goodsphysical_editor from '@/view/mall/goods/physical/add' // 实体类商品添加编辑  
import Tradedrugorders_detail from '@/view/mall/trade/order/detail' // 药品需求单订单详情
import Marketingdistribution_orders_detail from '@/view/mall/trade/order/detail' // 店铺订单详情
 
import Shippingtemplates_editor from '@/view/mall/trade/shipping/add' // 添加编辑运费模板
import Mallreservation_editor from '@/view/mall/reservation/resourcesetting/add' // 资源位添加 
 
import Fapiaolist_detail from '@/view/mall/fapiao/detail' //发票编辑
import Member_detail from '@/view/member/members/detail' // 会员详情页
import Membermarketing_detail from '@/view/member/cardticket/detail' // 优惠券领取记录
import Membermarketing_editor from '@/view/member/cardticket/edit' // 添加编辑优惠券 
import Marketingactivity_templ from '@/view/member/activity/templ' // 自动化营销选择模版
import Marketingactivity_editor from '@/view/member/activity/add' // 新增编辑自动化营销 
import Popularizelist_child from '@/view/popularize/children' // 推广员直属下级
import Popularizelist_detail from '@/view/popularize/brokerageLog' // 推广员佣金详情 
import Marketingcommunityactivity_editor from '@/view/member/promotions/community/activity/add' // 新增编辑活动
import Communityactivityorder_detail from '@/view/mall/trade/order/detail' // 社区活动订单详情  
import Wxapp_templ from '@/view/wxapp/template' // 开通小程序模板
import Templatelist from '@/view/pc/pctemplate' // 开通PC模板  
import Planting_editor from '@/view/base/planting/editor' // 添加编辑种草
import Admininfo from '@/view/base/shop/admininfo' // 管理员信息
import Yilianyun from '@/view/base/setting/yilianyun/index' // 管理员信息
import Tradesetting from '@/view/base/setting/tradesetting/index' // 管理员信息
 
import Fapiaosetting from '@/view/base/setting/fapiao/list' // 发票配置 
import Pointrule from '@/view/member/point/index.vue' // 管理员信息
import Pointoverview from '@/view/member/point/overview.vue' // 积分总览

import Selformelementsetting_editor from '@/view/member/selfservice/formsettingadd'   // 自助表单元素配置
import Selformtempsetting_editor from '@/view/member/selfservice/formtemplateadd'     // 自助表单模板配置
import Physicalmeasurement_detail from '@/view/member/selfservice/userdaliyrecord'   // 用户体测详情报表  
 

// 店铺端页面
import Shopstorelist from '@/view/shop/storelist' // 门店列表
import Shopstorelist_editor from '@/view/shop/editstore' // 门店编辑
import Companygoods from '@/view/shop/goods/companygoods' // 门店编辑
import Memberstatistics from '@/view/mall/datacube/companydata/member' // 商城统计信息-会员
import Orderstatistics from '@/view/mall/datacube/companydata/order' // 商城统计信息-订单
import Distributordata from '@/view/mall/datacube/distributordata' // 商城统计信息-订单
import Hotkeywords from '@/view/mall/goods/hotkeywords' // 热门关键词
import Goodsstatistics from '@/view/mall/datacube/goodsdata' // 商品统计信息

import Logistics from '@/view/mall/trade/logistics' 

import Kdniao from '@/view/base/setting/kdniao' // 快递配置
import Sfbsp from '@/view/base/setting/sfbsp' // 快递配置  
 

import Normalordersupload from '@/view/mall/trade/normalorders/ordersupload' // 实体订单导入列表

// 跨境
import Origincountry from '@/view/crossborder/origincountry/list' // 产地国
import Crossbordersetinfo from '@/view/crossborder/crossborderset/info' // 跨境设置
import Godsphysicalkj from '@/view/mall/goods/physical/list' // 实体类商品
import Godsphysicalkj_editor from '@/view/mall/goods/physical/add' // 实体类商品添加编辑
import Taxstrategy from '@/view/crossborder/taxstrategy/list'// 跨境税率策略列表
import Taxstrategy_editor from '@/view/crossborder/taxstrategy/edit'// 跨境税率策略详情
  
import Whitelistlist from '@/view/member/whitelist/list' // 会员-白名单
import Whitelistuploade from '@/view/member/whitelist/uploadeindex' // 会员-白名单导入

import Shopmenu from '@/view/menus/shopmenu' // 菜单管理
 
        
 
 
// import AfterServiceReason from
import Aftersalesreason from '@/view/mall/aftersales/reason' // 售后原因
//大屏
import Shopscreen_category from '@/view/shopscreen/category' // 自定义大屏分类
import BigScreenAd from '@/view/shopscreen/bigScreenAd' // 大屏广告
import HomeCarousel from '@/view/shopscreen/homeCarousel' // 轮播广告
import SearchKeyWords from '@/view/shopscreen/searchKeyWords' // 关键词设置
// 分账
import Setting from '@/view/mall/splitbill/setting' // 分账设置
import StoreFenSetting from '@/view/mall/splitbill/storesetting' // 分账设置

import StoreInformation from '@/view/mall/splitbill/list' // 分账进件列表

import StoreInformation_editor from '@/view/mall/splitbill/edit' // 店铺认证信息录入
import StoreAccountingStatistics from '@/view/mall/splitbill/storeAccount' // 店铺分账统计
import PlatformAccountingStatistics from '@/view/mall/splitbill/platformAccount' // 平台分账统计

import Pointupvaluation from '@/view/member/promotions/pointupvaluation/list' // 积分升值活动管理
import Pointupvaluation_editor from '@/view/member/promotions/pointupvaluation/add' // 新增编辑积分升值活动

import Extrapoint from '@/view/member/promotions/extrapoint/list' //额外积分活动列表
import Extrapoint_templ from '@/view/member/promotions/extrapoint/templ' // 额外积分活动选择模版
import Extrapoint_editor from '@/view/member/promotions/extrapoint/editor' //额外积分编辑页面

export default {
  Home, 
  Layout,
  Authloading,
  Dashboard,
  Shopwxshop_editor,
  Shopwxshop, 
  Comments,  
  Staffleader,
  Accountmanagement,
  Accountroles,
  Basearticle,
  Basearticle_editor, 
  Baseexport, 
  Brandcustomer,   
  Goodscategory,
  Goodsmaincategory, 
  Goodsphysical,
  Goodsphysical_editor,
  Goodsaudit,
  Goodsaudit_editor,
  Physicalupload,
  Physicalstoreupload,
  Physicalprofitupload,
  Goodsbrand, 
  Tradedrugorders,
  Tradepayment,
  Tradeverification,  
  Tradedrugorders_detail, 
  Shippingtemplates,
  Shippingtemplates_editor,
  Marketingdistributor,
  Marketingdistributor_editor,
  Marketingdistributor_template,
  Marketingdistribution_orders,
  Marketingdistribution_orders_detail,
  Distributortags,
  Distributorrel_items, 
  Distributorinvoice,
  Marketinglog,
  ShopDecoration, 
  Marketingsalesmanrole, 
  ShoppingGuideTask_statistics,  
  Reservationsetting,
  Mallreservation,
  Mallreservation_editor,
  Reservationorder,
  Mallrecharge, 
  Fapiaolist,
  Fapiaolist_detail,
  Fapiao_set,
  Fapiao_set_detail,
  Member,
  Member_detail,
  Manageinfomation,
  Managecard,
  Managecardorder,
  Managecustomer,
  Managetag,
  Analysisrights,
  AnalysisrightsContent,
  Membermarketing,  
  Smssend,
  Coupongive,
  Coupongive_detail, 
  Membermarketing_detail, 
  // registerRromotionsAdd,
  Membermarketing_editor, 
  Popularizesetting,  
  Popularizewithdraw,
  Popularizegoods,  
  
  Communitywithdraw,  
  Wxapp,
  Wxapp_templ,
  Templatelist, 
  Batemplateedit, 
  Floorguide,
  Colorstyle,
  Membercentersetting, 
  Ordersetting,
  Pctemplate,
  Pcviptemplate,
  Pcfootertext,
  Tdkglobalset,
  Tdkgivenset,
  Pccustompage, 
  Goodsattributes,
  Goodsparams,
  Storeshopitemanagement, 
  Merchantstaffroles,  
  Planting,
  Planting_editor,
  Articlecolumns, 
  Itemtags,
  Selfdeliveryaddress, 
  Admininfo,  
  Yilianyun,
  Tradesetting,
  Meiqia,
  Echat,
  Fapiaosetting,
  DistributorCode,
  // Onecode,
  // Things,
  // Batchs,
  // Thingsbatchsdetail,
  // Basic_setting,
  // Withdraw,
  // Surveillance,
  // Log,
  // Distributorlog,
  // List,
  Selformelementsetting,
  Selformelementsetting_editor,
  Selformtempsetting,
  Selformtempsetting_editor,
  Shopstorelist,
  Shopstorelist_editor,
  Companygoods,
  Memberstatistics,
  Orderstatistics,
  Hotkeywords,
  Goodsstatistics, 
  Logistics,
 
  Distributordata,
  Pointrule,
  Pointoverview, 
  Kdniao,
  Sfbsp,
  Rate,
  Physicalmeasurement,
  Physicalmeasurement_detail,
  Membertagcategory,
  Distributorshops,
  Distributorshops_editor, 
  DistributionConfig,
  SalesmanRelationship, 
  Weburlsetting, 
  Normalordersupload, 
  // 跨境
  Origincountry,
  Crossbordersetinfo,
  Godsphysicalkj,
  Godsphysicalkj_editor,
  Taxstrategy,
  Taxstrategy_editor, 
  Financialaftersaleslist,
  Salesreportlist,
  Whitelistlist,
  Whitelistuploade,
  // 菜单管理
  Shopmenu,       
  // 开屏广告 
  Aftersalesreason,
  // 大屏
  Shopscreen_category,
  BigScreenAd,
  HomeCarousel,
  SearchKeyWords,
  Setting,
  StoreInformation,
  StoreInformation_editor,
  StoreFenSetting,
  StoreAccountingStatistics,
  PlatformAccountingStatistics,
  Pointupvaluation,
  Pointupvaluation_editor,
  Extrapoint,
  Extrapoint_templ,
  Extrapoint_editor
}

// 如果路由通过页面传值那么需要定义当前值的字段名称
export let routesParamsKey = {
  Shopstorelist_editor: 'wxShopId',
  Goodsphysical_editor: 'itemId',
  Godsphysicalkj_editor: 'itemId',
  Basearticle_editor: 'wxShopId', 
 
  Shippingtemplates_editor: 'templatesId',   
  Planting_editor: 'marketing_id',
  Shopwxshop_editor: 'wxShopId',     
  Taxstrategy_editor: 'id',
  StoreInformation_editor:'id',
  Extrapoint_editor: 'id'
}
