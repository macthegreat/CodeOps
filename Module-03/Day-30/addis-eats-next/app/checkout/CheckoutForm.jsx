
"use client";

import { useActionState } from "react";
import { placeOrder } from "./actions.js";

const initialState = {
  success: false,
  message: "",
};




export default function CheckoutForm() {
    const [state, formAction, pending] = useActionState(
        placeOrder,
        initialState
      );

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" required />
      </div>

      <div>
        <label htmlFor="dishId">Dish</label>
        <select id="dishId" name="dishId" defaultValue="dish_1">
          <option value="dish_1">Doro Wat</option>
          <option value="dish_2">Beyaynetu</option>
          <option value="dish_3">Kitfo</option>
          <option value="dish_4">Shiro Tegabeno</option>
        </select>
      </div>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          min="1"
          defaultValue="1"
          required
        />
      </div>

      <button type="submit" disabled={pending}>
  {pending ? "Placing order..." : "Place order"}
</button>

      {state.message && <p>{state.message}</p>}
    </form>
  );
}
