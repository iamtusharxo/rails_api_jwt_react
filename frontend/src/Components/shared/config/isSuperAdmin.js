const isSuperAdmin = (user) => {
  return user && user.role && user.role.name === 'superadmin';
};

export default isSuperAdmin;
