import { useEffect, useState } from "react";

function Offer(props) {
  const [offerData, setOfferData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${props.id}`)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject();
        }
        return response.json();
      })
      .then((data) => setOfferData(data))
      .catch(() => {
        // error
      });
  }, [props.id]);

  return (
    <div>
      <p>id: {props.id}</p>
      {offerData?.title ? <h2>{offerData.title}</h2> : null}
      {props.showAdvert ? <p>reklama</p> : null}
    </div>
  );
}

export default Offer;
