import React from 'react';
import { BookOpen, Rocket, Heart, Skull, Glasses, Wand2 } from 'lucide-react';

const categories = [
  { name: "Literature", icon: BookOpen, count: 2584, color: "bg-blue-500" },
  { name: "Sci-Fi", icon: Rocket, count: 1829, color: "bg-purple-500" },
  { name: "Romance", icon: Heart, count: 3421, color: "bg-pink-500" },
  { name: "Horror", icon: Skull, count: 942, color: "bg-red-500" },
  { name: "Academic", icon: Glasses, count: 1672, color: "bg-amber-500" },
  { name: "Fantasy", icon: Wand2, count: 2341, color: "bg-emerald-500" }
];

export function Categories() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`${category.color} h-32 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <Icon className="w-12 h-12 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} Books</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}