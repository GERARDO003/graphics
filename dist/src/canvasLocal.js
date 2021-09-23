export class CanvasLocal {
    /*
     protected rWidth:number;
     protected rHeight:number;
     protected maxX: number;
     protected maxY: number;
     protected pixelSize: number;
     protected centerX: number;
     protected centerY: number;*/
    constructor(g, canvas) {
        this.rWidth = 3;
        this.rHeight = 3;
        this.rWidth2 = 2.5;
        this.rHeight2 = 2.5;
        //this.rWidth = 6;
        //this.rHeight= 4;
        this.graphics = g;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
    }
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    /*fx(x:number):number {
      return Math.sin(x*2.5);
    }*/
    paint() {
        this.drawLine(this.iX(0), this.iY(0), this.iX(1), this.iY(0));
        this.drawLine(this.iX(1), this.iY(0), this.iX(1), this.iY(1));
        this.drawLine(this.iX(1), this.iY(1), this.iX(0), this.iY(1));
        this.drawLine(this.iX(0), this.iY(1), this.iX(0), this.iY(0));
    }
}
