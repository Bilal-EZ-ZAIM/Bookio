import React from "react";
import { BookOpen, Users, Phone, BookMarked } from "lucide-react";
import { Hero } from "../components/Hero";
import { FeaturedBooks } from "../components/FeaturedBooks";
import { Categories } from "../components/sections/Categories";
import { PopularAuthors } from "../components/sections/PopularAuthors";
import { Testimonials } from "../components/sections/Testimonials";

function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <FeaturedBooks />
        <Categories />
        <PopularAuthors />

        {/* Features Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Vast Collection</h3>
              <p className="text-gray-600">
                Over 100,000 books across all genres
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Member Benefits</h3>
              <p className="text-gray-600">Exclusive perks and early access</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <BookMarked className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Digital Library</h3>
              <p className="text-gray-600">Read on any device, anywhere</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Always here to assist you</p>
            </div>
          </div>
        </section>
      </main>

      <Testimonials />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-6">About LibraryHub</h4>
              <p className="text-gray-400 leading-relaxed">
                Your premier destination for books, knowledge, and literary
                adventures.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li>123 Library Street</li>
                <li>City, Country</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@libraryhub.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Monday - Friday: 9AM - 9PM</li>
                <li>Saturday: 10AM - 6PM</li>
                <li>Sunday: 12PM - 5PM</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 LibraryHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
