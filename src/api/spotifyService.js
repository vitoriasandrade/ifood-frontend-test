import axios from "axios";
function getPlaylists() {
  return axios.get("https://api.spotify.com/v1/browse/featured-playlists");
}

export default getPlaylists;
