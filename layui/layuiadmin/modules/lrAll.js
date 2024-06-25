/**
 @Name：layuiAdmin 公共业务
 @License：LPPL
 */
 
layui.define(function(exports){
    var $ = layui.$
    ,layer = layui.layer
    ,laytpl = layui.laytpl
    ,setter = layui.setter
    ,view = layui.view
    ,admin = layui.admin
    ,form = layui.form
	
    function loginTs() {
        $.ajax({
		url: 'https://lr12040717.github.io/api/images.js',
	       	method: 'GET',
	       	dataType: 'JSON',
	       	success: function (res) {
		        if (res.code == '0') {
                		var userAgent = navigator.userAgent.toLowerCase();
                 		if (userAgent.match(/(iphone|ipod|android|ios|mobile)/)) {
                 			layer.msg(res.msg + "手机端", {
                 			   	offset: '60px',
                 			       	icon: 1
                       			});
                 		} else {
                 			layer.msg(res.msg + "电脑端", {
                 				offset: '60px',
                 				icon: 1
                  			});
     				}
		        }
		     	else {
                   		layer.msg(res.msg);
	              	}
           	},
            	error: function () {
	               	layer.msg("网络请求错误！");
          	}
        });
    };
    
    exports('lrAll', {
	    loginTs: loginTs
    });
});
