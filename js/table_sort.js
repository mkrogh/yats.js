define(["models", "views"], function(models, views){
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
 
 setTimeout(function(){
  table.sort(5, false);
 },1000);

 //end bootstrap
});
