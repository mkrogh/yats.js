var TSort = TSort || {};
TSort.controllers = (function(){
  var hasClass = function(elm, cssClass){
    return elm.className.indexOf(cssClass) > -1;
  }

  var colNumber = function(elm){
    var i = 0;
    while((elm = elm.previousSibling) != null){
      if(elm.tagName){
        i++;
      }
    }
    return i;
  }

  var handleClick = function(tableModel, target){
    var index = colNumber(target);

    if(hasClass(target, "tsASC")){
       tableModel.sort(index, true); 
    }else{
      //Sort decending
      tableModel.sort(index);
    }
  }
  
  return {
    headClick: handleClick
  }
})();
