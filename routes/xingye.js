let cheerio = require('cheerio');
let axios = require('axios');

function process(req, res, next) {
    // axios.get('http://wealth.cib.com.cn/retail/onsale/index.html')
    //      .then((response) => {
             let $ = cheerio.load(content);//response.data
             const titles = ['link'], $finTable = $('#finTable');
             const rows = [];
             $finTable.find('thead tr td').each((index, el) => {
                 titles.push($(el).text().trim());
                 console.log($(el).text().trim());
             });
             $finTable.find('tbody tr td').each((index, el) => {
                 if (index === 0) rows.push($(el).find('a').attr('href'));
                 rows.push($(el).text().trim());
             });
             res.send(titles.concat(rows));
         // });
}
const xingyeMap = {
    link: {index: 0, name: '链接'},
    name: {index: 1, name: '产品名称'},
    dueDate: {index: 2, name: '开始日期'},
    dueDate: {index: 3, name: '截止日期'},
    money: {index: 4, name: '币种'},
    link: {index: 5, name: '期限'},
    link: {index: 6, name: '起购金额'},
    link: {index: 7, name: '收益率'},
    link: {index: 8, name: '大额客户收益率'},

};
module.exports = process;

let content = `<html><head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta content="近期发售理财产品" name="keywords">
<meta content="近期发售理财产品" name="description">
<link href="/resources/css/2015/licaipage.css" type="text/css" rel="stylesheet">
<!--[if IE 6.0]>
	<link href="/resources/css/2015/ie.css" type="text/css" rel="stylesheet">
	<style>
        a {
            blr: expression(this.onFocus=this.blur());
        }
    </style>
<![endif]-->
<script src="https://hm.baidu.com/hm.js?043ab35d19ea8c7a88533dec047dae7b"></script><script src="/resources/js/2015/jquery.min.js" type="text/javascript"></script>
<script src="/resources/js/2015/util.js" type="text/javascript"></script><title>兴业银行欢迎您</title>
<script src="/resources/js/2015/CibWealthBaidu.js" type="text/javascript"></script>
</head>
<body>
<div id="header"><div class="top"><a href="http://www.cib.com.cn/cn/index.html" target="_blank"><div class="logo left"></div></a><a href="/index.html"><h1 class="title">理财产品信息</h1></a><div class="search-link clearfix right"><ul class="link clearfix"><li><a class="no-split" href="http://www.cib.com.cn/cn/minipage/page/leaveboard.html" target="_blank">客户留言</a></li><li><a href="http://www.cib.com.cn/cn/aboutCIB/about/jobs/index.html" target="_blank">招聘英才</a></li><li><a href="http://branch.cib.com.cn/index.html" target="_blank">营业网点</a></li><li><a href="http://www.cib.com.cn/cn/index.html" target="_blank">兴业官网</a></li></ul><a href="#" class="btn-search right"></a><input id="topSearch" type="text" class="input-search right" placeholder="请输入要搜索的内容"></div></div><div class="menu-bar"></div><div id="nav" class="m-center"><ul class="top-menu clearfix"><li><a id="n0" href="/retail/" class="selected">零售理财</a></li><li><a id="n1" href="/private/">私人银行理财</a></li><li><a id="n2" href="/organization/">机构业务</a></li><li><a id="n3" href="/institution/">同业客户理财</a></li><li><a id="n4" href="/proxy/">代理理财产品</a></li></ul></div></div>
<script src="/WealthHeader.js" type="text/javascript" deffer="true"></script><div id="wrapper">
	<div id="content">
    <div class="left-menu" id="leftmenu" style="height: 560px;"><div class="first-menu"><label></label>零售理财</div><ul class="second-menu"><li><a id="l0" href="#" class="selected">发售产品信息</a><ul class="third-menu" style="display: block;"><li><a id="l1" href="/retail/onsale/index.html" class="selected">近期发售理财产品</a></li><li><a id="l2" href="/retail/onsale/open.html">净值型开放式产品简介</a></li><li><a id="l3" href="/retail/onsale/zyb.html">智盈宝</a></li><li><a id="l4" href="/retail/onsale/cash.html">现金宝</a></li></ul></li><li><a id="l5" href="#">产品存续期信息</a><ul class="third-menu"><li><a id="l6" href="/retail/duration/cash/">现金宝</a></li><li><a id="l7" href="/retail/duration/open-wlb/">开放式天天万利宝</a></li><li><a id="l8" href="/retail/duration/plan/">万利宝理财管理计划</a></li><li><a id="l9" href="/retail/duration/wlb/">万利宝</a></li><li><a id="l10" href="/retail/duration/flb/">丰利宝</a></li><li><a id="l11" href="/retail/duration/ttwlb/">天天万利宝</a></li><li><a id="l12" href="/retail/duration/pension/">安愉养老财富</a></li><li><a id="l13" href="/retail/duration/zyb/">智盈宝</a></li><li><a id="l14" href="/retail/duration/wht/">天天万汇通</a></li><li><a id="l15" href="/retail/duration/tblc/">特别理财</a></li><li><a id="l16" href="/retail/duration/overseas/">代客境外理财</a></li><li><a id="l17" href="/retail/duration/other/">其他产品</a></li><li><a id="l18" href="/retail/duration/branch/">分行理财产品</a></li></ul></li><li><a id="l19" class="no-child" href="/retail/expire/">到期产品信息</a></li><li><a id="l20" class="no-child" href="/retail/his.html">查看历史数据</a></li></ul></div>
<script src="/retail/leftmenu.js" type="text/javascript" deffer="true"></script>
	<div class="detail-box">
        <div class="top">
            <p>当前位置：<a href="/">理财产品信息</a>&nbsp;&gt;&gt;<a href="/retail/">零售理财</a>&nbsp;&gt;&gt;<a href="/retail/onsale/">发售产品信息</a>
</p>
        </div>
        <div class="middle">
			<h1>近期发售理财产品</h1><p>网银购买理财产品限于最近一年已在本行柜面进行了风险评估的客户。具体产品信息请以实际发行文件和产品公告为准，详情请咨询兴业银行统一客户服务热线95561或营业网点。</p>
<table align="center" width="100%" cellspacing="0" cellpadding="0" border="1" id="finTable" style="table-layout: fixed">
    <thead>
        <tr bgcolor="#d0e0ff">
            <td width="19%" style="text-align: center; word-wrap: break-word"><strong>产品名称</strong></td>
            <td width="11%" style="text-align: center; word-wrap: break-word; cursor: pointer;"><strong><a href="#">募集起始日</a> </strong><img src="../../images/itable/nav.gif" width="7" height="11" alt=""></td>
            <td width="11%" style="text-align: center; word-wrap: break-word; cursor: pointer;"><strong><a href="#">募集截止日</a> </strong><img src="../../images/itable/nav.gif" width="7" height="11" alt=""></td>
            <td width="9%" style="text-align: center; word-wrap: break-word"><select id="select3"><option value="null">币种</option><option value="人民币">人民币</option><option value="美元">美元</option><option value="全部">全部</option></select></td>
            <td width="5%" style="text-align: center; word-wrap: break-word; cursor: pointer;"><strong><a href="#">期限（天）/投资周期</a> </strong><img src="../../images/itable/nav.gif" width="7" height="11" alt=""></td>
            <td width="7%" style="text-align: center; word-wrap: break-word; cursor: pointer;"><strong><a href="#">起购             金额(元)</a> </strong><img src="../../images/itable/nav.gif" width="7" height="11" alt=""></td>
            <td width="7%" style="text-align: center; word-wrap: break-word; cursor: pointer;"><strong><a href="#">客户年化参考净收益率</a> </strong><img src="../../images/itable/nav.gif" width="7" height="11" alt=""></td>
            <td width="14%" style="text-align: center; word-wrap: break-word"><strong>大额客户参考净收益率</strong></td>
            <td width="17%" style="text-align: center; word-wrap: break-word"><strong>在线购买<br>
            (请使用手机银行客户端左上角“扫一扫”功能购买) </strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112.html" target="_blank">2018年第2期天天万利宝A款</a></td>
            <td align="center">2018/1/12</td>
            <td align="center">2018/1/18</td>
            <td align="center">人民币</td>
            <td align="center">39</td>
            <td align="center">5万</td>
            <td align="center">4.80%</td>
            <td align="center">30万（含）以上4.90%</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp91118021.png"><br>
            <a href="http://directbank.cib.com.cn/hall/show/home/home!submitPayment.do?payProdType=1&amp;payProdCode=91118021&amp;areaId=00" target="_blank">购买</a></td>
        </tr>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112.html" target="_blank">2018年第2期天天万利宝B款</a></td>
            <td align="center">2018/1/9</td>
            <td align="center">2018/1/15</td>
            <td align="center">人民币</td>
            <td align="center">90</td>
            <td align="center">5万</td>
            <td align="center">5.00%</td>
            <td align="center">30万（含）以上5.10%</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp91118022.png"><br>
            <a href="http://directbank.cib.com.cn/hall/show/home/home!submitPayment.do?payProdType=1&amp;payProdCode=91118022&amp;areaId=00" target="_blank">购买</a></td>
        </tr>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112.html" target="_blank">2018年第2期天天万利宝C款</a></td>
            <td align="center">2018/1/9</td>
            <td align="center">2018/1/15</td>
            <td align="center">人民币</td>
            <td align="center">182</td>
            <td align="center">5万</td>
            <td align="center">5.00%</td>
            <td align="center">30万（含）以上5.10%</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp91118023.png"><br>
            <a href="http://directbank.cib.com.cn/hall/show/home/home!submitPayment.do?payProdType=1&amp;payProdCode=91118023&amp;areaId=00" target="_blank">购买</a></td>
        </tr>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112.html" target="_blank">2018年第2期天天万利宝F款(保本)</a></td>
            <td align="center">2018/1/9</td>
            <td align="center">2018/1/16</td>
            <td align="center">人民币</td>
            <td align="center">84</td>
            <td align="center">5万</td>
            <td align="center">4.40%</td>
            <td align="center">&nbsp;</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp91108021.png"><br>
            <a href="http://directbank.cib.com.cn/hall/show/home/home!submitPayment.do?payProdType=1&amp;payProdCode=91108021&amp;areaId=00" target="_blank">购买</a></td>
        </tr>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112.html" target="_blank">2018年第2期H款(保本)</a></td>
            <td align="center">2018/1/9</td>
            <td align="center">2018/1/16</td>
            <td align="center">人民币</td>
            <td align="center">182</td>
            <td align="center">5万</td>
            <td align="center">4.40%</td>
            <td align="center">&nbsp;</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp91108022.png"><br>
            <a href="http://directbank.cib.com.cn/hall/show/home/home!submitPayment.do?payProdType=1&amp;payProdCode=91108022&amp;areaId=00" target="_blank">购买</a></td>
        </tr>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112_2.html" target="_blank">“万汇通”外币结构性存款2018年第02期A款</a></td>
            <td align="center">2018/1/10</td>
            <td align="center">2018/1/16</td>
            <td align="center">美元</td>
            <td align="center">37</td>
            <td align="center">0.8万</td>
            <td align="center">1.80%</td>
            <td align="center">&nbsp;</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp95138021.png"><br>
            <a href="https://personalbank.cib.com.cn/pers/main/login.do">购买 </a></td>
        </tr>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112_2.html" target="_blank">“万汇通”外币结构性存款2018年第02期B款</a></td>
            <td align="center">2018/1/10</td>
            <td align="center">2018/1/16</td>
            <td align="center">美元</td>
            <td align="center">90</td>
            <td align="center">0.8万</td>
            <td align="center">2.00%</td>
            <td align="center">&nbsp;</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp95138022.png"><br>
            <a href="https://personalbank.cib.com.cn/pers/main/login.do">购买 </a></td>
        </tr>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112_2.html" target="_blank">“万汇通”外币结构性存款2018年第02期C款</a></td>
            <td align="center">2018/1/10</td>
            <td align="center">2018/1/16</td>
            <td align="center">美元</td>
            <td align="center">180</td>
            <td align="center">0.8万</td>
            <td align="center">2.00%</td>
            <td align="center">&nbsp;</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp95138023.png"><br>
            <a href="https://personalbank.cib.com.cn/pers/main/login.do">购买 </a></td>
        </tr>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112_2.html" target="_blank">“万汇通”外币结构性存款2018年第02期D款</a></td>
            <td align="center">2018/1/10</td>
            <td align="center">2018/1/16</td>
            <td align="center">美元</td>
            <td align="center">306</td>
            <td align="center">0.8万</td>
            <td align="center">2.12%</td>
            <td align="center">&nbsp;</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp95138024.png"><br>
            <a href="https://personalbank.cib.com.cn/pers/main/login.do">购买 </a></td>
        </tr>
        <tr>
            <td align="center"><a href="http://wealth.cib.com.cn/retail/onsale/instruction/20180101-20180131/20180112_1.html" target="_blank">天天万汇通2018年第02期</a></td>
            <td align="center">2018/1/10</td>
            <td align="center">2018/1/16</td>
            <td align="center">美元</td>
            <td align="center">365</td>
            <td align="center">0.8万</td>
            <td align="center">2.20%</td>
            <td align="center">&nbsp;</td>
            <td align="center"><img alt="" width="93" height="93" src="/images/onsale/lccp92138021.png"><br>
            <a href="https://personalbank.cib.com.cn/pers/main/login.do">购买</a></td>
        </tr>
        <tr>
            <td align="center">“天天万利宝”开放式人民币理财产品（7D）第1款</td>
            <td align="center">2018/1/12</td>
            <td align="center">2018/1/18</td>
            <td align="center">人民币</td>
            <td align="center">7</td>
            <td align="center">5万</td>
            <td align="center">4.40%</td>
            <td align="center">30万（含）以上4.50%</td>
            <td align="center"><img alt="lccp9111535B" width="93" height="93" src="/images/onsale/lccp9111535B.png"><br>
            <a href="http://directbank.cib.com.cn/hall/show/home/home!submitPayment.do?payProdType=1&amp;payProdCode=9111535B&amp;areaId=00" target="_blank">购买</a></td>
        </tr>
      </tbody>
</table>
<p>&nbsp;天天万利宝、天天万汇通和部分万利宝的募集截止时间为最后一个募集日<strong>15:15。</strong>夜市版产品只在网上银行和手机银行销售，销售时间仅限晚上<strong>18:00至24:00，</strong>认购开始时间为认购起始日晚上18:00，认购截止时间为认购结束日晚上23:59。</p>
<script type="text/javascript" src="../../images/itable/itable.js"></script> <script type="text/javascript">
    window.onload = function(){
                        var finTable = iTable("finTable");
                        if(!finTable.itv){
                                return;
                        }
                        finTable.order(1,"date","desc");
                        finTable.order(2,"date","desc");
                        finTable.userOptions.choice.column3 = ["人民币","美元","全部"];
                        finTable.filter(3);
                        finTable.order(4,"number","desc");


                        //finTable.options.c6 = ["保本","非保本"];

                       // finTable.userOptions.choice.column5 = ["保本","非保本","全部"];
                              //  finTable.filter(5);


                        finTable.order(5,"number","desc");
                        finTable.order(6,"number","desc");
                };
  </script><a id="to-top" class="to-top" href="#header">回到顶部</a>
        </div>
    </div>
	</div>
    <div id="footer"><p>客服热线:95561&nbsp;&nbsp;&nbsp;&nbsp;贵宾专线:4008895561&nbsp;&nbsp;&nbsp;&nbsp;境外客服热线:86-21-38769999&nbsp;&nbsp;&nbsp;&nbsp;境外信用卡白金专线:86-21-38429696</p><p>兴业银行版权所有&nbsp;&nbsp;&nbsp;&nbsp;闽ICP备05017231号&nbsp;&nbsp;&nbsp;&nbsp;地址:福建省福州市湖东路154号</p></div>
<script src="/WealthFooter.js" type="text/javascript" deffer="true"></script></div>

<script id="wappalyzer" src="chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/inject.js"></script></body></html>`;


