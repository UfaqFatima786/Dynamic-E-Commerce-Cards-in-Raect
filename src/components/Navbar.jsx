import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
               <nav class="navbar navbar-expand-lg navUl navnav mt-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1KJbRTJfE139603dTZQRRFriGnRiKNk8eeYHNDpQ8w&s=10"
                        class="logo-1"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mt-2" id="navbarSupportedContent">
                    <ul class="navbar-nav navlist ms-auto mb-lg-0 gap-5">
                        <li class="nav-item">
                            <a class="nav-link blog" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="shop.html">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            </div>
        </>
    )
}

export default Navbar
