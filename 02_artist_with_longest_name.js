
function artistWithLongestName(artists) {
  let rIndex; // return index, index of current longest artist name
  
  for(let artistIndex in artists){
    let leArtist = artists[artistIndex]
    
    if(rIndex == undefined){
      rIndex = 0
    }
  
   if(leArtist.name.length > artists[rIndex].name.length){
    rIndex = artistIndex;
   }
  }
  return artists[rIndex]
}


module.exports = artistWithLongestName


const artists = [
  {
    song: "Shivers",
    name: "Ed Sheeran",
    year: 2021
  },
  {
    song: "HOLIDAY",
    name: "Lil Nas X",
    year: 2020
  },
  {
    song: "WAP",
    name: "Cardi B",
    year: 2020
  },
  {
    song: "Say So",
    name: "Doja Cat",
    year: 2020
  },
  {
    song: "Old Town Road",
    name: "Lil Nas X",
    year: 2019
  },
  {
    song: "Bad Guy",
    name: "Billie Eilish",
    year: 2019
  },
  {
    song: "God's Plan",
    name: "Drake",
    year: 2018
  }
]
