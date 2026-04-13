import Nav from "../_components/Nav";

export default function MainLayout({ children }) {
  return (
    <div>
      <Nav />
      <main className="py-3 mx-auto max-w-300">{children}</main>
    </div>
  );
}
