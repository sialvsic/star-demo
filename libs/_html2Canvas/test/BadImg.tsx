import html2canvas from "html2canvas";
import React, { useState, useRef } from "react";
import "./BadImg.less";

function BadImg() {
  const [imgUrl, setImgUrl] = useState("");
  const [isDownloading, setIsDownloading] = useState(true);
  const card = useRef<HTMLDivElement>(null);

  const cropCard = () => {
    console.log("object");
    const card_target = card.current as HTMLDivElement;

    const box_width = card_target.clientWidth;
    const box_height = card_target.clientHeight;

    // 创建自定义 canvas 元素
    const canvas = document.createElement("canvas");
    // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比

    // 获取像素比
    const scaleBy = window.devicePixelRatio;

    console.log("scaleBy", scaleBy);
    canvas.width = box_width * 2;
    canvas.height = box_height * 2;
    // 设定 canvas css宽高为 DOM 节点宽高
    canvas.style.width = `${box_width}px`;
    canvas.style.height = `${box_height}px`;
    // 获取画笔
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    // 将所有绘制内容放大像素比倍
    // context.scale(scaleBy, scaleBy);

    let b64;
    html2canvas(card_target, {
      useCORS: true,
      // canvas: canvas,
      // width: box_width,
      // height: box_height,
      scale: scaleBy,
      // allowTaint: false,
    })
      .then(function (canvas) {
        // console.log(canvas.width);
        // console.log(canvas.height);
        // console.log(canvas.style.width);
        // console.log(canvas.style.height);
        try {
          b64 = canvas.toDataURL("image/png");
        } catch (err) {
          console.log(err);
        }
        console.log("b64", b64);
        setImgUrl(b64);
        setIsDownloading(false);
      })
      .catch(function onRejected(error) {
        console.log("error", error);
      });
  };

  return (
    <div className="bad">
      <div className="inline-block">
        <button className="button" onClick={cropCard}>
          点击保存名片
        </button>
      </div>
      <section className="section">
        <div className="copyCardArea" ref={card}>
          <div className="area">
            <div className="company-name-short">郁结</div>
            <div className="company-name-full">Alibaba iDST</div>
            <div className="company-connection">
              <div className="company-phone">
                <div className="inline-block company-phone-text">电话：</div>
                <div className="inline-block company-phone-number">*保密*</div>
              </div>
              <div>
                <div className="inline-block company-webmail-text">邮箱：</div>
                <div className="inline-block company-webmail-number">
                  15114584731@163.com
                </div>
              </div>
            </div>
          </div>
          <div className="name">i am good man</div>
        </div>
      </section>
      <h3 className="inline-block">生成的名片展示</h3>
      <div className="img-show">
        {isDownloading ? (
          <div>加载中..</div>
        ) : (
          <img className="output" src={imgUrl} alt="生成的图片" />
        )}
      </div>
    </div>
  );
}

export default BadImg;
