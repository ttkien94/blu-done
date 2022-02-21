import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./style/style.scss";
// import "https://rubaxa.github.io/Sortable/Sortable.js";
// import "sortablejs";

// const $component = ".Timeline";
// function sort() {
//   var $itemIndex = 0;
//   console.log("reorder");
//   var a = document.querySelectorAll($component + "-item").length;
//   var b = document.querySelectorAll($component + "-item");
//   for (let i = 0; i < a; i++) {
//     let itemIndex = i + 1;
//     itemIndex = itemIndex < 10 ? "0" + itemIndex : itemIndex;
//     b[i].querySelector($component + "-item-index").innerHTML = itemIndex;
//   }
// }

function Education() {
  useEffect(() => {
    // sort();
  });

  return (
    <div className="education area-pt">
      <div className="title">
        <h2>Sortable Vertical Timeline</h2>
        <h4>
          <b>How use</b>: Drag and drop any object in timeline and feel the
          experience
        </h4>
      </div>

      <div className="Timeline" id="Timeline">
        <div className="Timeline-line">
          <div className="Timeline-line-menu"></div>
        </div>

        <Fade left>
          <div className="Timeline-item">
            <div className="circle-arrow">
              <div className="Timeline-item-index">
                <p>2015</p>
              </div>
            </div>
            <div className="Timeline-item-inner">
              <div className="Timeline-item-top">
                <div className="Timeline-item-top-type">
                  <i></i> <span>Item</span>
                </div>
              </div>
              <div className="Timeline-item-content">
                <div className="Timeline-item-content-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
                <div className="Timeline-item-content-body"></div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="Timeline-item Timeline-item--quote">
            <div className="circle-arrow">
              <div className="Timeline-item-index">
                <p>2016</p>
              </div>
            </div>
            <div className="Timeline-item-inner">
              <div className="Timeline-item-top">
                <div className="Timeline-item-top-type">
                  <i></i> <span>Quote</span>
                </div>
              </div>
              <div className="Timeline-item-content">
                <div className="Timeline-item-content-title">
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                  </blockquote>
                </div>
                <div className="Timeline-item-content-body"></div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="Timeline-item Timeline-item--image">
            <div className="circle-arrow">
              <div className="Timeline-item-index">
                <p>2017</p>
              </div>
            </div>
            <div className="Timeline-item-inner">
              <div className="Timeline-item-top">
                <div className="Timeline-item-top-type">
                  <i></i> <span>Image</span>
                </div>
              </div>
              <div className="Timeline-item-content">
                <div className="Timeline-item-content-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
                <div className="Timeline-item-content-body">
                  <img
                    src="http://fakeimg.pl/350x200/ddd/FFF/?text=Hola"
                    alt="http://fakeimg.pl/350x200/ddd/FFF/?text=Hola"
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="Timeline-item">
            <div className="circle-arrow">
              <div className="Timeline-item-index">
                <p>2018</p>
              </div>
            </div>
            <div className="Timeline-item-inner">
              <div className="Timeline-item-top">
                <div className="Timeline-item-top-type">
                  <i></i> <span>Video</span>
                </div>
              </div>
              <div className="Timeline-item-content">
                <div className="Timeline-item-content-body">
                  <iframe
                    src="//player.vimeo.com/video/112719694?title=0&byline=0&portrait=0"
                    width="100%"
                    height="281"
                    frameBorder="0"
                    title="video"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Education;
