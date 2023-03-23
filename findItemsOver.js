var findItemsOver = function(list, threshold) {
	  
    var itemMap = [];
    for (let i = 0; i < list.length; i++){
        const listItem = list[i];
      const listQty = listItem.qty;
      if (listQty > threshold) {
          itemMap.push(listItem)
      }
    }
    
    return itemMap
  }