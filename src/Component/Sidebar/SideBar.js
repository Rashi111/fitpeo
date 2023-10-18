import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink as Link } from "react-router-dom";

function SideBar(props) {
  const [active, setActive] = useState("")
  const [show, setShow] = useState(false)


  const handleActive = (e) => {
    console.log(e.target.id);
    setActive(e.target.id)
  }

  useEffect(() => {
    let btnTgl = document.getElementById("tgl-btn");
    let btnWrp = document.getElementById("toggle-btn");
    // btnWrp.append(btnTgl);
  }, [])
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className='main_sidebar' >

      <div className='dash_icon'>
        <span className='home_icon'>
          <i class="fa-solid fa-house"></i>
        </span>
        <h3>Dashboard</h3>
      </div>
      <div className='dash_list'>

        <Link to="/" id="dashboard" >
          <div onClick={(e) => { handleActive(e) }} id="dashboard" className={
            active === "dashboard"
              ? "list_active"
              : "side_list"
          }>
            <div id="dashboard">
              <span><i class="fa-solid fa-gauge"></i></span> &nbsp; Dashboard
            </div>

          </div>
        </Link>
        <Link to="/product" id='product'>
          <div
            id='product'
            onClick={(e) => { handleActive(e) }}
            className={
              active === "product"
                ? "list_active"
                : "side_list"
            }>
            <div id='product'>
              <span><i class="fa-solid fa-square-poll-vertical"></i></span> &nbsp; Products

            </div>
            <div>
              <span><i class="fa-solid fa-chevron-right"></i>
              </span>

            </div>

          </div>

        </Link>
        <Link to="/customers" id='customers'>
          <div id='customers' onClick={(e) => { handleActive(e) }}
            className={
              active === "customers"
                ? "list_active"
                : "side_list"
            }
          >
            <div id='customers'>
              <span><i class="fa-solid fa-user"></i></span> &nbsp; Customers

            </div>

            <div>
              <span><i class="fa-solid fa-chevron-right"></i></span>

            </div>
          </div>

        </Link>
        <Link to="/income" id='income'>
          <div id='income' onClick={(e) => { handleActive(e) }}
            className={
              active === "income"
                ? "list_active"
                : "side_list"
            }
          >
            <div id='income'>
              <span><i class="fa-solid fa-wallet"></i></span> &nbsp; Income

            </div>
            <div>
              <span><i class="fa-solid fa-chevron-right"></i></span>

            </div>
          </div>

        </Link>
        <Link to="/promote" id='promote'>
          <div id='promote' onClick={(e) => { handleActive(e) }}
            className={
              active === "promote"
                ? "list_active"
                : "side_list"
            }
          >
            <div id='promote'>
              <span><i class="fa-solid fa-snowflake"></i></span> &nbsp; Promote

            </div>
            <div>

              <span><i class="fa-solid fa-chevron-right"></i></span>
            </div>
          </div>

        </Link>

        <Link to="/help" id='help'>
          <div id='help' onClick={(e) => { handleActive(e) }}
            className={
              active === "help"
                ? "list_active"
                : "side_list"
            }
          >
            <div id='help'>
              <span><i class="fa-regular fa-message"></i></span> &nbsp; Help

            </div>
            <div>
              <span><i class="fa-solid fa-chevron-right"></i></span>

            </div>
          </div>
        </Link>




      </div>
      <div className='profile_bottom'>
        <div className='profile_img'>
          <img src='assets/profile-img.jpg' height={50} width={50} />
        </div>
        <div><span className='user_name'>Evono</span><br />
          <span> Project Manager</span>
        </div>
        <div><i class="fa-solid fa-chevron-down"></i></div>
      </div>
    </div >
  )
}

export default SideBar