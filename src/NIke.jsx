import React, { useEffect, useState } from "react";

const NikeWebsite = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch("/src/nike.html"); // Replace 'path/to/nike.html' with the actual path
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error("Error fetching HTML content:", error);
      }
    };

    fetchHtmlContent();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default NikeWebsite;

 