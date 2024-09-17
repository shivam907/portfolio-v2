"use client";
import React from "react";
const page = () => {
  return (
    <div style={{ width: "100vw", height: "90vh" }}>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default page;
