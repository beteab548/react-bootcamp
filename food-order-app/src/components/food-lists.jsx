import { useEffect } from "react";
import { useContext } from "react";
import { CtxValue } from "../../hooks/foodlist-context-api";
export default function FoodLists({ handleclickedList }) {
  const passedValue = useContext(CtxValue);
  console.log(passedValue);
  useEffect(() => {
    fetch("http://localhost:3000/meals", { method: "GET" })
      .then((data) => {
        return data.json();
      })
      .then((rawData) => {
        setFetchedData(rawData);
      });
    }, []);
    return (
      <p>hi</p>
      );
    }
    // <div id="meals">
    //   {fetchedData.map((mealsLists) => {
    //     const imageUrl = "http://localhost:3000/" + mealsLists.image;
    //     return (
    //       <div className="meal-item" key={mealsLists.id}>
    //         <article>
    //           <img src={imageUrl} alt="image name" />
    //           <h3>{mealsLists.name}</h3>
    //           <p className="meal-item-price">{mealsLists.price}</p>
    //           <p className="meal-item-description ">{mealsLists.description}</p>
    //           <button
    //             className="meal-item-actions"
    //             onClick={() => {
    //               handleclickedList(mealsLists);
    //             }}
    //           >
    //             Add to Cart
    //           </button>
    //         </article>
    //       </div>
    //     );
    //   })}
    // </div>
