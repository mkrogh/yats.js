(function(models, views, controllers){
  /*
    Find each column...
    Insert icon and attatch click handler
      * change icon
      * resets icon for other columns
      * reorder rows
  */



//bootstrap
 var table = models.table(".table");
 var view = views.table(table);
 var sortView = views.sortControls(table, controllers);

 

 //end bootstrap
})(TSort.models, TSort.views, TSort.controllers);
