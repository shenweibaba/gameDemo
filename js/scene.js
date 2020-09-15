class Scene {

    constructor(lv) {
        let s = {
            lv : lv,
            canvas : document.getElementById("canvas"),
            blockList : [],
        }

        Object.assign(this,s)
    }

    initBlockList() {

    }

    createBlockList(){
        let lv = this.lv,
            c_w = this.canvas.clientWidth,
            c_h = this.canvas.clientHeight,
            xNum_max = c_w / 50,
            
    }


}
