const getExt = () => {
  const filename = document.getElementById("filename").value;
  const ext = filename.split(".").pop();

  document.getElementById("ext").innerHTML = ext;
};
