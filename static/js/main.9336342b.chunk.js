(this["webpackJsonpveggies-bag"]=this["webpackJsonpveggies-bag"]||[]).push([[0],{28:function(t,e,i){},29:function(t,e,i){},30:function(t,e,i){},32:function(t,e,i){},33:function(t,e,i){},34:function(t,e,i){},35:function(t,e,i){},36:function(t,e,i){},37:function(t,e,i){},38:function(t,e,i){},44:function(t,e,i){"use strict";i.r(e);var a=i(1),n=i.n(a),c=i(7),s=i.n(c),r=(i(28),i(23)),p=i(13),o=i(14),d=i(8),m=i(16),u=i(15),l=(i(29),i(10)),g=i(2),j=(i(30),i(0));function h(t){var e=null;return Object(j.jsxs)("div",{class:"container",children:[Object(j.jsx)("input",{list:"browser",ref:function(t){return e=t},id:"search",name:"search",placeholder:"type the veggi"}),Object(j.jsx)("datalist",{id:"browser",children:t.list.map((function(t,e){return Object(j.jsx)("option",{value:t},e)}))}),Object(j.jsx)("button",{onClick:function(){e.focus()},children:"search"})]})}i(32);function b(){return Object(j.jsxs)("header",{id:"logo-container",children:[Object(j.jsx)("img",{id:"logo-img",src:"https://pbs.twimg.com/profile_images/378800000532840703/433793e326ddd41f8e0b8c254676291c_400x400.jpeg",width:"30px",alt:"logo"}),Object(j.jsx)("h1",{children:Object(j.jsx)("b",{children:"Veggie's bag"})}),Object(j.jsx)("button",{id:"sign-in-button",onClick:null,children:"sign in"})]})}i(33);var y=function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(p.a)(this,i),(a=e.call(this,t)).state={count:0,img:a.props.info.img,name:a.props.info.name,price:a.props.info.price,quantity:a.props.info.quantity},a.addItem=a.addItem.bind(Object(d.a)(a)),a.addition=a.addition.bind(Object(d.a)(a)),a.subtract=a.subtract.bind(Object(d.a)(a)),a}return Object(o.a)(i,[{key:"subtract",value:function(){this.state.count>0&&this.setState({count:this.state.count-1})}},{key:"addition",value:function(){this.setState({count:this.state.count+1})}},{key:"addItem",value:function(){console.log("name",this.state.name),this.props.add(this.state.name,Number(this.state.count)*Number(this.state.quantity),Number(this.state.price)*Number(this.state.count))}},{key:"render",value:function(){return Object(j.jsxs)("div",{class:"card-container",children:[Object(j.jsx)("div",{id:"img-container-div",children:Object(j.jsx)("img",{id:"img-tag",src:this.state.img,alt:this.state.name,width:"500px",height:"300px"})}),Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:this.state.name})}),Object(j.jsx)("p",{children:Object(j.jsxs)("strong",{children:[this.state.price,"Rs/",this.state.quantity,"Kg's"]})}),Object(j.jsxs)("span",{id:"button-container",children:[Object(j.jsx)("button",{onClick:this.subtract,children:"-"}),Object(j.jsxs)("p",{children:[Number(this.state.count)*Number(this.state.quantity)," Kg's"]}),Object(j.jsx)("button",{onClick:this.addition,children:"+"})]}),Object(j.jsx)("button",{id:"cart-button",onClick:this.addItem,children:"Add to Cart"})]})}}]),i}(n.a.Component);i(34);function f(t){return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{style:{listStyleType:"none",display:"flex",flexWrap:"wrap"},children:t.data.filter((function(t){if("Leafy"===t.type)return t})).map((function(e,i){return Object(j.jsx)("li",{id:"element-container",className:"item",children:Object(j.jsx)(y,{info:e,add:t.add},i)})}))})})}i(35);function x(t){return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{style:{listStyleType:"none",display:"flex",flexWrap:"wrap"},children:t.data.filter((function(t){if("Veggies"===t.type)return t})).map((function(e,i){return Object(j.jsx)("li",{id:"element-container",className:"item",children:Object(j.jsx)(y,{info:e,add:t.add},i)})}))})})}i(36);function O(t){return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{style:{listStyleType:"none",display:"flex",flexWrap:"wrap"},children:t.data.filter((function(t){if("Fruits"===t.type)return t})).map((function(e,i){return Object(j.jsx)("li",{id:"element-container",className:"item",children:Object(j.jsx)(y,{info:e,add:t.add},i)})}))})})}i(37);function v(t){return Object(j.jsx)("div",{children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Item Name"}),Object(j.jsx)("th",{children:"Purchased Quantity"}),Object(j.jsx)("th",{children:"Price"})]})}),Object(j.jsx)("tbody",{children:t.list.map((function(t,e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.name}),Object(j.jsxs)("td",{children:[t.quantity,"Kg's"]}),Object(j.jsxs)("td",{children:[t.price,"Rs"]})]})}))})]})})}var q=i(12);i(38);function _(t){return Object(j.jsx)("div",{children:Object(j.jsxs)("footer",{children:[Object(j.jsx)("p",{children:"copyright@Veggis-bag 2021"}),Object(j.jsxs)("p",{children:["Contact info: ",Object(j.jsx)("a",{href:"mailto:cutomerCare@veggiesbag.com",children:"cutomerCare@veggiesbag.com"})]})]})})}var w=[{name:"Tomato",price:"40",quantity:"1",type:"Veggies",img:"https://cdn.pixabay.com/photo/2021/01/06/09/45/tomato-5893845_1280.jpg"},{name:"onion",price:"20",quantity:"1",type:"Veggies",img:"https://upload.wikimedia.org/wikipedia/commons/2/27/Onion_garden.jpg"},{name:"Potato",price:"20",quantity:"1",type:"Veggies",img:"https://www.publicdomainpictures.net/pictures/30000/nahled/isolated-potatoes.jpg"},{name:"Beans",price:"40",quantity:"0.25",type:"Veggies",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jLSnXKbQaDNUx4P2xy-Bk1gO2K_kDr13MQ&usqp=CAU"},{name:"Ginger",price:"40",quantity:"0.1",type:"Veggies",img:"https://cdn.pixabay.com/photo/2018/12/06/18/49/old-ginger-3860370_1280.jpg"},{name:"Carrot",price:"40",quantity:"0.5",type:"Veggies",img:"https://p1.pxfuel.com/preview/104/183/748/carrots-vegetables-harvest-healthy.jpg"},{name:"Bitter Gourd",price:"20",quantity:"0.5",type:"Veggies",img:"https://cdn.pixabay.com/photo/2012/03/01/00/36/vegetables-19727_1280.jpg"},{name:"Capsicum",price:"20",quantity:"0.5",type:"Veggies",img:"https://p1.pxfuel.com/preview/43/148/941/capsicum-grocery-store-retail.jpg"},{name:"Broccoli",price:"40",quantity:"1",type:"Veggies",img:"https://www.publicdomainpictures.net/pictures/200000/nahled/broccoli-isolated-on-white.jpg"},{name:"Chilli",price:"7",quantity:"0.1",type:"Veggies",img:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Green_Chillies_of_Salem_Tamil_Nadu.jpg"},{name:"Banana-Raw",price:"8",quantity:"0.25",type:"Veggies",img:"https://p0.pxfuel.com/preview/494/113/229/banana-close-up-closeup-diet.jpg"},{name:"Lemon",price:"40",quantity:"1",type:"Veggies",img:"https://upload.wikimedia.org/wikipedia/commons/2/25/Lemon-edit1.jpg"},{name:"Cucumber",price:"10",quantity:"1",type:"Veggies",img:"https://upload.wikimedia.org/wikipedia/commons/3/39/Cucumber_of_Bangladesh.jpg"},{name:"Beetroot",price:"40",quantity:"1",type:"Veggies",img:"https://cdn.pixabay.com/photo/2015/03/24/08/52/beetroot-687251_1280.jpg"},{name:"Palak",price:"20",quantity:"0.25",type:"Leafy",img:"https://cdn.pixabay.com/photo/2014/10/28/15/30/spinach-506616_1280.jpg"},{name:"Mint Leaves",price:"10",quantity:"0.1",type:"Leafy",img:"https://cdn.pixabay.com/photo/2017/11/09/10/08/mint-leaves-2932922_1280.jpg"},{name:"SpringOnion",price:"5",quantity:"0.1",type:"Leafy",img:"https://p0.pxfuel.com/preview/780/322/571/fresh-green-onion-bunches-vegetables-food-harvest.jpg"},{name:"Methi",price:"25",quantity:"0.25",type:"Leafy",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63WcjpMXzYOjiBykntAFyLuGfxmuyQysMfA&usqp=CAU"},{name:"Coriander Leaves",price:"10",quantity:"0.1",type:"Leafy",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%22Coriander%22.jpg/1200px-%22Coriander%22.jpg"},{name:"Thyme Leaf",price:"12",quantity:"0.25",type:"Leafy",img:"https://cdn.pixabay.com/photo/2017/10/15/15/09/thyme-2854035_1280.jpg"},{name:"Spinach",price:"40",quantity:"0.2",type:"Leafy",img:"https://live.staticflickr.com/65535/50636138922_760027fae8_b.jpg"},{name:"Asparagus",price:"40",quantity:"0.25",type:"Leafy",img:"https://cdn.pixabay.com/photo/2018/06/15/23/49/asparagus-3477960_1280.jpg"},{name:"Lettuce",price:"16",quantity:"0.1",type:"Leafy",img:"https://cdn.pixabay.com/photo/2020/09/08/09/47/vegetable-5554160_1280.jpg"},{name:"Banana stem",price:"27",quantity:"0.2",type:"Leafy",img:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Posola.jpg"},{name:"Leeks",price:"18",quantity:"0.1",type:"Leafy",img:"https://www.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_234785131-min.jpg"},{name:"Pak Choi",price:"25",quantity:"0.25",type:"Leafy",img:"https://live.staticflickr.com/4011/4701360954_f46f3807e3_b.jpg"},{name:"Mustard Leaves",price:"20",quantity:"0.25",type:"Leafy",img:"https://cdn.pixabay.com/photo/2016/04/02/13/18/mustard-green-1302783_960_720.jpg"},{name:"Betel Leaves",price:"20",quantity:"0.25",type:"Leafy",img:"https://live.staticflickr.com/4436/36269888732_bbd599d52c_b.jpg"},{name:"Banana",price:"60",quantity:"1",type:"Fruits",img:"https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg"},{name:"Apple",price:"300",quantity:"1",type:"Fruits",img:"https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"},{name:"Orange",price:"140",quantity:"1",type:"Fruits",img:"https://p1.pxfuel.com/preview/358/965/315/filled-frame-fresh-fruit-orange.jpg"},{name:"Coconut",price:"40",quantity:"1",type:"Fruits",img:"https://live.staticflickr.com/65535/49590476857_00a97a51fa_b.jpg"},{name:"Pomegranate",price:"140",quantity:"1",type:"Fruits",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8YeyRRxjSSEOQoUnWlSlOz8WIjIobErP6A&usqp=CAU"},{name:"Watermelon",price:"90",quantity:"2",type:"Fruits",img:"https://live.staticflickr.com/5012/5427691534_4c0420cdc9_b.jpg"},{name:"Grapse",price:"40",quantity:"0.5",type:"Fruits",img:"https://live.staticflickr.com/4151/4981470658_23a45a1518_b.jpg"},{name:"Blue Berry",price:"140",quantity:"0.25",type:"Fruits",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtLnsyASdU423SKbiZelBNFYbWt0edurEcw&usqp=CAU"},{name:"Mango",price:"60",quantity:"1",type:"Fruits",img:"https://upload.wikimedia.org/wikipedia/commons/4/40/Mango_4.jpg"},{name:"Pineapple",price:"60",quantity:"1",type:"Fruits",img:"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/health_benefits_of_pineapple_slideshow/1800x1200_health_benefits_of_pineapple_slideshow.jpg"},{name:"Papaya",price:"40",quantity:"1",type:"Fruits",img:"https://cdn.pixabay.com/photo/2014/04/24/11/37/papaya-331273_1280.jpg"},{name:"Guava",price:"40",quantity:"1",type:"Fruits",img:"https://live.staticflickr.com/7543/16249769712_8df264627d_b.jpg"},{name:"Green Apple",price:"300",quantity:"1",type:"Fruits",img:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Green_apple_on_black_background.jpg"},{name:"Muskmelon",price:"100",quantity:"1",type:"Fruits",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6Ko-uqw7HvEqftv90hKHS0RPywaiKH7a4A&usqp=CAU"}],k=w.map((function(t){return t.name})),C=function(t){Object(m.a)(i,t);var e=Object(u.a)(i);function i(t){var a;return Object(p.a)(this,i),(a=e.call(this,t)).state={cartItems:[]},a.addItem=a.addItem.bind(Object(d.a)(a)),a}return Object(o.a)(i,[{key:"addItem",value:function(t,e,i){console.log("name",t);var a=Object(r.a)(this.state.cartItems);console.log("new cart item",a);var n={name:t,quantity:e,price:i};a.push(n),this.setState({cartItems:a})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(h,{list:k}),Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{id:"main",children:[Object(j.jsxs)("div",{id:"link",children:[Object(j.jsxs)(l.b,{class:"route-link",to:"/Leafy",children:[Object(j.jsx)(q.c,{}),"Leafy"]}),Object(j.jsxs)(l.b,{class:"route-link",to:"/Veggies",children:[Object(j.jsx)(q.b,{}),"Veggies"]}),Object(j.jsxs)(l.b,{class:"route-link",to:"/Fruits",children:[Object(j.jsx)(q.a,{}),"Fruits "]}),Object(j.jsxs)(l.b,{class:"route-link",to:"/Cart",children:[Object(j.jsx)(q.d,{}),"ShoppingCart"]})]}),Object(j.jsxs)("switch",{children:[Object(j.jsx)(g.a,{path:"/Leafy",children:Object(j.jsx)(f,{data:w,add:this.addItem})}),Object(j.jsx)(g.a,{path:"/Veggies",children:Object(j.jsx)(x,{data:w,add:this.addItem})}),Object(j.jsx)(g.a,{path:"/Fruits",children:Object(j.jsx)(O,{data:w,add:this.addItem})}),Object(j.jsx)(g.a,{path:"/Cart",children:Object(j.jsx)(v,{list:this.state.cartItems})})]})]})}),Object(j.jsx)(_,{})]})}}]),i}(n.a.Component),L=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,45)).then((function(e){var i=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,s=e.getTTFB;i(t),a(t),n(t),c(t),s(t)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),L()}},[[44,1,2]]]);
//# sourceMappingURL=main.9336342b.chunk.js.map