import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function Checkout({ isopen, mealsAddedToCart }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const [btnColor, setBtnColor] = useState("redColor");
  async function handleformAfterSubmit(data) {
    setBtnColor("blackColor");
    await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(
        {
          order: { items: mealsAddedToCart },
        },
        { customer: { data } }
      ),
    })
      .then((recivedData) => {
        return recivedData.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setBtnColor("redColor");
  }

  return (
    <dialog open={isopen}>
      <form onSubmit={handleSubmit(handleformAfterSubmit)}>
        <label htmlFor="first-name">
          <input
            type="text"
            id="first-name"
            name="first-name"
            {...register("first-name", { required: "first name is required" })}
          />
        </label>
        {errors["first-name"] && (
          <p className={btnColor}>{errors["first-name"].message}</p>
        )}
        <label htmlFor="last-name">
          <input
            type="text"
            id="last-name"
            name="last-name"
            {...register("last-name", { required: "last name is required" })}
          />
        </label>
        {errors["last-name"] && (
          <p className={btnColor}>{errors["last-name"].message}</p>
        )}

        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "email is required" })}
          />
        </label>
        {errors.email && <p className={btnColor}>{errors.email.message}</p>}
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="email"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 10,
                message: "password must be at least 10 characters long",
              },
            })}
          />
          {errors.password && (
            <p className={btnColor}>{errors.password.message}</p>
          )}
        </label>
        <label htmlFor="address">
          <input
            type="text"
            id="address"
            name="address"
            {...register("address", { required: "address is required" })}
          />
        </label>
        {errors.address && <p className={btnColor}>{errors.address.message}</p>}
        <label htmlFor="poxcode">
          <input
            type="number"
            id="poxcode"
            name="poxcode"
            {...register("poxcode", { required: "poxcode is required" })}
          />
        </label>
        {errors.poxcode && <p className={btnColor}>{errors.poxcode.message}</p>}
        <button className={btnColor} disabled={isSubmitting} type="submit">
          submit
        </button>
      </form>
    </dialog>
  );
}
