function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.jwt) {
    return {
      Authorization: "Bearer " + user.jwt
    };
  }

  return {};
}

export default authHeader;
