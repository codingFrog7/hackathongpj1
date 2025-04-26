import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Star, LogOut } from "lucide-react"
import Tabs from "@/pages/MiniCOP/nav"
import ActionSearchBar from "@/pages/MiniCOP/searchbar"

export default function AirbnbHome() {
  const [date, setDate] = useState(new Date())

  const listings = [
    {
      id: 1,
      title: "Affordable Boys PG in Sector 62",
      location: "Noida, Uttar Pradesh",
      price: "₹6,000/month",
      rating: 4.2,
      image: "https://media.istockphoto.com/id/474474056/photo/interior-of-a-children-bedroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=DsJbZndsLUbnlOU_wGm9570Ntj0D1kt_0pYyOJsiC3g=",
      type: "Boys PG"
    },
    {
      id: 2,
      title: "Girls PG near Viman Nagar",
      location: "Pune, Maharashtra",
      price: "₹7,500/month",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1720420021124-4e18564e070f?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Girls PG",
    },
    {
      id: 3,
      title: "Shared Rental in Koramangala",
      location: "Bangalore, Karnataka",
      price: "₹8,000/month",
      rating: 4.0,
      image: "https://media.istockphoto.com/id/665182294/photo/construction-materials-furniture-and-phone-are-on-the-floor-of-apartment-in-the-hotel-during.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q0vpDXZTZ3Dubk8uCsJVVnztW8VAcrDG4_1Zj2F5ZP0=",
      type: "Rental Room",
    },
    {
      id: 4,
      title: "Budget PG for Students in Kothrud",
      location: "Pune, Maharashtra",
      price: "₹5,500/month",
      rating: 3.8,
      image: "https://media.istockphoto.com/id/466227744/photo/interior-of-a-children-bedroom.jpg?s=612x612&w=0&k=20&c=gOtUcREyY_VL8BBA2rtuIFdFr1kR5xIKw81J7NxvVzs="
      , type: "Student PG",
    },
    {
      id: 5,
      title: "Girls Hostel near North Campus",
      location: "New Delhi, Delhi",
      price: "₹7,000/month",
      rating: 4.7,
      image: "https://media.istockphoto.com/id/1375892095/photo/organized-bedroom-at-home-or-hotel-conept-of-hygiene-service-and-well-maintained-hospitality.jpg?s=612x612&w=0&k=20&c=rqfokjPpaI2Sa-XFHufeStxWfks6HxYK4OKjX7DyD_A="
      , type: "Girls Hostel"
    },
    {
      id: 6,
    title: "Working Men’s PG in Ameerpet",
    location: "Hyderabad, Telangana",
    price: "₹6,200/month",
    rating: 4.1,
      image: "https://images.unsplash.com/photo-1708616178113-f687b1113414?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,    type: "Mens PG",
    },
    {
      id: 7,
      title: "Student PG near LPU Campus",
      location: "Phagwara, Punjab",
      price: "₹4,800/month",
      rating: 3.9,
      image: "https://media.istockphoto.com/id/2198113175/photo/interior-of-vintage-style-bedroom-with-with-window-curtains.jpg?s=612x612&w=0&k=20&c=94lLPf67kJsR2Csa0J5eiZyvsos4Urx4D_OibXq9lh8="
    ,type: "Student PG",
    },
    {
      id: 8,
      title: "Girls PG in Salt Lake Sector V",
      location: "Kolkata, West Bengal",
      price: "₹6,800/month",
      rating: 4.3,
      image: "https://media.istockphoto.com/id/1395224980/photo/a-holy-city-north-india-filled-with-temples-and-religious-places.jpg?s=612x612&w=0&k=20&c=0mLTGDaGiuifFJko9sC0Xo-bWSNoFXQxgrtK5N4NMco="
      ,type: "Girls PG",
    }
  ];



  const categories = ["Popular", "Beach", "Mountain", "City", "Cabin", "Unique"]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="sticky top-0 z-50 bg-black flex items-center justify-between px-6 py-4 border-b border-white">
        <h1 className="text-3xl font-bold tracking-tight text-white">RENTEAZY</h1>
        <div className="flex items-center gap-4">
          <Tabs />
          <ActionSearchBar />
        </div>
        <Button variant='ghost'> <LogOut /></Button>
      </header>

      <nav className="flex flex-wrap gap-4 px-6 py-4 border-b border-white text-white bg-black">
        {categories.map((cat, index) => (
          <Button key={index} variant="ghost" className="text-white hover:bg-white hover:text-black text-sm">
            {cat}
          </Button>
        ))}
      </nav>

      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing, index) => (
          <Card
            key={listing.id}
            className={`bg-neutral-900 border border-white rounded-xl overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105 ${index === 2 || index === 5 ? "col-span-1 sm:col-span-2 row-span-2" : ""}`}
          >
            <CardHeader className="p-0">
              <img
                src={listing.image}
                alt={listing.title}
                className={`w-full ${index === 2 || index === 5 ? "h-72" : "h-48"} object-cover`} />
            </CardHeader>
            <CardContent className="p-4 text-white">
              <CardTitle className="text-lg text-white">{listing.title}</CardTitle>
              <p className="text-sm text-white/80">{listing.location}</p>
              <div className="flex items-center justify-between mt-2 text-white">
                <span>{listing.price}</span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white text-white" />
                  {listing.rating}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="p-6 border-t border-white text-center text-sm text-white bg-black">
        © 2025 Airbnb Clone. All rights reserved.
      </footer>
    </div>
  )
}
