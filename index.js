#!/usr/bin/env node
require("module-alias/register");
const fs = require("fs");
const path = require("path");
const { send } = require("@/utils/send-wechat");

const TASK_DIR = path.resolve(__dirname, "./tasks");
const dirs = fs.readdirSync(TASK_DIR, { encoding: "utf-8" });

const promises = [];
dirs.forEach((filename) => {
  const stat = fs.lstatSync(TASK_DIR + "/" + filename);
  if (stat.isDirectory()) {
    // 文件夹去文件夹内的index.js 运行
    // console.log(filename);
    const fun = require(TASK_DIR + "/" + filename + "/index.js");
    promises.push(fun());
  }
});

// 执行
Promise.all(promises).then((contents) => {
  let _content = "";
  contents.forEach((text) => {
    _content += text + "\n";
  });
  _content = _content.trim()
  _content && send(_content)
});
