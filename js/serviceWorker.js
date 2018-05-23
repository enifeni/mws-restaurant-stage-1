if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {

    if (!navigator.serviceWorker) return;

    navigator.serviceWorker.register('/sw.js').then(function() {
      console.log('Registration worked');
    }).catch(function(error) {
      console.log("Registration failed", error);
    })
  });
}