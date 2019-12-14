"use strict";var Search=new Vue({el:"#search",created:function(){var t=this;t.initData(),t.initSearchSuggestions(),infinity.onMessage("onRecoverySetView",t.initData),infinity.onMessage("currentSearchChange",t.initData),infinity.onMessage("searchAddChange",t.initData),infinity.onMessage("reloadSearches",t.initData),infinity.onMessage("searchSuggestionsChange",t.initSearchSuggestions),t.hideSuggesstion(),$(document).on("keydown","#search-input",function(e){13==e.which&&t.go()})},data:{inlineAll:[{name:"search",seId:"dd3af9cc97ad7de8984baaf59514bb52",logo:"https://infinity-permanent.infinitynewtab.com/infinity/search-add/mychromesearch.png",types:[{name:"web",url:"https://mychromesearch.com/search?ac=1826515628&q=%s"},{name:"images",url:"https://www.google.com/search?tbm=isch&q=%s"},{name:"news",url:"https://www.google.com/search?tbm=nws&q=%s"},{name:"videos",url:"https://www.google.com/search?tbm=vid&q=%s"},{name:"maps",url:"https://www.google.com/maps/preview?q=%s"}]}],isOpenSelect:!1,typeSelect:0,searches:null,input:"",suggestions:[],searchSuggesutAjaxZh:!1,searchSuggesutAjaxEn:!1,searchSuggesutAjaxOther:!1,suIndex:-1,preInput:"",showSu:!0,isShowSearchBtn:SETTING.isShowSearchBtn,logoSuffix:"Chrome"==infinity.browser?"?imageView2/0/format/webp/q/48/v/1":"?imageView2/0/format/png/q/48/v/1",searchSuggestions:null},methods:{save:function(){infinity.set("infinity-searches",this.searches),infinity.sendMessage("currentSearchChange"),infinity.sendMessage("backupToCloud"),infinity.modules["search-add-default"]&&infinity.modules["search-add-default"].initData(),infinity.modules["search-add-custom-addition"]&&infinity.modules["search-add-custom-addition"].initData(),infinity.modules["search-add-custom-normal"]&&infinity.modules["search-add-custom-normal"].initData(),infinity.modules["search-add-custom-addition"]&&infinity.modules["search-add-custom-addition"].initData()},initData:function(){this.searches=infinity.get("infinity-searches")},initSearchSuggestions:function(){var t=this;infinity.get("infinity-search-suggestions",!0,function(e){t.searchSuggestions=e})},reloadSetting:function(){this.isShowSearchBtn=SETTING.isShowSearchBtn},openSearchSelect:function(){this.isOpenSelect=!0},hideSearchSelect:function(){this.isOpenSelect=!1,$("#search-input")[0].focus()},changeSearch:function(e){var t=this;t.searches.current=e,t.isOpenSelect=!1,t.typeSelect=0,$("#search-input")[0].focus(),t.save()},changeType:function(e){this.typeSelect=e,$("#search-input")[0].focus()},deleteSearch:function(e){var t=this.searches,s=t.all.indexOf(e);-1!==s&&(t.all.splice(s,1),this.save())},hideSuggesstion:function(){var t=this;$(document).on("click",function(e){t.suggestions=[]})},onSearchBtn:function(e){$("#search-input")[0].focus();this.go()},go:function(e,t){t&&t.stopPropagation();var s=this,n=void 0,i=SETTING.isSearchInNewTab?"_blank":"_self";e=e||s.suggestions[s.suIndex],infinity.sendMessage("ga-search",s.searches.current),(n=e?"suggs"==e.type?e.url?e.url:s.searches.current.types[s.typeSelect].url.replace("%s",encodeURIComponent(e.text)):e.url.replace("%s",encodeURIComponent(s.input)):s.searches.current.types[s.typeSelect].url.replace("%s",encodeURIComponent(s.input)))&&(s.suggestions=[],window.open(n,i))},useISFeedSearch:function(e,t){},showAddSide:function(){infinity.import("search-add",".side-all",function(){$(".i-search-add").removeClass("i-side-hide"),$(".i-search-add")[0].offsetHeight,$(".i-search-add").addClass("i-side-show")});try{iView.showCover()}catch(e){}},inputSuggest:function(e){this.startSuggest()},keyupSuggest:function(e){32==e.which&&this.startSuggest()},startSuggest:function(e){var t=this;if(t.showSu=!0,t.preInput=t.input,t.suIndex=-1,""==t.input)return t.suggestions=[],t.searchSuggesutAjaxZh&&t.searchSuggesutAjaxZh.abort(),void(t.searchSuggesutAjaxOther&&t.searchSuggesutAjaxOther.abort());infinity.isZh()?t.getZhSuggestion():t.searchSuggestions&&t.searchSuggestions.ampfeed&&t.searchSuggestions.ampfeed.enable&&infinity.isEn()?t.getEnSuggestion():t.getOtherSuggestion()},getZhSuggestion:function(){var a=this;a.searchSuggesutAjaxZh&&a.searchSuggesutAjaxZh.abort(),a.searchSuggesutAjaxZh=$.get({url:"http://suggestion.baidu.com/su?wd="+a.input+"&p=3&t="+(new Date).getTime()+"&cb=",dataType:"text",success:function(e){try{var t=e.substr(0,e.length-3).split(",s:")[1],n=JSON.parse(t),i=[];n.map(function(e,t){var s={type:"suggs",text:n[t],textIsUrl:!1,url:null,img:null,labelRequired:!1};i.push(s)});var s=a.searches.additions.concat(i.splice(0,7));a.suggestions=s}catch(e){}}})},getEnSuggestion:function(){var s=this;s.searchSuggesutAjaxEn&&s.searchSuggesutAjaxEn.abort(),s.searchSuggesutAjaxEn=$.get({url:s.searchSuggestions.ampfeed.url+encodeURIComponent(s.input),dataType:"json",success:function(e){try{var t=[];e.paid_suggestions&&(t=t.concat(e.paid_suggestions.map(function(e){return infinity.pixelRequest(e.impression_url),{type:"suggs",text:e.term,textIsUrl:!1,url:e.click_url,img:e.image_url,labelRequired:e.label_required}}))),e.organic_suggestions&&(t=t.concat(e.organic_suggestions.map(function(e){return{type:"suggs",text:e.term,textIsUrl:!1,url:null,labelRequired:!1,img:null}}))),s.suggestions=s.searches.additions.concat(t.splice(0,7))}catch(e){}}})},getOtherSuggestion:function(){var e=this;e.searchSuggesutAjaxOther&&e.searchSuggesutAjaxOther.abort(),e.searchSuggesutAjaxOther=$.get({url:"http://google.com/complete/search?client=chrome&q="+e.input+"&hl="+chrome.i18n.getUILanguage()+"&infinityTime="+(new Date).getTime(),dataType:"json",success:function(n){try{var i=[];n[2].map(function(e,t){var s={type:"suggs",textIsUrl:!1,text:n[1][t],url:null,labelRequired:!1};""!=e&&(s.textIsUrl=!0,s.url=s.text),i.push(s)}),e.suggestions=e.searches.additions.concat(i.splice(0,7))}catch(e){}}})},down:function(e){e.preventDefault();var t=this;t.suIndex+=1,t.suIndex==t.suggestions.length?(t.suIndex=-1,t.input=t.preInput):t.suggestions[t.suIndex].text?t.input=t.suggestions[t.suIndex].text:t.input=t.preInput},up:function(e){e.preventDefault();var t=this;t.suIndex-=1,-2==t.suIndex&&(t.suIndex=t.suggestions.length-1),-1==t.suIndex?t.input=t.preInput:t.suggestions[t.suIndex].text?t.input=t.suggestions[t.suIndex].text:t.input=t.preInput}}});