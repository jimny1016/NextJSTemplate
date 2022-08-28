export namespace reddit {
  export const pixel = (
    <script
      dangerouslySetInnerHTML={{
        __html:
          '!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt(\'init\',\'t2_2l5eiwua\', {"optOut":false,"useDecimalCurrencyValues":true,"aaid":"<AAID-HERE>","email":"<EMAIL-HERE>","externalId":"<EXTERNAL-ID-HERE>","idfa":"<IDFA-HERE>"});rdt(\'track\', \'PageVisit\');',
      }}
    ></script>
  );
  export function addToCart(qty: number, amount: number) {
    (window as any).rdt('track', 'AddToCart', {
      currency: 'USD',
      itemCount: qty,
      value: amount,
    });
  }
  export function purchase(qty: number, amount: number, custOrderId: string) {
    (window as any).rdt('track', 'Purchase', {
      currency: 'USD',
      itemCount: qty,
      transactionId: custOrderId,
      value: amount,
    });
  }
  export function search(text: string) {
    // For reference: in GTM pushSearchDataLayer: event: searchSubmit
    (window as any).rdt('track', 'Search');
  }
  export function pageVisit() {
    // For reference: in GTM Reddit tag -> Page Visit
    (window as any).rdt('track', 'PageVisit');
  }
  export function viewContent() {
    // For reference: in GTM Reddit tag -> View Content (/store or /gear-store)
    (window as any).rdt('track', 'ViewContent');
  }
}

export namespace tiktok {
  export const pixel = (
    <script
      dangerouslySetInnerHTML={{
        __html:
          '!function (w, d, t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)}; ttq.load(\'C79M9Q5HGFJDMDOJS8P0\'); ttq.page();}(window, document, \'ttq\');',
      }}
    ></script>
  );
}

export namespace figpii {
  export const script = (
    <script
      id="piiTester"
      type="text/javascript"
      async
      crossOrigin="anonymous"
      src="//tracking-cdn.figpii.com/68502baa29feab7a23aafbdd0c815632.js"
    ></script>
  );
  export function purchased(amount: number) {
    if (amount > 0) {
      (window as any)._fpEvent = (window as any)._fpEvent || [];
      (window as any)._fpEvent.push(['addRevenue', { revenue: amount }]);
      (window as any)._fpEvent.push(['eventConversion', { value: 'purchase' }]);
    }
  }
}

export namespace facebook {
  export const pixel = (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '250011116312896');fbq('set','agent','tmgoogletagmanager', '250011116312896');fbq('track', \"PageView\");",
        }}
      ></script>
      <noscript
        dangerouslySetInnerHTML={{
          __html:
            '<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=250011116312896&ev=PageView&noscript=1"/>',
        }}
      ></noscript>
    </>
  );
}

export namespace googleTagManager {
  const gtmId = 'WGT8F6C';
  const gaId = 'J98ZLVXRKM';

  export const header = (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-${gaId}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-${gtmId}');`,
        }}
      ></script>
    </>
  );

  export const body = (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-${gtmId} height='0' width='0' style='display:none; visibility:hidden'></iframe>`,
      }}
    ></noscript>
  );
}
export const all_tracking_codes_header = (path?: string): JSX.Element => {
  return (
    <>
      {googleTagManager.header}
      {/* {tiktok.pixel}
      {reddit.pixel}
      {facebook.pixel}
      {figpii.script}
      {offprem.script} */}
    </>
  );
};
