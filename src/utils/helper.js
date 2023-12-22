export function filterData(searchText, restaurants) {
    return restaurants.filter((restro) =>
      restro?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    ); 
  }