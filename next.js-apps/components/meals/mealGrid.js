import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
export default function MealGrid({ meals }) {
  return (
    <div className={classes.meals}>
      {meals.map((meal) => {
        return <MealItem meals={meal} />;
      })}
    </div>
  );
}
