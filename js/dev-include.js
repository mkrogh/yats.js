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

  load(["helpers/shims", "helpers/util", "helpers/dom"],"js/");
  load(["models", "views", "table_sort"],"js/");
    

})();
