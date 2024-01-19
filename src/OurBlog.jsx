import React from "react";
import blogs from "./Blog";

function OurBlog() {
  return (
    <div className="our-blog">
      <h1 className="header">Our Blog</h1>
      <p className="sub-heading">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot Europa usa li sam
        vocabular.{" "}
      </p>
      <div className="blogs-container">
        {blogs.map((blog) => {
          const { name, image, id, text } = blog;
          return (
            <div className="blog" key={id}>
              <img src={image} alt={name}></img>
              <h3>{name}</h3>
              <p>{text}</p>
              <a href="">Read More</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurBlog;
