"use client";
import { useFormStatus } from "react-dom";
export default function FormSubmmitingBtn() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button type="submit" disabled={pending}>
      {pending ? "submitting" : "share meal"}
    </button>
  );
}
