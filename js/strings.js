String.prototype.format = function() {
  var str = this;
  for(a in arguments) { str = str.replace(new RegExp("\\{" + a + "\\}","g"), arguments[a]) }
  return str;
};