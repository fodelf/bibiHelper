/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2022-02-25 15:34:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2022-02-26 10:56:19
 */
// main.js

// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, BrowserView } = require('electron')
const path = require('path')

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    alwaysOnTop: true,
    // width: 310,
    // height: 735,
    width: 310,
    height: 940,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true,
    },
  })
  // const view = new BrowserView()
  // win.setBrowserView(view)
  // view.setBounds({ x: 0, y: 0, width: 302, height: 735 })
  win.loadURL('http://live.bilibili.com/1614034')
  // 加载 index.html
  // mainWindow.loadFile('index.html')

  // 打开开发工具
  // win.webContents.openDevTools()
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// 在这个文件中，你可以包含应用程序剩余的所有部分的代码，
// 也可以拆分成几个文件，然后用 require 导入。
