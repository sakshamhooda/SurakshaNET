document.getElementById('checkPage').addEventListener('click', function() {
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
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; // Clear previous results
            // Display new results
            if (data.detected_patterns && data.detected_patterns.length > 0) {
                data.detected_patterns.forEach(pattern => {
                    resultDiv.innerHTML += `<p><strong>Element:</strong> ${pattern[0]}<br><strong>Label:</strong> ${pattern[1]}</p>`;
                });
            } else {
                resultDiv.innerHTML = '<p>No dark patterns detected.</p>';
            }
        })
        .catch((error) => {
            document.getElementById('result').innerText = 'Error: ' + error;
        });
    });
});
