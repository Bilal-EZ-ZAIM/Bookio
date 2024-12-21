import React from 'react';
import { useParams } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';
import { useCartStore } from '../store/useCartStore';
import { BookDetails } from '../components/book/BookDetails';
import { BookActions } from '../components/book/BookActions';

export function BookDetailsPage() {
  const { id } = useParams();
  const { books, isLoading } = useBooks();
  const addToCart = useCartStore((state) => state.addItem);

  const book = books.find((b) => b.isbn === id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-8">
          <BookDetails {...book} />
          <BookActions
            {...book}
            onBuy={() => addToCart(book)}
          />
        </div>
      </div>
    </div>
  );
}