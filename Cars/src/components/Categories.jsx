function Categories() {
  const categories = [
    "SUV",
    "Sedan",
    "Sports",
    "Electric",
    "Luxury",
    "Hybrid",
  ];

  return (
    <section className="categories">
      <h2>Browse Categories</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;