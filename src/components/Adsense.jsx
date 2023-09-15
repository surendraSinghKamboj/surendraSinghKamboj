
import React, { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {
    // Check if the adsbygoogle object is available
    if (typeof window.adsbygoogle !== "undefined") {
      // Push ads if it's available
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div>
     <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-5780445115750860"
     data-ad-slot="6832693238"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdSense;
