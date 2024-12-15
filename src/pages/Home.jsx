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
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />

      {/* Animated Heading Section */}
      <motion.div
        initial={{ opacity: 0.1, y: 150 }} // Start from further below and lower opacity
        whileInView={{ opacity: 1, y: 0 }} // Move to original position with full opacity
        transition={{ duration: 1 }} // Duration of 1 second for a smoother transition
      >
        <Heading
          title={"Look at our Hotel , how it looks?"}
          subtitle={"A Glimpse Into Their Unforgettable Stays"}
          paragraph={
            "Curious about what makes our hotel a unique destination? Watch the experiences of our guests who’ve enjoyed the finest accommodations, exceptional service, and stunning amenities. From relaxing moments in the spa to vibrant dinners at our restaurant, hear firsthand how our hotel transforms stays into lasting memories. Ready to immerse yourself in comfort and luxury? Watch, experience, and book your stay with us today!"
          }
        />
      </motion.div>

      {/* Animated Video Section */}
      <motion.div
        initial={{ opacity: 0.1 }} // Start with lower opacity
        whileInView={{ opacity: 1 }} // Fade to full opacity when in view
        transition={{ duration: 1 }} // Slow transition for smoothness
      >
        <VideoComponent />
      </motion.div>

      <WhyUs />

      {/* Animated Review Section */}
      <motion.div
        initial={{ opacity: 0.1, y: 100 }} // Start from lower opacity and slightly below
        whileInView={{ opacity: 1, y: 0 }} // Transition to full opacity and original position
        transition={{ duration: 1 }} // Make the transition smoother
      >
        <Heading
          title={"What Our Customers Say"}
          subtitle={"Take a Look at Their Experiences"}
          paragraph={
            "Discover why our guests rave about their stays with us! From exceptional service to unforgettable moments, hear firsthand accounts of how we've made every stay a memorable experience. Ready to experience the same unparalleled comfort and luxury? Join us and create your own unforgettable memories!"
          }
        />
        <Review />
      </motion.div>

      {/* Animated Room Section */}
      <motion.div
        initial={{ opacity: 0.1, y: 100 }} // Start from lower opacity and a bit more downward movement
        whileInView={{ opacity: 1, y: 0 }} // Move to original position with full opacity
        transition={{ duration: 1 }} // Smooth duration for transition
      >
        <Heading
          title={"How are the room ? Do you like them?"}
          subtitle={"We take care of our guests "}
          paragraph={
            "Discover what sets our rooms apart and why our guests keep coming back! Each room is designed with comfort and luxury in mind, offering a peaceful retreat after a long day. From stylish interiors and plush bedding to modern amenities, we ensure that every detail contributes to your perfect stay. Whether you're looking to relax after a day of sightseeing or recharge for your next adventure, our rooms provide the ideal setting for your comfort. Hear from our guests how their stays became unforgettable experiences, and get ready to experience it for yourself!"
          }
        />
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
            
          </div>
        </div>
      </motion.div>

      {/* Gallery and Footer with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0.1 }} // Start with low opacity for a stronger effect
        whileInView={{ opacity: 1 }} // Fade to full opacity when in view
        transition={{ duration: 1 }} // Smooth transition duration
      >
        <Heading
          title={"Some pictures of ours?"}
          subtitle={"See view of our Rooms "}
          paragraph={
            "Take a glimpse into our beautifully designed rooms, where comfort meets elegance. Each space is crafted to offer a serene and luxurious environment, with thoughtful touches that create a home away from home. Whether you're looking for a cozy retreat or a stylish escape, our rooms provide the perfect backdrop for relaxation. Explore the visuals that highlight the unique atmosphere of our rooms, and see for yourself why our guests love to return!"
          }
        />
        <Gallery />
      </motion.div>

      <Footer />
    </div>
  )
}

export default Home
