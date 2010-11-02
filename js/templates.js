/* Templates */
var T = (function() {
  var Event = '<a href="{0}" target="_blank"> \
       <div class="iwrap"> \
          <img class="g" src="{1}"/> \
          <div class="imeta"><span class="rsvpcnt">+{2}<br/>- {3}</span></div> \
       </div> \
       <div class="emeta"> \
         <strong>{4}</strong> <span class="ename">{5}</span> \
         <div class="xmeta"><span class="where">@<a target="_blank" href="http://maps.google.com/maps?q={6}">{6}</a></span> \
         <span class="when">on {7}</span></div> \
       </div> \
      </a>';
  var EventWithoutLocation = '<a href="{0}" target="_blank"> \
       <div class="iwrap"><img class="g" src="{1}"/><div class="imeta"><span class="rsvpcnt">+{2}<br/>- {3}</span></div></div> \
       <div class="emeta"> \
         <strong>{4}</strong> <span class="ename">{5}</span>\
         <div class="xmeta"><span class="when">on {6}</span></div> \
       </div> \
      </a>'; 

  var User = 'Hi <a class="uname" href="{0}" target="_blank">{1}</a> | <a class="out" href="#">Disconnect</a>';

  return {
    group: function(g) {
      return "{0}"
    },
    event: function(e) {
      if(e.venue_address1.toString().length === 0) {
        return EventWithoutLocation.format(e.event_url, e.photo_url, e.rsvpcount, e.no_rsvpcount, e.group_name, e.name, e.time); 
      } else { 
          return Event.format(e.event_url, e.photo_url, e.rsvpcount, e.no_rsvpcount, e.group_name, e.name, e.venue_address1, e.time);
      }
    },
    user: function(u) {
      return User.format(u.link, u.name);
    }
  };
})();