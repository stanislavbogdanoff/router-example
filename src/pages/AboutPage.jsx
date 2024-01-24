import axios from "axios";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    axios
      .get("https://api.api-ninjas.com/v1/quotes?category=anger", {
        headers: {
          "X-Api-Key": "GHc1qJjqqRQUKZMVeihjXA==bq99202NSFAAytwh",
        },
      })
      .then((response) => {
        setQuote(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Quote Page</h1>
      {quote ? (
        <div>
          <span>
            <i>Author: </i>
            {quote.author}
          </span>
          <br />
          <span>
            <i>Category: </i>
            {quote.category}
          </span>
          <br />
          <span>
            <i>Quote: </i>
            {quote.quote}
          </span>
        </div>
      ) : (
        <h3>Quote is loading...</h3>
      )}
    </div>
  );
};

export default AboutPage;

// const array = [1,2,3]

// console.log(array[0])
