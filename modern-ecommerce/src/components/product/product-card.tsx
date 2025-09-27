import React from 'react';
import { useCart } from '../../store/cart';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, rating, image, badge }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <div className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {badge && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
          {badge}
        </span>
      )}
      <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-700">${price.toFixed(2)}</p>
        <p className="text-yellow-500">{'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}</p>
        <button
          onClick={handleAddToCart}
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;