const isUser = (user) => {
  return user && user.role && user.role.name === 'user';
};

export default isUser;
