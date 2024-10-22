// components/WorldwideOffices.js
import { motion } from 'framer-motion';
import { useState } from 'react';

const WorldwideOffices = () => {
  const [activeRegion, setActiveRegion] = useState('India');
  const regions = [
    'India',
    'Asia Pacific',
    'Middle East',
    'Europe',
    'North America',
    'South America',
    'South Africa',
  ];

  const handleRegionClick = (region) => {
    setActiveRegion(region);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.heading}
        >
          Worldwide offices
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.subheading}
        >
          Explore our service offerings and subsidiaries in specific geographies.
        </motion.p>
      </div>

      <div style={styles.rightSection}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.stats}
        >
          <span style={styles.bigNumber}>21</span>
          <p style={styles.officesText}>
            Offices <br />
            Across 10+ territories with 4,000+ global workforce
          </p>
        </motion.div>
      </div>

      <div style={styles.regions}>
        {regions.map((region) => (
          <motion.button
            key={region}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#d32f2f',
              color: '#fff',
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleRegionClick(region)}
            style={{
              ...styles.regionButton,
              ...(activeRegion === region ? styles.active : {}),
            }}
          >
            {region}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#f5f5f5',
  },
  leftSection: {
    textAlign: 'left',
    flexBasis: '50%',
  },
  rightSection: {
    textAlign: 'right',
    flexBasis: '50%',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#666',
  },
  stats: {
    textAlign: 'right',
    fontSize: '1.2rem',
    color: '#333',
  },
  bigNumber: {
    fontSize: '5rem',
    fontWeight: 'bold',
    color: '#000',
  },
  officesText: {
    fontSize: '1rem',
  },
  regions: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '30px',
  },
  regionButton: {
    padding: '10px 20px',
    border: '2px solid #ccc',
    borderRadius: '20px',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  active: {
    backgroundColor: '#d32f2f',
    color: '#fff',
    borderColor: '#d32f2f',
  },
};

export default WorldwideOffices;
