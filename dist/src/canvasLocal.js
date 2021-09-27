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
        this.rWidth = 1.5;
        this.rHeight = 2;
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
        /*this.drawLine(this.iX(0), this.iY(0), this.iX(1), this.iY(0));
        this.drawLine(this.iX(1), this.iY(0), this.iX(1), this.iY(1));
        this.drawLine(this.iX(1), this.iY(1), this.iX(0), this.iY(1));
        this.drawLine(this.iX(0), this.iY(1), this.iX(0), this.iY(0));*/
        let side = 0.7 * 480;
        let sideHalf = 0.5 * side;
        let xCenter = 320;
        let yCenter = 240;
        let h = sideHalf * Math.sqrt(3);
        let xA, yA, xB, yB, xC, yC, xA1, yA1, xB1, yB1, xC1, yC1, p, q;
        q = 0.03;
        p = 1 - q;
        xA = xCenter - sideHalf;
        yA = yCenter - 0.5 * h;
        xB = xCenter + sideHalf;
        yB = yA;
        xC = xCenter;
        yC = yCenter + 0.5 * h;
        for (let i = 0; i < 50; i++) {
            this.graphics.strokeStyle = 'blue';
            this.drawLine(xA, yA, xB, yB);
            this.drawLine(xB, yB, xC, yC);
            this.drawLine(xC, yC, xA, yA);
            xA1 = p * xA + q * xB;
            yA1 = p * yA + q * yB;
            xB1 = p * xB + q * xC;
            yB1 = p * yB + q * yC;
            xC1 = p * xC + q * xA;
            yC1 = p * yC + q * yA;
            xA = xA1;
            xB = xB1;
            xC = xC1;
            yA = yA1;
            yB = yB1;
            yC = yC1;
        }
        for (let i = 0; i < 50; i++) {
            let side = 0.7 * 580;
            let sideHalf = 0.5 * side;
            let xCenter = 320;
            let yCenter = 240;
            let h = sideHalf * Math.sqrt(3);
            let xA, yA, xB, yB, xC, yC, xA1, yA1, xB1, yB1, xC1, yC1, p, q;
            q = 0.15;
            p = 1 - q;
            xA = xCenter - sideHalf;
            yA = yCenter - 0.5 * h;
            xB = xCenter + sideHalf;
            yB = yA;
            xC = xCenter;
            yC = yCenter + 0.5 * h;
            this.graphics.strokeStyle = 'black';
            this.drawLine(xB, yB, xC, yC);
            this.drawLine(xC, yC, xA, yA);
            this.drawLine(xA, yA, xB, yB);
            xA1 = p * xA + q * xB;
            yA1 = p * yA + q * yB;
            xB1 = p * xB + q * xC;
            yB1 = p * yB + q * yC;
            xC1 = p * xC + q * xA;
            yC1 = p * yC + q * yA;
            xA = xA1;
            xB = xB1;
            xC = xC1;
            yA = yA1;
            yB = yB1;
            yC = yC1;
        }
    }
}
