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
	autoplay: 5000,//��ѡѡ��Զ�����
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
    //�������ֲ�  
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
			mbnote = '50�������Ȱ�ͼ����Ѷ���';
			mbname = '1Ԫ�Ķ���';
		break;	
		case 2:
			mbnote = '��ͬʱ�ۿ�Ӱ�ӡ����֡��������������ƾ�����Ц��ԭ�������·��ơ�ʱ�С����ŵ���Ŀ�����н�Ŀ��';
			mbname = '�乾��Ƶ';
		break;		
		case 3:
			mbnote = 'Ϊ���ṩ��һ������¼�Ʋ����ƽ̨����������¼�Ƹ��Ի�������Ϊ����������';
			mbname = '����DIY';
		break;		
		case 4:
			mbnote = '�û�������Ϸ��Һ��乾��Ϸ�����е��߰��ۣ�������Ϸ��ʱ��ѡ�';
			mbname = '�乾��Ϸ�������';
		break;		
		case 5:
			mbnote = '�����乾�����ͻ��˺�����Ʒ��ѹۿ���';
			mbname = '�乾������Ա';
		break;		
		case 6:
			mbnote = 'ͨ���乾���ֵ���վ��APPƽ̨��ϲ�����ֵĿͻ��ṩһϵ�����ϵ����ֲ�Ʒ�ͷ��񣬺���Ȩ�������Ѳ��幦�ܺ�7���Żݵȡ�';
			mbname = '�������־��ֲ��乾�ؼ���Ա';
		break;		
		case 7:
			mbnote = '�乾���ֳ���׽��Աͨ��������ȫ���⡱�͡����弰������ɫȨ�桱Ϊ�ƶ��ͻ������û��ṩ�����ʼ�ȫ����������顣';
			mbname = '�乾���ֳ���׽��Ա';
		break;		
		case 8:
			mbnote = '��ͬʱ�ۿ�Ӱ�ӡ����֡��������������ƾ�����Ц��ԭ�������·��ơ�ʱ�С����ŵ���Ŀ�����н�Ŀ��';
			mbname = '�乾��Ƶ';
		break;		
		case 9:
			mbnote = '50�������Ȱ�ͼ����Ѷ���';
			mbname = '1Ԫ�Ķ���';
		break;		
		case 10:
			mbnote = '�����Ѳ������ĵ绰ʱ���������������趨��һ�θ��Ի����ֻ�¼������������ͨ�ġ��ཡ�������';
			mbname = '����';
		break;		
		case 11:
			mbnote = 'Ϊ���ṩ��һ������¼�Ʋ����ƽ̨����������¼�Ƹ��Ի�������Ϊ����������';
			mbname = '����DIY';
		break;		
		}
	
		$('.ind').text(mbnote);
		$('.ques').text('��ȷ�Ͽ�ͨ' + mbname + 'ô��');
		showMask();
		$(".windo").show();  
		
	}
