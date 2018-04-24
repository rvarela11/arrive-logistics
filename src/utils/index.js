// Function to get all the cities
export const getAllCities = (apiDataAll) => {
  const allCitiesArray = [];
  const allCities = [];

  // For each loop to get locations array
  apiDataAll.forEach((carrier) => {
    carrier.Locations.forEach((location) => {
      allCitiesArray.push(location.City);
    });
  });

  // Reduce function to not get any duplicate cities
  const allCitiesObject = allCitiesArray.reduce((obj,item) => {
    if (!obj[item]){
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  },{});

  // Organize all the cities by alphabetical order
  // Set them in an array of objects
  Object.keys(allCitiesObject).sort().forEach((city) => {
    allCities.push({
      text: city,
      value: city
    })
  })

  return allCities;
}

// Function to format phone data into (###) ###-####
export const formatPhone = (number) => {
      let value = number.toString();
  // Strip all characters from the value except digits
      value = value.replace(/\D/g,'');
  // Trim the remaining value to ten characters, to preserve phone number format
      value = value.substring(0,10);
  // Based upon the length of the string, we add formatting as necessary
     const size = value.length;
     if (size < 4){
             value = '(' + value;
     } else if (size < 7){
             value = '(' + value.substring (0,3) + ') ' + value.substring(3,6);
     } else {
             value = '(' + value.substring(0,3) + ') ' + value.substring(3,6) + '-' + value.substring(6,10);
     }

     return value;

};
