import { useDispatch, useSelector } from "react-redux";
import { BookCard } from "./BookCard";
import { Slider } from "./ui/Slider";
import { AppDispatch } from "../store/store/Store";
import { getbooksAll } from "../store/features/bookSlice";
import { useEffect } from "react";

const featuredBooks = [
  {
    title: "Optio neque corpori",
    author: "Modi in rerum eum vi",
    category: "Excepteur repudianda",
    coverImage: {
      url: "https://upload-image-by-nest.s3.amazonaws.com/book-images/1734707192548-bing_generated_qrcode.png",
      key: "book-images/1734707192548-bing_generated_qrcode.png",
    },
    rating: "3",
    totalRatings: "2",
    price: "704",
  },
];

export function FeaturedBooks() {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading, count, books } = useSelector((state: any) => state.book);

  useEffect(() => {
    dispatch(getbooksAll());
  }, [count]);
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.slice(0, 4).map((book: any, index: number) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">New Arrivals</h2>
        <Slider>
          {books.map((book: any, index: number) => (
            <div key={index} className="px-4">
              <BookCard {...book} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
