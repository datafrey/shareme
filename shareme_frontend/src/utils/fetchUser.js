export const fetchUser = () => {
  const userId =
    localStorage.getItem('user') !== 'undefined'
      ? localStorage.getItem('user')
      : localStorage.clear();

  return userId;
};
