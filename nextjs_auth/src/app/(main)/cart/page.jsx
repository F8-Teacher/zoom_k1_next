import { getCartList } from "@/services/cart.service";
import CartTable from "./CartTable";

export default async function CartPage() {
  const { items, total } = await getCartList();
  return (
    <div>
      <h1 className="text-3xl mb-3">Cart</h1>
      <CartTable items={items} total={total} />
    </div>
  );
}
//dumb - smart container
