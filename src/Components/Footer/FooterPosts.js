import React from "react";
import "./Footer.css";
const FooterPosts = () => {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8];
  return posts.map((post) => {
    let imagePath = `https://milo.bootlab.io/img/instagram/${post}.jpg`;
    return <img src={imagePath} alt="" className="footerPost" />;
  });
};
export default FooterPosts;
