import "./App.css";
import TopNav from "./components/TopNav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import ProductLayout from "./layout/ProductLayout";
import CatagoriesCard from "./components/catagoriescard/CatagoriesCard";
import CatagoriesLayout from "./layout/CatagoriesLayout";
import HomeCarousel from "./components/carousel/HomeCarousel";
import "./App.css";

function App() {
  return (
    <>
      <TopNav />
      <div className="">
        <HomeCarousel />
      </div>

      <CatagoriesLayout />
      <ProductLayout />
    </>
  );
}

export default App;
