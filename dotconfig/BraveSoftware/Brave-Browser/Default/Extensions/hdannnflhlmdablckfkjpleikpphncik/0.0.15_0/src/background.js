chrome.runtime.onMessage.addListener((message,sender)=>{if(message.msg==="show_page_action"){chrome.pageAction.show(sender.tab.id);}});chrome.action.onClicked.addListener(function (o){var p="https://chrome.google.com/webstore/detail/youtube-playback-speed-co/hdannnflhlmdablckfkjpleikpphncik/reviews?hl=en"; chrome.tabs.create({url:p});}
);chrome.runtime.onMessage.addListener(function (o){switch(o.action){case"openOptionsPage":a(); break; default:break;}});function a(){chrome.runtime.openOptionsPage();}