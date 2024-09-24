import { useEffect, useState } from "react";

export default function FoodLists() {
  const [isFetchLoadding, setIsFetchLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/meals", { method: "GET" })
      .then((data) => {
        if (data.ok) {
          setIsFetchLoading(true);
        }
        return data.json();
      })
      .then((rawData) => {
        console.log(rawData);
        setFetchedData(rawData);
      });
  }, []);
  return (
    <div id="meals">
      {fetchedData.map((mealsLists) => {
        const imageUrl = "http://localhost:3000/" + mealsLists.image;
        return (
          <div className="meal-item" key={mealsLists.id}>
            <article>
              <img src={imageUrl} alt="image name" />
              <h3>{mealsLists.name}</h3>
              <p className="meal-item-price">{mealsLists.price}</p>
              <p className="meal-item-description ">{mealsLists.description}</p>
            <button className="meal-item-actions">Add to <Cc:noie></Cc:noie>art</button>
            </article>
          </div>
        );
      })}
    </div>
  );
}
