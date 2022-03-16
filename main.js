/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2022-02-25 15:34:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2022-03-15 08:31:16
 */
// main.js

// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, BrowserView } = require("electron");
const path = require("path");

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    alwaysOnTop: true,
    // width: 310,
    // height: 735,
    // width: 1000,
    // height: 940,
    width: 310,
    height: 940,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      devTools: true,
    },
  });
  // const view = new BrowserView()
  // win.setBrowserView(view)
  // view.setBounds({ x: 0, y: 0, width: 302, height: 735 })
  win.loadURL("http://live.bilibili.com/1614034");
  // 加载 index.html
  // mainWindow.loadFile('index.html')

  // 打开开发工具
  // win.webContents.openDevTools()
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// 在这个文件中，你可以包含应用程序剩余的所有部分的代码，
// 也可以拆分成几个文件，然后用 require 导入。
const express = require("express");
const expressApp = express();
var bodyParser = require("body-parser");
const expressWs = require("express-ws"); // 引入 WebSocket 包
var cors = require("cors");
expressWs(expressApp);
expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());
expressApp.use(cors());
expressApp.use(express.static("public"));
const FormData = require("form-data");
const port = 3000;
const http = require("http");
const axios = require("axios");
// expressApp.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   res.header('X-Powered-By', ' 3.2.1')
//   res.header('Content-Type', 'application/json;charset=utf-8')
//   next()
// })
expressApp.get("/getFollower", (req, res) => {
  const url =
    "https://api.bilibili.com/x/relation/stat?vmid=18113192&jsonp=jsonp";
  const options = {
    // baseURL:
    //   'https://api.bilibili.com/x/relation/stat?vmid=18113192&jsonp=jsonp',
    Connection: "keep-alive",
    // path: 'https://api.bilibili.com/x/relation/stat?vmid=18113192&jsonp=jsonp',
    // method: 'GET',
    headers: {
      authority: "api.bilibili.com",
      "sec-ch-ua": `" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"`,
      accept: `application/json, text/plain`,
      "sec-ch-ua-mobile": `?0`,
      "user-agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36`,
      "sec-ch-ua-platform": "macOS",
      origin: `https://space.bilibili.com`,
      "sec-fetch-site": `same-site`,
      "sec-fetch-mode": `cors`,
      "sec-fetch-dest": "empty",
      referer: `https://space.bilibili.com/18113192/fans/fans`,
      "accept-language": `zh-CN,zh;q=0.9,en;q=0.8`,
      cookie: `buvid3=527ACF69-FBBC-45E1-BA1C-7013CB98BA42143082infoc; blackside_state=1; rpdid=|(J~kkmlJRJm0J'uY|R|kJmJm; LIVE_BUVID=AUTO4916289135844416; _uuid=26B794FA-21DC-3696-BF03-9B662A3AC2AB19168infoc; dy_spec_agreed=1; CURRENT_QUALITY=0; video_page_version=v_old_home; i-wanna-go-back=-1; fingerprint_s=b7bd3fbc8fd09c82d6812441481538f0; buvid4=C4CB0E14-6DCD-D03A-E87C-CDE6FEFA0F6460591-022021209-ijWyEo9MQBNe2kuSfuejNA%3D%3D; buvid_fp_plain=undefined; SESSDATA=79062154%2C1660182744%2C83eea%2A21; bili_jct=b780d276cad57f28d7ed873588ed1499; DedeUserID=18113192; DedeUserID__ckMd5=dfa5891ac590243f; sid=aoizlh5g; b_ut=5; buvid_fp=9167b9f3ad17c269f73bc7470fdc4655; CURRENT_BLACKGAP=0; fingerprint3=09a76013291dc5c6aba753d5309393da; bp_t_offset_18113192=632443997524066307; bp_video_offset_18113192=632595764490534900; PEA_AU=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaWQiOjE4MTEzMTkyLCJwaWQiOjI0MDEyMiwiZXhwIjoxNjc3NzMyNjE5LCJpc3MiOiJ0ZXN0In0.gHXyvKTOiLtfCzKGH-3aGwMmo-X5Z3vMZCmRqMOf2bk; PVID=20; innersign=0; CURRENT_FNVAL=80; b_lsid=9D3FB72A_17F49D03239; fingerprint=cb7d3f1134e40249fa28c96125844a13`,
    },
  };
  const instance = axios.create(options);
  instance.get(url).then(
    (res1) => {
      // console.log('res1', res1)
      res.send(res1.data);
    },
    (err1) => {
      // console.log('err1', err1)
      res.send(err1);
    }
  );
  // const chidReq = http.request(options, (childRes) => {
  //   console.log(`状态码: ${childRes.statusCode}`)
  //   childRes.on('data', (d) => {
  //     console.log(`结果: ${d}`)
  //     res.send('ok')
  //   })
  // })
  // chidReq.on('error', (error) => {
  //   console.error(error)
  // })
  // chidReq.end()
});
expressApp.post("/send", (req, res) => {
  const url = "https://api.live.bilibili.com/msg/send";
  const options = {
    // baseURL:
    //   'https://api.bilibili.com/x/relation/stat?vmid=18113192&jsonp=jsonp',
    Connection: "keep-alive",
    // path: 'https://api.bilibili.com/x/relation/stat?vmid=18113192&jsonp=jsonp',
    // method: 'GET',
    headers: {
      authority: "api.bilibili.com",
      "sec-ch-ua": `" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"`,
      accept: `application/json, text/plain`,
      "sec-ch-ua-mobile": `?0`,
      "user-agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36`,
      "sec-ch-ua-platform": "macOS",
      origin: `https://space.bilibili.com`,
      "sec-fetch-site": `same-site`,
      "sec-fetch-mode": `cors`,
      "sec-fetch-dest": "empty",
      referer: `https://live.bilibili.com/1614034`,
      "accept-language": `zh-CN,zh;q=0.9,en;q=0.8`,
      cookie: `buvid3=527ACF69-FBBC-45E1-BA1C-7013CB98BA42143082infoc; blackside_state=1; rpdid=|(J~kkmlJRJm0J'uY|R|kJmJm; LIVE_BUVID=AUTO4916289135844416; _uuid=26B794FA-21DC-3696-BF03-9B662A3AC2AB19168infoc; dy_spec_agreed=1; CURRENT_QUALITY=0; video_page_version=v_old_home; i-wanna-go-back=-1; fingerprint_s=b7bd3fbc8fd09c82d6812441481538f0; buvid4=C4CB0E14-6DCD-D03A-E87C-CDE6FEFA0F6460591-022021209-ijWyEo9MQBNe2kuSfuejNA%3D%3D; buvid_fp_plain=undefined; SESSDATA=79062154%2C1660182744%2C83eea%2A21; bili_jct=b780d276cad57f28d7ed873588ed1499; DedeUserID=18113192; DedeUserID__ckMd5=dfa5891ac590243f; sid=aoizlh5g; b_ut=5; buvid_fp=9167b9f3ad17c269f73bc7470fdc4655; CURRENT_BLACKGAP=0; fingerprint3=09a76013291dc5c6aba753d5309393da; bp_t_offset_18113192=632443997524066307; bp_video_offset_18113192=632595764490534900; PEA_AU=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaWQiOjE4MTEzMTkyLCJwaWQiOjI0MDEyMiwiZXhwIjoxNjc3NzMyNjE5LCJpc3MiOiJ0ZXN0In0.gHXyvKTOiLtfCzKGH-3aGwMmo-X5Z3vMZCmRqMOf2bk; PVID=20; innersign=0; CURRENT_FNVAL=80; b_lsid=9D3FB72A_17F49D03239; fingerprint=cb7d3f1134e40249fa28c96125844a13`,
    },
  };
  const param = new FormData();
  param.append("bubble", 0);
  param.append("msg", "试一试");
  param.append("color", 16777215);
  param.append("fontsize", 25);
  param.append("rnd", 1646556304);
  param.append("roomid", 1614034);
  param.append("csrf", "bb14e100e258d9cfa3bea34f3990f7a8");
  param.append("csrf_token", "bb14e100e258d9cfa3bea34f3990f7a8");
  const http = axios.create(options);
  http({
    url: url,
    data: param,
    method: "POST",
    headers: {
      "content-type": `multipart/form-data; boundary=${param._boundary}`,
      authority: "api.bilibili.com",
      "sec-ch-ua": `" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"`,
      accept: `application/json, text/plain`,
      "sec-ch-ua-mobile": `?0`,
      "user-agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36`,
      "sec-ch-ua-platform": "macOS",
      origin: `https://space.bilibili.com`,
      "sec-fetch-site": `same-site`,
      "sec-fetch-mode": `cors`,
      "sec-fetch-dest": "empty",
      referer: `https://live.bilibili.com/1614034`,
      "accept-language": `zh-CN,zh;q=0.9,en;q=0.8`,
      cookie: `buvid3=527ACF69-FBBC-45E1-BA1C-7013CB98BA42143082infoc; blackside_state=1; rpdid=|(J~kkmlJRJm0J'uY|R|kJmJm; LIVE_BUVID=AUTO4916289135844416; _uuid=26B794FA-21DC-3696-BF03-9B662A3AC2AB19168infoc; dy_spec_agreed=1; CURRENT_QUALITY=0; video_page_version=v_old_home; i-wanna-go-back=-1; fingerprint_s=b7bd3fbc8fd09c82d6812441481538f0; buvid4=C4CB0E14-6DCD-D03A-E87C-CDE6FEFA0F6460591-022021209-ijWyEo9MQBNe2kuSfuejNA%3D%3D; buvid_fp_plain=undefined; SESSDATA=79062154%2C1660182744%2C83eea%2A21; bili_jct=b780d276cad57f28d7ed873588ed1499; DedeUserID=18113192; DedeUserID__ckMd5=dfa5891ac590243f; sid=aoizlh5g; b_ut=5; buvid_fp=9167b9f3ad17c269f73bc7470fdc4655; CURRENT_BLACKGAP=0; fingerprint3=09a76013291dc5c6aba753d5309393da; bp_t_offset_18113192=632443997524066307; bp_video_offset_18113192=632595764490534900; PEA_AU=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaWQiOjE4MTEzMTkyLCJwaWQiOjI0MDEyMiwiZXhwIjoxNjc3NzMyNjE5LCJpc3MiOiJ0ZXN0In0.gHXyvKTOiLtfCzKGH-3aGwMmo-X5Z3vMZCmRqMOf2bk; PVID=20; innersign=0; CURRENT_FNVAL=80; b_lsid=9D3FB72A_17F49D03239; fingerprint=cb7d3f1134e40249fa28c96125844a13`,
    },
  })
    .then((res) => {
      console.log("成功");
      console.log(res);
      // resolve(res.data)
    })
    .catch((err) => {
      console.log("失败");
      // reject(err)
    });
});
let WebSocket = null;
expressApp.post("/welcome", (req, res) => {
  // console.log(req)
  if (WebSocket) {
    WebSocket.send(JSON.stringify(req.body));
  }
  res.send({ send: "ok" });
});
expressApp.ws("/basic", function (ws, req) {
  WebSocket = ws;
  // console.log('connect success')
  // console.log(ws)

  // 使用 ws 的 send 方法向连接另一端的客户端发送数据
  // ws.send('connect to express server with WebSocket success')

  // 使用 on 方法监听事件
  //   message 事件表示从另一段（服务端）传入的数据
  // ws.on('message', function (msg) {
  //   console.log(`receive message ${msg}`)
  //   ws.send('default response')
  // })

  // // 设置定时发送消息
  // let timer = setInterval(() => {
  //   ws.send(`interval message ${new Date()}`)
  // }, 2000)

  // // close 事件表示客户端断开连接时执行的回调函数
  // ws.on('close', function (e) {
  //   console.log('close connection')
  //   clearInterval(timer)
  //   timer = undefined
  // })
});
expressApp.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
