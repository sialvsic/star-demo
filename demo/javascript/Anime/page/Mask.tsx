import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./Mask.less";

interface Props {
  isShow: boolean;
  updateShow: () => void;
}

function Mask(props: Props) {
  const { isShow, updateShow } = props;
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "#f1f1f1";

    // const pageWidth = window.innerWidth;
  }, []);

  useEffect(() => {
    if (isShow) {
      console.log("isShow");
      const canvas = ref.current as HTMLCanvasElement;
      canvas.classList.add("canvas-p");
      canvas.style.zIndex = "300";
      onDraw();
    }
  }, [isShow]);

  const onDraw = () => {
    console.log("draw");
    const canvas = ref.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const pageHeight = window.innerHeight;
    const pageWidth = window.innerWidth;

    const heights = [0, 0.5 * pageHeight, pageHeight];
    let points = {
      p1: {
        x: pageWidth,
        y: heights[0],
      },
      p2: {
        x: pageWidth,
        y: heights[1],
      },
      p3: {
        x: pageWidth,
        y: heights[2],
      },
      p4: {
        x: pageWidth,
        y: heights[2],
      },
      p5: {
        x: pageWidth,
        y: heights[0],
      },
    };

    // P1点的变化
    anime({
      targets: points.p1,
      x: 0,
      easing: "easeInQuart",
      delay: 20,
      duration: 500,
    });

    // P2点的变化
    anime({
      targets: points.p2,
      x: 0,
      easing: "easeInSine",
      duration: 500,
    });

    // P3点的变化
    anime({
      targets: points.p3,
      x: 0,
      easing: "easeInQuart",
      delay: 20,
      duration: 500,
    });

    // 画曲线
    anime({
      duration: 520,
      update: function () {
        // 清除上一次的绘制
        ctx.clearRect(0, 0, pageWidth, pageHeight);
        ctx.beginPath();
        ctx.moveTo(points.p1.x, points.p1.y);

        // 幕布的上半区域
        ctx.bezierCurveTo(
          points.p1.x,
          points.p1.y,
          points.p2.x,
          points.p2.y - 0.25 * pageHeight,
          points.p2.x,
          points.p2.y
        );

        //幕布的下半区域
        ctx.bezierCurveTo(
          points.p2.x,
          points.p2.y + 0.2 * pageHeight,
          points.p3.x,
          points.p3.y,
          points.p3.x,
          points.p3.y
        );
        // 已拉动部分的矩形区域
        ctx.lineTo(points.p4.x, points.p4.y);
        ctx.lineTo(points.p5.x, points.p5.y);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#f1f1f1";
        ctx.stroke();
      },
      change: function (anim) {
        // console.log("anim", anim);
      },
      complete: function () {
        const canvas = ref.current as HTMLCanvasElement;
        canvas.classList.remove("canvas-p");
        updateShow();
      },
    });
  };

  return (
    <div id="mask">
      <canvas ref={ref} className="canvas"></canvas>
    </div>
  );
}

export default Mask;
