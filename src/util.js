export function get(keyName) {
  if (
    keyName === "" ||
    keyName === null ||
    typeof keyName === "undefined" ||
    typeof document === "undefined"
  )
    return;
  let cookies = document.cookie ? document.cookie.split("; ") : [];

  for (let i = 0; i < cookies.length; i++) {
    const element = cookies[i].split("=");
    if (keyName === element[0]) {
      return element[1];
    }
  }
}

const cookie = { get };

export default cookie;
