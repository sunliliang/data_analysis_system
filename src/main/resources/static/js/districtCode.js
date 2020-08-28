/**
 * 区划代码和拼音字典，用于查找地图文件
 */
var codeMapNameDict = new Array();
codeMapNameDict["000000"] = "china";
codeMapNameDict["110000"] = "beijing";
codeMapNameDict["120000"] = "tianjin";
codeMapNameDict["130000"] = "hebei";
codeMapNameDict["140000"] = "shanxi";
codeMapNameDict["150000"] = "neimenggu";
codeMapNameDict["210000"] = "liaoning";
codeMapNameDict["220000"] = "jilin";
codeMapNameDict["230000"] = "heilongjiang";
codeMapNameDict["310000"] = "shanghai";
codeMapNameDict["320000"] = "jiangsu";
codeMapNameDict["330000"] = "zhejiang";
codeMapNameDict["340000"] = "anhui";
codeMapNameDict["350000"] = "fujian";
codeMapNameDict["360000"] = "jiangxi";
codeMapNameDict["370000"] = "shandong";
codeMapNameDict["410000"] = "henan";
codeMapNameDict["420000"] = "hubei";
codeMapNameDict["430000"] = "hunan";
codeMapNameDict["440000"] = "guangdong";
codeMapNameDict["450000"] = "guangxi";
codeMapNameDict["460000"] = "hainan";
codeMapNameDict["500000"] = "chongqing";
codeMapNameDict["510000"] = "sichuan";
codeMapNameDict["520000"] = "guizhou";
codeMapNameDict["530000"] = "yunnan";
codeMapNameDict["540000"] = "xizang";
codeMapNameDict["610000"] = "shanxi1";
codeMapNameDict["620000"] = "gansu";
codeMapNameDict["630000"] = "qinghai";
codeMapNameDict["640000"] = "ningxia";
codeMapNameDict["650000"] = "xinjiang";
codeMapNameDict["710000"] = "taiwan";
codeMapNameDict["810000"] = "xianggang";
codeMapNameDict["820000"] = "aomen";

/**
 * 区划代码和名称字典
 */
