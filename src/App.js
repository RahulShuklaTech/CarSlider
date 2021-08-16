import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
const carsInfo = [
  {
    name: "BMW",
    price: "$1,000,000",
    url: "/images/bmw.webp",
    link: "https://www.bmw.com/us/en/",
  },
  {
    name: "Mercedes S-class",
    price: "$500,000",
    url: "/images/sclass.webp",
    link: "https://www.mercedes-benz.com/us/en/",

  },
  {
    name: "Tata Nexon",
    price: "$100,000",
    url: "/images/nexon.webp",
    link: "https://www.tata.com/us/en/",
  },
  {
    name: "Audi Q5",
    price: "$500,000",
    url: "/images/q5.webp",
    link: "https://www.audi.com/us/en/",
  },
  {
    name: "Jaguar F-pace",
    price: "$750,000",
    url: "/images/jaguar.webp",
    link: "https://www.jaguar.com/us/en/",
  },
]


function App() {
  return (
    <div style={{ width: "100vw", display: "flex", flexDirection: "column", gap: "3rem", justifyContent: "center", alignItems: "center", margin: "0",padding: "0" }} >
      <div style={{ width: "70%" }}>
        <h1 style={{ textAlign: "center" }}>Like Cars So Do We</h1>
        <div style={{ display: "flex", gap: " 30px"}}>
          <Carousel
            autoPlay
            showThumbs={false}

            width="100%"
            infiniteLoop


          >
            {carsInfo.map(car =>
              <div key={car.url} >
                <Link to={{ pathname: car.link }} target="_blank" > <img src={car.url} alt={car.name} />
                  <p className="legend"><p>Name: {car.name} </p>
                    price: {car.price}</p>
                </Link>
              </div>
            )
            }
          </Carousel>

        </div>
      </div>

    </div>

  );
}

export default App;
