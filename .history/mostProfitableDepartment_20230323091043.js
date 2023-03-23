
var mostProfitableDepartment = function(list) {

    const departmentMap = {}
    
    for (let i = 0; i < list.length; i++) {
        const itemList = list[i].department;
      if (departmentMap[itemList] === undefined) {
          departmentMap[itemList] = list[i].sales
      } else {
          departmentMap[itemList] += list[i].sales
      }
      
    }
         
    let currentMaxSales = 0;
    let currentDepartment = '';
    
    for (var departmentType in departmentMap) {
      //const currentDepartmentSales = departmentMap[departmentType];
      if (departmentMap[departmentType] > currentMaxSales) {
          currentDepartment = departmentType
            currentMaxSales = departmentMap[departmentType];
      }
      
    }
    return currentDepartment;
  }