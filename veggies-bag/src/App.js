import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Search from './search';
import Header from "./Header"
// import MyContainer from './Components-container';
import MyComponent from './Component';
import Leafy from './Leafy';
import Veggies from './Veggies';
import Fruits from './Fruits';
import Cart from './Cart';
import { FaShoppingCart, FaAppleAlt, FaLeaf, FaCarrot } from 'react-icons/fa';
import Footer from './Footer';
import React from 'react';


const data = [
  {
    name: "Tomato",
    price: "40",
    quantity: "1",
    type: "Veggies",
    img: "https://cdn.pixabay.com/photo/2021/01/06/09/45/tomato-5893845_1280.jpg"
  },
  {
    name: "onion",
    price: "20",
    quantity: "1",
    type: "Veggies",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Onion_garden.jpg"
  },
  {
    name: "Potato",
    price: "20",
    quantity: "1",
    type: "Veggies",
    img: "https://www.publicdomainpictures.net/pictures/30000/nahled/isolated-potatoes.jpg"
  },
  {
    name: "Beans",
    price: "40",
    quantity: "0.25",
    type: "Veggies",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jLSnXKbQaDNUx4P2xy-Bk1gO2K_kDr13MQ&usqp=CAU"
  },
  {
    name: "Ginger",
    price: "40",
    quantity: "0.1",
    type: "Veggies",
    img: "https://cdn.pixabay.com/photo/2018/12/06/18/49/old-ginger-3860370_1280.jpg"
  },
  {
    name: "Carrot",
    price: "40",
    quantity: "0.5",
    type: "Veggies",
    img: "https://p1.pxfuel.com/preview/104/183/748/carrots-vegetables-harvest-healthy.jpg"
  },
  {
    name: "Bitter Gourd",
    price: "20",
    quantity: "0.5",
    type: "Veggies",
    img: "https://cdn.pixabay.com/photo/2012/03/01/00/36/vegetables-19727_1280.jpg"
  },
  {
    name: "Capsicum",
    price: "20",
    quantity: "0.5",
    type: "Veggies",
    img: "https://p1.pxfuel.com/preview/43/148/941/capsicum-grocery-store-retail.jpg"
  },
  {
    name: "Broccoli",
    price: "40",
    quantity: "1",
    type: "Veggies",
    img: "https://www.publicdomainpictures.net/pictures/200000/nahled/broccoli-isolated-on-white.jpg"
  },
  {
    name: "Chilli",
    price: "7",
    quantity: "0.1",
    type: "Veggies",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Green_Chillies_of_Salem_Tamil_Nadu.jpg"
  },
  {
    name: "Banana-Raw",
    price: "8",
    quantity: "0.25",
    type: "Veggies",
    img: "https://p0.pxfuel.com/preview/494/113/229/banana-close-up-closeup-diet.jpg"
  },
  {
    name: "Lemon",
    price: "40",
    quantity: "1",
    type: "Veggies",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Lemon-edit1.jpg"
  },
  {
    name: "Cucumber",
    price: "10",
    quantity: "1",
    type: "Veggies",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Cucumber_of_Bangladesh.jpg"
  },
  {
    name: "Beetroot",
    price: "40",
    quantity: "1",
    type: "Veggies",
    img: "https://cdn.pixabay.com/photo/2015/03/24/08/52/beetroot-687251_1280.jpg"
  },
  {
    name: "Palak",
    price: "20",
    quantity: "0.25",
    type: "Leafy",
    img: "https://cdn.pixabay.com/photo/2014/10/28/15/30/spinach-506616_1280.jpg"
  },
  {
    name: "Mint Leaves",
    price: "10",
    quantity: "0.1",
    type: "Leafy",
    img: "https://cdn.pixabay.com/photo/2017/11/09/10/08/mint-leaves-2932922_1280.jpg"
  },
  {
    name: "SpringOnion",
    price: "5",
    quantity: "0.1",
    type: "Leafy",
    img: "https://p0.pxfuel.com/preview/780/322/571/fresh-green-onion-bunches-vegetables-food-harvest.jpg"
  },
  {
    name: "Methi",
    price: "25",
    quantity: "0.25",
    type: "Leafy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63WcjpMXzYOjiBykntAFyLuGfxmuyQysMfA&usqp=CAU"
  },
  {
    name: "Coriander Leaves",
    price: "10",
    quantity: "0.1",
    type: "Leafy",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%22Coriander%22.jpg/1200px-%22Coriander%22.jpg"
  },
  {
    name: "Thyme Leaf",
    price: "12",
    quantity: "0.25",
    type: "Leafy",
    img: "https://cdn.pixabay.com/photo/2017/10/15/15/09/thyme-2854035_1280.jpg"
  },
  {
    name: "Spinach",
    price: "40",
    quantity: "0.2",
    type: "Leafy",
    img: "https://live.staticflickr.com/65535/50636138922_760027fae8_b.jpg"
  },
  {
    name: "Asparagus",
    price: "40",
    quantity: "0.25",
    type: "Leafy",
    img: "https://cdn.pixabay.com/photo/2018/06/15/23/49/asparagus-3477960_1280.jpg"
  },
  {
    name: "Lettuce",
    price: "16",
    quantity: "0.1",
    type: "Leafy",
    img: "https://cdn.pixabay.com/photo/2020/09/08/09/47/vegetable-5554160_1280.jpg"
  },
  {
    name: "Banana stem",
    price: "27",
    quantity: "0.2",
    type: "Leafy",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Posola.jpg"
  },
  {
    name: "Leeks",
    price: "18",
    quantity: "0.1",
    type: "Leafy",
    img: "https://www.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_234785131-min.jpg"
  },
  {
    name: "Pak Choi",
    price: "25",
    quantity: "0.25",
    type: "Leafy",
    img: "https://live.staticflickr.com/4011/4701360954_f46f3807e3_b.jpg"
  },
  {
    name: "Mustard Leaves",
    price: "20",
    quantity: "0.25",
    type: "Leafy",
    img: "https://cdn.pixabay.com/photo/2016/04/02/13/18/mustard-green-1302783_960_720.jpg"
  },
  {
    name: "Betel Leaves",
    price: "20",
    quantity: "0.25",
    type: "Leafy",
    img: "https://live.staticflickr.com/4436/36269888732_bbd599d52c_b.jpg"
  },
  {
    name: "Banana",
    price: "60",
    quantity: "1",
    type: "Fruits",
    img: "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg"
  },
  {
    name: "Apple",
    price: "300",
    quantity: "1",
    type: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
  },
  {
    name: "Orange",
    price: "140",
    quantity: "1",
    type: "Fruits",
    img: "https://p1.pxfuel.com/preview/358/965/315/filled-frame-fresh-fruit-orange.jpg"
  },
  {
    name: "Coconut",
    price: "40",
    quantity: "1",
    type: "Fruits",
    img: "https://live.staticflickr.com/65535/49590476857_00a97a51fa_b.jpg"
  },
  {
    name: "Pomegranate",
    price: "140",
    quantity: "1",
    type: "Fruits",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8YeyRRxjSSEOQoUnWlSlOz8WIjIobErP6A&usqp=CAU"
  },
  {
    name: "Watermelon",
    price: "90",
    quantity: "2",
    type: "Fruits",
    img: "https://live.staticflickr.com/5012/5427691534_4c0420cdc9_b.jpg"
  },
  {
    name: "Grapse",
    price: "40",
    quantity: "0.5",
    type: "Fruits",
    img: "https://live.staticflickr.com/4151/4981470658_23a45a1518_b.jpg"
  },
  {
    name: "Blue Berry",
    price: "140",
    quantity: "0.25",
    type: "Fruits",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtLnsyASdU423SKbiZelBNFYbWt0edurEcw&usqp=CAU"
  },
  {
    name: "Mango",
    price: "60",
    quantity: "1",
    type: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Mango_4.jpg"
  },
  {
    name: "Pineapple",
    price: "60",
    quantity: "1",
    type: "Fruits",
    img: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/health_benefits_of_pineapple_slideshow/1800x1200_health_benefits_of_pineapple_slideshow.jpg"
  },
  {
    name: "Papaya",
    price: "40",
    quantity: "1",
    type: "Fruits",
    img: "https://cdn.pixabay.com/photo/2014/04/24/11/37/papaya-331273_1280.jpg"
  },
  {
    name: "Guava",
    price: "40",
    quantity: "1",
    type: "Fruits",
    img: "https://live.staticflickr.com/7543/16249769712_8df264627d_b.jpg"
  },
  {
    name: "Green Apple",
    price: "300",
    quantity: "1",
    type: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Green_apple_on_black_background.jpg"
  },
  {
    name: "Muskmelon",
    price: "100",
    quantity: "1",
    type: "Fruits",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6Ko-uqw7HvEqftv90hKHS0RPywaiKH7a4A&usqp=CAU"
  }

]

