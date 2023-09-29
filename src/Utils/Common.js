// return the user data from the session storage
export const getUser = () => {
  const customer = sessionStorage.getItem('customer');
  if (customer) return JSON.parse(customer);
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('accessToken') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('emailId');
  sessionStorage.removeItem('password');
  sessionStorage.removeItem('cid');
  sessionStorage.removeItem('customer');
  sessionStorage.removeItem('isAdmin');
  sessionStorage.removeItem('finalRole');
}

// set the token and user from the session storage
export const setUserSession = (emailId, password, accessToken, cid, customer, isAdmin, finalRole) => {
  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('emailId', emailId);
  sessionStorage.setItem('password', password);
  sessionStorage.setItem('cid', cid);
  sessionStorage.setItem('customer', JSON.stringify(customer));
  sessionStorage.setItem('isAdmin', isAdmin);
  sessionStorage.setItem('finalRole', finalRole);
}