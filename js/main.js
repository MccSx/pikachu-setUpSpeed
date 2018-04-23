!function () {
  let speed = 50
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let setUpSpeed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch (setUpSpeed) {
      case 'slow':
        speed = 100
        break
      case 'normal':
        speed = 50
        break
      case 'fast':
        speed = 10
        break
    }
  })

  function writeCode (prevCode, code, fn) {
    let codeArea = document.querySelector('#code')
    let styleArea = document.querySelector('#styleTag')
    let n = 0
    let timer = setTimeout(function run() {
      n += 1
      codeArea.innerHTML = Prism.highlight( (prevCode + code.substring(0, n)) , Prism.languages.css, 'css')
      styleArea.innerHTML = prevCode + code.substring(0, n)
      codeArea.scrollTop = codeArea.scrollHeight
      if (n < code.length) {
        timer = setTimeout(run, speed)
      } else {
        fn && fn.call()
      }
    },speed)
  }

  let cssCode = `
/* 现在将展示动态画一只皮卡丘 */

/* 首先展示皮卡丘的位置 */
.preview{
  height: 100%;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FEE433;
}
.wrapper{
  width: 100%;
  height: 200px;
  position: relative;
}
.wrapper>:not(:last-child){
  z-index: 1;
}

/* 这是皮卡丘的鼻子 */
.nose{
  position: absolute;
  border-style: solid;
  border-width: 10px 12px;
  border-color: black transparent transparent;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 28px;
}

/* 下面开始画皮卡丘的眼睛 */
.eye{
  position: absolute;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  background: #2E2E2E;
  border: 2px solid #000000;
}
.eye.left{
  right: 50%;
  margin-right: 90px;
}
.eye.right{
  left: 50%;
  margin-left: 90px;
}
.eye::before{
  content: '';
  position: absolute;
  top: -1px;
  left: 9px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 2px solid #000000;
}

/* 这是皮卡丘可爱的脸蛋 */
.face{
  position: absolute;
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid #000000;
  top: 85px;
  border-radius: 50%;
}
.face.left{
  right: 50%;
  margin-right: 116px;
}
.face.right{
  left: 50%;
  margin-left: 116px;
}

/* 这就是皮卡丘的嘴唇了 */
.upperLip{
  position: absolute;
  width: 80px;
  height: 28px;
  border: 3px solid black;
  top: 64px;
  background: #FEE433;
}
.upperLip.left{
  right: 50%;
  border-bottom-left-radius: 50px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-25deg)
}
.upperLip.right{
  left: 50%;
  border-bottom-right-radius: 50px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(25deg)
}

/* 现在把皮卡丘的嘴巴展现出来 */
.lowerLip-wrapper{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 300px;
  height: 126px;
  overflow: hidden;
}
.lowerLip{
  position: absolute;
  width: 300px;
  height: 3500px;
  bottom: 0;
  border-radius: 200px/2000px;
  border: 3px solid black;
  background: #990513;
  overflow: hidden;
}
.lowerLip::after{
  content: '';
  bottom: -2px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #FC4A62;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* 好了，一只可爱的皮卡丘完成了 */
`

  writeCode('', cssCode)
}.call()