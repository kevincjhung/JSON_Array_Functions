
function artistsFromYear(artists, year) {
  let artistsArray = artists
  .sort((artist1, artist2) => artist1.year - artist2.year)
  .reduce((group, song) => {
    const { year } = song;
    group[year] = group[year] ?? [];
    group[year].push(song);
    return group;
  }, {}); 

 return artistsArray[year]
}
module.exports = artistsFromYear


const artists = [
  { 
    song: "Shivers",
    name: "Ed Sheeran",
    year: 2021
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

console.log(artistsFromYear(artists, "2020"))
// { 
//   song: 'Bad Guy', 
//   name: 'Billie Eilish', 
//   year: 2019 
// }