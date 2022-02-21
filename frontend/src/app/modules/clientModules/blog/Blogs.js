import React, { useContext, useEffect, useState } from "react";
import Card from "app/component/card-bootstrap/index";
import {
  blogs,
  // BLOGFLUID,
} from "app/const/blogDetails";
import logo from "assets/img/logo.png";
import "./styles/styles.scss";
import { BlogContext } from "core/contexts/BlogContext";

function Blog() {
  // Context
  const {
    blogState: { blogs },
    getBlogsClient,
  } = useContext(BlogContext);

  //state
  const [count, setCount] = useState(4);
  const [normalBlog, setNormalBlog] = useState([]);
  const [headerBlog, setHeaderBlog] = useState(0);
  const [popularBlog, setPopularBlog] = useState([]);

  function LoadMore() {
    setCount(count + 4);
  }
  // Start: Get All blogs
  useEffect(() => {
    getBlogsClient(1);
    // blogs.map((blog) => {
    //   blog.type === "header"
    //     ? setHeaderBlog(...headerBlog, blog)
    //     : blog.type === "popular"
    //     ? setPopularBlog(...popularBlog, blog)
    //     : setNormalBlog(...normalBlog, blog);
    // });
    // console.log(headerBlog, popularBlog, normalBlog);
  }, []);

  return (
    <div className="blog">
      <div className="container">
        <div className="row blog-header ">
          {blogs.map((ele, index) => {
            if (ele.type === "header") {
              return (
                <div className="col-6 col-lg-3" key={index}>
                  <Card
                    _id={ele._id}
                    title={ele.title}
                    time={ele.time}
                    img={ele.img}
                  />
                </div>
              );
            } else {
            }
          })}
        </div>
        <div className="blog-content area-pt">
          <div className="row">
            <div className="col-md-12 col-lg-9">
              {/* <div className="blog-content-header">
                Don't Miss! <span>Hot Content</span>
                <p className="view-all">View ALL</p>
              </div>
              <div className="row blog-content-video">
                <div className="video-left">
                  <Card />
                </div>
                <div className="video-right">
                  <Card />
                  <Card />
                </div>
              </div> */}
              <div className="blog-content-header area-mt ">
                Don't Miss! <span> Content </span>
                <p className="view-all">View ALL</p>
              </div>
              <div className="blog-content-read-more">
                <div className="row">
                  {blogs.map((ele, index) => {
                    return ele.type === "normal" ? (
                      <div className="col-md-6 " key={index}>
                        <Card
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
                {/* <div className="row">
                  <button
                    type="button"
                    className="btn btn-primary mt-3 mx-auto"
                    onClick={() => {
                      LoadMore();
                    }}
                  >
                    Load More
                  </button>
                </div> */}
              </div>
            </div>

            <div className="col-md-12 col-lg-3 ">
              {/* <div className="row popular-post">
                <div className="title">Popular Posts</div>
                <div className="content col-md-12">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div> */}

              <div className="row lastest-recipes">
                <div className="title">Popular Post</div>
                <div className="lastest-recipes-content col-md-12">
                  <div className="row">
                    {blogs.map((ele, key) => {
                      return ele.type === "popular" ? (
                        <div className="col-md-6" key={key}>
                          <Card
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

          {/* <div className="row blog-footer">
            <div className="blog-content-header area-mt ">
              Don't Miss! <span> Read More</span>
              <p className="view-all">View ALL</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <Card />
            </div>
            <div className="col-md-6 col-lg-3 ">
              <Card />
            </div>
            <div className="col-md-6 col-lg-3">
              <Card />
            </div>
            <div className="col-md-6 col-lg-3">
              <Card />
            </div> 
          </div> */}
        </div>
      </div>

      {/* <div className="container-fluid">
        <div className="row">
          {blogFluid?.map((item, index) => {
            return (
              <div className="blog-fluid" key={index}>
                <div className="blog-inner-fluid">
                  <a href={item.url} className="blog-image-fluid">
                    <img src={item.img} alt={item.img} />
                  </a>
                  <div className="blog-content-fluid ">
                    <div className="blog-title-fluid">
                      <a href={item.url}>{item.title}</a>
                    </div>

                    <div className="blog-meta-fluid">
                      <div className="blog-tag-fluid">
                        {item.tag.map((tag, index1) => {
                          return (
                            <a href={item.url} key={index1}>
                              {tag}
                            </a>
                          );
                        })}
                      </div>
                      <div className="blog-date-fluid">
                        <time dateTime="2021-01-11">{item.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      <div className="container-fluid mt-5"></div>
    </div>
  );
}

export default Blog;
