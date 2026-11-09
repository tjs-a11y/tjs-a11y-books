(() => {
  "use strict";
  const endpoint = "https://dejplqevodwfeaemrska.supabase.co/functions/v1/book-click";
  const bookMap = {
    "https://books2read.com/u/m26Ngr": "mastering-cryptocurrency-trading",
    "https://books2read.com/u/3kDX8W": "mastering-the-crypto-market",
    "https://books2read.com/u/4jo1Xo": "mediterranean-diet-recipes-book"
  };
  const destinationMap = {
    "mastering-cryptocurrency-trading": "books2read_mct",
    "mastering-the-crypto-market": "books2read_mcm",
    "mediterranean-diet-recipes-book": "books2read_mdr"
  };
  document.addEventListener("click", (event) => {
    const anchor = event.target && event.target.closest ? event.target.closest("a[href]") : null;
    if (!anchor) return;
    let url;
    try { url = new URL(anchor.href, location.href); } catch { return; }
    const canonical = url.origin + url.pathname;
    const book = bookMap[canonical];
    if (!book || !destinationMap[book]) return;
    const path = location.pathname.replace(/[^a-zA-Z0-9/_-]/g, "").slice(0, 180) || "/";
    let placement = "book_overview_related";
    if (/\/reading-guides\/[^/]+\/?$/.test(path)) placement = "reading_guide";
    else if (/\/reading-guides\/?$/.test(path)) placement = "reading_guide";
    else if (anchor.closest("footer")) placement = "footer";
    else if (anchor.classList.contains("btn")) placement = "book_overview_hero";
    else if (/\/tjs-a11y-books\/?$/.test(path) || path === "/") placement = "home_featured";
    const payload = JSON.stringify({ book_slug: book, source_path: path, placement });
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, new Blob([payload], { type: "text/plain;charset=UTF-8" }));
      } else {
        fetch(endpoint, { method: "POST", mode: "cors", keepalive: true, headers: { "Content-Type": "text/plain;charset=UTF-8" }, body: payload }).catch(() => {});
      }
    } catch (_) {}
  }, { capture: true, passive: true });
})();