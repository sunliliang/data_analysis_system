
var deviceArray=new Array()
deviceArray[1]="相机"
deviceArray[2]="尺寸测量仪"
deviceArray[4]="分拣板卡"
deviceArray[7]="动态称"
deviceArray[101]="电机"
deviceArray[102]="光电"
deviceArray[104]="驱动器"

var deviceCode = new Array();
deviceCode[1] = "条码相机";
deviceCode[2] = "尺寸测量仪";
deviceCode[3] = "灰度仪";
deviceCode[4] = "分拣板卡(大件)";
deviceCode[5] = "车载板卡(小件)";
deviceCode[6] = "分拣口状态(通用)";
deviceCode[7] = "动态称";
deviceCode[8] = "供包台";
deviceCode[9] = "PLC控制系统";
deviceCode[10] = "地控";
deviceCode[11] = "打印机";
deviceCode[12] = "交换机";
deviceCode[13] = "服务器";
deviceCode[14] = "小车";
deviceCode[15] = "分拣口状态板卡(通用)";
deviceCode[101] = "电机";
deviceCode[102] = "分拣光电";
deviceCode[103] = "归零光电(复位光电)";
deviceCode[104] = "电滚筒/驱动器";
deviceCode[105] = "急停按钮";
deviceCode[106] = "传输带";
deviceCode[107] = "小车皮带";
deviceCode[108] = "Scada向WCS设置设备状态";
deviceCode[109] = "防碰撞(PLC)";
deviceCode[110] = "电源PLC";
deviceCode[255] = "线体整体运行状态";

var stateType = new Array();
stateType[0] = "正常";
stateType[1] = "报警";
stateType[2] = "未连接";
stateType[3] = "子设备报警";

