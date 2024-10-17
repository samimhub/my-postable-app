export default function OneClickCreate() {
  return (
    <section className="bg-gray-700 min-h-screen text-white py-20 rounded-3xl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold">One-Click to Create</h1>

        {/* Subheading */}
        <p className="mt-4 text-lg">
          Postable is built with simplicity and fun at its core. No design skills? No problem. 
          We handle the heavy lifting so you can effortlessly create stunning posts.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition"
          >
            Get Started for FREE &rarr;
          </a>
        </div>

        {/* Image Section (Empty Placeholder) */}
        <div className="">
          <div className="h-96 bg-gray-700 rounded-lg shadow-lg flex justify-center items-center">
            <img src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727020129/app-screenshot_uficxp.webp" alt="backImage" />
          </div>
        </div>
      </div>
    </section>
  );
}
