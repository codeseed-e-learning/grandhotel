import React from 'react'
import Navbar from '../components/UI/Navbar'
import Hero from '../components/UI/Home/Hero'
import WhyUs from '../components/UI/Home/WhyUs'
import Testimonials from '../components/UI/Home/Testimonials'
import Footer from '../components/UI/Home/Footer'
import Gallery from '../components/UI/Home/Gallery'
import RoomCard from '../components/RoomCard'

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <WhyUs />
      <Testimonials />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-orange-600 font-semibold uppercase tracking-wide text-sm mb-3">
            Explore Our Rooms
          </h2>
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Ready to Find Your Perfect Stay?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our carefully curated selection of rooms designed to make your stay memorable and comfortable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RoomCard
            imageSrc="/images/rooms/room-1.jpg"
            date="Basic Room"
            category="Hotel"
            comments={22}
            title="Comfortable Spaces for Every Traveler"
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <RoomCard
            imageSrc="/images/rooms/room-main.jpg"
            date="Delux Room"
            category="Resort"
            comments={15}
            title="Luxury Accommodations for Unforgettable Moments"
            className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <div className="hidden lg:block bg-orange-50 rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">
                More Rooms Available
              </h4>
              <p className="text-gray-600 mb-6">
                Discover additional room types tailored to your needs.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
                View All Rooms
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home