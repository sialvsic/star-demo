import React, { useEffect, useState } from "react";
import domtoimage from "dom-to-image";
import html2canvas from "html2canvas";
import "./index.less";

class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDownloadImg: false,
      imgUrl: "",
    };
  }

  // 裁剪名片
  cropCard1() {
    console.log("裁剪名片");
    let self = this;
    // 获取dom结构
    let card_target = this.refs.copyCardArea;
    domtoimage.toPng(card_target).then(function (dataUrl) {
      console.log("dataUrl", dataUrl);
      //andriod
      if (dataUrl != "error") {
        // alert("domtoimage");
        self.setState({
          imgUrl: dataUrl,
          isDownloadImg: true,
        });
      }
    });
  }

  // 裁剪名片
  cropCard2() {
    console.log("裁剪名片");
    let self = this;
    // 获取dom结构
    let card_target = this.refs.copyCardArea as HTMLDivElement;
    let b64;

    const width = card_target.clientWidth;
    const height = card_target.clientHeight;
    console.log("width", width);
    console.log("height", height);
    html2canvas(card_target, {
      useCORS: true,
      width: width,
      height: height,
      scale: 1,
      allowTaint: false,
    })
      .then(function (canvas) {
        console.log(canvas.width);
        console.log(canvas.height);
        try {
          b64 = canvas.toDataURL("image/png");
        } catch (err) {
          console.log(err);
          // alert(err)
        }
        console.log("b64", b64);

        self.setState({
          imgUrl: b64,
          isDownloadImg: true,
        });
      })
      .catch(function onRejected(error) {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <a href="https://github.com/tsayen/dom-to-image">dom-to-image</a>
          <a href="https://github.com/tsayen/dom-to-image">dom-to-image</a>
        </div>
        <button className="save-button" onClick={() => this.cropCard1()}>
          点击保存名片 dom-to-img
        </button>
        <button className="save-button" onClick={() => this.cropCard2()}>
          点击保存名片 html-to-canvas
        </button>
        <div
          className="company-card-info center-father-style-align"
          ref="copyCardArea"
          id="copyCardArea"
        >
          <div id="copyArea" className="copyArea" ref="copyArea">
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
        </div>

        <h2>下面是截图部分：</h2>

        <div
          className="img-show"
          style={{ display: this.state.isDownloadImg ? "block" : "none" }}
        >
          <img src={this.state.imgUrl} />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <div className="page">Some section1</div>
      <FullPage />
    </>
  );
}

export default App;
