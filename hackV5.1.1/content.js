
 var script = document.createElement('script');
  script.src = '//dl.dropboxusercontent.com/s/wjuz0lovxa00an3/5shellshock.min.js';
  script.type = 'text/javascript';
  script.onload = function() {
    console.log('your script have been loaded');
  }
  document.body.appendChild(script);
