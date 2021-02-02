function clickText(str){
    var textPlace = text(str).findOnce();
    if(textPlace){
        if(!textPlace.click()){
            var p = textPlace.bounds();
            var x = click(p.centerX(),p.centerY()-30)
             } 
             } 
             }

function health(){ 
    auto.waitFor() 
    var appName = "微信"; 
    launchApp(appName);//打开微信
    toast('健康报送程序启动') // 启动提示
    sleep(2000)
    
    //打开公众号
    clickText('南工学生工作在线')
    sleep(3000)
    clickText('晨午日报')
    sleep(3000)
    clickText("健康日报")
    sleep(10000)
    
    //尝试提交，直到提交成功
    try{
        clickText("提交")
        sleep(3000)
        clickText("确定")
        sleep(3000)
        clickText("确定")
        }catch(e){}
}

health();
