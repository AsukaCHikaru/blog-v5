import dayjs from 'dayjs';

export const getYearNow = () => dayjs().format('YYYY');

export const parseDateToEn = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
