// Record page views only for the published AcademicHP site, never local previews.
(() => {
  if (window.location.hostname !== "thushiyang.github.io" ||
      !window.location.pathname.startsWith("/academic-homepage/")) {
    return;
  }

  const measurementId = "G-7QCE57R86E";
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const tag = document.createElement("script");
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(tag);
})();
