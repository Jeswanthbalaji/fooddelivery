import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Narwal pizza's</a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cart</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar