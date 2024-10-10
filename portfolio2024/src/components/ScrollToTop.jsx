import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <Button
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          backgroundColor: 'grey',
          fill: 'white',
          zIndex: 10,
          display: {xs: "none", sm: "block"}
        }}
      >
        <KeyboardArrowUpIcon />
      </Button>
    )
  );
};
export default ScrollToTop