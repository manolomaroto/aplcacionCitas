
 

window.onload = function(){


	checkCookie();
	$("#botonAceptarCookies").click(setCookie);
	
	
    
    function setCookie() {
    
    document.cookie = "cookie=true";
	$("#cajacookies").hide("slow");
}

	function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var cookieText = getCookie("cookie");
    if (cookieText == "true") {
        cajacookies.style.display = 'none';
    }
}


	
	var getNavi = document.getElementById('navigation');

	var mobile = document.createElement("span");
	mobile.setAttribute("id","mobile-navigation");
	getNavi.parentNode.insertBefore(mobile,getNavi);

	document.getElementById('mobile-navigation').onclick = function(){
		var a = getNavi.getAttribute('style');
		if(a){
			getNavi.removeAttribute('style');
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-menu.png)';
		} else {
			getNavi.style.display='block';
			document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile-close.png)';
		}
	};
	var getElm = getNavi.getElementsByTagName("LI");
	for(var i=0;i<getElm.length;i++){
		if(getElm[i].children.length>1){
			var smenu = document.createElement("span");
			smenu.setAttribute("class","mobile-submenu");
			smenu.setAttribute("OnClick","submenu("+i+")");
			getElm[i].appendChild(smenu);
		};
	};
	submenu = function (i){
		var sub = getElm[i].children[1];
		var b = sub.getAttribute('style');
		if(b){
			sub.removeAttribute('style');
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-expand.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(61, 179, 199, .9)';
		} else {
			sub.style.display='block';
			getElm[i].lastChild.style.backgroundImage='url(images/mobile-collapse.png)';
			getElm[i].lastChild.style.backgroundColor='rgba(0,0,0,0.8)';
		}
	};
};
