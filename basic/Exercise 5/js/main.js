const animate_string = (id) => {
  const element = document.getElementById(id);
  const textNode = element.childNodes[0];
  let text = textNode.data;

  console.log(text);

  setInterval(() => {
    //text = text[text.length - 1] + text.substring(0, text.length - 1); Moving right.
    text = text.substring(1, text.length) + text[0]; // Moving left.
    textNode.data = text;
  }, 100);
}
