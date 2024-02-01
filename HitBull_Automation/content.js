chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'startQuiz') {
      // Your automation logic here
      // You can use the same logic from the previous Python script but adapted to JavaScript
      function onKeyPress(event) {
        try {
          const optionKey = event.key.toLowerCase();
          if (['a', 'b', 'c', 'd'].includes(optionKey)) {
            // Find the corresponding quiz option element and click it
            const quizOption = document.getElementById(`option_${optionKey.toUpperCase()}`);
            quizOption.click();
      
            // Press Enter
            quizOption.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      
            // Wait for a moment (adjust as needed)
            setTimeout(() => {
              // Find and click the "Save and Next" button
              const saveNextButton = document.getElementById("save_next_button_id");  // Replace with the actual ID
              saveNextButton.click();
            }, 1000);
          }
        } catch (error) {
          console.error(error);
        }
      }
      
      // Attach key press event listener
      document.addEventListener('keydown', onKeyPress);
      
      // Ensure the extension's content script is running
      chrome.runtime.sendMessage({ action: 'contentScriptLoaded' });
    }
  });
  