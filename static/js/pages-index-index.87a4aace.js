(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"23d6":function(t,i,e){"use strict";e.r(i);var a=e("9aa1"),n=e("4540");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("3108");var o,r=e("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"34b7995b",null,!1,a["a"],o);i["default"]=l.exports},3108:function(t,i,e){"use strict";var a=e("fef1"),n=e.n(a);n.a},3723:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{newsongList:[],hotSuperheroList:[],topList:[],playlist:[]}},onLoad:function(){var t=this,i=t.serverUrl;uni.request({url:i+"/personalized/newsong?limit=6",method:"GET",success:function(i){if(200==i.data.code){var e=i.data.result;t.newsongList=e}}}),uni.request({url:i+"/personalized?limit=6",method:"GET",success:function(i){if(200==i.data.code){var e=i.data.result;t.hotSuperheroList=e}}}),uni.request({url:i+"/toplist",method:"GET",success:function(i){if(200==i.data.code){var e=i.data.list;t.topList=e;for(var a=0;a<4;a++){var n=e[a].id;t.hq(n,a)}}}})},methods:{goSearch:function(){uni.navigateTo({url:"../search/search"})},goPlay:function(t,i,e){uni.navigateTo({url:"../play/play2?songid="+t+"&songname="+i+"&name="+e})},goSongsheet:function(t){uni.navigateTo({url:"../songsheet/songsheet?id="+t})},hq:function(t,i){var e=this,a=e.serverUrl;uni.request({url:a+"/playlist/detail?id="+t,method:"GET",success:function(t){if(200==t.data.code){var a=t.data.playlist.tracks;e.topList[i].tags=a}}})}}};i.default=a},4540:function(t,i,e){"use strict";e.r(i);var a=e("3723"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"7d7e":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".carousel[data-v-34b7995b]{width:100%;height:%?440?%}.search-input[data-v-34b7995b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;margin:0 %?25?%;padding:0 %?15?%;border-bottom:1px solid #d7d7d7}.search-input .input[data-v-34b7995b]{width:100%;height:100%;font-size:20px}\r\n/* 推荐歌单 start */.hot-ico[data-v-34b7995b]{width:%?30?%;height:%?30?%;margin-top:%?15?%}.single-poster[data-v-34b7995b]{display:inline-block;margin-left:%?40?%}.poster-wapper[data-v-34b7995b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.poster[data-v-34b7995b]{width:%?200?%;height:%?200?%}.movie-name[data-v-34b7995b]{width:%?200?%;margin-top:%?10?%;font-size:.5rem;font-weight:700;\r\n\t/* name超出则省略 */overflow:hidden; /* 超出的文本隐藏\r\n */text-overflow:ellipsis; /*显示省略号\r\n */display:-webkit-box; /*作为弹性伸缩盒子模型显示。\r\n */-webkit-box-orient:vertical; /*设置伸缩盒子的子元素排列方式--从上到下垂直排列\r\n */-webkit-line-clamp:2 /*显示的行数\r\n */}\r\n/* 推荐歌单 end */\r\n/* 排行榜 start */.top[data-v-34b7995b]{width:100%;height:%?250?%;padding-left:%?20?%;padding-bottom:%?20?%}.top-img[data-v-34b7995b]{position:relative;height:%?250?%;width:%?250?%;padding-right:%?30?%;float:left}.top-update[data-v-34b7995b]{position:absolute;color:#fff;padding-top:%?210?%;padding-left:%?5?%}.top-name[data-v-34b7995b]{padding-bottom:%?10?%}.name[data-v-34b7995b]{width:%?440?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r\n/* 排行榜 end */",""]),t.exports=i},"9aa1":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticClass:"page-block super-hot"},[e("v-uni-view",{staticClass:"hot-title-wapper"},[e("v-uni-view",{staticClass:"hot-title"},[t._v("推荐新音乐")])],1)],1),e("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":!0,autoplay:!0}},t._l(t.newsongList,(function(i){return e("v-uni-swiper-item",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPlay(i.song.id,i.song.name,i.song.artists[0].name)}}},[e("v-uni-image",{staticClass:"carousel",attrs:{src:i.picUrl}})],1)})),1),e("v-uni-view",{staticClass:"page-block super-hot"},[e("v-uni-view",{staticClass:"hot-title-wapper"},[e("v-uni-view",{staticClass:"hot-title"},[t._v("推荐歌单")])],1)],1),e("v-uni-scroll-view",{staticClass:"page-block",attrs:{"scroll-x":"true"}},t._l(t.hotSuperheroList,(function(i){return e("v-uni-view",{staticClass:"single-poster",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSongsheet(i.id)}}},[e("v-uni-view",{staticClass:"poster-wapper"},[e("v-uni-image",{staticClass:"poster",attrs:{src:i.picUrl}}),e("v-uni-view",{staticClass:"movie-name"},[t._v(t._s(i.name))])],1)],1)})),1),e("v-uni-view",{staticClass:"page-block super-hot"},[e("v-uni-view",{staticClass:"hot-title-wapper"},[e("v-uni-view",{staticClass:"hot-title"},[t._v("排行榜")])],1)],1),e("v-uni-view",t._l(t.topList,(function(i,a){return a<4?e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSongsheet(i.id)}}},[e("v-uni-image",{staticClass:"top-img",attrs:{src:i.coverImgUrl}}),e("v-uni-view",{staticClass:"top-update"},[t._v(t._s(i.updateFrequency))])],1),t._l(i.tags,(function(i,a){return a<5?e("v-uni-view",{staticClass:"top-name"},[e("v-uni-view",{staticClass:"name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPlay(i.id,i.name,i.ar[0].name)}}},[t._v(t._s(a+1)+"."+t._s(i.name)+"-"+t._s(i.ar[0].name))])],1):t._e()}))],2):t._e()})),1)],1)},s=[]},fef1:function(t,i,e){var a=e("7d7e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("061d6d44",a,!0,{sourceMap:!1,shadowMode:!1})}}]);