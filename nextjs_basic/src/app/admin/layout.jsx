import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div>
      <header className="flex justify-between items-center max-w-300 mx-auto py-3">
        <span className="text-3xl font-semibold">Admin F8</span>
        <ul className="flex gap-3 items-center">
          <li>
            <Link href={"/admin"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/admin/users"}>Users</Link>
          </li>
        </ul>
      </header>
      <main className="max-w-300 mx-auto py-3">{children}</main>
      <footer>
        <p className="text-center">Copyright &copy; 2026 by F8</p>
      </footer>
    </div>
  );
}
