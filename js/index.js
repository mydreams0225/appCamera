var arr=[
    {"url":"./img/pic1.png"},
    {"url":"./img/pic2-1.png"},
    {"url":"./img/pic2-2.png"},
    {"url":"./img/pic2-4.png"},
    {"url":"./img/pic2.png"},
    {"url":"./img/pic3-2.png"},
    {"url":"./img/pic3-1.png"},
    {"url":"./img/pic1.png"},
    {"url":"./img/pic3-3.png"},
    {"url":"./img/pic1.png"},
    {"url":"./img/pic3-4.png"},
    {"url":"./img/pic1.png"},
    {"url":"./img/pic4-4.png"},
    {"url":"./img/pic4.png"},
    {"url":"./img/pic4.png"},
];

init();

function init(){
	renderPage();
	bindEvent();
    
}
//生成图片结构
function renderPage() {
	var str='';
	arr.forEach(function(ele,index){
		console.log(ele)
          str+='<li><img src="'+ele.url+'" alt=""></li>'
	})
	// for(var i=0;i<arr.length;i++){
 //        str+=' <li><img src="'+arr[i].url+'" alt=""></li>'
	// 
	$('li').css('height',$('li').width)
	$('.wrapper ul').append(str);
}
function bindEvent(){
	var activeIndex ;
     // $('li').on('tap',function(){

     // })
     // 事件委托
      $('ul').on('tap','li',function(){
     	//点击那张图片展示
     	//index
     	var index=$(this).index();
    
     	activeIndex=index;
     	loadImg(index);
     });
      $('.show').on('tap',function(){
      	$(this).css('display','none');
      }).on('swipeLeft',function(){
           activeIndex++;
            if(activeIndex < arr.length){
                loadImg(activeIndex);
            }
      }).on('swipeRight',function(){
          activeIndex--;
          if(activeIndex>0){
          	loadImg(activeIndex);
          }
      })
}
function loadImg(index){
     $('.show').html('');
	var deviceW_H=$(window).width/$(window).height;

    var img=new Image();
    img.src=arr[index].url;

    $('.show').css('display','block').append($(img));
    img.onload = function(){
        var imgW_H=img.width/img.height;
        if(imgW_H<deviceW_H){
           $(this).css('height','100%');
        }else{
            $(this).css('width','100%');
        }
    }
}
