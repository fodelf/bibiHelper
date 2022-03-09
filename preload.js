/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2022-02-25 16:14:25
 * @LastEditors: 吴文周
 * @LastEditTime: 2022-03-09 15:57:17
 */
window.addEventListener("DOMContentLoaded", () => {
  const template = `<h5><span id ='flowersLabel'>关注人数</span> : <span id ='flowersCount'></span></h5>`;
  const div = document.createElement("div");
  div.innerHTML = template;
  div.setAttribute(
    "style",
    "font-size: 14px;position: fixed !important;z-index: 9999 !important;top: 166px !important;right: 30px !important;"
  );
  document.body.appendChild(div);
  document
    .getElementById("flowersLabel")
    .setAttribute("style", "color: skyblue;");
  document.getElementById("flowersCount").setAttribute("style", "color: pink;");
  setTimeout(() => {
    document.getElementById("gift-control-vm").remove();
    document.getElementById("head-info-vm").remove();

    document.querySelector(".side-bar-cntr").remove();
    // const video = document.getElementsByTagName('video')[0]
    document
      .querySelector(".player-ctnr")
      .setAttribute(
        "style",
        "position: fixed !important;z-index: 9999 !important;top: 0px !important;left: 0px !important;width:310px !important;height:520px !important;"
      );
    document
      .querySelector(".aside-area")
      .setAttribute(
        "style",
        "position: fixed !important;z-index: 9998 !important;top: 144px !important;left: 0px !important;"
      );

    function callback(mutationList, observer) {
      mutationList.forEach((mutation) => {
        switch (mutation.type) {
          case "childList":
            if (mutation.addedNodes.length == 0) {
              return;
            }
            const addedNode = mutation.addedNodes[0];
            const innerText = addedNode.innerText;
            // let text = ''
            // if (innerText.indexOf('进入直播间') > 0) {
            //   text = '欢迎' + innerText.substring(0, 18)
            //   // document.querySelector('.chat-input').value = welText
            //   // document.querySelector('.chat-input').innerHTML = welText
            // } else if (innerText.indexOf('关注') > 0) {
            //   text = '感谢' + innerText.substring(0, 16) + '关注'
            //   // document.querySelector('.chat-input').value = thankText
            //   // document.querySelector('.chat-input').innerHTML = thankText
            // }
            // var sound = window.speechSynthesis // 定义局部变量
            // var read_text = new SpeechSynthesisUtterance(innerText) // 实例化
            // sound.speak(read_text)
            fetch("http://localhost:3000/welcome", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({ text: innerText }),
            })
              .then((response) => response.json())
              .then((res) => {});
            // document.querySelector('.chat-input').value = text
            // document.querySelector('.chat-input').input()
            // document
            //   .querySelector('.chat-input')
            //   .dispatchEvent(new Event('input', { bubbles: true }))
            // document.querySelector('.live-skin-button-text').click()
            // document.querySelector('.live-skin-button-text').click()
            /* 从树上添加或移除一个或更多的子节点；参见 mutation.addedNodes 与
              mutation.removedNodes */
            break;
          case "attributes":
            /* mutation.target 中某节点的一个属性值被更改；该属性名称在 mutation.attributeName 中，
              该属性之前的值为 mutation.oldValue */
            break;
        }
      });
    }
    var targetNode = document.querySelector("#brush-prompt");
    var observerOptions = {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      attributes: true, // 观察属性变动
      subtree: true, // 观察后代节点，默认为 false
    };

    function start() {
      window.observer = new MutationObserver(callback);
      observer.observe(targetNode, observerOptions);
    }
    // function stop() {
    //   window.observer.disconnect()
    // }
    start();
    const startButton = document.createElement("button");
    startButton.innerHTML = "启动";
    startButton.id = "start";
    startButton.style =
      "display:none;font-size: 14px;position: fixed !important;z-index: 9999 !important;top: 206px !important;right: 30px !important;";
    startButton.addEventListener("click", () => {
      start();
      startButton.style.display = "none";
      document.getElementById("stop").style.display = "block";
    });
    document.body.appendChild(startButton);
    const stopButton = document.createElement("button");
    stopButton.innerHTML = "暂停";
    stopButton.id = "stop";
    stopButton.style =
      "font-size: 14px;position: fixed !important;z-index: 9999 !important;top: 206px !important;right: 30px !important;";
    stopButton.addEventListener("click", () => {
      stop();
      stopButton.style.display = "none";
      startButton.style.display = "block";
    });
    document.body.appendChild(stopButton);
    // var observer = new MutationObserver(callback)
    // observer.observe(targetNode, observerOptions)

    // let formData = new FormData()
    // formData.append('bubble', 0)
    // formData.append('msg', '试一试')
    // formData.append('color', 16777215)
    // formData.append('fontsize', 25)
    // formData.append('rnd', 1646556304)
    // formData.append('roomid', 1614034)
    // formData.append('csrf', 'bb14e100e258d9cfa3bea34f3990f7a8')
    // formData.append('csrf_token', 'bb14e100e258d9cfa3bea34f3990f7a8')
    // fetch('https://api.live.bilibili.com/msg/send', {
    //   mode: 'cors',
    //   credentials: 'include',
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': `multipart/form-data;`,
    //     cookie: `buvid3=527ACF69-FBBC-45E1-BA1C-7013CB98BA42143082infoc; blackside_state=1; rpdid=|(J~kkmlJRJm0J'uY|R|kJmJm; LIVE_BUVID=AUTO4916289135844416; _uuid=26B794FA-21DC-3696-BF03-9B662A3AC2AB19168infoc; dy_spec_agreed=1; CURRENT_QUALITY=0; video_page_version=v_old_home; i-wanna-go-back=-1; fingerprint_s=b7bd3fbc8fd09c82d6812441481538f0; buvid4=C4CB0E14-6DCD-D03A-E87C-CDE6FEFA0F6460591-022021209-ijWyEo9MQBNe2kuSfuejNA%3D%3D; buvid_fp_plain=undefined; SESSDATA=79062154%2C1660182744%2C83eea%2A21; bili_jct=b780d276cad57f28d7ed873588ed1499; DedeUserID=18113192; DedeUserID__ckMd5=dfa5891ac590243f; sid=aoizlh5g; b_ut=5; buvid_fp=9167b9f3ad17c269f73bc7470fdc4655; CURRENT_BLACKGAP=0; fingerprint3=09a76013291dc5c6aba753d5309393da; bp_t_offset_18113192=632443997524066307; bp_video_offset_18113192=632595764490534900; PEA_AU=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaWQiOjE4MTEzMTkyLCJwaWQiOjI0MDEyMiwiZXhwIjoxNjc3NzMyNjE5LCJpc3MiOiJ0ZXN0In0.gHXyvKTOiLtfCzKGH-3aGwMmo-X5Z3vMZCmRqMOf2bk; PVID=20; innersign=0; CURRENT_FNVAL=80; b_lsid=9D3FB72A_17F49D03239; fingerprint=cb7d3f1134e40249fa28c96125844a13`,
    //   },
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // debugger
    //     console.log('Success:', data)
    //   })
    //   .catch((error) => {
    //     // debugger
    //     console.error('Error:', error)
    //   })
  }, 5000);
  fetch("http://localhost:3000/getFollower")
    .then((response) => response.json())
    .then((res) => {
      document.getElementById("flowersCount").innerHTML = res.data.follower;
    });
  setInterval(() => {
    fetch("http://localhost:3000/getFollower")
      .then((response) => response.json())
      .then((res) => {
        document.getElementById("flowersCount").innerHTML = res.data.follower;
      });
  }, 1000 * 60);
});
