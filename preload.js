/*
 * @Description: 描述
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2022-02-25 16:14:25
 * @LastEditors: 吴文周
 * @LastEditTime: 2022-02-26 11:07:07
 */
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('gift-control-vm').remove()
    document.getElementById('head-info-vm').remove()

    document.querySelector('.side-bar-cntr').remove()
    // const video = document.getElementsByTagName('video')[0]
    document
      .querySelector('.player-ctnr')
      .setAttribute(
        'style',
        'position: fixed !important;z-index: 9999 !important;top: 0px !important;left: 0px !important;width:310px !important;height:520px !important;'
      )
    document
      .querySelector('.aside-area')
      .setAttribute(
        'style',
        'position: fixed !important;z-index: 9998 !important;top: 144px !important;left: 0px !important;'
      )
  }, 5000)
})
