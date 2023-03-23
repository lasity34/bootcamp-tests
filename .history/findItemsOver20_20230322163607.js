
var findItemsOver20 = function (list) {
  const itemMap = [];
  for (let i = 0; i < list.length; i++) {
    const listItem = list[i];
    const listQty = listItem.qty;
    if (listQty > 20) {
      itemMap.push(listItem);
    }
  }

  return itemMap;
};
