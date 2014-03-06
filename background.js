// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Or create an HTML notification:
//var notification = webkitNotifications.createHTMLNotification(
// 'notification.html'  // html url - can be relative
//);

function getTabInfo(event) {
	var notification = function(title, text) {
		return webkitNotifications.createNotification('16.png', title, text);
	};
	
	var text = event.selectionText;
	
	if(text){
		chrome.windows.create({
			url : 'http://dict.youdao.com/search?q='+text,
			top : 200,
			left : 150,
			width : 980,
			height : 500,
			type : "popup"
		});
	}
}

chrome.contextMenus.create({
	"title" : "翻译此单词",
	"type" : "normal",
	"contexts" : ["selection"],
	"onclick" : getTabInfo
});


function jsonToQuery(json){
	var re = [];
	
	for(var p in json){
		re.push(p+'='+encodeURIComponent(json[p]));
	}
	
	return re.join('&');
}
