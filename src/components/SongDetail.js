import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  console.log(song);
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      Duration in mm:ss <h1>{song.duration} mm:ss</h1>
    </div>
  );
};

const mapStateToProps = state => {
  //  console.log(state.selectSong);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
