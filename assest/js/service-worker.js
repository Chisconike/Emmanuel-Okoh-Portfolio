
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 76 and later from automatically showing the install prompt
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update UI notify the user they can add to home screen
  // You can show a custom install button here
  // Make sure to follow user interface guidelines
  // and not annoy the user with constant prompts
});

// You can trigger the install prompt later, for example, after a button click
// Make sure to check if the deferredPrompt is available before calling prompt()
// This is just a basic example, you might want to trigger this based on user interaction
document.getElementById('installButton').addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  }
});

