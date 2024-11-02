import getMeals from "@/lib/fetcheMeals";
import MealGrid from "@/components/meals/mealGrid";
import classes from "./loading.module.css";
import { Suspense } from "react";
async function MealsComponent() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
}
export default async function Meals() {
  return (
    <>
      <div className={classes.welcome}>
        <h2>delicouse foods created by you !</h2>
        <h2>
          choose your favorite recipe and cook it yourself.it's easy adn fun!
        </h2>
        <button>share your meals</button>
      </div>
      <Suspense fallback={<p className={classes.loading}>Loading</p>}>
        <MealsComponent />
      </Suspense>
    </>
  );
}
