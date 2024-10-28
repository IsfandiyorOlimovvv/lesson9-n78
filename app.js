// let prices = {
//     first: 1200,
//     second: 2500,
//     third: 3000,
//     fourth: 4500,
//     fifth: 6000
// };

// let total = Object.values(prices).reduce((sum, price) => sum + price, 0);
// console.log(total);



// const product = {
//     name: "Laptop",
//     price: 1200,
//     category: "Electronics",
//     stock: 25
// };

// console.log(product);



// const user = {
//     name: "Isfandiyor",
//     age: 25,
//     email: "isfandiyor@example.com"
// };

// if (confirm("User obyektini muzlatishni xohlaysizmi?")) {
//     Object.freeze(user);
//     console.log("User obyekti muzlatildi.");
// } else {
//     console.log("User obyekti muzlatilmadi.");
// }

// console.log(user);



// const company = {
//     name: "Global Tech Solutions",
//     headquarters: {
//       address: {
//         street: "789 Innovation Blvd",
//         city: "Tech City",
//         state: {
//           name: "Innovatia",
//           code: "IN",
//         },
//         country: {
//           name: "Technoland",
//           code: "TN",
//         },
//       },
//       offices: {
//         northAmerica: {
//           regionalHead: "Ms. Susan Clarke",
//           contact: {
//             phone: "456-789-1234",
//             email: "susan@globaltech.com",
//           },
//           departments: {
//             software: {
//               head: "Mr. John Doe",
//               teamLead: {
//                 name: "Ms. Alice Johnson",
//                 contact: {
//                   email: "alice@globaltech.com",
//                   phone: "456-123-7890",
//                 },
//               },
//             },
//             hr: {
//               head: "Mrs. Sarah Connors",
//               teamLead: {
//                 name: "Mr. Bruce Wayne",
//                 contact: {
//                   email: "bruce@globaltech.com",
//                   phone: "456-456-7899",
//                 },
//               },
//             },
//           },
//         },
//         europe: {
//           regionalHead: "Mr. Liam O'Sullivan",
//           contact: {
//             phone: "789-456-3210",
//             email: "liam@globaltech.com",
//           },
//           departments: {
//             marketing: {
//               head: "Ms. Natasha Romanoff",
//               teamLead: {
//                 name: "Mr. Steve Rogers",
//                 contact: {
//                   email: "steve@globaltech.com",
//                   phone: "123-321-4567",
//                 },
//               },
//             },
//             finance: {
//               head: "Mr. Tony Stark",
//               teamLead: {
//                 name: "Ms. Pepper Potts",
//                 contact: {
//                   email: "pepper@globaltech.com",
//                   phone: "987-654-3210",
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   };
  
//   function destroyObject(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         destroyObject(obj[key]);
//       }
//       delete obj[key];
//     }
//   }
  
//   destroyObject(company);
//   console.log(company);
