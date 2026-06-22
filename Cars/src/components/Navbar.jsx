import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AutoElite</h2>

      <ul>
        <li>Home</li>
        <li>Cars</li>
        <li>Categories</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>

      <div>
        <Link to="/cart">
        <button>
  My Cart 🛒 ({JSON.parse(localStorage.getItem("cart"))?.length || 0})
</button>
        </Link>

        <button style={{ marginLeft: "10px" }}>
          Book Test Drive
        </button>
      </div>
    </nav>
  );
}

export default Navbar;