const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const myPlayList = ["Cheap Thrills", "Check Kar", "Vikram"];

// Define the function findSong here.
function findSong(myPlayList, song) {
  for(let i = 0; i < myPlaylist.lenght; i++) {
    if(myPlayList(i) === song) {
      return i;
    }
  }
  return null;
}

rl.question("Enter the song that you want to find: ", (song) => {
  const songIndex = findSong(myPlayList, song);
  if (songIndex === null) {
    console.log("Song not found.");
  } else {
    console.log(`Song found at index ${songIndex}.`);
  }

  rl.close();
});
