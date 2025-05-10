import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  linkText: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, link, linkText, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <h3>{icon} {title}</h3>
      <p>{description}</p>
      <Link to={link}>{linkText}</Link>
    </motion.div>
  );
};

export default FeatureCard;