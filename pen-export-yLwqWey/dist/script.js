var btn = document.getElementById("iapply");
btn.addEventListener("click", function() {
  var width = parseInt(document.getElementById("iwidth").value, 10);
  if (!isNaN(width)) {
    var iframe = document.getElementById("iframe1");
    iframe.style.width = width + "px";
  }
});