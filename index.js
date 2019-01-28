// Code your solution in this file
function findMatching (collection, name) {
  matches = []
  for (const element of collection) {
    if ( element.toLowerCase() === name.toLowerCase() ) {
      matches.push(element)
    }
  }
  return matches
}

function fuzzyMatch (collection, name) {
  matches = []
  for (const element of collection) {
    if (element.slice(0,2) === name.slice(0,2)){
      matches.push(element)
    }
  }
  return matches
}
// function colorFilter (collection, color) {
//   for (const user of collection) {
//     if (user.favoriteColor === color) {
//       console.log(user.firstName);
//     }
//   }
// }
function matchName (collection, name) {
  matches = []
  for (const object of collection) {
    if (object.name === name) {
      matches.push(object)
    }
  }
  return matches
}
