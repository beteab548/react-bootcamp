import { getMeal } from "@/lib/fetcheMeals";
import Image from "next/image";
import classes from "./page.module.css";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const meal = await getMeal(params.mealslug);
  if (!meal) {
    notFound();
  }
  return { title: meal.title, description: meal.description };
}
export default async function mealsDetail({ params }) {
  const meal = await getMeal(params.mealslug);
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt="food image" fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
