import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
export default function CartTable({ items, total }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="w-2.5">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.productId}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price.toLocaleString()}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.total.toLocaleString()}</TableCell>
            <TableCell>
              <Trash2
                width={16}
                height={16}
                className="cursor-pointer hover:text-red-600"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
