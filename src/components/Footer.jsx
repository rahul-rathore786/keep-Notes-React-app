import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>
        Developed by Rahul Rathore{" "}
      
          <a href="https://github.com/rahul-rathore786?tab=repositories" >
            {"    "}Github
          </a>
        
      </p>
    </footer>
  );
}

export default Footer;
