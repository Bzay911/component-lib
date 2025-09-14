import React from "react";
import { motion } from "framer-motion";

interface WobbleCardProps {
  title: string;
  description: string;
}

export const WobbleCard: React.FC<WobbleCardProps> = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ rotate: [0, 5, -5, 0] }}
      className="p-6 border rounded-lg shadow hover:shadow-lg transition"
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};
