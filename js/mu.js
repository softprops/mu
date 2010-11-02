var M = (function(conf) {
  var api = "https://api.meetup.com/",
      key = conf.key;
      /*,get = function(path, params, fn) {
        var req = new XMLHttpRequest();
        var url = function() {
          var r = [], append = function(k, v) {
            r[r.length] = encodeURIComponent(k) + "=" + encodeURIComponent(v);
          };
          for(k in params) append(k, params[k])
          return api + path + (r.join("&").replace(/%20/g, "+"));
        };
        req.open(url(), "GET", true);
        req.onload = function() {
          fn(JSON.parse(req.responseText));
        }
        req.send(null);
      };*/
  
  var sign = function(args) {
     args["key"] = key;
     return args;
  };

  return {
    members: function(args, cb) {
      $.getJSON(api + "members.json?callback=?", sign(args), cb);
    },
    groups: function(args, cb) {
      $.getJSON(api + "groups.json?callback=?", sign(args), cb);
    },
    events: function(args, cb) {
      $.getJSON(api + "events.json?callback=?", sign(args), cb);
    }
  }
});