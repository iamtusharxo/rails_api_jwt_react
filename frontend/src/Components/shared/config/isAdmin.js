const isAdmin = (user) => {
  return user && user.role && user.role.name === 'admin';
};

export default isAdmin;