const list=data.map((val)=>{
  return val.name;
});


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: []
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(name, quantity, price) {
    console.log("name", name)
    const newCartList = [...this.state.cartItems];
    console.log("new cart item", newCartList)
    const e = {
      name: name,
      quantity: quantity,
      price: price
    }
    newCartList.push(e);
    // console.log("new cart item updated",newCartList)
    this.setState({
      cartItems: newCartList,
    });
    // console.log("cart items in state",this.state.cartItems)
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Search list={list} />
        <Router >
          <div id="main" >
            <div id="link">
              <Link class="route-link" to="/Leafy"><FaLeaf />Leafy</Link>
              <Link class="route-link" to="/Veggies"><FaCarrot />Veggies</Link>
              <Link class="route-link" to="/Fruits"><FaAppleAlt />Fruits </Link>
              <Link class="route-link" to="/Cart"><FaShoppingCart />ShoppingCart</Link>
            </div>

            <switch>
              <Route path="/Leafy">
                <Leafy data={data} add={this.addItem} />
              </Route>

              <Route path="/Veggies">
                <Veggies data={data} add={this.addItem} />
              </Route>
              <Route path="/Fruits">
                <Fruits data={data} add={this.addItem} />
              </Route>
              <Route path="/Cart">
                <Cart list={this.state.cartItems} />
              </Route>
            </switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  };
}

export default App;
