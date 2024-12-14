import React from 'react'
import Navbar from '../components/UI/Navbar'
import Hero from '../components/UI/Home/Hero'
import WhyUs from '../components/UI/Home/WhyUs'
import Testimonials from '../components/UI/Home/Testimonials'
import Footer from '../components/UI/Home/Footer'
import Gallery from '../components/UI/Home/Gallery'
import RoomCard from '../components/RoomCard'
import VideoComponent from '../components/UI/Home/VideoComponent'
import Review from '../components/UI/Home/Review'
import Heading from '../components/single/Heading'

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <Heading
        title={"Look at our Hotel , how it looks?"}
        subtitle={"A Glimpse Into Their Unforgettable Stays"}
        paragraph={
          "Curious about what makes our hotel a unique destination? Watch the experiences of our guests who’ve enjoyed the finest accommodations, " +
          "exceptional service, and stunning amenities. From relaxing moments in the spa to vibrant dinners at our restaurant, hear firsthand how our hotel transforms stays into lasting memories. " +
          "Ready to immerse yourself in comfort and luxury? Watch, experience, and book your stay with us today!"
        }
      />

      <VideoComponent />
      <WhyUs />
      {/* <Testimonials /> */}
      <Heading
        title={"What Our Customers Say"}
        subtitle={"Take a Look at Their Experiences"}
        paragraph={"Discover why our guests rave about their stays with us! From exceptional service to unforgettable moments, hear firsthand accounts of how we've made every stay a memorable experience. Ready to experience the same unparalleled comfort and luxury? Join us and create your own unforgettable memories!"}
      />

      <Review />

      <div className="container mx-auto px-4 py-16">


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
          <div className="lg:block bg-orange-50 rounded-lg p-6 flex items-center justify-center">
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