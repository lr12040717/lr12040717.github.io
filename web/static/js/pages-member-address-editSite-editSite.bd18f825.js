(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-address-editSite-editSite"],{"1e42":function(e,t,a){var i=a("4421");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("0024c7fc",i,!0,{sourceMap:!1,shadowMode:!1})},"37bb":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("d4c9"),n=(a("2fe0"),{data:function(){return{customStyle:{color:"#0BA1D6"},checked:!1,form:{name:"",phone:"",address:""}}},onLoad:function(){var e=uni.getStorageSync("address"),t=JSON.parse(e),a=uni.getStorageSync("phone"),i=JSON.parse(a),n=uni.getStorageSync("consignee"),s=JSON.parse(n),r=uni.getStorageSync("isok"),o=JSON.parse(r);this.form.address=t,this.form.phone=i,this.form.name=s,this.checked=o},methods:{navAddress:function(){uni.navigateTo({url:"/pages/member/address/address"})},navMember:function(){uni.switchTab({url:"/pages/member/member"})},handleSwitchChange:function(e){this.checked=e},getAddressAdds:function(){var e=uni.getStorageSync("id");if(this.$u.test.rangeLength(this.form.name,[1,6]))if(this.$u.test.mobile(this.form.phone))if(this.$u.test.rangeLength(this.form.address,[1,60])){var t=uni.getStorageSync("MemberToken"),a=JSON.parse(t),n=this.form.name,s=this.form.phone,r=this.form.address,o={consignee:n,phone:s,address:r,token:a,isok:this.checked,id:e};(0,i.getAddressAdd)(o),uni.removeStorageSync("address"),uni.removeStorageSync("phone"),uni.removeStorageSync("consignee"),uni.removeStorageSync("isok"),uni.removeStorageSync("id")}else uni.$u.toast("请输入详细地址！");else uni.$u.toast("请输入手机号！");else uni.$u.toast("请输入姓名！")}}});t.default=n},4421:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.line[data-v-94a24f2c]{color:#999;font-size:%?28?%}.wrap .lr_wrap[data-v-94a24f2c]{margin:0 %?15?%;background-color:#fff;border-radius:%?15?%;padding:%?20?% %?30?%}.wrap .top .item[data-v-94a24f2c]{display:flex;line-height:%?100?%;align-items:center;border-bottom:solid %?1?% #eee}.wrap .top .item .left[data-v-94a24f2c]{width:%?180?%}.wrap .top .item uni-input[data-v-94a24f2c]{text-align:left}.wrap .top .lr_address[data-v-94a24f2c]{padding:%?15?% 0;height:%?170?%;background-color:#f7f7f7;line-height:%?50?%;padding:%?15?%;border:%?3?% solid #eee;border-radius:%?15?%}.wrap .bottom[data-v-94a24f2c]{padding:%?15?% 0}.wrap .bottom .default[data-v-94a24f2c]{display:flex;justify-content:space-between;line-height:%?64?%}.addSite[data-v-94a24f2c]{position:fixed;display:flex;justify-content:space-around;width:80%;line-height:%?100?%;bottom:10%;left:10%;background-color:#fff;border-radius:%?60?%;font-size:%?32?%}.addSite .add[data-v-94a24f2c]{display:flex;align-items:center;color:#0ba1d6}.addSite .add .icon[data-v-94a24f2c]{margin-right:%?10?%}.slot-wrap[data-v-94a24f2c]{margin:0 %?20?%}',""]),e.exports=t},"86af":function(e,t,a){"use strict";a.r(t);var i=a("37bb"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"871a":function(e,t,a){"use strict";var i=a("1e42"),n=a.n(i);n.a},"8f26":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var i={uNavbar:a("ecc4").default,uIcon:a("d068").default,uForm:a("39bf").default,uFormItem:a("2123").default,uInput:a("2840").default,uSwitch:a("a1fa").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"wrap"},[a("u-navbar",{attrs:{"is-back":!1,title:"修改收货地址","back-icon-color":"#ffffff","title-color":"#ffffff",background:"#0BA1D6"}},[a("v-uni-view",{staticClass:"slot-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navAddress()}}},[a("u-icon",{attrs:{name:"arrow-left",size:"36",color:"#fff"}})],1),a("v-uni-view",{staticClass:"lr_ss",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navMember()}}},[a("u-icon",{attrs:{name:"home-fill",size:"36",color:"#fff"}})],1)],1),a("v-uni-view",{staticClass:"lr_all_height80"}),a("v-uni-view",{staticClass:"lr_wrap"},[a("v-uni-view",{staticClass:"top"},[a("u-form",{ref:"uForm",staticClass:"lr_login_form",attrs:{model:e.form}},[a("u-form-item",{staticClass:"lr_login_title",attrs:{label:"收货人:",prop:"name","label-width":"135"}},[a("u-input",{staticClass:"lr_login_input",model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("u-form-item",{staticClass:"lr_login_title",attrs:{label:"手机号:",prop:"phone","label-width":"135"}},[a("u-input",{staticClass:"lr_login_input",attrs:{maxlength:"11",placeholder:"请输入收货人手机号"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),a("u-form-item",{attrs:{label:"详细地址:",prop:"address","label-width":"150"}},[a("u-input",{staticClass:"lr_address",attrs:{type:"textarea",maxlength:"60",placeholder:"请输入收货人街道、楼牌等"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1)],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"default"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"set"},[e._v("设置默认地址")]),a("v-uni-view",{staticClass:"tips"},[e._v("提醒：每次下单会默认推荐该地址")])],1),a("v-uni-view",{staticClass:"right"},[a("u-switch",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSwitchChange.apply(void 0,arguments)}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)],1)],1),a("v-uni-view",{staticClass:"addSite",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getAddressAdds()}}},[a("v-uni-view",{staticClass:"add"},[a("u-icon",{staticClass:"icon",attrs:{name:"edit-pen",color:"#0BA1D6",size:36}}),e._v("修改收货地址")],1)],1)],1)],1)},s=[]},fc64:function(e,t,a){"use strict";a.r(t);var i=a("8f26"),n=a("86af");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("871a");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"94a24f2c",null,!1,i["a"],r);t["default"]=c.exports}}]);