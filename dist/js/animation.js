$(function() {
	var width = 282;//获取单个子元素的宽度;
	var num = $('.adapt_crowd .box_list').children('li').length;//获取子元素数量
	var showNum = num - 4;
	var allWidth = width * num + 24 * num;
	$('.adapt_crowd .box_list').width(allWidth);
	var i = 0;

	

	$('#right').click(function() {
		i++;
		if(i<showNum) {
			$('.adapt_crowd .box_list').css("left", -(width+24)*i);
			$('#left').css('background-color', '#1ebcd9');
		}
		else{
			i=showNum;
			$('.adapt_crowd .box_list').css("left", -(width+24)*i);
			$('#right').css('background-color', '#c1c1c1');
		}
	});

	$('#left').click(function() {
		i--;
		if(i>0) {
			$('.adapt_crowd .box_list').css("left", -(width+24)*i);
			$('#right').css('background-color', '#1ebcd9');
		}
		else{
			i=0;
			$('.adapt_crowd .box_list').css("left", 0);
			$('#left').css('background-color', '#c1c1c1');
		}
	});
	


	// doctors图片滚动
	var doctorWidth = 264,
		doctorUl = $(".doctors_list_container .doctors_list ul");
		doctorNum = $(".doctors_list_container .doctors_list ul").children(".doctor_box").length,
		doctorShowNum = doctorNum - 4;
		doctorsAllWidth = (doctorWidth + 8) * doctorNum,
		j=0;

	doctorUl.width(doctorsAllWidth);

	$("#right_doctor").click(function() {
		j++;
		if(j<doctorShowNum) {
			doctorUl.animate({left: -(doctorWidth + 8)*j}, 500);
			$('#left_doctor').css('background-color', '#1ebcd9');
		}
		else{
			j=doctorShowNum;
			doctorUl.animate({left: -(doctorWidth + 8)*j}, 500);
			$('#right_doctor').css('background-color', '#c1c1c1');
		}
	});

	$('#left_doctor').click(function() {
		j--;
		if(j>0) {
			doctorUl.animate({left: -(doctorWidth + 8)*j}, 500);
			$('#right_doctor').css('background-color', '#1ebcd9');
		}
		else{
			j=0;
			doctorUl.animate({left: 0}, 500);
			$('#left_doctor').css('background-color', '#c1c1c1');
		}
	})
})