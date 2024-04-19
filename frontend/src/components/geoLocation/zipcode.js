// import React from 'react'
// // import axios from 'axios';

// const getZipCode = async (lat, lng) => {
//   const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyA3f1aAVGosSERuX3EqMOP0IakI0CeHbbM`);
//   const results = response.data.results;
//   if (results[0]) {
//     const postalCode = results[0].address_components.find(component => component.types.includes('postal_code'));
   
//       return postalCode.short_name;
    
//   }
//   return null;
// };
// export default getZipCode