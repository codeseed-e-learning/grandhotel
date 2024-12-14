import React from "react";

const Gallery = () => {
    const data = [
        { imageLink: "/images/rooms/room-1.jpg" },
        { imageLink: "/images/rooms/room-2.jpg" },
        { imageLink: "/images/rooms/room-3.jpg" },
        { imageLink: "/images/rooms/room-main.jpg" },
        { imageLink: "/images/hotel/1.JPG" },
        { imageLink: "/images/hotel/2.JPG" },
        { imageLink: "/images/hotel/5.JPG" },
        { imageLink: "/images/hotel/7.JPG" },
        { imageLink: "/images/rooms/5.JPG" },
    ];

    return (
        <>
            <div className="text-center mb-8 mt-10">
                <h2 className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
                    What Our Customers Say
                </h2>
                <h3 className="text-4xl font-bold text-gray-800 mt-3">
                    Customers shared their experience with <span className="italic text-orange-600">Saturn</span>
                </h3>
            </div>
            <div className="md:mx-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map(({ imageLink }, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <img
                            className="h-60 w-full max-w-full rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            src={imageLink}
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;
