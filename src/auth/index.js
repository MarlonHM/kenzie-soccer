export const autenticated = () => {
  let haveToken = localStorage.getItem("@Kenzie-soccer: token");
  console.log(haveToken);

  if (haveToken) {
    return true;
  }
  return false;
};
