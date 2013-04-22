var TSort = TSort || {};
TSort.views = (function(_){

  var tableView = function(tableModel){
    var tableSortObserver = function(rows){
      var parent = rows[0].element.parentNode;

      //Handle reflow/repaints
      parent.setAttribute("style", "display: none;");

      _.each(rows, function(row){
        parent.removeChild(row.element);
        parent.appendChild(row.element);
      });

      //Show again.
      parent.removeAttribute("style");
    }

    tableModel.sortObserver.add(tableSortObserver);

    return {};
  }

  return {
    table: tableView
  }
})(_);
