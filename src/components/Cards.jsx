import React from 'react'
import Card from './Card'


const Cards = () => {

    let products = [{ title: "Simple Abaya", desc: "An abaya is a beautiful and graceful outfit that combines modesty with elegance. This abaya features a simple and stylish design that is perfect for everyday wear,", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1kT489jMXPvZk1xpg7TzlzlN9XT9yB2rAPqjZdzN1g&s=10", discountRate: "30%", price: 70000, stock: "In Stock" },
    { title: "Black Fancy Abaya", desc: "Its comfortable fabric and elegant look make it easy to wear throughout the day while maintaining a sophisticated appearance. ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPrmd9E550DO0YUQOPjV3oekRWsJOJfZbcrYcB0nQ5w&s=10", discountRate: "30%", price: 2999, stock: "Out of Stock" },
    { title: "Pink Abaya", desc: "The beautiful finishing and comfortable material give this abaya a luxurious appearance without compromising on comfort. It is a perfect choice for dinners, family gatherings, special occasions, and formal events.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ehg3c2NBDPkWBLZ1v6Q4NREPS1k52losmZHrTELqtQ&s", discountRate: "30%", price: 6000, stock: "In Stock" },
    { title: "Mergenda Abaya", desc: "Whether you are going out with friends, attending an event, or simply looking for a graceful everyday outfit, this abaya offers both style and comfort ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0Gg_6WimCUh5KUMYq7cBH_rxpP0DfJtG8JXZu5Fpyg&s=10", discountRate: "30%", price: 7000, stock: "Out of Stock" },
    { title: "Green Abaya", desc: "Upgrade your wardrobe with this premium abaya, designed for women who love a classy and modern look.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnWXKRDg1kDZlz-EtRgIrHzzAqbhn7e7H5GikBRuzlQ&s=10", discountRate: "30%", price: 3800, stock: "In Stock" },
    { title: "Sky Blue Abaya", desc: "This abaya features a simple and stylish design that is perfect for everyday wear, university, shopping, or casual gatherings.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhTIcjeToaXVRuFGpc46TkmtnWl2Am1urYaWduXPftQ&s=10", discountRate: "30%", price: 6000, stock: "In Stock" },
    { title: "Black Abaya", desc: "An abaya is a beautiful and graceful outfit that combines modesty with elegance. This abaya features a simple and stylish design that is perfect for everyday wear, university, shopping, or casual gatherings.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeLJbzPsjzabeB_tMVKoUEZT5dhG44ycRhY45tF4yEw&s=10", discountRate: "30%", price: 5900, stock: "In Stock" },
    { title: "Brown Abaya", desc: "Its comfortable fabric and elegant look make it easy to wear throughout the day while maintaining a sophisticated appearance.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTimG-4w97bqyC7fqeT4ICt4Ni9DQM4Ayw78ozJTwlRQ&s=10", discountRate: "30%", price: 59000, stock: "In Stock" },
    { title: "White Abaya", desc: "The beautiful finishing and comfortable material give this abaya a luxurious appearance without compromising on comfort. It is a perfect choice for dinners, family gatherings, special occasions, and formal events.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtwy_IJGsa68emT3y1TtzmeQkGKa6tzSBv3TCJ5Jl5A&s=10", discountRate: "30%", price: 59000, stock: "In Stock" },


    ]


    return (
        <div classNamee="container-fluid">

            <div class="row row-cols-1 row-cols-md-3 g-5 my-3 overflow-hidden justify-content-center">
                {
                    products.map(function (product) {
                        return <Card title={product.title} img={product.img} desc={product.desc} price={product.price} />
                    })

                }
            </div>

        </div>
    )
}

export default Cards
            // <div class="row row-cols-1 row-cols-md-3 g-4 my-5">

