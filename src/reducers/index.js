import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    {
      title: "no scrubs",
      duration: "4.5"
    },
    {
      title: "song 2",
      duration: "2.5"
    },
    {
      title: "song 3",
      duration: "5.5"
    },
    {
      title: "song 4",
      duration: "6.5"
    }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
