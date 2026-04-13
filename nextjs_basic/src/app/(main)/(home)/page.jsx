// import Counter from "./components/Counter";

import { redirect } from "next/navigation";
import Button from "./Button";
// const isAuth = false;
export default function HomePage() {
  // if (!isAuth) {
  //   return redirect(`/products`);
  // }
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <Button />
    </div>
  );
}
