console.log('***** Music Collection *****')
let collection = [];


function addToCollection (title, artist, yearPublished){
    const newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };

collection.push(newAlbum);

return newAlbum;
}

let album0 = addToCollection('Sadnecessary', 'Milky Chance', 2013);
console.log('added first album:', album0)

// This does the exact same thing as above, which way is preferred?
/* 
addToCollection('Sadnecessary', 'Milky Chance', 2013);
*/



// Adding albums to collection using the addToCollection function and inputting the proper parameters to replace the placeholders.

let album1 = addToCollection('This Empty Northern Hemisphere', 'Gregory Alan Isakov', 2009);
let album2 = addToCollection('The Weatherman', 'Gregory Alan Isakov', 2013);
let album3 = addToCollection('Bella Donna', 'Stevie Nicks', 1981);
let album4 = addToCollection('The Wild Heart', 'Stevie Nicks', 1983);
let album5 = addToCollection('Sound & Color', 'Alabama Shakes', 2015);

console.log('Adding another album to the collection', album1)
console.log('Adding another album to the collection', album2)
console.log('Adding another album to the collection', album3)
console.log('Adding another album to the collection', album4)
console.log('Adding another album to the collection', album5)

//another way to add all the albums, does the same thing as above
/*
console.log('Adding another album to the collection', addToCollection('This Empty Northern Hemisphere', 'Gregory Alan Isakov', 2009));
console.log('Adding another album to the collection', addToCollection('The Weatherman', 'Gregory Alan Isakov', 2013));
console.log('Adding another album to the collection', addToCollection('Bella Donna', 'Stevie Nicks', 1981));
console.log('Adding another album to the collection', addToCollection('The Wild Heart', 'Stevie Nicks', 1983));
console.log('Adding another album to the collection', addToCollection('Sound & Color', 'Alabama Shakes', 2015));
*/

console.log('My collection so far is:', collection.length, collection);


//function to show the collection- don't need to console.log the function because console logging is within the function.

function showCollection (array) {
  console.log('Number of items in the collection:', array.length);
  for (i = 0; i < array.length; i++){
    const album = array[i];
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
}
}

showCollection(collection);

// This is the same function as above, just with a for of loop 
/*
function showCollection(array) {
  console.log('Number of items in the collection:', array.length);
  for (const album of array) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}
*/


function findByArtist(artist){
  results = [];
  for (i = 0; i < collection.length; i++){
    const album = collection[i];
    if (album.artist === artist){
      results.push(album);
    }
  }
  return results

}

// Same function but written with for of loop instead

/* function findByArtist (artist){
  const results = [];
  for (const album of collection) {
      if (album.artist === artist) {
        results.push(album);
      }
    }
    return results;
  }
  */
 

// searching 2 artists that I have in the collection and 1 that isn't to make sure the function is working properly.
console.log('Albums in collection by Stevie Nicks', findByArtist ('Stevie Nicks'));
console.log('Albums in collection by Caamp', findByArtist ('Caamp'));
console.log('Albums in collection by Milky Chance', findByArtist ('Milky Chance'));



// Stretch goals --- only have first bullet point done so far
// Can't figure out the other aspects of this question
/*
function search(artist, yearPublished){
  results = [];
  for (i = 0; i < collection.length; i++){
    const album = collection[i];
    if (album.artist === artist && album.yearPublished === yearPublished){
      results.push(album);
      console.log(`Album: ${album.artist}, year: ${yearPublished}`);
    } 
  }
  return results;
}

search('Stevie Nicks', 1981);
search('Stevie Nicks', 2012);
search();
*/
























/* 

const fullName = (`${me.firstName} ${me.lastName}`);

*/

