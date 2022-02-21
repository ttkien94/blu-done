import React, { useContext, useEffect, useState } from "react";
import "./styles/styles.scss";
import { BLOG_CONTENT } from "app/const/blogDetails";
import { getQueryVariable } from "app/component/getQueryVariable";
import CardBootStrap from "app/component/card-bootstrap";
import logo from "assets/img/logo.png";
import { BlogContext } from "core/contexts/BlogContext";
import { imgUrl } from "core/contexts/constants";

function BlogDetails() {
  // Context
  const {
    blogState: { blogs },
    getBlogsClient,
  } = useContext(BlogContext);
  const [id, setID] = useState(getQueryVariable("_id"));

  useEffect(() => {
    getBlogsClient(1);
  }, []);

  return (
    <div className="blogdetails">
      <div className="container ">
        <div className="row">
          {blogs.map((ele, key) => {
            return ele._id === id ? (
              <div className="col-md-12 col-lg-9" key={key}>
                <div className="row text-center">
                  <h1 className="w-100 mt-3 ">{ele.title}</h1>
                  <p className="mx-auto time">{ele.time}</p>
                  <img
                    src={`${imgUrl}${ele.img}`}
                    alt={ele.img}
                    className="img-fluid "
                  />
                </div>
                <div
                  className="row mt-3"
                  dangerouslySetInnerHTML={{ __html: ele.description }}
                ></div>
              </div>
            ) : (
              ""
            );
          })}

          <div className="col-md-12 col-lg-3 mt-5">
            <div className="row lastest-recipes">
              <div className="title">Popular Post</div>
              <div className="lastest-recipes-content col-md-12">
                <div className="row">
                  {blogs.map((ele, key) => {
                    return ele.type === "popular" ? (
                      <div className="col-md-6" key={key}>
                        <CardBootStrap
                          _id={ele._id}
                          title={ele.title}
                          time={ele.time}
                          img={ele.img}
                        />
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="row comments">
              <div className="comments-title">Comment</div>
              <div className=" col-md-12">
                <div className="row comments-content">
                  <div className="comments-content-avatar">
                    <img src={logo} className="img-responsive " alt={logo} />
                  </div>
                  <div className="col-md-9">
                    <div className="comments-content-title">
                      Blu Blogger Tips
                    </div>
                    <div className="comments-content-text">
                      This is First Testing Reply
                    </div>
                  </div>
                </div>

                <div className="row comments-content">
                  <div className="comments-content-avatar">
                    <img src={logo} className="img-responsive " alt={logo} />
                  </div>
                  <div className="col-md-9">
                    <div className="comments-content-title">
                      Blu Blogger Tips
                    </div>
                    <div className="comments-content-text">
                      This is First Testing Reply
                    </div>
                  </div>
                </div>

                <div className="row comments-content">
                  <div className="comments-content-avatar">
                    <img src={logo} className="img-responsive " alt={logo} />
                  </div>
                  <div className="col-md-9">
                    <div className="comments-content-title">
                      Blu Blogger Tips
                    </div>
                    <div className="comments-content-text">
                      This is First Testing Reply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
