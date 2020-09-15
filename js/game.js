

var storageScore = 0;

var globalScore = 0;

class Game {
    constructor(main) {
        let g = {
            main : main,
            actions : {}, // 记录按键动作
            keydowns : {}, // 记录按键keycode
            state : 1,
            state_START : 1,//开始
            state_STOP : 3,// 暂停
            state_RUNNING : 2, // 运行中
            state_GAMEOVER : 4, // 游戏结束
            state_UPDATE : 5, // 通关

            canvas: document.getElementById("canvas"), // canvas 元素
            context : document.getElementById("canvas").getContext("2d"), // 画布
            timer: null, // 轮询定时器
            fps : main.fps // fps值 默认60
        }
        Object.assign(this,g)
    }

    /*
    绘制页面所有素材
     */
    draw(paddle,ball,ballshadow,blockList,score){
        let g = this;

        // 清除画布
        g.context.clearRect(0,0,g.canvas.width,g.canvas.height)

        // 绘制背景图
        g.drayBg()

        // 绘制挡板
        g.drawImg(paddle)

        // 绘制小球
        g.drawImg(ball)

        // 绘制小球阴影
        g.drawImg(ballshadow)

        // 绘制砖块
        g.drawImg(blockList)

        // 绘制分数
        g.drawText(score)

        window.canvas_g = this

    }

    /*
    绘制背景
     */
    drayBg(){
        let bg = imageFromPath(allImg.background)
        this.context.drawImage(bg, 0, 0, cdiv.clientWidth, cdiv.clientHeight)
    }

    /*
    绘制图片
     */
    drawImg(obj){
        this.context.drawImage(obj.image, obj.x, obj.y)
    }

    // 绘制计数板
    drawText (obj) {
        this.context.font = '24px Microsoft YaHei'
        this.context.fillStyle = '#000'
        // 绘制分数
        this.context.fillText(obj.text + obj.allScore, obj.x, obj.y)
        // 绘制关卡
        this.context.fillText(obj.textLv + obj.lv, this.canvas.width - 100, obj.y)
        storageScore = obj.allScore;
    }
}
