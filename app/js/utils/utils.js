 class Utils{

  static currentTime: function(){
    return new Date().getTime();
  }

  static makeId: function(){
    var result, i, j;
    result = '';
    for(j=0; j<32; j++)
    {
      if( j == 8 || j == 12|| j == 16|| j == 20)
      result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

  static htmlDecode: function(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  static htmlDecodeWithRoot: function(input){
    return '<root>' + Utils.htmlDecode(input) + '</root>';
  }

  static getLocation: function(href){
    var l = document.createElement("a");
    l.href = href;
    return l;
  }

}

export default Utils;