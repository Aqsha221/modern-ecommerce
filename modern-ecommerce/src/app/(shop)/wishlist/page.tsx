import React from 'react';

const WishlistPage = () => {
    // Sample wishlist items (replace with actual data fetching logic)
    const wishlistItems = [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 49.99 },
        { id: 3, name: 'Product 3', price: 19.99 },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {wishlistItems.map(item => (
                        <li key={item.id} className="border p-4 rounded shadow">
                            <h2 className="text-xl">{item.name}</h2>
                            <p className="text-lg text-gray-700">${item.price.toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WishlistPage;