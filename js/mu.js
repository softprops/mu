var M = (function(conf) {
  var api = "https://api.meetup.com/",
      key = conf.key;
  
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