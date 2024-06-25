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
			url: '/api/images.js',
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

	function loginForm() {
		form.on('submit(lr_login_submit)', function(obj){
			$.ajax({
				url: '/api/memberInfo.js',
				data: obj.field,
			        method: 'get',
			        dataType: 'JSON',
			        success: function (res) {
					let data = res.data[0];
					if(!(data.phone == obj.field.userPhone)) {
						$('.phones').focus();
						layer.msg('手机号输入错误', {offset: '80px', icon: 5, time: 1000});
					}else if(!(data.pass == obj.field.password)) {
						$('.password').focus();
						layer.msg('密码输入错误', {offset: '80px', icon: 5, time: 1000});
					}else if(!(data.codes == obj.field.codes)) {
						$('.codes').focus();
						layer.msg('验证码输入错误', {offset: '80px', icon: 5, time: 1000});
					}else {
						layer.msg('登入成功', {
							offset: '80px'
							, icon: 1
							, time: 1000
						}, function () {
							location.href = '#'; //后台主页
						});
					}
				},
				error: function (data) {
					layer.msg("网络请求错误！",{icon: 5});
				}
			});
		});
	}
    
   	exports('lrAll', {
	    	loginTs: loginTs,
		loginForm: loginForm
    	});
});
