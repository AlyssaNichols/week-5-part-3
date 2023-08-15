console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished){
    const newRecord = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };

collection.push(newRecord);

return newRecord;
}


console.log('Adding another album to the collection', addToCollection('This Empty Northern Hemisphere', 'Gregory Alan Isakov', 2009));
console.log('Adding another album to the collection', addToCollection('The Weatherman', 'Gregory Alan Isakov', 2013));
console.log('Adding another album to the collection', addToCollection('Rumours', 'Fleetwood Mac', 1977));
console.log('Adding another album to the collection', addToCollection('Bella Donna', 'Stevie Nicks', 1981));
console.log('Adding another album to the collection', addToCollection('The Wild Heart', 'Stevie Nicks', 1983));
console.log('Adding another album to the collection', addToCollection('Sound & Color', 'Alabama Shakes', 2015));

console.log('My collection so far is:', collection);


function showCollection(albumArray) {
  console.log(`Number of items in the collection: ${albumArray.length}`);
  for (const album of albumArray) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

showCollection(collection);


function findByArtist (artist){
    const results = [];
    for (const album of collection) {
        if (album.artist === artist) {
          results.push(album);
        }
      }
      return results;
    }


console.log('Albums by Stevie Nicks', findByArtist('Stevie Nicks'));

console.log('Albums by Caamp', findByArtist('Caamp'));

console.log('Albums by Fleetwood Mac', findByArtist('Fleetwood Mac'));






/* 

const fullName = (`${me.firstName} ${me.lastName}`);

CAN CREATE NEW VARIABLES TO USE FOR OBJECT LOOPS AND FUNCTIONS

COME BACK TO THIS!!! 
*/

