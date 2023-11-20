const isLoggedUser = () => {
  const authToken = localStorage.getItem('authToken');
  return !!authToken;
};

export default isLoggedUser;
