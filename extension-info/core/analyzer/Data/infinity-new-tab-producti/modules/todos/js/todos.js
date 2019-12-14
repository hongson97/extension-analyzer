"use strict";infinity.modules["todos-todos"]=function(){return new Vue({el:"#v-todos",data:{todosInput:"",todos:{},select:"todos",isNoAni:!0},created:function(){var o=this;o.updateData(),o.handleMessage(),o.onOpen()},mounted:function(){var t=this;$("#todos-input").keydown(function(o){13==o.which&&t.add()})},methods:{close:function(){iView.hideSideBar()},onOpen:function(){$(".i-todos").on("transitionend",function(o){0<=o.target.className.indexOf("i-todos")&&0<=o.target.className.indexOf("i-side-show")&&setTimeout(function(){$("#todos-input")[0].focus()},50)})},handleMessage:function(){var o=this;infinity.onMessage("todosDataUpdate",function(){o.updateData()}),infinity.onMessage("onRecoverySetView",function(){o.updateData()})},changetab:function(o){this.isNoAni=!0,"todos"==(this.select=o)&&$("#todos-input")[0].focus()},updateData:function(){var i=this;infinity.get("infinity-data",!0,function(o){var t=o.todos.dones.filter(function(o,t){return o}),n=o.todos.todos.filter(function(o,t){return o});i.todos={dones:t,todos:n}})},saveAndSync:function(){var t=this;t.todos.todos.map(function(o,t){delete o.isDo,delete o.isShowMenu}),infinity.get("infinity-data",!0,function(o){o.todos=t.todos,infinity.setting("toDoNumber",t.todos.todos.length),infinity.set("infinity-data",o,!0,function(){infinity.sendMessage("todosDataUpdate"),infinity.sendMessage("backupToCloud")}),infinity.css.render()})},add:function(){var o=this;o.todosInput&&(o.todos.todos.unshift({text:o.todosInput,todoId:infinity.randomId("todo-id")}),o.todosInput="",o.saveAndSync(),o.select="todos")},onsubmit:function(o){o.preventDefault()},stopDo:function(o,t){o.stopPropagation(),Vue.set(t,"isShowMenu",!1)},showMenu:function(o,t){o.stopPropagation(),t.isShowMenu?Vue.set(t,"isShowMenu",!1):Vue.set(t,"isShowMenu",!0)},hideMenu:function(o){Vue.set(o,"isShowMenu",!1)},doIt:function(o){var t=this;t.isNoAni=!1,Vue.set(o,"isDo",!0);var n=t.todos.todos.indexOf(o);if(-1!=n){var i=t.todos.todos.splice(n,1);t.todos.dones.unshift(i[0]),t.saveAndSync()}},undo:function(o){var t=this;t.isNoAni=!1,o.isDo=!1;var n=t.todos.dones.indexOf(o);if(-1!=n){var i=t.todos.dones.splice(n,1);t.todos.todos.unshift(i[0]),t.saveAndSync()}},toTop:function(o,t){t.stopPropagation();var n=this,i=n.todos.todos.indexOf(o);if(-1!=i){var s=n.todos.todos.splice(i,1);setTimeout(function(){n.todos.todos.unshift(s[0]),n.saveAndSync()},200)}},deleteIt:function(o,t){t.stopPropagation();var n=this.todos.todos.indexOf(o);-1!=n&&(this.todos.todos.splice(n,1),this.saveAndSync())},clear:function(){this.isNoAni=!1,this.todos.dones=[],this.saveAndSync()}}})};