const isLoggedUser = () => {
  const authToken = sessionStorage.getItem('authToken');
  const currentUser = sessionStorage.getItem('currentUser');
  if (authToken && currentUser)
    return true
  else
    return false;
};

export default isLoggedUser;
