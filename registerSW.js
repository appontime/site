if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/site/sw.js', { scope: '/site/' })})}