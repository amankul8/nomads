import React from 'react';

export const useScrollLock = () => { 
  const lockScroll = React.useCallback(() => { 
    console.log('lock')
    document.body.style.overflow = 'hidden';
  }, [])

  const unlockScroll = React.useCallback(() => { 
    console.log('unLock')
    document.body.style.overflow = '';
  }, []);

  return {
    lockScroll,
    unlockScroll
  };  
}