function initGTM() {
  if (window.gtmDidInit) {
    return false;
  }

  window.gtmDidInit = true;

  var script = document.createElement('script');

  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${process.env.GATSBY_GOOGLE_TAG_ID}`;

  script.onload = function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
      'gtm.uniqueEventId': 0,
    });
  };

  document.head.appendChild(script);
}

function initGTMOnEvent(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, initGTMOnEvent);
}

exports.onClientEntry = function() {
  document.onreadystatechange = function() {
    if (document.readyState !== 'loading') {
      setTimeout(initGTM, 1000);
    }
  };

  ['scroll', 'mousemove', 'touchstart'].forEach(eventType => {
    document.addEventListener(eventType, initGTMOnEvent);
  });
};
