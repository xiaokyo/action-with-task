/** 剩余电费通知 */
const axios = require("@/utils/request");

async function getRemainBattery() {
  const url = `http://www.appapi.cnyiot.com/api.ashx?Method=getMetList_Simple&api=mycn&apikey=vUIZs0iEluR%2FjKWwbvWud1GvnnFgeO96CXLKW1wcWz4gthsO9HjIDj3%2BAqCfpQRR7ND0XTOflY20k7Fb5UqnOVQIplSzIHTaKaU23SbaEws%3D`;
  const data = {
    ckv: "",
    group: "-10",
    loginid: "18200226175",
    model: 0,
    mt: 1,
  };
  const headers = {
    "User-Agent": "okhttp/3.12.1",
    "Accept-Encoding": "gzip",
    "Content-Type": "application/json",
  };
  const [, res] = await axios({ url, data, headers, method: "POST" });
  if (res) {
    const { value, result } = res;
    if (result == 200) {
      const { d } = value;
      const obj = d[0];
      // send(`房1408-2 剩余电费: ${obj.e}元`);
      return `房1408-2 剩余电费: ${obj.e}元`;
    }
  }
  return "";
}

module.exports = getRemainBattery;
