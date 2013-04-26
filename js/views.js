var TSort = TSort || {};
TSort.views = (function(_, $){

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
  
  /**
   * Creates sort controls view
   */
  var tableSortControls = function(tableModel,sortController){
    var colHead =  $("thead th", tableModel.table);
    var onclick = function(e){
      var origin = this;

      var css = this.className;
      if(css.indexOf("tsASC") > -1){
        //Is sorted in ASC
        this.className = css.replace(/tsASC/, "tsDESC");
      }else if(css.indexOf("tsDESC") > -1){
        //Is sorted in DESC
        this.className = css.replace(/tsDESC/, "tsASC");
      }else if(css.indexOf("tsNONE") > -1){
        this.className = css.replace(/tsNONE/, "tsDESC");
      }

      //Reset other controls
      _.each(colHead, function(col){
        if(col !== origin){
          col.className = col.className.replace(/tsASC|tsDESC/, "tsNONE");
        }
      });

      sortController.headClick(tableModel, this);
    }//END onclick

    //Insert controls.
    _.each(colHead, function(col){
      col.className="tsNONE";
      col.onclick = onclick;
    });

  }
  
  return {
    table: tableView,
    sortControls: tableSortControls
  }
})(_, $);
