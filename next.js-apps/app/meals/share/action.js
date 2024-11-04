import { saveMeal } from "@/lib/fetcheMeals";
import { redirect } from "next/navigation";
function validateInput(input) {
  return !input || input.trim() === "";
}
export async function handelSubmit(previouseState, formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  if (
    validateInput(meal.creator) ||
    validateInput(meal.creator_email) ||
    validateInput(meal.instructions) ||
    validateInput(meal.summary) ||
    validateInput(meal.title) ||
    !meal.image
  ) {
    return { message: "invalid input" };
  }
  await saveMeal(meal);
  redirect("/meals");
}