var alarmIn = [];
var n=1;
for(var i = 0;i < 300; i++){
    alarmIn[i] = []; //每行有10列
    for(var j = 0;j < 300; j++){
        alarmIn[i][j] = n;
        n++;
    }
}
alarmIn[1][0] = "正常.无故障";
alarmIn[1][1] = "资源被占用";
alarmIn[1][2] = "无数据";
alarmIn[1][3] = "凭证错误,可能是未插加密狗";
alarmIn[1][253] = "网络故障,未检测到设备";
alarmIn[1][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[2][0] = "正常,无故障";
alarmIn[2][1] = "资源申请失败,可能存在被占用";
alarmIn[2][2] = "无数据";
alarmIn[2][3] = "凭证错误,可能未插加密狗";
alarmIn[2][4] = "尺寸数据不准确";
alarmIn[2][253] = "网络故障,未检测到设备";
alarmIn[2][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[3][0] = "灰度仪正常,无故障";
alarmIn[3][1] = "资源申请失败,可能存在被占用";
alarmIn[3][2] = "无数据";
alarmIn[3][3] = "凭证错误,可能未插加密狗";
alarmIn[3][253] = "网络故障,未检测到设备";
alarmIn[3][255] = "其他,需要根据厂家故障码查询故障"

alarmIn[4][0] = "分拣办卡正常,无故障";
alarmIn[4][1] = "分拣板卡信息初始化失败";
alarmIn[4][2] = "分拣板卡无数据(分拣命令不回复)";
alarmIn[4][3] = "控制器(板卡)通讯正常";
alarmIn[4][4] = "控制器(板卡)通讯报警";
alarmIn[4][253] = "分拣板卡网络故障,未检测到设备";
alarmIn[4][254] = "子设备报警";
alarmIn[4][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[5][0] = "正常,无故障";
alarmIn[5][1] = "车载板卡信息初始化失败";
alarmIn[5][2] = "分拣板卡无数据(分拣板卡不回复)";
alarmIn[5][3] = "车载板卡通讯正常";
alarmIn[5][4] = "车载板卡通讯报警";
alarmIn[5][253] = "分拣板卡网络故障,未检测到设备";
alarmIn[5][254] = "子设备报警(小车,光电,电滚筒等)";
alarmIn[5][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[6][0] = "分拣口正常";
alarmIn[6][1] = "分拣口满袋";
alarmIn[6][2] = "分拣口关门(可继续下包)";
alarmIn[6][3] = "分拣口阻塞/卡包";
alarmIn[6][4] = "分拣口禁用";
alarmIn[6][5] = "分拣口未上电";
alarmIn[6][6] = "分拣口满槽";
alarmIn[6][7] = "分拣口关闭";
alarmIn[6][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[7][0] = "正常,无故障";
alarmIn[7][1] = "设备正常,秤体处于运行状态";
alarmIn[7][2] = "设备正常,秤体处于未运行状态";
alarmIn[7][3] = "无重量数据";
alarmIn[7][4] = "秤体归零失败,存在卡件可能";
alarmIn[7][253] = "网络故障,未检测到设备";
alarmIn[7][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[8][0] = "供包台正常";
alarmIn[8][1] = "供包台初始化失败";
alarmIn[8][2] = "无供包数据";
alarmIn[8][3] = "网络故障,未检测到设备";
alarmIn[8][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[9][0] = "正常";
alarmIn[9][1] = "PLC初始化失败";
alarmIn[9][2] = "无数据";
alarmIn[9][253] = "网络故障,未检测到设备";
alarmIn[9][254] = "子设备报警(急停按钮,电滚筒等)";
alarmIn[9][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[10][0] = "正常";
alarmIn[10][1] = "地控初始化失败";
alarmIn[10][2] = "无地控数据";
alarmIn[10][253] = "网络故障,未检测到设备";
alarmIn[10][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[11][0] = "打印机正常";
alarmIn[11][1] = "打印机异常(原因未知)";
alarmIn[11][2] = "打印机卡纸";
alarmIn[11][3] = "打印机缺纸";
alarmIn[11][4] = "打印机碳带即将用尽";
alarmIn[11][5] = "使用中";
alarmIn[11][253] = "打印机网络异常";
alarmIn[11][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[12][0] = "交换机正常";
alarmIn[12][1] = "交换机异常";
alarmIn[12][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[13][0] = "服务器正常";
alarmIn[13][1] = "服务器异常";
alarmIn[13][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[14][0] = "正常,无故障";
alarmIn[14][1] = "运行";
alarmIn[14][2] = "停止";
alarmIn[14][3] = "人工故障,人为设置故障设备";
alarmIn[14][4] = "头车光电多一个";
alarmIn[14][5] = "头车光电少一个";
alarmIn[14][6] = "头车光电触发时间波动大";
alarmIn[14][7] = "从车丢失一个光电";
alarmIn[14][8] = "从车丢失至少两个光电";
alarmIn[14][9] = "从车丢了4包合一数据";
alarmIn[14][10] = "小车485通信正常";
alarmIn[14][11] = "小车485通讯异常";
alarmIn[14][253] = "网络故障,未检测到设备";
alarmIn[14][254] = "子设备报警(电滚筒,皮带等)";
alarmIn[14][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[15][0] = "格口状态板卡正常";
alarmIn[15][1] = "格口状态板卡初始化失败(预留)";
alarmIn[15][2] = "格口状态板卡无数据";
alarmIn[15][3] = "格口状态板卡通讯正常(预留)";
alarmIn[15][4] = "格口状态通讯报警(预留)";
alarmIn[15][253] = "格口状态板卡网络故障,未检测到设备";
alarmIn[15][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[101][0] = "电机正常";
alarmIn[101][1] = "电机异常(原因未知)";
alarmIn[101][2] = "电机过流";
alarmIn[101][3] = "电机过压";
alarmIn[101][4] = "电机短路";
alarmIn[101][253] = "电机线路故障,未检测到设备";
alarmIn[101][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[102][0] = "光电正常";
alarmIn[102][1] = "光电异常(原因未知)";
alarmIn[102][2] = "光电长时间未复位";
alarmIn[102][253] = "光电线路故障,未检测到设备";
alarmIn[102][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[103][0] = "光电正常";
alarmIn[103][1] = "光电异常(原因未知)";
alarmIn[103][2] = "光电长时间未复位";
alarmIn[103][253] = "光电线路故障,未检测到设备";
alarmIn[103][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[104][0] = "驱动器正常";
alarmIn[104][1] = "驱动器异常";
alarmIn[104][2] = "驱动器过流";
alarmIn[104][3] = "驱动器过压";
alarmIn[104][4] = "驱动器短路";
alarmIn[104][253] = "驱动器线路故障,未检测到设备";
alarmIn[104][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[105][0] = "急停按钮正常(未被按下)";
alarmIn[105][1] = "急停按钮异常异常(原因未知)";
alarmIn[105][2] = "急停按钮被按下";
alarmIn[105][253] = "急停按钮线路故障或未上电,未检测到设备";
alarmIn[105][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[106][0] = "传输带正常.正常运行";
alarmIn[106][1] = "传输带正常停止";
alarmIn[106][2] = "传输带异常(原因未知)";
alarmIn[106][3] = "传输带堵包停止";
alarmIn[106][4] = "传送带唤醒";
alarmIn[106][5] = "传送带BYPASS";
alarmIn[106][6] = "传送带取消BYPASS";
alarmIn[106][7] = "传送带直通";
alarmIn[106][8] = "传送带取消直通";
alarmIn[106][9] = "传送带堵包复位";
alarmIn[106][10] = "传送带总复位";
alarmIn[106][253] = "传输带线路故障或者未上电,未检测到设备";
alarmIn[106][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[107][0] = "小车皮带正常";
alarmIn[107][1] = "传输带异常(原因)";
alarmIn[107][255] = "其他,需要根据厂家故障码查询故障";

alarmIn[255][0] = "识别率正常";
alarmIn[255][1] = "识别率低";
alarmIn[255][2] = "分拣率正常";
alarmIn[255][3] = "分拣率低";
alarmIn[255][4] = "回流率正常";
alarmIn[255][5] = "回流率高";
alarmIn[255][6] = "重量读取正常";
alarmIn[255][7] = "重量读取率低";
alarmIn[255][8] = "体积读取率正常";
alarmIn[255][9] = "体积读取率低";
alarmIn[255][255] = "其他,需要根据厂家故障码查询故障";

