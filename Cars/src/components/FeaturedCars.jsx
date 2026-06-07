function FeaturedCars() {
  const cars = [
    {
      name: "BMW M4",
      price: "₹89 Lakhs",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },
    {
      name: "Mercedes AMG",
      price: "₹1.1 Crore",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      name: "Tesla Model S",
      price: "₹1.3 Crore",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
    },
  ];

  return (
    <section className="cars">
      <h2>Featured Cars</h2>

      <div className="car-grid">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCars;