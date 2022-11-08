import React, { useState, useEffect } from "react";

function App() {
  const api = "https://dog.ceo/api/breeds/image/random";

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(api)
      .then((r) => r.json())
      .then((data) => {
        setImage(data.message);
      });
  }, []);

  if (!image) {
    return <p>Loading...</p>;
  }

  return <img src={image} alt="A Random Dog" />;
}

export default App;
