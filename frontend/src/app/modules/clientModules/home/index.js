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
                  <h2>Giới Thiệu</h2>
                  <h2>Xin Chào Mình Là Blu </h2>

                  <p>
                    Mình có hơn 6 năm kinh nghiệm trong lĩnh vực MC Hyper đã
                    từng tham gia hơn 50 chương trình âm nhạc kết hợp cùng với
                    các DJ nổi tiếng như: HoaProx | TyTy | MinhTri | Louis8ight
                    | Mie, ..v..v.. ,cùng với đó là hơn 5 năm trong ngành thiết
                    kế đa phương tiện (thiết kế đồ hoạ, thiết kế website, thiết
                    kế nhân vật, vẽ tranh kỹ thuật số) và hiện tại mình đang làm
                    quản lý cho các Nghệ Sĩ trẻ như Blacka, Phaos cùng tổ chức
                    Crow On Hyenas, G-Family.
                  </p>
                  <p>
                    Bản thân mình rất may mắn khi có cơ hội cộng tác với nhiều
                    công ty hàng đầu trong lĩnh vực như: M-TP Entertainment,
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
