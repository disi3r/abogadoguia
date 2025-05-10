import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header>
      <motion.div 
        className="header-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </motion.div>
    </header>
  );
};

export default PageHeader;