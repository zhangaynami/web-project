// 获取显示时间的元素
var clockElement = document.getElementById('clock');

// 更新北京时间显示
function updateBeijingTime() {
    var now = new Date();
    var options = { timeZone: 'Asia/Shanghai', hour12: false };
    var beijingTime = now.toLocaleTimeString('en-US', options);
    var beijingDate = now.toLocaleDateString('cn-CN', { timeZone: 'Asia/Shanghai' });

    // 更新时钟元素的文本内容
    clockElement.textContent = beijingDate +"\n" + beijingTime;
    
}

// 页面加载时即启动时钟
updateBeijingTime();
setInterval(updateBeijingTime, 1000);
