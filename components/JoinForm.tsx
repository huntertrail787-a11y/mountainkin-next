"use client";
import { FormEvent } from "react";
import { waLink } from "@/lib/site";

const options = ["Awareness", "Cleanliness drives", "Helping the needy", "Animal and pet care", "Treks and events"];

export default function JoinForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const picked = f.getAll("help").join(", ") || "the community";
    const msg = `Hi MountainKin, I want to join the tribe. Name: ${f.get("name")}. Phone: ${f.get("phone")}. I want to help with: ${picked}.`;
    window.open(waLink(msg), "_blank");
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="n">Your name</label>
        <input id="n" name="name" type="text" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="p">Phone or WhatsApp number</label>
        <input id="p" name="phone" type="tel" autoComplete="tel" />
      </div>
      <fieldset>
        <legend>I want to help with</legend>
        {options.map((o) => (
          <label className="chk" key={o}>
            <input type="checkbox" name="help" value={o} /> {o}
          </label>
        ))}
      </fieldset>
      <button className="btn dark" type="submit">Join the tribe</button>
    </form>
  );
}
