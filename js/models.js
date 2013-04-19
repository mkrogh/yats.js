define(["helpers/dom","helpers/util"],function($,_){
  /**
   * Creates a row model. Extracts text from rows for faster access.
   */
  var rowModel = function(row) {
    var columnSelector = "td";
    var columns = $(columnSelector, row);
    var data = []

    _.each(columns, function(elm, i){
      var value = elm.textContent;
      if(!isNaN(value) && "" != value)
        data[i] = parseInt(value, 10);
      else
        data[i] = value;
    });

    return {
      element: row,
      columns: data
    };
  }

  /**
   * Creates a new table model. A table model is used to sort rows based on a specific column.
   */
  var tableModel = function(table_selector, row_selector){
    var row_selector = row_selector|| "tbody tr";
    var table = $(table_selector)[0];
    var rows = [];
    
    var domRows = $(row_selector, table);

    _.each(domRows, function(row, i){
      rows[i] = rowModel(row);
    });

    var sortObserver = _.observable();

    var sort = function(column, reverse){
      var i = column || rows[0].length -1
      var desc_sort = function(a,b){
        /*if(isNaN(a.columns[i]))
          return a.columns[i].localeCompare(b.columns[i]);
        else
          return a.columns[i] - b.columns[i];
        */
        if(a.columns[i] < b.columns[i])
          return 1;
        if(a.columns[i] > b.columns[i])
          return -1;
        //same same
        return 0;
      };
      
      if(reverse){
        rows.sort(function(a,b){return desc_sort(b,a)});
      }else{
        rows.sort(desc_sort);
      }
      sortObserver.notify(rows);
    }

    return {
      rows: rows,
      sort: sort,
      table: table,
      sortObserver: sortObserver
    }
  }

  return {
    row: rowModel,
    table: tableModel
  }
});
