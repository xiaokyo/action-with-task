/** 发送微信消息 */

const axios = require("@/utils/request");
const dayjs = require("dayjs");

const secret = `38abc24f-5446-4f78-879f-f5a8f000e102`;

async function send(content) {
  let currentDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
  let _content = `${currentDate}:\n\n ${content}`;
  _content = encodeURIComponent(_content);

  await axios({
    method: "get",
    url: `http://180.76.185.91/enterprise/sendText?secret=${secret}&content=${_content}`,
  });
}

module.exports = {
  send,
};
