console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Samson',
  lastName: 'Vang'
}
// TODO - add properties here
me.hasSiblings = true;
me.shoeCount = 4;
me.favThreeFoods = ['Sushi', 'Pho', 'Seafood']

console.log('A little about me:', me)
/*console.log('Favortie foods are:', favThreeFoods)
console.log('Amount of shoes:', shoeCount)*/
/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
  */
let fullName = (`${me.firstName} ${me.lastName}`);
console.log( fullName )

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food\
*/
console.log('First favorite food is:', me.favThreeFoods[0])
console.log('Last favorite food is:', me.favThreeFoods[2])

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
me.newShoes = 1;
console.log('Bought a new pair of shoes')

shoeCount = ( me.newShoes + me.shoeCount);
console.log('Amount of shoes:', shoeCount )


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'blue';
console.log('Favorite color is:', me.favoriteColor)
