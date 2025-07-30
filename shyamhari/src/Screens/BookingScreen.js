import React, { useState } from 'react';
import './BookingScreen.css';

const BookingScreen = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pickup && drop && pickup !== drop) {
      alert(`Searching buses from ${pickup} to ${drop}`);
    } else {
      alert('Please select different pickup and drop locations.');
    }
  };

  const cities = ['Mumbai', 'Pune', 'Nashik', 'Nagpur', 'Aurangabad'];

  return (
    <div className="booking-container">
      <h2>Book Your Journey</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Pickup Location:
          <select value={pickup} onChange={(e) => setPickup(e.target.value)}>
            <option value="">Select Pickup</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>

        <label>
          Drop Location:
          <select value={drop} onChange={(e) => setDrop(e.target.value)}>
            <option value="">Select Drop</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>

        <button type="submit">Book A seat</button>
      </form>
    </div>
  );
};

export default BookingScreen;
