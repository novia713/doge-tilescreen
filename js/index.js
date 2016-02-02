

window.addEventListener('DOMContentLoaded', function() {

  console.log(parent);
  var parent = document.getElementById("apps");
  console.log(parent);

  var tile       = document.createElement('div');
  tile.className = 'tile';
  tile.innerHTML = "<span id='doge'><img src='/icons/doge-128.png'/>such awesome</span>";
  parent.insertBefore(tile, parent.children[1]);

});
