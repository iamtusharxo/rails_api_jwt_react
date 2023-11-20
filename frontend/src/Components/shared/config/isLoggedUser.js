const isLoggedUser = () => {
  const authToken = localStorage.getItem('authToken');
  const currentUser = localStorage.getItem('currentUser');
  if (authToken && currentUser)
    return true
  else
    return false;
};

export default isLoggedUser;
