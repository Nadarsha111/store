import './App.css'
import TopNav from './components/TopNav'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Card from './components/productcard/Card';
import makeRequest from './queries/makerequest';

function App() {



  return (
    <div className='container'>

<TopNav />
<div>

<img src='https://static.vecteezy.com/system/resources/previews/008/174/590/large_2x/fashion-advertising-web-banner-illustration-vector.jpg' className="w-100 object-fit-fill h-25"/>

</div>
<Card />


    </div>
  )
}

export default App
