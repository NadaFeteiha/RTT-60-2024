import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./data/products";

// images

function App() {
  return (
    <>
      <Header />
      <h1>Products</h1>

      <div>
        {products.map((item) => {
          return <Product {...item} key={item.id} />;
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
