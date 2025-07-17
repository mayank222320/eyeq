import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to CopMap product page
    navigate('/products/copmap', { replace: true });
  }, [navigate]);

  return null;
}