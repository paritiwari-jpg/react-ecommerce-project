import { useState, useEffect } from "react";
import { supabase } from "../supabase";

const carsData = [
  {
    name: "BMW M4",
    brand: "BMW",
    model: "M4 Competition",
    engine: "3.0L Twin Turbo",
    fuel: "Petrol",
    mileage: "10 km/l",
    topspeed: "250 km/h",
    price: "₹89 Lakhs",
    discount: "10% Off",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
  },
  {
    name: "Mercedes AMG",
    brand: "Mercedes",
    model: "AMG GT",
    engine: "4.0L V8",
    fuel: "Petrol",
    mileage: "8 km/l",
    topspeed: "315 km/h",
    price: "₹1.1 Crore",
    discount: "12% Off",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    name: "Tesla Model S",
    brand: "Tesla",
    model: "Model S Plaid",
    engine: "Electric",
    fuel: "Electric",
    mileage: "637 km range",
    topspeed: "322 km/h",
    price: "₹1.3 Crore",
    discount: "8% Off",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
  },
  {
    name: "Audi Q8",
    brand: "Audi",
    model: "Q8",
    engine: "3.0L V6",
    fuel: "Petrol",
    mileage: "9 km/l",
    topspeed: "250 km/h",
    price: "₹1.05 Crore",
    discount: "15% Off",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
  {
    name: "Porsche 911",
    brand: "Porsche",
    model: "911 Carrera",
    engine: "3.0L Twin Turbo Flat-6",
    fuel: "Petrol",
    mileage: "10 km/l",
    topspeed: "293 km/h",
    price: "₹1.8 Crore",
    discount: "5% Off",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  },
];

function FeaturedCars() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCars();

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  async function fetchCars() {
    const { data, error } = await supabase.from("cars").select("*");

    if (error || !data || data.length === 0) {
      console.log("Using fallback cars data");
      setCars(carsData);
    } else {
      setCars(data);
    }
  }

const addToCart = (car) => {
  const existingCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  existingCart.push(car);

  localStorage.setItem(
    "cart",
    JSON.stringify(existingCart)
  );

  alert("Added to Cart!");
};

  return (
    <section className="cars">
     <h2>
  Featured Cars ({JSON.stringify(cart)})
</h2>

      <div className="car-grid">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>

            <button onClick={() => setSelectedCar(car)}>
              View Details
            </button>
<button
  onClick={() => {
    addToCart(car);
    alert("Added to cart!");
  }}
>
  Add to Cart
</button>
            
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedCar && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCar.name}</h2>

            <p><strong>Brand:</strong> {selectedCar.brand}</p>
            <p><strong>Model:</strong> {selectedCar.model}</p>
            <p><strong>Engine:</strong> {selectedCar.engine}</p>
            <p><strong>Fuel:</strong> {selectedCar.fuel}</p>
            <p><strong>Mileage:</strong> {selectedCar.mileage}</p>
            <p><strong>Top Speed:</strong> {selectedCar.topspeed}</p>
            <p><strong>Price:</strong> {selectedCar.price}</p>
            <p><strong>Discount:</strong> {selectedCar.discount}</p>

            <button onClick={() => setSelectedCar(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedCars;