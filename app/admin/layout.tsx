export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="grid grid-cols-2">
      <div className="bg-blue-500">Sidebar</div>
      <div className="bg-green-500">Header</div>
      <div>
        { children }
      </div>
    </main>
  );
}
