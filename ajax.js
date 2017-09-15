var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readystate === 4) {
		if(xhr.status === 200) {
			return success(xhr.responseText);
		} else {
			return fail(xhr.status)
		}
	}
}

xhr.open("GET", 'www.baidu.com');
xhr.send();