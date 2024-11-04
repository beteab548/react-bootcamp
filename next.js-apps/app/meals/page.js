import { getMeals } from "@/lib/fetcheMeals";
import MealGrid from "@/components/meals/mealGrid";
import classes from "./loading.module.css";
import { Suspense } from "react";
import Link from "next/link";
async function MealsComponent() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
}

export const metadata = {
  title: "meals",
  description: "Delicious meals, shared by a food-loving community.",
};

export default async function Meals() {
  return (
    <>
      <div className={classes.welcome}>
        <h2>delicouse foods created by you !</h2>
        <h2>
          choose your favorite recipe and cook it yourself.it's easy adn fun!
        </h2>
        <button>
          <Link href={"meals/share"}> share your meals</Link>
        </button>
      </div>
      <Suspense fallback={<p className={classes.loading}>Loading</p>}>
        <MealsComponent />
      </Suspense>
    </>
  );
}
