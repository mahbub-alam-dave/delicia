import React from 'react';
import { FaCheckCircle, FaHeart, FaStar, FaPlusCircle } from 'react-icons/fa';


const activities = [
  {
    id: 1,
    icon: <FaPlusCircle className="text-green-500" />,
    message: "You submitted a new recipe: 'Creamy Pasta'",
    time: "5 minutes ago",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-blue-500" />,
    message: "Your recipe 'Chicken Biryani' was approved",
    time: "1 hour ago",
  },
  {
    id: 3,
    icon: <FaHeart className="text-pink-500" />,
    message: "John Doe liked your 'Fruit Salad' recipe",
    time: "Yesterday",
  },
  {
    id: 4,
    icon: <FaStar className="text-yellow-500" />,
    message: "You earned a 5-star rating on 'Fried Rice'",
    time: "2 days ago",
  },
];

const Notification = () => {
    return (
        <div className="space-y-8">
      <h2 className="text-xl font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">Recent Activity</h2>
      <div className="bg-[var(--color-primary)] dark:bg-gray-900 shadow rounded-xl p-6 space-y-4 text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="text-2xl">{activity.icon}</div>
            <div>
              <p className="0">{activity.message}</p>
              <p className="text-sm text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Notification;