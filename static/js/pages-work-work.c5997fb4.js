(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-work"],{"0f98":function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("d4b5");var n={vibrate:function(t,i){try{console.log("震动频率",t);var e=plus.android.importClass("android.os.Build");if(e.VERSION.SDK_INT>=26){var n=plus.android.importClass("android.content.Context"),a=plus.android.runtimeMainActivity(),s=a.getSystemService(n.VIBRATOR_SERVICE),r=plus.android.importClass("android.media.AudioAttributes"),o=new r.Builder;plus.android.invoke(o,"setContentType",r.CONTENT_TYPE_SONIFICATION),plus.android.invoke(o,"setUsage",r.USAGE_ALARM);var u=plus.android.invoke(o,"build");plus.android.invoke(s,"vibrate",t,i,u)}else plus.device.vibrate()}catch(l){console.log(JSON.stringify(l))}},cancelVibrate:function(){var t=plus.android.importClass("android.os.Build");if(t.VERSION.SDK_INT>=26){var i=plus.android.runtimeMainActivity().getSystemService("vibrator");plus.android.invoke(i,"cancel")}}};var a=n;i.default=a},"2dc5":function(t,i,e){"use strict";e.r(i);var n=e("aedc"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"308e":function(t,i,e){var n=e("4eca");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("0d96d36d",n,!0,{sourceMap:!1,shadowMode:!1})},"4eca":function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,".lr_work_item[data-v-30172935]{padding:%?30?%;border-bottom:%?1?% solid #ebeef5;display:flex;line-height:%?45?%}.lr_work_left_icon[data-v-30172935]{margin-right:%?10?%;font-size:%?32?%;margin-top:%?-3?%}.lr_work_con_title[data-v-30172935]{flex:1 auto}.lr_work_right_icon[data-v-30172935]{color:#999}.lr_work_right_title[data-v-30172935]{display:inline-block;margin-right:%?10?%}",""]),t.exports=i},"6ce8":function(t,i,e){"use strict";e.r(i);var n=e("bd3e"),a=e("2dc5");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("6eb7");var r=e("828b"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"8763095c",null,!1,n["a"],void 0);i["default"]=o.exports},"6eb7":function(t,i,e){"use strict";var n=e("c349"),a=e.n(n);a.a},"7de0":function(t,i,e){"use strict";e.r(i);var n=e("fefa"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},aedc:function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("64aa");var n={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};i.default=n},bd3e:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"u-gap",style:[this.gapStyle]})},a=[]},be6d:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uAvatar:e("5bc6").default,uIcon:e("586b").default,uGap:e("6ce8").default,uCellGroup:e("6017").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{},[e("v-uni-view",{staticClass:"lr_bg_white u-flex user-box u-p-t-30 u-p-l-20 u-p-r-20 u-p-b-20",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.member()}}},[e("v-uni-view",{staticClass:"u-m-r-10"},[e("u-avatar",{attrs:{src:t.photo,size:"140"}})],1),e("v-uni-view",{staticClass:"u-flex-1 u-p-l-10"},[e("v-uni-view",{staticClass:"u-font-18 u-p-b-20 lr_ellipsis01"},[t._v("姓名：李四")]),e("v-uni-view",{staticClass:"u-font-14 u-tips-color lr_ellipsis01"},[t._v("所属部门：第三大队")])],1),e("v-uni-view",{staticClass:"u-m-l-10 u-p-10"},[e("u-icon",{attrs:{name:"arrow-right",color:"#969799",size:"28"}})],1)],1),e("u-gap",{attrs:{height:"20"}}),e("u-cell-group",[e("v-uni-view",{staticClass:"lr_work_item lr_color_blue lr_font_bold"},[e("v-uni-view",{staticClass:"lr_work_con_title"},[t._v("选择日期："+t._s(t.formattedTime))])],1),t._l(t.days,(function(i,n){return e("v-uni-view",{key:n},[4==i.status?e("v-uni-view",{staticClass:"lr_work_item"},[e("v-uni-view",{staticClass:"lr_work_left_icon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bells()}}},[e("u-icon",{attrs:{name:"bell"}})],1),e("v-uni-view",{staticClass:"lr_work_con_title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.map(i)}}},[t._v(t._s(i.title)+" - "+t._s(i.start)+" ~ "+t._s(i.end))]),e("v-uni-view",{staticClass:"lr_work_right_icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.map(i)}}},[e("v-uni-text",{staticClass:"lr_work_right_title lr_color_green"},[e("v-uni-text",[t._v(t._s(i.statusName))]),0!==i.progress?e("v-uni-text",[t._v("-"+t._s(i.progress)+"%")]):t._e()],1),e("u-icon",{attrs:{name:"arrow-right"}})],1)],1):t._e(),3==i.status?e("v-uni-view",{staticClass:"lr_work_item lr_color_blue"},[e("v-uni-view",{staticClass:"lr_work_left_icon ",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bells()}}},[e("u-icon",{attrs:{name:"bell-fill"}})],1),e("v-uni-view",{staticClass:"lr_work_con_title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.map(i)}}},[t._v(t._s(i.title)+" - "+t._s(i.start)+" ~ "+t._s(i.end))]),e("v-uni-view",{staticClass:"lr_work_right_icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.map(i)}}},[e("v-uni-text",{staticClass:"lr_work_right_title lr_color_blue"},[e("v-uni-text",[t._v(t._s(i.statusName))]),0!==i.progress?e("v-uni-text",[t._v("-"+t._s(i.progress)+"%")]):t._e()],1),e("u-icon",{attrs:{name:"arrow-right"}})],1)],1):t._e(),2==i.status?e("v-uni-view",{staticClass:"lr_work_item lr_color_yellow"},[e("v-uni-view",{staticClass:"lr_work_left_icon ",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bells()}}},[e("u-icon",{attrs:{name:"bell-fill"}})],1),e("v-uni-view",{staticClass:"lr_work_con_title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.map(i)}}},[t._v(t._s(i.title)+" - "+t._s(i.start)+" ~ "+t._s(i.end))]),e("v-uni-view",{staticClass:"lr_work_right_icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.map(i)}}},[e("v-uni-text",{staticClass:"lr_work_right_title lr_color_yellow"},[e("v-uni-text",[t._v(t._s(i.statusName))]),0!==i.progress?e("v-uni-text",[t._v("-"+t._s(i.progress)+"%")]):t._e()],1),e("u-icon",{attrs:{name:"arrow-right"}})],1)],1):t._e(),1==i.status?e("v-uni-view",{staticClass:"lr_work_item"},[e("v-uni-view",{staticClass:"lr_work_left_icon ",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.bells()}}},[e("u-icon",{attrs:{name:"lock"}})],1),e("v-uni-view",{staticClass:"lr_work_con_title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.map(i)}}},[t._v(t._s(i.title)+" - "+t._s(i.start)+" ~ "+t._s(i.end))]),e("v-uni-view",{staticClass:"lr_work_right_icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.map(i)}}},[e("v-uni-text",{staticClass:"lr_work_right_title"},[e("v-uni-text",[t._v(t._s(i.statusName))]),0!==i.progress?e("v-uni-text",[t._v("-"+t._s(i.progress)+"%")]):t._e()],1),e("u-icon",{attrs:{name:"arrow-right"}})],1)],1):t._e()],1)}))],2),e("u-gap",{attrs:{height:"20"}}),e("u-cell-group",[e("v-uni-view",{staticClass:"lr_work_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.record()}}},[e("v-uni-view",{staticClass:"lr_work_left_icon "},[e("u-icon",{attrs:{name:"file-text"}})],1),e("v-uni-view",{staticClass:"lr_work_con_title"},[t._v("历史轨迹")]),e("v-uni-view",{staticClass:"lr_work_right_icon"},[e("v-uni-text",{staticClass:"lr_work_right_title"},[e("v-uni-text"),e("v-uni-text")],1),e("u-icon",{attrs:{name:"arrow-right"}})],1)],1)],1),e("u-gap",{attrs:{height:"20"}}),e("u-cell-group",[e("v-uni-view",{staticClass:"lr_work_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.phone()}}},[e("v-uni-view",{staticClass:"lr_work_left_icon "},[e("u-icon",{attrs:{name:"kefu-ermai"}})],1),e("v-uni-view",{staticClass:"lr_work_con_title"},[t._v("客服电话")]),e("v-uni-view",{staticClass:"lr_work_right_icon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.map(t.item)}}},[e("v-uni-text",{staticClass:"lr_work_right_title"},[e("v-uni-text"),e("v-uni-text")],1),e("u-icon",{attrs:{name:"arrow-right"}})],1)],1)],1)],1),e("u-gap",{attrs:{height:"60"}})],1)},s=[]},c349:function(t,i,e){var n=e("de1b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("967d").default;a("b8e7851e",n,!0,{sourceMap:!1,shadowMode:!1})},c85f:function(t,i,e){"use strict";e.r(i);var n=e("be6d"),a=e("7de0");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("ffff");var r=e("828b"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"30172935",null,!1,n["a"],void 0);i["default"]=o.exports},de1b:function(t,i,e){var n=e("c86c");i=n(!1),i.push([t.i,'@charset "UTF-8";/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */',""]),t.exports=i},fefa:function(t,i,e){"use strict";e("6a54");var n=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("795c"),e("c223"),e("aa9c");var a=n(e("0f98")),s={data:function(){return{photo:"/static/uview/common/photo.png",formattedTime:"",audioContext:null,audioUrl:"/static/music/bell.mp3",days:[{title:"第一班次",start:"08:30",end:"09:30",status:4,statusName:"已完成",main:"2000",drive:"2000",progress:100},{title:"第二班次",start:"10:30",end:"11:30",status:3,statusName:"进行中",main:"2000",drive:"1600",progress:78},{title:"第三班次",start:"13:30",end:"14:30",status:3,statusName:"进行中",main:"2000",drive:"900",progress:55},{title:"第四班次",start:"15:30",end:"16:30",status:2,statusName:"待开始",main:"2000",drive:"0",progress:0},{title:"第五班次",start:"17:30",end:"18:30",status:1,statusName:"未开始",main:"2000",drive:"0",progress:0},{title:"第六班次",start:"19:30",end:"20:30",status:1,statusName:"未开始",main:"2000",drive:"0",progress:0},{title:"第七班次",start:"21:30",end:"22:30",status:1,statusName:"未开始",main:"2000",drive:"0",progress:0}]}},onLoad:function(){var t=this,i=new Date,e=i.getFullYear(),n=String(i.getMonth()+1).padStart(2,"0"),a=String(i.getDate()).padStart(2,"0");String(i.getHours()).padStart(2,"0"),String(i.getMinutes()).padStart(2,"0"),String(i.getSeconds()).padStart(2,"0");this.formattedTime="".concat(e,"-").concat(n,"-").concat(a),uni.$on("update-location",(function(i){t.locationArray.push(i)}))},onPullDownRefresh:function(){uni.showLoading({title:"刷新中...",mask:!0}),setTimeout((function(){uni.stopPullDownRefresh(),uni.$u.toast("刷新成功！")}),1e3)},methods:{member:function(){uni.navigateTo({url:"/pages/member/member"})},map:function(t){uni.navigateTo({url:"/pages/map/map?title="+t.title+"&start="+t.start+"&end="+t.end+"&status="+t.status+"&statusName="+t.statusName+"&progress="+t.progress+"&main="+t.main+"&drive="+t.drive})},record:function(){uni.navigateTo({url:"/pages/record/record"})},phone:function(){uni.showModal({title:"提示",content:"确定要拨打客服电话？",success:function(t){t.confirm?uni.makePhoneCall({phoneNumber:"18999999999"}):t.cancel&&console.log("用户取消了操作")}})},bells:function(){var t=this;this.audioContext=uni.createInnerAudioContext(),this.audioContext.src=this.audioUrl,this.audioContext.loop=!0,this.audioContext.play(),a.default.vibrate([0,100,500,1e3],0),setTimeout((function(){t.audioContext.stop(),a.default.cancelVibrate()}),1e4)},startLocation:function(){this.locationArray=[],this.getLocationContinuously()},getLocationContinuously:function(){var t=this;setInterval((function(){uni.getLocation({type:"wgs84",success:function(i){t.locationArray.push({latitude:i.latitude,longitude:i.longitude}),console.log("定位成功，纬度：",i.latitude,"经度：",i.longitude)},fail:function(t){console.log("定位失败：",t)}})}),1e3)}},onHide:function(){this.audioContext&&this.audioContext.stop()},onUnload:function(){this.audioContext&&this.audioContext.stop()}};i.default=s},ffff:function(t,i,e){"use strict";var n=e("308e"),a=e.n(n);a.a}}]);