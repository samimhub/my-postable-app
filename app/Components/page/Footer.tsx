export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 py-10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <p className="text-lg font-semibold">We help you to create postable content!</p>
          <p className="text-sm text-gray-200">
            Postable is a free, unlimited tool designed to empower individuals, influencers, and businesses to amplify their voice and effortlessly create engaging content that goes beyond the ordinary.
          </p>
        </div>

        {/* Middle Section (Products) */}
        <div>
          <h3 className="text-xl font-bold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>Tweet Converter</li>
            <li>Post Scheduler <span className="text-sm text-gray-400">(COMING SOON)</span></li>
            <li>Screenshot Designer <span className="text-sm text-gray-400">(COMING SOON)</span></li>
          </ul>
        </div>

        {/* Right Section (Company) */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms And Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center">
        <div className="flex flex-row justify-center space-x-4">
          {/* Replace with actual icons */}
          <a href="#" className="flex  items-center space-x-2">
            <div className="bg-gray-800 rounded-full p-2">
              <span className="sr-only">Twitter</span>
              {/* Use FontAwesome or any icon library */}
              <i className="fab fa-twitter"></i>
            </div>
            <div className="flex flex-col">
              <span>Follow us on</span>
              <span>X / Twitter</span>
            </div>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <div className="bg-gray-800 rounded-full p-2">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </div>
            <div className="flex flex-col">
              <span>Follow us on</span>
              <span>X / Twitter</span>
            </div>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <div className="bg-gray-800 rounded-full p-2">
              <span className="sr-only">Discord</span>
              <i className="fab fa-discord"></i>
            </div>
            <div className="flex flex-col">
              <span>Follow us on</span>
              <span>X / Twitter</span>
            </div>
          </a>
          <a href="#" className="flex items-center space-x-2">
            <div className="bg-gray-800 rounded-full p-2">
              <span className="sr-only">Buy Coffee</span>
              <i className="fas fa-coffee"></i>
            </div>
            <div className="flex flex-col">
              <span>Follow us on</span>
              <span>X / Twitter</span>
            </div>
          </a>
        </div>

        {/* Footer Copyright */}
        <p className="mt-6 text-gray-400 text-sm">
          Copyright 2024 Postable
        </p>
      </div>
    </footer>
  )
}
