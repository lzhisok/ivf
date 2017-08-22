$(function() {
	var width = 282;//获取单个子元素的宽度
	var num = $('.adapt_crowd .box_list').children('li').length;//获取子元素数量
	var allWidth = width * num + 24 * num;
	$('.adapt_crowd .box_list').width(allWidth);
	var i = 0;

	$('#right').click(function() {
		i++;
		if(i<num) {
			$('.adapt_crowd .box_list').css("left", -(width+24)*i);
		}
		else{
			i=num-1;
			$('.adapt_crowd .box_list').css("left", -(width+24)*i);
		}
	});

	$('#left').click(function() {
		i--;
		if(i>=0) {
			$('.adapt_crowd .box_list').css("left", -(width+24)*i);
		}
		else{
			i=0;
			$('.adapt_crowd .box_list').css("left", 0);
		}
	});

	// doctors图片滚动
	var doctorWidth = 264,
		doctorUl = $(".doctors_list_container .doctors_list ul");
		doctorNum = $(".doctors_list_container .doctors_list ul").children(".doctor_box").length,
		doctorsAllWidth = (doctorWidth + 8) * doctorNum,
		j=0;

	doctorUl.width(doctorsAllWidth);

	$("#right_doctor").click(function() {
		j++;
		if(j<doctorNum) {
			// $(".doctors_list_container .doctors_list ul").css('left', -(doctorWidth + 8)*j);
			doctorUl.animate({left: -(doctorWidth + 8)*j}, "slow");
		}
		else{
			j=doctorNum-1;
			doctorUl.animate({left: -(doctorWidth + 8)*j}, "slow");
		}
	});

	$('#left_doctor').click(function() {
		j--;
		if(j>=0) {
			doctorUl.animate({left: -(doctorWidth + 8)*j}, "slow");
		}
		else{
			j=0;
			doctorUl.animate({left: 0}, "slow");
		}
	})
})