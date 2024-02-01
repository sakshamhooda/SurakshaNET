chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "highlightPatterns") {
        request.patterns.forEach(pattern => {
            document.querySelectorAll(pattern.selector).forEach(element => {
                element.style.border = '2px solid red'; // Example style
            });
        });
    }
});

let isHighlightEnabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "toggleHighlight") {
        isHighlightEnabled = !isHighlightEnabled;
        // Code to toggle the highlighting
    }
});

