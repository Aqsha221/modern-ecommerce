import React, { useState } from 'react';
import { useCart } from '../../../store/cart';
import { useRouter } from 'next/router';
import { z } from 'zod';

const CheckoutSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
});

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      CheckoutSchema.parse(formData);
      // Proceed with payment processing and order creation
      clearCart();
      router.push('/orders');
    } catch (err) {
      setErrors(err.errors);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input"
          />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}
        </div>
        <div>
          <label className="block mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input"
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>
        <div>
          <label className="block mb-1">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="input"
          />
          {errors.postalCode && <p className="text-red-500">{errors.postalCode.message}</p>}
        </div>
        <div>
          <label className="block mb-1">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="input"
          />
          {errors.country && <p className="text-red-500">{errors.country.message}</p>}
        </div>
        <button type="submit" className="btn">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default CheckoutPage;