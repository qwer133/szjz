window.onload=function(){
    var hcon1=document.querySelector('.h1_con');
    var bansentow=document.querySelector('.bann .b_sen .b_tow1');
    var list=document.querySelector('.head1 .h1_logo');
    var hlist=document.querySelector('.hlist');
    var wx=document.querySelector('.wx');
    var wxbtn=document.querySelector('.head1 .h1_con .h1_r p a');
    var bann=document.querySelector('.bann');
    var upimg=document.querySelector('.bann .b_fir a .up img');
    var downimg=document.querySelector('.bann .b_fir a .down img');
    var wx=document.querySelector('.wx');
    var wxdiv=document.querySelector('.wx div');
    var bantow=document.querySelector('.bann .b_sen .b_tow2');
    var onethe=document.querySelector('.bann .b_sen .b_tow3');
    var bfir=document.querySelector('.bann .b_fir');
    var bsen=document.querySelector('.bann .b_sen');
    var bth=document.querySelector('.bann .b_th');
    var bbtn1=document.querySelector('.bann .b_btn1');
    var bbtn2=document.querySelector('.bann .b_btn2');
    var bq=document.querySelector('.bann .b_q');
    var bqli=document.querySelectorAll('.bann .b_q li');
    var listcen=document.querySelectorAll('.listcen');
    var listcenline1=document.querySelectorAll('.listcen .line:first-of-type');
    var listcenline2=document.querySelectorAll('.listcen .line:nth-of-type(2)');
    var listcenline3=document.querySelectorAll('.listcen .line:nth-of-type(3)');
    var listcenline4=document.querySelectorAll('.listcen .line:last-of-type');
    var listcena=document.querySelectorAll('.listcen ul li a');
    var listcenf=document.querySelectorAll('.listcen ul li a .font .fonth3');
    var spli=document.querySelectorAll('.speak ul li');
    var spliimg=document.querySelectorAll('.speak ul li img');
    var ftyxclhxone=document.querySelector('.ftyx_content .ftyx_c_l .ftyx_c_l_h p:first-child a:first-of-type');
    var ftyxclhxtow=document.querySelector('.ftyx_content .ftyx_c_l .ftyx_c_l_h p:first-child a:last-of-type');
    var ftyxclhxonec=document.querySelector('.ftyx_content .ftyx_c_l .ftyx_c_l_c');
    var ftyxclhxoneul=document.querySelector('.ftyx_content .ftyx_c_l .ftyx_c_l_c ul:first-child');
    var ftyxclhxtowul=document.querySelector('.ftyx_content .ftyx_c_l .ftyx_c_l_c ul:last-child');

    

    //获取底部有营销栏绑定鼠标触摸样式
    ftyxclhxonec.style.height='435px';
    ftyxclhxone.onmouseover=function(){
        this.classList.add('ftyxstyle');
        ftyxclhxoneul.style.display='block';
        ftyxclhxtowul.style.display='none';
        ftyxclhxtow.classList.remove('ftyxstyle');
        ftyxclhxonec.style.height='435px';
    }

    ftyxclhxtow.onmouseover=function(){
        this.classList.add('ftyxstyle');
        ftyxclhxoneul.style.display='none';
        ftyxclhxtowul.style.display='block';
        ftyxclhxone.classList.remove('ftyxstyle');
        ftyxclhxonec.style.height='255px';
    }


    //控制中间列表的行高
    for(var i=0;i<listcenf.length;i++){
        listcenf[i].style.marginTop=-(listcenf[i].offsetHeight)/2+"px";

        //鼠标触摸中间列表栏特效
        listcena[i].onmouseover=function(){
            this.style.transform='translateZ(4px)';
            var num=this.dataset.num;
            listcenline1[num].style.width="95%";
            listcenline4[num].style.width='95%';
            listcenline2[num].style.height='95%';
            listcenline3[num].style.height='95%';
        }
        listcena[i].onmouseout=function(){
           this.style.transform='translateZ(0px)';
           var num=this.dataset.num;
           listcenline1[num].style.width="0%";
           listcenline4[num].style.width='0%';
           listcenline2[num].style.height='0%';
           listcenline3[num].style.height='0%';
        }

    }
    //绑定宣传栏特效
    for(var i=0;i<spli.length;i++){
        spli[i].onmouseover=function(){
            var one=this.dataset.one;
            spliimg[one].style.transform='translateY(0px)';
        }
        spli[i].onmouseout=function(){
            var one=this.dataset.one;
            spliimg[one].style.transform='translateY(20px)';
        }
    }
    //绑定微信点击事件
    wxdiv.onclick=function(){
        wx.style.display='none';
    }
  
      //点击a标签显示微信弹出框
     //设置微信显示时长
     var wxnum=0;
    wxbtn.onclick=function(){
        wx.style.display='block';
        wxnum=0;
    }
    var num=0;
    //设置num的奇偶性来控制下拉列表的隐藏与显示
    list.onclick=function(){
        num++;
        if(num%2==0){
            hlist.style.display='none';
        }else{
            hlist.style.display='block';
        }
    }

    //获取屏幕的宽度来控制下拉列表的隐藏与显示
    var bodyw;
    var bconw;
    var ifd=0;
    setInterval(function(){
        /*获取轮播图下面的圆点左边距*/
        bq.style.marginLeft=-(bq.offsetWidth)/2+"px";

        wxnum=(wxnum+10);
        if(wxnum==10000){
            wx.style.display='none';
        }
        /*屏幕宽度大于992的时候就隐藏下拉列表*/
        bodyw=document.body.offsetWidth;
        bconw=hcon1.offsetWidth;
        //控制banner二屏的样式
        if(bodyw-bconw==0){
            bansentow.style.left='30px';
            if(ifd==1){
                bbtn1.style.left='10px';
                bbtn2.style.right='10px';
            }else{
                bbtn1.style.left='-10px';
                bbtn2.style.right='-10px';
            }
        }else{
            bansentow.style.left=(bodyw-bconw)/2+'px';
            if(ifd==1){
                bbtn1.style.left=(bodyw-bconw)/2+'px';
                bbtn2.style.right=(bodyw-bconw)/2+'px';
            }
            else{
                bbtn1.style.left=(bodyw-bconw)/4+'px';
                bbtn2.style.right=(bodyw-bconw)/4+'px';
            }
        }
        if(bodyw>992){
            hlist.style.display='none';
        }
        /*屏幕小于等于1200的时候bann部分实行响应式变化*/
        var bannw=bann.offsetWidth;
        if(bannw<=1200){
            bann.style.height=bannw/2+'px';
            //设置第一屏的img宽度
            upimg.style.width=bannw/2.4+"px";
            downimg.style.width=bannw+'px';
        }
    },10)

    //添加定时器来控制三屏三段的动画
    setTimeout(function(){
        onethe.style.display='block';
    },1000)

     //封装一个index判断函数
    

     //绑定轮播图触摸事件
        bqli[0].onmouseover=function(){
            bqli[0].style.color='red';
            bqli[0].classList.remove('icon-yuanquan');
            bqli[0].classList.add('icon-yuanquan2');
            bqli[2].style.color='white';
            bqli[2].classList.remove('icon-yuanquan2');
            bqli[2].classList.add('icon-yuanquan');
            bqli[1].style.color='white';
            bqli[1].classList.add('icon-yuanquan');
            bqli[1].classList.remove('icon-yuanquan2');
            ind(2);
        }
        bqli[1].onmouseover=function(){
            bqli[1].style.color='red';
            bqli[1].classList.add('icon-yuanquan2');
            bqli[1].classList.remove('icon-yuanquan');
            bqli[0].style.color='white';
            bqli[0].classList.add('icon-yuanquan');
            bqli[0].classList.remove('icon-yuanquan2');
            bqli[2].style.color='white';
            bqli[2].classList.remove('icon-yuanquan2');
            bqli[2].classList.add('icon-yuanquan');
            ind(1);
        }
        bqli[2].onmouseover=function(){
            bqli[1].style.color='white';
            bqli[1].classList.add('icon-yuanquan');
            bqli[1].classList.remove('icon-yuanquan2');
            bqli[0].style.color='white';
            bqli[0].classList.add('icon-yuanquan');
            bqli[0].classList.remove('icon-yuanquan2');
            bqli[2].style.color='red';
            bqli[2].classList.add('icon-yuanquan2');
            bqli[2].classList.remove('icon-yuanquan');
            ind(3);
        }
     //定义一个函数来操作轮播图下面的圆点按钮
     function ind(index){
        if(index==2){
            bfir.style.display='block';
            bsen.style.display='none';
            bth.style.display='none';
            bqli[0].style.color='red';
            bqli[0].classList.remove('icon-yuanquan');
            bqli[0].classList.add('icon-yuanquan2');
            bqli[2].style.color='white';
            bqli[2].classList.remove('icon-yuanquan2');
            bqli[2].classList.add('icon-yuanquan');
        }else if(index==1){
            bfir.style.display='none';
            bsen.style.display='block';
            bth.style.display='none';
            bqli[0].style.color='white';
            bqli[0].classList.add('icon-yuanquan');
            bqli[0].classList.remove('icon-yuanquan2');
            bqli[1].style.color='red';
            bqli[1].classList.add('icon-yuanquan2');
            bqli[1].classList.remove('icon-yuanquan');
        }else if(index==3){
            index=3;
            bfir.style.display='none';
            bsen.style.display='none';
            bth.style.display='block';
            bqli[1].style.color='white';
            bqli[1].classList.add('icon-yuanquan');
            bqli[1].classList.remove('icon-yuanquan2');
            bqli[2].style.color='red';
            bqli[2].classList.add('icon-yuanquan2');
            bqli[2].classList.remove('icon-yuanquan');
        }
    }
    //设置定时器
    var index1=3;
    //绑定左右按钮的点击事件
    bbtn1.onclick=function(){
        index1++;
        if(index1==4){
            index1=1;
        }
        ind(index1);
    }
    bbtn2.onclick=function(){
        index1--;
        if(index1==0){
            index1=3;
        }
        ind(index1);
    }
    var timer=setInterval(function(){
       index1--;
       if(index1==0){
           index1=3;
       }
       ind(index1);
    },2000)

    //添加鼠标触摸事件
    bann.onmouseover=function(){
       clearInterval(timer);
       ifd=1;
       bbtn1.style.opacity=1;
       bbtn2.style.opacity=1;
    }
    //触摸结束事件
    bann.onmouseout=function(){
        timer=setInterval(function(){
            index1--;
            if(index1==0){
                index1=3;
            }
            ind(index1);
         },2000)

         ifd=0;
         bbtn1.style.opacity=0;
         bbtn2.style.opacity=0;

    }
    //添加定时器来控制二屏二段的动画
    setTimeout(function(){
        bantow.style.display='block';
    },2000)
}