var codeNameDict = new Array();
codeNameDict["000000"] = "中国";
codeNameDict["110000"] = "北京";
codeNameDict["110101"] = "东城区";
codeNameDict["110102"] = "西城区";
codeNameDict["110105"] = "朝阳区";
codeNameDict["110106"] = "丰台区";
codeNameDict["110107"] = "石景山区";
codeNameDict["110108"] = "海淀区";
codeNameDict["110109"] = "门头沟区";
codeNameDict["110111"] = "房山区";
codeNameDict["110112"] = "通州区";
codeNameDict["110113"] = "顺义区";
codeNameDict["110114"] = "昌平区";
codeNameDict["110115"] = "大兴区";
codeNameDict["110116"] = "怀柔区";
codeNameDict["110117"] = "平谷区";
codeNameDict["110118"] = "密云区";
codeNameDict["110119"] = "延庆区";
codeNameDict["120000"] = "天津";
codeNameDict["120101"] = "和平区";
codeNameDict["120102"] = "河东区";
codeNameDict["120103"] = "河西区";
codeNameDict["120104"] = "南开区";
codeNameDict["120105"] = "河北区";
codeNameDict["120106"] = "红桥区";
codeNameDict["120110"] = "东丽区";
codeNameDict["120111"] = "西青区";
codeNameDict["120112"] = "津南区";
codeNameDict["120113"] = "北辰区";
codeNameDict["120114"] = "武清区";
codeNameDict["120115"] = "宝坻区";
codeNameDict["120116"] = "滨海新区";
codeNameDict["120117"] = "宁河区";
codeNameDict["120118"] = "静海区";
codeNameDict["120119"] = "蓟州区";
codeNameDict["130000"] = "河北";
codeNameDict["130100"] = "石家庄市";
codeNameDict["130200"] = "唐山市";
codeNameDict["130300"] = "秦皇岛市";
codeNameDict["130400"] = "邯郸市";
codeNameDict["130500"] = "邢台市";
codeNameDict["130600"] = "保定市";
codeNameDict["130700"] = "张家口市";
codeNameDict["130800"] = "承德市";
codeNameDict["130900"] = "沧州市";
codeNameDict["131000"] = "廊坊市";
codeNameDict["131100"] = "衡水市";
codeNameDict["140000"] = "山西";
codeNameDict["140100"] = "太原市";
codeNameDict["140200"] = "大同市";
codeNameDict["140300"] = "阳泉市";
codeNameDict["140400"] = "长治市";
codeNameDict["140500"] = "晋城市";
codeNameDict["140600"] = "朔州市";
codeNameDict["140700"] = "晋中市";
codeNameDict["140800"] = "运城市";
codeNameDict["140900"] = "忻州市";
codeNameDict["141000"] = "临汾市";
codeNameDict["141100"] = "吕梁市";
codeNameDict["150000"] = "内蒙古";
codeNameDict["150100"] = "呼和浩特市";
codeNameDict["150200"] = "包头市";
codeNameDict["150300"] = "乌海市";
codeNameDict["150400"] = "赤峰市";
codeNameDict["150500"] = "通辽市";
codeNameDict["150600"] = "鄂尔多斯市";
codeNameDict["150700"] = "呼伦贝尔市";
codeNameDict["150800"] = "巴彦淖尔市";
codeNameDict["150900"] = "乌兰察布市";
codeNameDict["152200"] = "兴安盟";
codeNameDict["152500"] = "锡林郭勒盟";
codeNameDict["152900"] = "阿拉善盟";
codeNameDict["210000"] = "辽宁";
codeNameDict["210100"] = "沈阳市";
codeNameDict["210200"] = "大连市";
codeNameDict["210300"] = "鞍山市";
codeNameDict["210400"] = "抚顺市";
codeNameDict["210500"] = "本溪市";
codeNameDict["210600"] = "丹东市";
codeNameDict["210700"] = "锦州市";
codeNameDict["210800"] = "营口市";
codeNameDict["210900"] = "阜新市";
codeNameDict["211000"] = "辽阳市";
codeNameDict["211100"] = "盘锦市";
codeNameDict["211200"] = "铁岭市";
codeNameDict["211300"] = "朝阳市";
codeNameDict["211400"] = "葫芦岛市";
codeNameDict["220000"] = "吉林";
codeNameDict["220100"] = "长春市";
codeNameDict["220200"] = "吉林市";
codeNameDict["220300"] = "四平市";
codeNameDict["220400"] = "辽源市";
codeNameDict["220500"] = "通化市";
codeNameDict["220600"] = "白山市";
codeNameDict["220700"] = "松原市";
codeNameDict["220800"] = "白城市";
codeNameDict["222400"] = "延边朝鲜族自治州";
codeNameDict["230000"] = "黑龙江";
codeNameDict["230100"] = "哈尔滨市";
codeNameDict["230200"] = "齐齐哈尔市";
codeNameDict["230300"] = "鸡西市";
codeNameDict["230400"] = "鹤岗市";
codeNameDict["230500"] = "双鸭山市";
codeNameDict["230600"] = "大庆市";
codeNameDict["230700"] = "伊春市";
codeNameDict["230800"] = "佳木斯市";
codeNameDict["230900"] = "七台河市";
codeNameDict["231000"] = "牡丹江市";
codeNameDict["231100"] = "黑河市";
codeNameDict["231200"] = "绥化市";
codeNameDict["232700"] = "大兴安岭地区";
codeNameDict["310000"] = "上海";
codeNameDict["310101"] = "黄浦区";
codeNameDict["310104"] = "徐汇区";
codeNameDict["310105"] = "长宁区";
codeNameDict["310106"] = "静安区";
codeNameDict["310107"] = "普陀区";
codeNameDict["310109"] = "虹口区";
codeNameDict["310110"] = "杨浦区";
codeNameDict["310112"] = "闵行区";
codeNameDict["310113"] = "宝山区";
codeNameDict["310114"] = "嘉定区";
codeNameDict["310115"] = "浦东新区";
codeNameDict["310116"] = "金山区";
codeNameDict["310117"] = "松江区";
codeNameDict["310118"] = "青浦区";
codeNameDict["310120"] = "奉贤区";
codeNameDict["310151"] = "崇明区";
codeNameDict["320000"] = "江苏";
codeNameDict["320100"] = "南京市";
codeNameDict["320200"] = "无锡市";
codeNameDict["320300"] = "徐州市";
codeNameDict["320400"] = "常州市";
codeNameDict["320500"] = "苏州市";
codeNameDict["320600"] = "南通市";
codeNameDict["320700"] = "连云港市";
codeNameDict["320800"] = "淮安市";
codeNameDict["320900"] = "盐城市";
codeNameDict["321000"] = "扬州市";
codeNameDict["321100"] = "镇江市";
codeNameDict["321200"] = "泰州市";
codeNameDict["321300"] = "宿迁市";
codeNameDict["330000"] = "浙江";
codeNameDict["330100"] = "杭州市";
codeNameDict["330200"] = "宁波市";
codeNameDict["330300"] = "温州市";
codeNameDict["330400"] = "嘉兴市";
codeNameDict["330500"] = "湖州市";
codeNameDict["330600"] = "绍兴市";
codeNameDict["330700"] = "金华市";
codeNameDict["330800"] = "衢州市";
codeNameDict["330900"] = "舟山市";
codeNameDict["331000"] = "台州市";
codeNameDict["331100"] = "丽水市";
codeNameDict["340000"] = "安徽";
codeNameDict["340100"] = "合肥市";
codeNameDict["340200"] = "芜湖市";
codeNameDict["340300"] = "蚌埠市";
codeNameDict["340400"] = "淮南市";
codeNameDict["340500"] = "马鞍山市";
codeNameDict["340600"] = "淮北市";
codeNameDict["340700"] = "铜陵市";
codeNameDict["340800"] = "安庆市";
codeNameDict["341000"] = "黄山市";
codeNameDict["341100"] = "滁州市";
codeNameDict["341200"] = "阜阳市";
codeNameDict["341300"] = "宿州市";
codeNameDict["341500"] = "六安市";
codeNameDict["341600"] = "亳州市";
codeNameDict["341700"] = "池州市";
codeNameDict["341800"] = "宣城市";
codeNameDict["350000"] = "福建";
codeNameDict["350100"] = "福州市";
codeNameDict["350200"] = "厦门市";
codeNameDict["350300"] = "莆田市";
codeNameDict["350400"] = "三明市";
codeNameDict["350500"] = "泉州市";
codeNameDict["350600"] = "漳州市";
codeNameDict["350700"] = "南平市";
codeNameDict["350800"] = "龙岩市";
codeNameDict["350900"] = "宁德市";
codeNameDict["360000"] = "江西";
codeNameDict["360100"] = "南昌市";
codeNameDict["360200"] = "景德镇市";
codeNameDict["360300"] = "萍乡市";
codeNameDict["360400"] = "九江市";
codeNameDict["360500"] = "新余市";
codeNameDict["360600"] = "鹰潭市";
codeNameDict["360700"] = "赣州市";
codeNameDict["360800"] = "吉安市";
codeNameDict["360900"] = "宜春市";
codeNameDict["361000"] = "抚州市";
codeNameDict["361100"] = "上饶市";
codeNameDict["370000"] = "山东";
codeNameDict["370100"] = "济南市";
codeNameDict["370200"] = "青岛市";
codeNameDict["370300"] = "淄博市";
codeNameDict["370400"] = "枣庄市";
codeNameDict["370500"] = "东营市";
codeNameDict["370600"] = "烟台市";
codeNameDict["370700"] = "潍坊市";
codeNameDict["370800"] = "济宁市";
codeNameDict["370900"] = "泰安市";
codeNameDict["371000"] = "威海市";
codeNameDict["371100"] = "日照市";
codeNameDict["371300"] = "临沂市";
codeNameDict["371400"] = "德州市";
codeNameDict["371500"] = "聊城市";
codeNameDict["371600"] = "滨州市";
codeNameDict["371700"] = "菏泽市";
codeNameDict["410000"] = "河南";
codeNameDict["410100"] = "郑州市";
codeNameDict["410200"] = "开封市";
codeNameDict["410300"] = "洛阳市";
codeNameDict["410400"] = "平顶山市";
codeNameDict["410500"] = "安阳市";
codeNameDict["410600"] = "鹤壁市";
codeNameDict["410700"] = "新乡市";
codeNameDict["410800"] = "焦作市";
codeNameDict["410900"] = "濮阳市";
codeNameDict["411000"] = "许昌市";
codeNameDict["411100"] = "漯河市";
codeNameDict["411200"] = "三门峡市";
codeNameDict["411300"] = "南阳市";
codeNameDict["411400"] = "商丘市";
codeNameDict["411500"] = "信阳市";
codeNameDict["411600"] = "周口市";
codeNameDict["411700"] = "驻马店市";
codeNameDict["420000"] = "湖北";
codeNameDict["420100"] = "武汉市";
codeNameDict["420200"] = "黄石市";
codeNameDict["420300"] = "十堰市";
codeNameDict["420500"] = "宜昌市";
codeNameDict["420600"] = "襄阳市";
codeNameDict["420700"] = "鄂州市";
codeNameDict["420800"] = "荆门市";
codeNameDict["420900"] = "孝感市";
codeNameDict["421000"] = "荆州市";
codeNameDict["421100"] = "黄冈市";
codeNameDict["421200"] = "咸宁市";
codeNameDict["421300"] = "随州市";
codeNameDict["422800"] = "恩施土家族苗族自治州";
codeNameDict["430000"] = "湖南";
codeNameDict["430100"] = "长沙市";
codeNameDict["430200"] = "株洲市";
codeNameDict["430300"] = "湘潭市";
codeNameDict["430400"] = "衡阳市";
codeNameDict["430500"] = "邵阳市";
codeNameDict["430600"] = "岳阳市";
codeNameDict["430700"] = "常德市";
codeNameDict["430800"] = "张家界市";
codeNameDict["430900"] = "益阳市";
codeNameDict["431000"] = "郴州市";
codeNameDict["431100"] = "永州市";
codeNameDict["431200"] = "怀化市";
codeNameDict["431300"] = "娄底市";
codeNameDict["433100"] = "湘西土家族苗族自治州";
codeNameDict["440000"] = "广东";
codeNameDict["440100"] = "广州市";
codeNameDict["440200"] = "韶关市";
codeNameDict["440300"] = "深圳市";
codeNameDict["440400"] = "珠海市";
codeNameDict["440500"] = "汕头市";
codeNameDict["440600"] = "佛山市";
codeNameDict["440700"] = "江门市";
codeNameDict["440800"] = "湛江市";
codeNameDict["440900"] = "茂名市";
codeNameDict["441200"] = "肇庆市";
codeNameDict["441300"] = "惠州市";
codeNameDict["441400"] = "梅州市";
codeNameDict["441500"] = "汕尾市";
codeNameDict["441600"] = "河源市";
codeNameDict["441700"] = "阳江市";
codeNameDict["441800"] = "清远市";
codeNameDict["441900"] = "东莞市";
codeNameDict["442000"] = "中山市";
codeNameDict["445100"] = "潮州市";
codeNameDict["445200"] = "揭阳市";
codeNameDict["445300"] = "云浮市";
codeNameDict["450000"] = "广西";
codeNameDict["450100"] = "南宁市";
codeNameDict["450200"] = "柳州市";
codeNameDict["450300"] = "桂林市";
codeNameDict["450400"] = "梧州市";
codeNameDict["450500"] = "北海市";
codeNameDict["450600"] = "防城港市";
codeNameDict["450700"] = "钦州市";
codeNameDict["450800"] = "贵港市";
codeNameDict["450900"] = "玉林市";
codeNameDict["451000"] = "百色市";
codeNameDict["451100"] = "贺州市";
codeNameDict["451200"] = "河池市";
codeNameDict["451300"] = "来宾市";
codeNameDict["451400"] = "崇左市";
codeNameDict["460000"] = "海南";
codeNameDict["460100"] = "海口市";
codeNameDict["460200"] = "三亚市";
codeNameDict["460300"] = "三沙市";
codeNameDict["460400"] = "儋州市";
codeNameDict["500000"] = "重庆";
codeNameDict["500101"] = "万州区";
codeNameDict["500102"] = "涪陵区";
codeNameDict["500103"] = "渝中区";
codeNameDict["500104"] = "大渡口区";
codeNameDict["500105"] = "江北区";
codeNameDict["500106"] = "沙坪坝区";
codeNameDict["500107"] = "九龙坡区";
codeNameDict["500108"] = "南岸区";
codeNameDict["500109"] = "北碚区";
codeNameDict["500110"] = "綦江区";
codeNameDict["500111"] = "大足区";
codeNameDict["500112"] = "渝北区";
codeNameDict["500113"] = "巴南区";
codeNameDict["500114"] = "黔江区";
codeNameDict["500115"] = "长寿区";
codeNameDict["500116"] = "江津区";
codeNameDict["500117"] = "合川区";
codeNameDict["500118"] = "永川区";
codeNameDict["500119"] = "南川区";
codeNameDict["500120"] = "璧山区";
codeNameDict["500151"] = "铜梁区";
codeNameDict["500152"] = "潼南区";
codeNameDict["500153"] = "荣昌区";
codeNameDict["500154"] = "开州区";
codeNameDict["500155"] = "梁平区";
codeNameDict["500156"] = "武隆区";
codeNameDict["500229"] = "城口县";
codeNameDict["500230"] = "丰都县";
codeNameDict["500231"] = "垫江县";
codeNameDict["500233"] = "忠县";
codeNameDict["500235"] = "云阳县";
codeNameDict["500236"] = "奉节县";
codeNameDict["500237"] = "巫山县";
codeNameDict["500238"] = "巫溪县";
codeNameDict["500240"] = "石柱土家族自治县";
codeNameDict["500241"] = "秀山土家族苗族自治县";
codeNameDict["500242"] = "酉阳土家族苗族自治县";
codeNameDict["500243"] = "彭水苗族土家族自治县";
codeNameDict["510000"] = "四川";
codeNameDict["510100"] = "成都市";
codeNameDict["510300"] = "自贡市";
codeNameDict["510400"] = "攀枝花市";
codeNameDict["510500"] = "泸州市";
codeNameDict["510600"] = "德阳市";
codeNameDict["510700"] = "绵阳市";
codeNameDict["510800"] = "广元市";
codeNameDict["510900"] = "遂宁市";
codeNameDict["511000"] = "内江市";
codeNameDict["511100"] = "乐山市";
codeNameDict["511300"] = "南充市";
codeNameDict["511400"] = "眉山市";
codeNameDict["511500"] = "宜宾市";
codeNameDict["511600"] = "广安市";
codeNameDict["511700"] = "达州市";
codeNameDict["511800"] = "雅安市";
codeNameDict["511900"] = "巴中市";
codeNameDict["512000"] = "资阳市";
codeNameDict["513200"] = "阿坝藏族羌族自治州";
codeNameDict["513300"] = "甘孜藏族自治州";
codeNameDict["513400"] = "凉山彝族自治州";
codeNameDict["520000"] = "贵州";
codeNameDict["520100"] = "贵阳市";
codeNameDict["520200"] = "六盘水市";
codeNameDict["520300"] = "遵义市";
codeNameDict["520400"] = "安顺市";
codeNameDict["520500"] = "毕节市";
codeNameDict["520600"] = "铜仁市";
codeNameDict["522300"] = "黔西南布依族苗族自治州";
codeNameDict["522600"] = "黔东南苗族侗族自治州";
codeNameDict["522700"] = "黔南布依族苗族自治州";
codeNameDict["530000"] = "云南";
codeNameDict["530100"] = "昆明市";
codeNameDict["530300"] = "曲靖市";
codeNameDict["530400"] = "玉溪市";
codeNameDict["530500"] = "保山市";
codeNameDict["530600"] = "昭通市";
codeNameDict["530700"] = "丽江市";
codeNameDict["530800"] = "普洱市";
codeNameDict["530900"] = "临沧市";
codeNameDict["532300"] = "楚雄彝族自治州";
codeNameDict["532500"] = "红河哈尼族彝族自治州";
codeNameDict["532600"] = "文山壮族苗族自治州";
codeNameDict["532800"] = "西双版纳傣族自治州";
codeNameDict["532900"] = "大理白族自治州";
codeNameDict["533100"] = "德宏傣族景颇族自治州";
codeNameDict["533300"] = "怒江傈僳族自治州";
codeNameDict["533400"] = "迪庆藏族自治州";
codeNameDict["540000"] = "西藏";
codeNameDict["540100"] = "拉萨市";
codeNameDict["540200"] = "日喀则市";
codeNameDict["540300"] = "昌都市";
codeNameDict["540400"] = "林芝市";
codeNameDict["540500"] = "山南市";
codeNameDict["540600"] = "那曲市";
codeNameDict["542500"] = "阿里地区";
codeNameDict["610000"] = "陕西";
codeNameDict["610100"] = "西安市";
codeNameDict["610200"] = "铜川市";
codeNameDict["610300"] = "宝鸡市";
codeNameDict["610400"] = "咸阳市";
codeNameDict["610500"] = "渭南市";
codeNameDict["610600"] = "延安市";
codeNameDict["610700"] = "汉中市";
codeNameDict["610800"] = "榆林市";
codeNameDict["610900"] = "安康市";
codeNameDict["611000"] = "商洛市";
codeNameDict["620000"] = "甘肃";
codeNameDict["620100"] = "兰州市";
codeNameDict["620200"] = "嘉峪关市";
codeNameDict["620300"] = "金昌市";
codeNameDict["620400"] = "白银市";
codeNameDict["620500"] = "天水市";
codeNameDict["620600"] = "武威市";
codeNameDict["620700"] = "张掖市";
codeNameDict["620800"] = "平凉市";
codeNameDict["620900"] = "酒泉市";
codeNameDict["621000"] = "庆阳市";
codeNameDict["621100"] = "定西市";
codeNameDict["621200"] = "陇南市";
codeNameDict["622900"] = "临夏回族自治州";
codeNameDict["623000"] = "甘南藏族自治州";
codeNameDict["630000"] = "青海";
codeNameDict["630100"] = "西宁市";
codeNameDict["630200"] = "海东市";
codeNameDict["632200"] = "海北藏族自治州";
codeNameDict["632300"] = "黄南藏族自治州";
codeNameDict["632500"] = "海南藏族自治州";
codeNameDict["632600"] = "果洛藏族自治州";
codeNameDict["632700"] = "玉树藏族自治州";
codeNameDict["632800"] = "海西蒙古族藏族自治州";
codeNameDict["640000"] = "宁夏回族自治区";
codeNameDict["640100"] = "银川市";
codeNameDict["640200"] = "石嘴山市";
codeNameDict["640300"] = "吴忠市";
codeNameDict["640400"] = "固原市";
codeNameDict["640500"] = "中卫市";
codeNameDict["650000"] = "新疆";
codeNameDict["650100"] = "乌鲁木齐市";
codeNameDict["650200"] = "克拉玛依市";
codeNameDict["650400"] = "吐鲁番市";
codeNameDict["650500"] = "哈密市";
codeNameDict["652300"] = "昌吉回族自治州";
codeNameDict["652700"] = "博尔塔拉蒙古自治州";
codeNameDict["652800"] = "巴音郭楞蒙古自治州";
codeNameDict["652900"] = "阿克苏地区";
codeNameDict["653000"] = "克孜勒苏柯尔克孜自治州";
codeNameDict["653100"] = "喀什地区";
codeNameDict["653200"] = "和田地区";
codeNameDict["654000"] = "伊犁哈萨克自治州";
codeNameDict["654200"] = "塔城地区";
codeNameDict["654300"] = "阿勒泰地区";
codeNameDict["710000"] = "台湾";
codeNameDict["810000"] = "香港";
codeNameDict["820000"] = "澳门";