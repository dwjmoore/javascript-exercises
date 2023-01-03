// Write a JavaScript program to break an address of an url and put it's part into an array.

const handleURL = () => {
  const url = document.getElementById("url").value;

  let data = url.split("://");
  const protocol = data[0];
  data = data[1].split(".com");
  const domain = data[0];
  data = data[1].split("/");

  if (data[1]) {
    document.getElementById(
      "result"
    ).innerHTML = `[${protocol}, ${domain}, ${data[1]}]`;
    return;
  }

  document.getElementById("result").innerHTML = `[${protocol}, ${domain}]`;
  return;
};
