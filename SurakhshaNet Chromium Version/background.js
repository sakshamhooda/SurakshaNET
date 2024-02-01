chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        var activeTabUrl = activeTab.url;
        fetch('https://c904-34-124-145-35.ngrok-free.app/analyze/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: activeTabUrl}),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // You can process the response data here
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
