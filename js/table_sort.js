(function(models, views, controllers){
  /*
    Find each column...
    Insert icon and attatch click handler
      * change icon
      * resets icon for other columns
      * reorder rows
  */



//bootstrap

  window.sortTable = function(selector){
    var table = models.table(selector);
    var view = views.table(table);
    var sortView = views.sortControls(table, controllers);
  }
 
 sortTable("table[data-tablesort]");

 //end bootstrap
})(TSort.models, TSort.views, TSort.controllers);
