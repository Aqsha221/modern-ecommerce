import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
      <p className="text-lg mb-8">Discover amazing products and enjoy a seamless shopping experience.</p>
      <a href="/shop" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Shop Now
      </a>
    </div>
  );
};

export default HomePage;