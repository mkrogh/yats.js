(function(){
  var load = function(files, basePath){
    basePath = basePath || "";
    for(var i=0;i < files.length; i++){ 
     var script = document.createElement('script'); 
     script.type = 'text/javascript'; 
     script.src = basePath+files[i]+".js";
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.appendChild(script, s);
    }
  };

  //Load modules defined in json
  var modulesReq = new XMLHttpRequest();
  modulesReq.open("GET","js/modules.json", true);
  modulesReq.responseType="text"; 
  modulesReq.onload = function(){
    var modules = window.JSON.parse(this.response);

    load(modules["load"], modules["basePath"]);
  }
  modulesReq.addEventListener("error", function(){
    //No server available
    load(["helpers/shims", "helpers/util", "helpers/dom"],"js/");
    load(["models", "views", "table_sort"],"js/");
  },false);
  modulesReq.send();
})();
