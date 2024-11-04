import { saveMeal } from "@/lib/fetcheMeals";
import { redirect } from "next/navigation";

export async function handelSubmit(formData) {
  "use server";
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  console.log(meal);
  await saveMeal(meal);
  redirect("/meals");
}
