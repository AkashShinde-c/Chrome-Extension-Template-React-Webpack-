const label = document.createElement('div');

label.style.position = 'fixed';
label.style.left = '50%';
label.style.top = '50%';
label.style.borderRadius = "10px"
label.style.transform = 'translate(-50%, -50%)';
label.style.backgroundColor = "yellow";
label.style.color = "black";
label.style.padding="2rem";
label.style.fontSize="1.4rem";
label.style.fontWeight="800"

label.textContent = "This text is rendered by extension template"

document.body.appendChild(label);

console.log("This is working")