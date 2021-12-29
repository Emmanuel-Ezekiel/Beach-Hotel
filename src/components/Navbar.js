import React, { useState } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    const [ isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!false)
    }

    return (
        <div>
           <nav className="navbar">
               <div className="nav-center">
                   <div className="nav-header">
                       <Link to="/" className='links'>
                           <h2>BEACH <span>HOTEL</span></h2>
                       </Link>

                       <button
                        type="button" className="nav-btn"
                        onClick={handleToggle}>
                        <FaAlignRight className="nav-icon" />
                       </button>
                   </div>

                   <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                       <li>
                           <Link to="/">Home</Link>
                       </li>
                       <li>
                           <Link to="/rooms">Rooms</Link>
                       </li>
                   </ul>

               </div>
           </nav>
        </div>
    )
}

export default Navbar
