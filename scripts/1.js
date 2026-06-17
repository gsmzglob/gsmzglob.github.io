(function () {
  const container = document.createElement("div");
  container.id = "frame";
  container.style.cssText =
    "width:100%;margin:auto;position:relative;z-index:99998;";

  container.innerHTML = `
    <iframe data-aa="2444135"
      src="//acceptable.a-ads.com/2444135/?size=Adaptive"
      style="border:0;padding:0;width:70%;height:auto;overflow:hidden;display:block;margin:auto">
    </iframe>
  `;

  document.body.appendChild(container);
})();