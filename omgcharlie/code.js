var strStartDate = '2015/11/18 00:00';
var strEndDate = '2016/10/19 00:00';

var startDate = new Date(strStartDate);
var endDate = new Date(strEndDate);			
//var spantime = (endDate - startDate)/1000;
 

$(document).ready(function () {
		
		showSpinner(true);
		setInterval(checkTime, 1000);	
		$("#startDetail").text("起始時間:"+strStartDate);
		$("#endDetail").text("結束時間:"+strEndDate);				
});

function checkTime(){
	 
	var nowDate = //new Date('2016/10/20 00:00');
	Date.now();
	var timeToBebgin = startDate-nowDate;
	var spantime;
	//alert(timeToBebgin);
	
	if(timeToBebgin>0){
	
		spantime = (startDate-nowDate)/1000;
	
		showSpinner(false);					
	
		$("#daysToBegin").show();
		$("#daysLeft").hide();				
	
	}
	
	else{
	
		spantime = (endDate-nowDate)/1000;
		var totalSpan = (endDate-startDate)/1000;
		var percent = parseInt((100-((spantime/totalSpan)*100)));
						
		showSpinner(false);
	
		$("#daysToBegin").hide();
		$("#daysLeft").show();	

		$("#progressBar").text(percent+"%");
		$("#progressBar").attr("aria-valuenow", percent);
		$("#progressBar").css("width", percent+"%")
	}				
	
	 var d = Math.floor(spantime / (24 * 3600));
	 var h = Math.floor((spantime % (24*3600))/3600);
	 var m = Math.floor((spantime % 3600)/(60));
	 var s = Math.floor(spantime%60);

	 if(spantime>0){
		$(".day").text(d);
		$(".hour").text(h);
		$(".min").text(m);
		$(".sec").text(s);
	 }else{ // 避免倒數變成負的
		$(".hour").text(0);
		$(".min").text(0);
		$(".sec").text(0);
	 }

}

function showSpinner(show){
	if(show){
		$(".spinner").show();
	}
	else{
		$(".spinner").hide();
	}
}