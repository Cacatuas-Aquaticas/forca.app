import { useContext } from 'react';
import PlayProvider from '../providers/Play/Play.provider';

const usePlayContext = () => {
  const context = useContext(PlayProvider);
  if (!context) {
    throw new Error('usePlayContext must be used within a PlayProvider');
  }
  return context;
};

export default usePlayContext;
