export default function MenuLayout({ children }) {
    return (
      <div>
        <aside>
          <h2>Categories</h2>
  
          <ul>
            <li>All</li>
            <li>Ethiopian</li>
            <li>Italian</li>
            <li>Fast Food</li>
          </ul>
        </aside>
  
        <main>{children}</main>
      </div>
    );
  }