var express = require("express");
var app = express();
var request = require('request');
var mongoose = require('mongoose')
var User = require('./user.js');
var formidable = require('formidable');

mongoose.connect('mongodb://127.0.0.1/user');
mongoose.connection.on('connected', function () {
    console.log('连接成功');
});


app.all('*', function(req, res, next) {             //设置跨域访问
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });
 
 
 var sortlist = [{
        "ysxs":[{"id":41092,"name":"悬疑推理"},{"id":39096,"name":"恐怖灵异"},{"id":38954,"name":"玄幻奇幻"},
        {"id":38949,"name":"现代言情"},{"id":38951,"name":"古代言情"},{"id":105,"name":"鬼故事"},{"id":104,"name":"影视原著"},
        {"id":40042,"name":"网游竞技"},{"id":38953,"name":"都市生活"},{"id":38958,"name":"武侠传奇"},{"id":38957,"name":"官场商战"},
        {"id":38960,"name":"历史军事"},{"id":38959,"name":"青春校园"},{"id":40041,"name":"耽美同人"},
        {"id":39103,"name":"广播剧"},{"id":40040,"name":"社科管理"},{"id":38956,"name":"文学名著"},{"id":41093,"name":"杂志专栏"},],
        "zyyl":[{"id":38985,"name":"影视精选"},{"id":38974,"name":"热门综艺"},{"id":38982,"name":"八卦娱乐"},{"id":113,"name":"星座风水"},
        {"id":38980,"name":"明星专区"},{"id":116,"name":"游戏动漫"},{"id":40043,"name":"文娱杂谈"},{"id":40045,"name":"时尚生活"},{"id":40044,"name":"影视原声"}],
        "qgsh":[{"id":39105,"name":"情感治愈"},{"id":109,"name":"晚安心语"},{"id":39106,"name":"美文故事"},{"id":38983,"name":"恋爱宝典"},
        {"id":107,"name":"两性夜话"},{"id":108,"name":"旅行人文"}],
        "xsps":[{"id":38963,"name":"郭德纲"},{"id":39109,"name":"相声新星"},{"id":38971,"name":"相声名家"},{"id":38969,"name":"评书大全"},
        {"id":38970,"name":"小品大全"},{"id":111,"name":"粤语评书"},{"id":40048,"name":"刘兰芳"},{"id":40049,"name":"王玥波"},{"id":38965,"name":"单田芳"},
        {"id":38966,"name":"袁阔成"},{"id":38972,"name":"田连元"},{"id":39133,"name":"戏曲名剧"}],
        "gxdz":[{"id":38976,"name":"热点趣闻"},{"id":38979,"name":"糗事百科"},{"id":106,"name":"内涵段子"},{"id":40015,"name":"聊江湖"},{"id":38978,"name":"冷笑话"},
        {"id":38977,"name":"方言秀"}],
        "etzq":[{"id":40005,"name":"睡前故事"},{"id":40002,"name":"童话寓言"},{"id":40001,"name":"儿歌音乐"},{"id":40003,"name":"孕妈育儿"},{"id":40009,"name":"经典名著"},
        {"id":40070,"name":"诗词国学"},{"id":40007,"name":"儿童英语"},{"id":40008,"name":"儿童科普"},{"id":40076,"name":"儿童教材"},{"id":40004,"name":"卡通动画"}],
        "zsgh":[{"id":40014,"name":"科普充电"},{"id":40072,"name":"名人专栏"},{"id":40073,"name":"情商心理"},{"id":39127,"name":"语言学习"},{"id":114,"name":"考试教材"},
        {"id":40060,"name":"职场提升"},{"id":40071,"name":"互联网"},{"id":39012,"name":"公开课演讲"},{"id":39131,"name":"健康养生"},{"id":39129,"name":"创业投资"}],
        "yydt":[{"id":102,"name":"心情"},{"id":118,"name":"乐评"},{"id":117,"name":"歌手"},{"id":38936,"name":"流行"},{"id":39116,"name":"经典"},
        {"id":40083,"name":"催眠"},{"id":38937,"name":"欧美"},{"id":40078,"name":"日韩"},{"id":101,"name":"榜单"},{"id":40038,"name":"粤语"},
        {"id":103,"name":"纯音"},{"id":100,"name":"3D"},{"id":40030,"name":"电子"},{"id":40029,"name":"喊麦"},{"id":40082,"name":"原创"},
        {"id":38938,"name":"翻唱"},{"id":38943,"name":"民谣"},{"id":40079,"name":"摇滚"},{"id":40028,"name":"动漫"},{"id":40080,"name":"古风"},
        {"id":40081,"name":"宗教"},{"id":40077,"name":"跑步"},{"id":38942,"name":"影视"},{"id":40039,"name":"古典"},{"id":40036,"name":"世界"},{"id":40037,"name":"儿童"}],
        "lsrw":[{"id":40055,"name":"野史趣闻"},{"id":40075,"name":"佛学修身"},{"id":39132,"name":"传奇档案"},{"id":39134,"name":"文化讲坛"},{"id":40054,"name":"人物传纪"},{"id":40050,"name":"中国历史"},
        {"id":40062,"name":"世界历史"},{"id":40052,"name":"军事战争"},{"id":40074,"name":"人文艺术"},],
        "xwzx":[{"id":38924,"name":"头条新闻"},{"id":38925,"name":"深度观点"},{"id":39078,"name":"社会百态"},{"id":38924,"name":"头条新闻"},{"id":39049,"name":"商业财经"},
        {"id":38927,"name":"IT科技"},{"id":38931,"name":"军事要闻"},{"id":110,"name":"自媒体"},{"id":38929,"name":"汽车"},{"id":38930,"name":"体育"},],
        "all":[{"id":39092,'name':"有声小说"},{"id":1,'name':"综艺娱乐"},{"id":39104,'name':"情感生活"},{"id":4,'name':"相声评书"},{"id":39087,'name':"搞笑段子"},{"id":39120,'name':"儿童专区"},{"id":39126,'name':"知识干货"},{"id":39110,'name':"音乐电台"},{"id":18,'name':"历史人文"},{"id":5,'name':"新闻资讯"}]
    }]
	
