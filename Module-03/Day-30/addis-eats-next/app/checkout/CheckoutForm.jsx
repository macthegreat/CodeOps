
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
    <form action={formAction} className="checkout-form">
      <div className="form-field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          autoComplete="tel"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="dishId">Choose a dish</label>
        <select id="dishId" name="dishId" defaultValue="dish_1">
          <option value="dish_1">Doro Wat</option>
          <option value="dish_2">Beyaynetu</option>
          <option value="dish_3">Kitfo</option>
          <option value="dish_4">Shiro Tegabeno</option>
        </select>
      </div>

      <div className="form-field">
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

      <button
        type="submit"
        className="checkout-submit"
        disabled={pending}
      >
        {pending ? "Placing order..." : "Place order"}
        {!pending && <span aria-hidden="true">→</span>}
      </button>

      {state.message && (
        <p
          className={`form-feedback ${
            state.success ? "form-feedback-success" : "form-feedback-error"
          }`}
          role={state.success ? "status" : "alert"}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
