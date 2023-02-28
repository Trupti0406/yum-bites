import React from "react";

const Footer = () => {
  return (
    <Footer
      class="bg-dark text-center text-white"
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "60px",
        backgroundColor: "#232123",
      }}
    >
      <div className="text-center">
        <hr />
        Copyright © YumBytes 2023 | Created by Trupti Yadav
      </div>
    </Footer>
  );
};

export default Footer;
