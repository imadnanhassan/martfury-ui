import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      {/* Admin Header */}
      <header>
        {/* Add Admin header content */}
        <h1>Admin Header</h1>
      </header>

      {/* Admin Sidebar */}
      <aside>
        {/* Add Admin sidebar content */}
        <nav>
          <ul>
            <li>
              <a href="/admin/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/admin/product-list">Product List</a>
            </li>
            <li>
              <a href="/admin/add-product">Add Product</a>
            </li>
            {/* Add more admin sidebar links */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Admin Footer */}
      <footer>
        {/* Add Admin footer content */}
        <p>Admin Footer</p>
      </footer>
    </>
  );
}
