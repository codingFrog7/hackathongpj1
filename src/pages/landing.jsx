import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Star, LogOut } from "lucide-react"
import { SparklesCore } from "@/components/ui/sparkles"
import HeroSlider from "./MiniCOP/HeroSlider"
import GetInTouch from "./GetInTouch"

export default function Landing() {
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
      title: "Working Men's PG in Ameerpet",
      location: "Hyderabad, Telangana",
      price: "₹6,200/month",
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1708616178113-f687b1113414?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      , type: "Mens PG",
    },
    {
      id: 7,
      title: "Student PG near LPU Campus",
      location: "Phagwara, Punjab",
      price: "₹4,800/month",
      rating: 3.9,
      image: "https://media.istockphoto.com/id/2198113175/photo/interior-of-vintage-style-bedroom-with-with-window-curtains.jpg?s=612x612&w=0&k=20&c=94lLPf67kJsR2Csa0J5eiZyvsos4Urx4D_OibXq9lh8="
      , type: "Student PG",
    },
    {
      id: 8,
      title: "Girls PG in Salt Lake Sector V",
      location: "Kolkata, West Bengal",
      price: "₹6,800/month",
      rating: 4.3,
      image: "https://media.istockphoto.com/id/1395224980/photo/a-holy-city-north-india-filled-with-temples-and-religious-places.jpg?s=612x612&w=0&k=20&c=0mLTGDaGiuifFJko9sC0Xo-bWSNoFXQxgrtK5N4NMco="
      , type: "Girls PG",
    }, {
      id: "9",
      title: "Modern 2BHK Apartment in Bangalore",
      location: "Indiranagar, Bangalore",
      price: "₹28,000/month",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      bedrooms: 2,
      bathrooms: 2,
      size: "1100 sqft",
    },
    {
      id: "10",
      title: "Cozy Studio in South Delhi",
      location: "Hauz Khas, New Delhi",
      price: "₹18,500/month",
      imageUrl: "https://images.unsplash.com/photo-1572120360610-d971b9b78825?w=800&h=600&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      size: "450 sqft",
    },
    {
      id: "11",
      title: "Luxury 3BHK Flat in Mumbai",
      location: "Bandra West, Mumbai",
      price: "₹95,000/month",
      imageUrl: "https://images.unsplash.com/photo-1599423300746-b62533397364?w=800&h=600&fit=crop",
      bedrooms: 3,
      bathrooms: 3,
      size: "1600 sqft",
    },
    {
      id: "12",
      title: "1BHK Budget Apartment",
      location: "Hadapsar, Pune",
      price: "₹10,000/month",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      bedrooms: 1,
      bathrooms: 1,
      size: "600 sqft",
    },
    {
      id: "13",
      title: "Spacious Villa with Garden",
      location: "ECR, Chennai",
      price: "₹65,000/month",
      imageUrl: "https://content.jdmagicbox.com/comp/bareilly/v3/9999px581.x581.211220182616.l7v3/catalogue/rastogi-boys-pg-green-park-bareilly-paying-guest-accommodations-for-student-umhywm4c2f.jpg",
      bedrooms: 4,
      bathrooms: 4,
      size: "2400 sqft",
    },
  ];



  const categories = [
    "All",
    "Girls PG",
    "Boys PG",
    "Shared Rooms",
    "Private Rooms",
    "Hostels",
    "For Working Professionals",
    "Near Colleges",
  ];


  return (
    <div className="min-h-screen text-white font-sans relative">
      <div className="fixed inset-0 z-0 bg-black">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">


        <HeroSlider />
        <nav className="flex flex-wrap gap-4 px-6 py-4 border-b border-white text-white bg-black/50 backdrop-blur-sm">
          {categories.map((cat, index) => (
            <Button key={index} variant="ghost" className="text-white hover:bg-white hover:text-black text-sm">
              {cat}
            </Button>
          ))}
        </nav>

        <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              className="bg-neutral-900/80 backdrop-blur-sm border border-white rounded-xl overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-white/20"
            >
              <CardHeader className="p-0">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
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

        <footer className="p-6 border-t border-white text-center text-sm text-white bg-black/50 backdrop-blur-sm">
          <div className="flex justify-center items-center gap-4">
            <GetInTouch />
          </div>
        </footer>
      </div>
    </div>
  )
}
