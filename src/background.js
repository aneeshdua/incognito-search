// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.

const CONTEXT_MENU_ID_win = "incognito_search_window";
function getword_window(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID_win) {
    return;
  }
  console.log("Win Phrase " + info.selectionText + " was clicked.");
  chrome.windows.create({  
    url: "http://www.google.com/search?q=" + info.selectionText,
    incognito: true
  });
}
chrome.contextMenus.create({
  title: "Search: %s in incognito window", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID_win
});
chrome.contextMenus.onClicked.addListener(getword_window)

/*
const CONTEXT_MENU_ID_tab = "incognito_search_tab";

function getword_tab(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID_tab) {
    return;
  }
  console.log("Tab Phrase " + info.selectionText + " was clicked.");
  chrome.tab.create({  
    url: "http://www.google.com/search?q=" + info.selectionText
  });
}
chrome.contextMenus.create({
  title: "Search: %s in incognito tab", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID_tab
});
chrome.contextMenus.onClicked.addListener(getword_window)
*/