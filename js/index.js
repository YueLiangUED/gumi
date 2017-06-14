$(document).ready(function(){
    $(".windo").hide();     	

	$('#p1').click(function(){windoNote(this);});
	$('#p2').click(function(){windoNote(this);});
	$('#p3').click(function(){windoNote(this);});
	$('#p4').click(function(){windoNote(this);});
	$('#p5').click(function(){windoNote(this);});
	$('#p6').click(function(){windoNote(this);});
	$('#p7').click(function(){windoNote(this);});
	$('#p8').click(function(){windoNote(this);});
	$('#p9').click(function(){windoNote(this);});
	$('#p10').click(function(){windoNote(this);});
	$('#p11').click(function(){windoNote(this);});
});


var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000,//可选选项，自动滑动
	watchSlidesProgress : true,
	watchSlidesVisibility : true,
	pagination : '.swiper-pagination',
	paginationClickable :true,
	effect : 'coverflow',
	slidesPerView: 2,
	centeredSlides: true,
	coverflow: {
				rotate: 30,
				stretch: 10,
				depth: 60,
				modifier: 2,
				slideShadows : true
			}
	})
mySwiper.progress;
mySwiper.slides[2].progress;
	



function showMask(){     
	$("#mask").css("height",$(document).height());     
    $("#mask").css("width",$(document).width());     
    $("#mask").show();  
	document.body.style.overflowY = "hidden";
	}  
    //隐藏遮罩层  
function hideMask(){    
    $("#mask").hide();   
    $(".windo").hide();  
	document.body.style.overflowY = "auto";	   
    }  

function windoNote(obj){
	var mbid = obj.id;	
	var mbnote;
	var mbname;
	switch(parseInt(mbid.substring(1)))
	{
		case 1:
			mbnote = '50本最新热榜图书免费读。';
			mbname = '1元阅读包';
		break;	
		case 2:
			mbnote = '可同时观看影视、娱乐、体育、动漫、财经、搞笑、原创、军事法制、时尚、新闻等栏目的所有节目。';
			mbname = '咪咕视频';
		break;		
		case 3:
			mbnote = '为您提供了一个自我录制彩铃的平台，您可自行录制个性化音乐作为彩铃铃音。';
			mbname = '彩铃DIY';
		break;		
		case 4:
			mbnote = '用户订购游戏玩家后，咪咕游戏中所有道具八折，部分游戏限时免费。';
			mbname = '咪咕游戏白银玩家';
		break;		
		case 5:
			mbnote = '享受咪咕动漫客户端海量作品免费观看。';
			mbname = '咪咕动漫会员';
		break;		
		case 6:
			mbnote = '通过咪咕音乐的网站或APP平台向喜爱音乐的客户提供一系列整合的音乐产品和服务，核心权益包括免费彩铃功能和7折优惠等。';
			mbname = '无线音乐俱乐部咪咕特级会员';
		break;		
		case 7:
			mbnote = '咪咕音乐超清白金会员通过“开放全曲库”和“高清及其他特色权益”为移动和互联网用户提供更优质及全面的音乐体验。';
			mbname = '咪咕音乐超清白金会员';
		break;		
		case 8:
			mbnote = '可同时观看影视、娱乐、体育、动漫、财经、搞笑、原创、军事法制、时尚、新闻等栏目的所有节目。';
			mbname = '咪咕视频';
		break;		
		case 9:
			mbnote = '50本最新热榜图书免费读。';
			mbname = '1元阅读包';
		break;		
		case 10:
			mbnote = '当朋友拨打您的电话时，能听到您自行设定的一段个性化音乐或录音，来代替普通的“嘟嘟”铃声。';
			mbname = '彩铃';
		break;		
		case 11:
			mbnote = '为您提供了一个自我录制彩铃的平台，您可自行录制个性化音乐作为彩铃铃音。';
			mbname = '彩铃DIY';
		break;		
		}
	
		$('.ind').text(mbnote);
		$('.ques').text('您确认开通' + mbname + '么？');
		showMask();
		$(".windo").show();  
		
	}
