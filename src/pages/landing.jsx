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
      title: "Minimalist Studio in Bangalore",
      location: "Indiranagar, Bangalore",
      price: "₹1,800/night",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Cozy Apartment in Mumbai",
      location: "Bandra West, Mumbai",
      price: "₹2,500/night",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1720420021124-4e18564e070f?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Peaceful Stay in Goa",
      location: "Anjuna, Goa",
      price: "₹2,000/night",
      rating: 4.7,
      image: "https://plus.unsplash.com/premium_photo-1661846577575-560fd37a2a19?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Hill View Room in Manali",
      location: "Old Manali, Himachal Pradesh",
      price: "₹1,200/night",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1612320582615-efd6f0c78f4b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Luxury Flat in Delhi",
      location: "Hauz Khas, New Delhi",
      price: "₹3,000/night",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1669664863985-ac4a81e7483e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Lakefront Home in Udaipur",
      location: "Fatehsagar, Udaipur",
      price: "₹2,200/night",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1708616178113-f687b1113414?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      title: "Budget Room in Chennai",
      location: "T Nagar, Chennai",
      price: "₹900/night",
      rating: 4.2,
      image: "https://plus.unsplash.com/premium_photo-1673014201674-a22222a0a454?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      title: "Terrace Studio in Hyderabad",
      location: "Banjara Hills, Hyderabad",
      price: "₹1,700/night",
      rating: 4.4,
      image: "https://plus.unsplash.com/premium_photo-1661880248185-353cd7ffe1cf?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
