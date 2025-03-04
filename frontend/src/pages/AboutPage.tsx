import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const AboutPage: React.FC = () => {
  useEffect(() => {
    axios
      .get(`https://reimagined-enigma-r4pj75q447qv256vw-5000.app.github.dev/meta/about`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("✅ About Page Meta Data:", res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <p className="mt-4 text-center">
          OC Pro Movers provides professional moving services with a 100% satisfaction guarantee. 
          Our team is dedicated to making your move as smooth as possible.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
