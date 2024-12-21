import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Author {
  name: string;
  image: string;
  books: number;
  awards: number;
  category: string;
}

const authors: Author[] = [
  {
    name: "J.K. Rowling",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=400&q=80",
    books: 14,
    awards: 12,
    category: "Fantasy"
  },
  {
    name: "Stephen King",
    image: "https://images.unsplash.com/photo-1541418950054-c12804e149d9?auto=format&fit=crop&w=400&q=80",
    books: 64,
    awards: 15,
    category: "Horror"
  },
  {
    name: "Agatha Christie",
    image: "https://images.unsplash.com/photo-1585675100414-add2e465a136?auto=format&fit=crop&w=400&q=80",
    books: 66,
    awards: 8,
    category: "Mystery"
  },
  {
    name: "Paulo Coelho",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=400&q=80",
    books: 28,
    awards: 6,
    category: "Fiction"
  }
];

export function PopularAuthors() {
  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Popular Authors</h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2">
          View All Authors
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {authors.map((author, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative h-48">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{author.name}</h3>
                <p className="text-sm text-emerald-300">{author.category}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{author.books} Books Published</span>
                <span>{author.awards} Awards</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}