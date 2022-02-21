import Client from "app/modules/clientModules";

export const URL_PATH_CLIENT = {
  HOME: "/",
  BLOG: "/blog",
  BLOGDETAILS: "/blog-details",
  // LOGIN: "/dang-nhap",
  // CONFIRMFORGOTPASSWORD: "/xac-nhan-quen-mat-khau/:token",
  // FORGOTPASSWORD: "/quen-mat-khau",
};

// Public Pages for HOME Template
export const publicRoutes = [
  {
    Component: Client.Home,
    path: URL_PATH_CLIENT.HOME,
  },
  {
    Component: Client.Blog,
    path: URL_PATH_CLIENT.BLOG,
  },
  // {
  //   Component: Client.BlogDetails,
  //   path: URL_PATH_CLIENT.BLOGDETAILS,
  // },
];
