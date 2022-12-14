import React from 'react';

export const useCountDown = () => {
  const [countDown, setCountDown] = React.useState<number>(0);

  React.useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    }
  }, [countDown]);

  return {countDown, setCountDown};
};
