import React, {useState} from 'react';
export const useTogglePasswordVisibility2 = () => {
  const [confirmPasswordVisibility, setConfirmPassword] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handleConfirmPasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setConfirmPassword(!confirmPasswordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setConfirmPassword(!confirmPasswordVisibility);
    }
  };

  return {
    confirmPasswordVisibility,
    rightIcon,
    handleConfirmPasswordVisibility
  };
};