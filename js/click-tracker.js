/* Riley demo click tracker — fires before vapi.start(). Fire-and-forget. */
(function () {
  'use strict';

  var ENDPOINT = 'https://n8n.genesisai.systems/webhook/riley-demo-click';

  function uuid() {
    if (window.crypto && crypto.randomUUID) { return crypto.randomUUID(); }
    return 'v-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
  }

  function readOrCreate(storage, key) {
    try {
      var v = storage.getItem(key);
      if (!v) { v = uuid(); storage.setItem(key, v); }
      return v;
    } catch (_) { return null; }
  }

  function bump(storage, key) {
    try {
      var n = parseInt(storage.getItem(key) || '0', 10) + 1;
      storage.setItem(key, String(n));
      return n;
    } catch (_) { return null; }
  }

  function utmParams() {
    var out = {};
    try {
      var p = new URLSearchParams(window.location.search);
      ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid'].forEach(function (k) {
        var v = p.get(k); if (v) { out[k] = v; }
      });
    } catch (_) {}
    return out;
  }

  function payload() {
    var visitorId = readOrCreate(window.localStorage, 'gas_visitor_id');
    var sessionId = readOrCreate(window.sessionStorage, 'gas_session_id');
    var clickCount = bump(window.localStorage, 'gas_riley_click_count');
    var firstSeen = (function () {
      try {
        var existing = window.localStorage.getItem('gas_first_seen');
        if (!existing) { existing = new Date().toISOString(); window.localStorage.setItem('gas_first_seen', existing); }
        return existing;
      } catch (_) { return null; }
    })();

    return {
      event: 'riley_demo_click',
      ts: new Date().toISOString(),
      visitor_id: visitorId,
      session_id: sessionId,
      click_count: clickCount,
      returning: clickCount > 1,
      first_seen: firstSeen,
      page: window.location.href,
      path: window.location.pathname,
      referrer: document.referrer || null,
      utm: utmParams(),
      ua: navigator.userAgent,
      lang: navigator.language,
      tz: (Intl.DateTimeFormat().resolvedOptions() || {}).timeZone || null,
      screen: screen.width + 'x' + screen.height,
      viewport: window.innerWidth + 'x' + window.innerHeight,
      dpr: window.devicePixelRatio || 1
    };
  }

  function send() {
    var body;
    try { body = JSON.stringify(payload()); } catch (_) { return; }
    try {
      fetch(ENDPOINT, {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: body
      }).catch(function () { /* swallow — never block the call */ });
    } catch (_) { /* no-op */ }
  }

  /* Compact context for Vapi metadata. Stitches the click event to the
     Vapi call so workflow 12/13 can show "from instagram · visitor abc"
     on the 📞 Incoming Call message. */
  function vapiMetadata() {
    var p;
    try { p = payload(); } catch (_) { return {}; }
    var refHost = '';
    try { if (p.referrer) refHost = new URL(p.referrer).hostname || ''; } catch (_) {}
    return {
      visitor_id: p.visitor_id,
      click_count: p.click_count,
      returning: p.returning,
      from: refHost || 'direct',
      utm_source: (p.utm && p.utm.utm_source) || '',
      utm_campaign: (p.utm && p.utm.utm_campaign) || '',
      page_path: p.path
    };
  }

  window.trackRileyClick = send;
  window.gasVapiMetadata = vapiMetadata;
})();
