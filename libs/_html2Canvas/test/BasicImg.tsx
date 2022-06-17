import html2canvas from "html2canvas";
import React, { useState, useRef } from "react";
import "./BasicImg.less";

function BasicImg() {
  const [imgUrl, setImgUrl] = useState("");
  const [isDownloading, setIsDownloading] = useState(true);
  const card = useRef<HTMLDivElement>(null);

  const cropCard = () => {
    const card_target = card.current as HTMLDivElement;

    let b64;
    html2canvas(card_target, {
      useCORS: true,
      // canvas: canvas,
      // width: box_width,
      // height: box_height,
      scale: window.devicePixelRatio,
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
    <div className="basic">
      <div className="inline-block">
        <button className="button" onClick={cropCard}>
          点击保存名片
        </button>
      </div>
      <section className="section">
        <div className="copyCardArea" ref={card}>
          <div className="area">
            <img
              className="img"
              src="https://img.alicdn.com/tfs/TB1tOvDXjuhSKJjSspjXXci8VXa-668-332.png"
              alt=""
            />
            <div className="content">
              <div className="company-name-short">郁结</div>
              <div className="company-name-full">Alibaba iDST</div>
              <div className="company-connection">
                <div className="company-phone">
                  <div className="inline-block company-phone-text">电话：</div>
                  <div className="inline-block company-phone-number">
                    *保密*
                  </div>
                </div>
                <div>
                  <div className="inline-block company-webmail-text">
                    邮箱：
                  </div>
                  <div className="inline-block company-webmail-number">
                    15114584731@163.com
                  </div>
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

export default BasicImg;
