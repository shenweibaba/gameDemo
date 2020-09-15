// 封装打印日志方法
const log = console.log.bind(console);

// 生成图片对象方法
const imageFromPath = function (src) {
    let img = new Image()
    img.src = './images/' + src
    return img
}


// 图片素材路径
const allImg = {
    background: 'background.jpg',
    paddle: 'paddle_1.png',
    ball: 'ball.png',
    ballshadow: 'ballshadow.png',
    block1: 'b1.png',
    block2: 'b2.png',
}
