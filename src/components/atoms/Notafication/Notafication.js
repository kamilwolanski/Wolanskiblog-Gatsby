import React, { useEffect, useState } from 'react';
import './Notafication.styles.css';

const Notafication = ({ isSubmitted, setIsSubmitted, children }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 3000);
    setTimeout(() => {
      setIsSubmitted(null);
    }, 5000);
  }, [isSubmitted, setIsSubmitted]);

  useEffect(() => {
    if (isSubmitted === null) return;
    setActive(true);
  }, [isSubmitted]);

  const handleStyle = () => {
    if (isSubmitted) {
      return 'succes';
    } else if (isSubmitted === false) {
      return 'fail';
    } else {
      return '';
    }
  };

  return <div className={`notafication ${active ? 'active' : ''} ${handleStyle()}`}>{children}</div>;
};

export default Notafication;
