import React from "react";
import Education from "./education";
import Experience from "./experience";
import "./styles/styles.scss";
import manLaptop from "assets/img/home/man-with-laptop.png";
function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoading = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(handleLoading);
  //   };
  // }, []);

  return (
    <>
      <div className="home">
        <div className="banner row">
          <div className="banner-img"></div>
          <img
            src="./img/home/macbook.jpg"
            className="img-responsive macbook"
            alt="./img/home/macbook.jpg"
          />
          <div className="space"></div>
        </div>

        <div className="about  ">
          <div className="row introduce flex-alignitem">
            <div className="col-md-6 offset-md-3 col-10 offset-1">
              <h2 className="hello">
                HELLO! <span>STRANGER!</span>
              </h2>
              <h1>I'm BLU</h1>
              <div className="multiltext">
                <span>Freelance </span>
                <ul>
                  <li>FrontEnd & WebDesigner</li>
                  <li>Multimedia Designer</li>
                  <li>A & RManager</li>
                </ul>
              </div>
            </div>
            <p className="text-slide">Content</p>
          </div>
          <div className="space"></div>

          <div className="about-banner">
            <div className="container">
              <div className="row pt-5 ">
                {/* <div className="  col-md-6 aboutleft">
                      <img
                        src="./img/home/banner2.png"
                        className="img-responsive aboutimg aboutimg-1"
                        alt="./img/home/banner2.png"
                      />
                      <img
                        src="./img/home/banner8.jpg"
                        className="img-responsive aboutimg aboutimg-2"
                        alt="./img/home/banner8.jpg"
                      />

                      <img
                        src="./img/home/banner8.jpg"
                        className="img-responsive aboutimg aboutimg-3"
                        alt="./img/home/banner8.jpg"
                      />
                      <img
                        src="./img/home/banner8.jpg"
                        className="img-responsive aboutimg aboutimg-4"
                        alt="./img/home/banner8.jpg"
                      />
                    </div> */}
                <div className=" about-content col-md-8">
                  <h2>Gi???i Thi???u</h2>
                  <h2>Xin Ch??o M??nh L?? Blu </h2>

                  <p>
                    M??nh c?? h??n 6 n??m kinh nghi???m trong l??nh v???c MC Hyper ????
                    t???ng tham gia h??n 50 ch????ng tr??nh ??m nh???c k???t h???p c??ng v???i
                    c??c DJ n???i ti???ng nh??: HoaProx | TyTy | MinhTri | Louis8ight
                    | Mie, ..v..v.. ,c??ng v???i ???? l?? h??n 5 n??m trong ng??nh thi???t
                    k??? ??a ph????ng ti???n (thi???t k??? ????? ho???, thi???t k??? website, thi???t
                    k??? nh??n v???t, v??? tranh k??? thu???t s???) v?? hi???n t???i m??nh ??ang l??m
                    qu???n l?? cho c??c Ngh??? S?? tr??? nh?? Blacka, Phaos c??ng t??? ch???c
                    Crow On Hyenas, G-Family.
                  </p>
                  <p>
                    B???n th??n m??nh r???t may m???n khi c?? c?? h???i c???ng t??c v???i nhi???u
                    c??ng ty h??ng ?????u trong l??nh v???c nh??: M-TP Entertainment,
                    Jupiter Entertainment, SAMSUNG electronic, BestPlatform
                    Creative Agency, DuyTan Plastic, Hi-Kool, PhoInAn Printing,
                    MinhTriDp Printing & Design...v..v..
                  </p>

                  <div className="row">
                    <div className="col-md-4">
                      <button
                        type="button"
                        className="btn btn-large btn-block btn-default aboutbutton"
                      >
                        <span>Contact Me</span>
                        <span>Contact Me</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Education />
        <Experience />
        <div className="introblog">
          <a href="/blog">
            <div className="container">
              <div className="introblog-inner">
                <div className="introblog-content">
                  <h3>
                    This Blog For Great Content
                    <br />
                    Click Here to See More
                  </h3>
                </div>
                <div className="introblog-image">
                  <img src={manLaptop} alt={manLaptop} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
