import React from "react";

const Gallery = () => {
    const data = [
        {
            imageLink:
                "/images/rooms/room-1.jpg",
        },
        {
            imageLink:
            "/images/rooms/room-2.jpg",
        },
        {
            imageLink:
            "/images/rooms/room-3.jpg",
        },
        {
            imageLink:
            "/images/rooms/room-main.jpg",
        },
        {
            imageLink:
            "/images/hotel/1.JPG",
        },
        {
            imageLink:
            "/images/hotel/2.JPG",
        },
        {
            imageLink:
            "/images/hotel/5.JPG",
        },
        {
            imageLink:
            "/images/hotel/7.JPG",
        },
        {
            imageLink:
            "/images/rooms/8.JPG",
        },
    ];

    return (
        <>
            <div className="text-center mb-8 mt-10">
                <h2 className="text-orange-500 font-semibold uppercase text-sm">
                    What Our Customers Says
                </h2>
                <h3 className="text-3xl font-bold">
                    Customer said about <span className="italic">Saturn</span>
                </h3>
            </div>
            <div className="md:mx-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {data.map(({ imageLink }, index) => (
                    <div key={index}>
                        <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
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
