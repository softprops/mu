var Store = (function(options){
  var options = options || {};
  return {
    set: function(k, v) {
      try { localStorage.setItem(k, v); } 
      catch(e) { 
        if(e == QUOTA_EXCEEDED_ERR && options.onError) {
          onError("Storage Quota Exceeded"); 
        }
      }
    },
    get: function(k) { return localStorage.getItem(k); },
    remove: function(k) { localStorage.removeItem(k); }  
  };  
});