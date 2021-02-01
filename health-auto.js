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
    launchApp(appName);
    toast('健康报送程序启动') // 点击微信 
   
    sleep(2000) // 下拉获取小程序目录 
    
    //gestures([500,[300,300],[300,1600]]); //寻找情况报送 
   
    //sleep(3000)
   
    
    clickText('南工学生工作在线')
    sleep(3000)
    clickText('晨午日报')
    sleep(3000)
    clickText("健康日报")
    sleep(10000)
    //gesture(500,[300,2000],[300,300])
    //clickText("提交")
    
    try{
        clickText("提交")
        sleep(3000)
        clickText("确定")
        sleep(3000)
        clickText("确定")
        }catch(e){}
    
//try{
        //clickText('选择当前体温');
        //click(380,1376)
        //sleep(1000);
        //clickText('确定')
        //sleep(2000)

        // 选择四类人员
        //clickText('请选择')
        
        //sleep(2000)
        //clickText('确定')
        //sleep(2000)
        //gestures([500,[300,1300],[300,300]]);
        //sleep(1000);

        // 提交情况报送
        //clickText('提交')
        //sleep(2000)
       // }catch(e){}
}
health()

