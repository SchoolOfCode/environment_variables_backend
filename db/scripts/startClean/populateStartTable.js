import { query } from "../../connection.js";

let initialStartTable = [
  {
    cleanName: "Brighton",
    location: "Brighton Pier",
    date: "22.09.22",
    startTime: "12:00",
    endTime: "13:00",
    host: "Blake Lawrence",
    notes: "Easy walking, no hills, bring sunnies",
    latitude: 50.821781,
    longitude: -0.143573,
  },
  {
    cleanName: "Worthing",
    location: "Home Field Park",
    date: "25.09.22",
    startTime: "12:00",
    endTime: "17:00",
    host: "Simran Rai",
    notes: "Only a small Park, walking aprox 3km",
    latitude: 50.81805091240899,
    longitude: -0.366551888576914,
  },

  {
    cleanName: "Adur River Cleanup",
    location: "Shoreham by Sea",
    date: "29.09.22",
    startTime: "12:00",
    endTime: "13:00",
    host: "Emma Gill",
    notes: "Can be Muddy along the river",
    latitude: 50.830597805865416,
    longitude: -0.26970090532648877,
  },
  {
    cleanName: "O2 Thames Cleanup",
    location: "Greenwich",
    date: "29.09.22",
    startTime: "12:00",
    endTime: "13:00",
    host: "Emma Gill",
    notes: "Bring Wellies",
    latitude: 51.50147618892564,
    longitude: 0.00901512085762601,
  },
];

async function populateStartTable() {
  for (let i = 0; i < initialStartTable.length; i++) {
    const response = await query(
      `INSERT INTO start (cleanName,location,date,startTime,endTime,host,notes,latitude,longitude) VALUES ($1,$2 ,$3,$4,$5,$6,$7,$8,$9 ) RETURNING *;`,
      [
        initialStartTable[i].cleanName,
        initialStartTable[i].location,
        initialStartTable[i].date,
        initialStartTable[i].startTime,
        initialStartTable[i].endTime,
        initialStartTable[i].host,
        initialStartTable[i].notes,
        initialStartTable[i].latitude,
        initialStartTable[i].longitude,
      ]
    );

    console.log(response.rows);
  }
  console.log("Start clean Table populated succesfully");
}

populateStartTable();
