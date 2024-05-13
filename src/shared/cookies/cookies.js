export const getCookies = () => {
  const pairs = document.cookie.split(";");
  const cookies = {};

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");

    cookies[(pair[0] + "").trim()] = decodeURIComponent(pair[1]);
  }

  return cookies;
};
