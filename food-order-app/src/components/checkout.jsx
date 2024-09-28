
import { useForm } from "react-hook-form";

export default function Checkout({ isopen, mealsAddedToCart }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  async function handleformAfterSubmit(data) {
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          order: { items: mealsAddedToCart, customer: data },
        }),
      });
      const rawData = await response.json();
      return 
    } catch (err) {
      console.log(err);
    }
  }

 
  return (
    <dialog open={isopen} className="dialog">
      <form onSubmit={handleSubmit(handleformAfterSubmit)}>
        <div className="order-form">
          <div>
            <label htmlFor="first-name">
              first name:{" "}
              <input
                type="text"
                id="first-name"
                name="first-name"
                {...register("first-name", {
                  required: "first name is required",
                })}
              />
            </label>
            {errors["first-name"] && (
              <p className="redColor">{errors["first-name"].message}</p>
            )}
          </div>
          <div>
            <label htmlFor="last-name">
              last name:{" "}
              <input
                type="text"
                id="last-name"
                name="last-name"
                {...register("last-name", {
                  required: "last name is required",
                })}
              />
            </label>
            {errors["last-name"] && (
              <p className="redColor">{errors["last-name"].message}</p>
            )}
          </div>
          <div>
            email:{" "}
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: "email is required" })}
              />
            </label>
            {errors.email && <p className="redColor">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password">
              password:{" "}
              <input
                type="password"
                id="password"
                name="password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 10,
                    message: "password must be at least 10 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="redColor">{errors.password.message}</p>
              )}
            </label>
          </div>
          <div>
            address:{" "}
            <label htmlFor="address">
              <input
                type="text"
                id="address"
                name="address"
                {...register("address", { required: "address is required" })}
              />
            </label>
            {errors.address && (
              <p className="redColor">{errors.address.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="poxcode">
              poxcode:{" "}
              <input
                type="number"
                id="poxcode"
                name="poxcode"
                {...register("poxcode", { required: "poxcode is required" })}
              />
            </label>
            {errors.poxcode && (
              <p className="redColor">{errors.poxcode.message}</p>
            )}
          </div>
          <button
            className={isSubmitting ? "blackColor" : "redColor"}
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "sending" : "submit"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
