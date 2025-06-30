import React from 'react';
import {
  FaUtensils,
  FaHeart,
  FaStar,
  FaUsers,
  FaThumbsUp,
  FaComments,
  FaClock,
  FaFolderOpen
} from 'react-icons/fa';
import CountUp from 'react-countup';
import Notification from '../overview/Notification';
import MyLatestSubmission from './MyLatestSubmission';

const Overview = () => {
    
    return (
        <div className="space-y-8">
            <h2 className="text-xl font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">Stats and Overview</h2>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

       <div className="bg-[#FF9F1C] dark:bg-[#D97706] shadow rounded-xl p-6 text-center space-y-2">
          <FaThumbsUp className="text-4xl text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] mx-auto" />
          <h2 className="text-4xl font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            <CountUp end={310} duration={2} />
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Total Likes</p>
        </div>

        <div className=" bg-[#FF6B6B] dark:bg-[#DC2626] shadow rounded-xl p-6 text-center space-y-2">
          <FaUtensils className="text-4xl text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] mx-auto" />
          <h2 className="text-4xl font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            <CountUp end={128} duration={2} />
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Total Recipes</p>
        </div>
        <div className="bg-[#0EA5E9] dark:bg-[#0369A1] shadow rounded-xl p-6 text-center space-y-2">
          <FaClock className="text-4xl text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] mx-auto" />
          <h2 className="text-4xl font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            <CountUp end={12} duration={2} />
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Pending Recipes</p>
        </div>
        <div className="bg-[#10B981] dark:bg-[#059669] shadow rounded-xl p-6 text-center space-y-2">
          <FaFolderOpen className="text-4xl text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] mx-auto" />
          <h2 className="text-4xl font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
            <CountUp end={6} duration={2} />
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Categories</p>
        </div>
      </div>
      <MyLatestSubmission />
      <Notification />
    </div>
    );
};

export default Overview;