app.get('/getSort',function(req,res){           //配置接口api
    res.status(200),
    res.json(sortlist)
})

app.post('/zhuce',function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        var name = fields.username
        var password = fields.userpassword
        User.find({ username:name},function (err,result) {
            if(result.length==0){
                var user =new User({username:name,userpassword:password,userlike:[]});
                user.save()
                res.status(200).send({do:'success',tip:'注册成功~快登录吧'});
            }
            else{
                res.status(200).send({do:'fail',tip:'用户名被占用了嗷'})
            }
        })
    })
})

app.post('/denglu',function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var name = fields.username
        var password = fields.userpassword
        User.find({ username:name,userpassword: password},function (err,result) {
            if(!result.length==0){
                // console.log(result)
                res.status(200).send({do:"success",tip:'欢迎来到猫耳朵Fm~',user:{_id:result[0]._id,name:result[0].username,like:result[0].userlike}})
            }
            else{
                res.status(200).send({do:"fail",tip:'用户不存在或密码不正确'})
            }
        })
    })})

app.post('/order',function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
         //console.log(fields)
        User.find({_id:fields._id},function (err,data) {
            var user=data[0];
            user.userlike.push(fields.likeid);
            user.save()
            res.status(200).send({user:{_id:data[0]._id,name:data[0].username,like:data[0].userlike}});
        })
    })
})


app.post('/cancel',function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        //console.log(fields)
        User.find({_id:fields._id},function (err,data) {
            var user=data[0];
         var num = user.userlike.indexOf(fields.dislikeid);
            user.userlike.splice(num,1)
            console.log(user.userlike)
            user.save()
            res.status(200).send({user:{_id:data[0]._id,name:data[0].username,like:data[0].userlike}});
        })
    })
})





 
app.use(express.static(__dirname+'/public'));
app.listen("8888");
console.log("有声小说启动");
