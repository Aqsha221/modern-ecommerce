import React from 'react';

const DashboardPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Total Products</h2>
                    <p className="text-lg">100</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Total Orders</h2>
                    <p className="text-lg">250</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Total Revenue</h2>
                    <p className="text-lg">$10,000</p>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Recent Orders</h2>
                {/* Placeholder for recent orders table */}
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border-b p-2">Order ID</th>
                            <th className="border-b p-2">Customer</th>
                            <th className="border-b p-2">Total</th>
                            <th className="border-b p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Placeholder for order data */}
                        <tr>
                            <td className="border-b p-2">#1234</td>
                            <td className="border-b p-2">John Doe</td>
                            <td className="border-b p-2">$50.00</td>
                            <td className="border-b p-2">Shipped</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardPage;