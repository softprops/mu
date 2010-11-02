var Geo = (function(){
  return {
      locate: function(s, f) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(s, f);
      } else {
        f('not supported');
      }        
    }
  };
})();