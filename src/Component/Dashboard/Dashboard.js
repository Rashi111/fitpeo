import React, { useState } from 'react'

function Dashboard() {

  const list = [{
    img: "/assets/dummy-img1.jpeg",
    img_name: "Abstract 3D",
    img_desc: "Lorem ipsum, placeholder or dummy text.",
    stock: "32 in stock",
    price: "$45.99",
    total_sales: "20"
  }, {
    img: "/assets/dummy-img2.jpeg",
    img_name: "Sarphens Illustration",
    img_desc: "Lorem ipsum, placeholder or dummy text.",
    stock: "32 in stock",
    price: "$45.99",
    total_sales: "20"
  }, {
    img: "/assets/dummy-img1.jpeg",
    img_name: "Abstract 3D",
    img_desc: "Lorem ipsum, placeholder or dummy text.",
    stock: "32 in stock",
    price: "$45.99",
    total_sales: "20"
  }, {
    img: "/assets/dummy-img2.jpeg",
    img_name: "Sarphens Illustration",
    img_desc: "Lorem ipsum, placeholder or dummy text.",
    stock: "32 in stock",
    price: "$45.99",
    total_sales: "20"
  }, {
    img: "/assets/dummy-img1.jpeg",
    img_name: "Abstract 3D",
    img_desc: "Lorem ipsum, placeholder or dummy text.",
    stock: "32 in stock",
    price: "$45.99",
    total_sales: "20"
  }
    ,
  {
    img: "/assets/dummy-img2.jpeg",
    img_name: "Sarphens Illustration",
    img_desc: "Lorem ipsum, placeholder or dummy text.",
    stock: "32 in stock",
    price: "$45.99",
    total_sales: "20"
  },
  {
    img: "/assets/dummy-img1.jpeg",
    img_name: "Abstract 3D",
    img_desc: "Lorem ipsum, placeholder or dummy text.",
    stock: "32 in stock",
    price: "$45.99",
    total_sales: "20"
  }



  ]



  return (
    <div className='main_dashboard'>

      <div className='header'>
        <h5>Hello Team,</h5>
        <input className='input_field' type='text' placeholder='search' />
        <span className='search_icon'><i class="fa-solid fa-magnifying-glass"></i></span>
      </div>

      <div className='box_wrap'>
        <div className='boxes'>
          <div className='earning_box'>

            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <div>
            <span className='earning'>Earning</span> <br />
            <span className='dollar'>$198k</span> <br />
            <span className='month'>37.8% </span>this month
          </div>
        </div>
        <div className='boxes'>
          <div className='file_box'><i class="fa-regular fa-file-lines"></i></div>
          <div>
            <span className='earning'>Orders</span><br />
            <span className='dollar'>$198k</span><br />
            <span className='month'>37.8% </span>this month
          </div>
        </div>
        <div className='boxes'>
          <div className='wallet_box'>
            <i class="fa-solid fa-box"></i>
          </div>
          <div>
            <span className='earning'>Balance</span><br />
            <span className='dollar'>$198k</span><br />
            <span className='month'>37.8% </span>this month
          </div>
        </div>
        <div className='boxes'>
          <div className='cart_box'>
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
          <div>
            <span className='earning'>Total Sales</span> <br />
            <span className='dollar'>$198k</span><br />
            <span className='month'>37.8% </span>this week
          </div>
        </div>

      </div>



      <div className='list_item_wrap'>
        <div className='list_head'>
          <h5>Product Sell </h5>
          <div className='wrap_select'>
            <input className='input_field' type='text' placeholder='search' />
            <span className='search_icon2'><i class="fa-solid fa-magnifying-glass"></i></span>
            <div>
              <select className="selct_inpt" name="cars" id="cars">
                <option value="volvo">last 30 days</option>
                <option value="saab">last 1 month</option>
                <option value="mercedes">last 2 month</option>
                <option value="audi">last 2 month</option>
              </select>
            </div>


          </div>
        </div>

        <div className='product_head'>
          <span>Product Name</span>
          <div className='product_rate'>
            <span>Stock</span>
            <span>Price</span>
            <span>Total Sales</span>
          </div>
        </div>
        {list.map((item, key) => (
          <div key={key} className='product_head'>


            <div className='img_sec'>
              <img src={item.img} height={50} width={80} className='item_img' />
              <div>
                <span className='img_name'>{item.img_name}</span> <br />
                <span>{item.img_desc}</span>
              </div>
            </div>
            <div className='product_rate'>
              <span>{item.stock}</span>
              <span className='item_price'>{item.price}</span>
              <span>{item.total_sales}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Dashboard