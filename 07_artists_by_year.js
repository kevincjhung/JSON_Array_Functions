
function artistsByYear(artists) {
  return artists
    .sort((artist1, artist2) => artist1.year - artist2.year)
    .reduce((group, song) => {
      const { year } = song;
      group[year] = group[year] ?? [];
      group[year].push(song);
      return group;
    }, {}); 
}
module.exports = artistsByYear
// https://dmitripavlutin.com/javascript-array-group/

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

console.log(artistsByYear(artists))

// {
//   '2018': [ 
//     { 
//       song: "God's Plan", 
//       name: 'Drake', 
//       year: 2018 
//     } 
//   ],
//   '2019': [
//     { 
//       song: 'Old Town Road', 
//       name: 'Lil Nas X', 
//       year: 2019 
//     },
//     { 
//       song: 'Bad Guy', 
//       name: 'Billie Eilish', 
//       year: 2019 
//     }
//   ],
//   '2020': [
//     { 
//       song: 'WAP', 
//       name: 'Cardi B', 
//       year: 2020 
//     },
//     { 
//       song: 'Say So', 
//       name: 'Doja Cat', 
//       year: 2020 
//     }
//   ],
//   '2021': [
//     { 
//       song: "Shivers",
//       name: "Ed Sheeran",
//       year: 2021
//     }
//   ]
// }