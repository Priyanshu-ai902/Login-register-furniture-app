import React from 'react';

function Home() {
  // Define an array of furniture items with name, price, and image URL
  const furnitureItems = [
    {
      name: "Sofa",
      price: "$599",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXIYoYg6z7wU6PRTdA_0xoCIxmHS31qPQwEpT-dKQ9w&s"
    },
    {
      name: "Bed",
      price: "$799",
      image: "https://t4.ftcdn.net/jpg/04/76/22/99/360_F_476229910_9Piu5KHZJ6nI5mqXBmLeCnmCifxLLYZQ.jpg"
    },
    {
      name: "Table",
      price: "$299",
      image: "https://images.woodenstreet.de/image/cache/data%2Fstudy-table%2Fnettle-study-table%2Frevised%2Fhoney%2Fupdated%2F1-750x650.jpg"
    },
    {
      name: "chair",
      price: "$356",
      image: "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
    },
    {
      name: "bench",
      price: "$546",
      image: "https://t3.ftcdn.net/jpg/06/16/26/12/360_F_616261263_b5QPgKO90m47ASqcQIzI5SccAvDPB7tQ.jpg"
    },
    {
      name: "desk",
      price: "$564",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRn_NK9q4OowlYuh2GWKhJQQeDaeG9EIg-bkFjna9Yxg&s"
    }
  ];

  return (
    <div>
      <header className="bg-dark text-white py-4">
        <div className="container text-center">
          <h1>Welcome to Furniture Emporium</h1>
        </div>
      </header>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Discover Our Latest Collection</h2>
          <div className="row">
            {furnitureItems.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img src={item.image} className="card-img-top img-fluid" alt={item.name} style={{ width: '600px', height: '200px' }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 Furniture Emporium. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
