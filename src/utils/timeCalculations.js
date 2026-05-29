import { differenceInWeeks, differenceInDays } from 'date-fns';

export const calculateGridData = (dob, lifespan, viewMode = 'weeks') => {
  const birthDate = new Date(dob);
  const today = new Date();
  
  if (viewMode === 'weeks') {
    const totalWeeks = lifespan * 52;
    const weeksLived = differenceInWeeks(today, birthDate);
    return { total: totalWeeks, lived: weeksLived };
  } else {
    // Days view (P1 toggle)
    const totalDays = lifespan * 365.25; 
    const daysLived = differenceInDays(today, birthDate);
    return { total: Math.floor(totalDays), lived: daysLived };
  }
};