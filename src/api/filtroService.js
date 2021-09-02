import axios from "axios";

function getFiltros() {
  return axios.get("http://www.mocky.io/v2/5a25fade2e0000213aa90776");
}

export default getFiltros;
