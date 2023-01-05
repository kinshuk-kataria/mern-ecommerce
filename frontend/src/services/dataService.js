const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.userToken) {
    return { 'x-access-token': user.userToken };
  } else {
    return {};
  }
};

export default authHeader;
