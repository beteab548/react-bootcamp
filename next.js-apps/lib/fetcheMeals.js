"use server";
import sql from "better-sqlite3";
import slugify from "slugify";
import fs from "fs";
import xss from "xss";
const db = sql("meals.db");
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}
export async function getMeal(slug) {
  return db.prepare("select * from meals where slug=?").get(slug);
}
export async function saveMeal(meal) {
  meal.instructions = xss(meal.instructions);
  meal.slug = slugify(meal.title);
  const mealExtension = meal.image.name.split(".").pop();
  const fileName = meal.slug + "." + mealExtension;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const mealImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(mealImage), (err) => {
    return console.log(err);
  });
  meal.image = `/images/${fileName}`;
  console.log(fileName);
  db.prepare(
    `insert into meals (title,summary,instructions,creator,creator_email,image,slug) values ( 
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug)
    `
  ).run(meal);
}
