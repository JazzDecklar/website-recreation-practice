 window.addEventListener("load", function() {
  const previoush1 = document.querySelector ("h1");
  previoush1.remove();
  const newh1 = document.createElement("h1");
  newh1.append("Website Recreation Practice");
  const bod = document.querySelector("body");
  bod.append(newh1);
  const para = document.createElement("p");
  para.append("The HTML of this webpage was created with JavaScript.")
  bod.append(para);
  const img = document.createElement("img");
  img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  bod.append(img);
  img.style.width = "50%"
  const otherh1 = document.createElement("h1");
  otherh1.append("Facts about the Multicolored Tanager");
  bod.append(otherh1);
  const div = document.createElement("div");
  bod.append(div);
  const ul = document.createElement("ul");
  ul.setAttribute("id", "info");
  document.querySelector("div").append(ul);
  const firstli = document.createElement("li");
  const secondli = document.createElement("li");
  firstli.append("It is endemic to the mountains of Colombia.");
  secondli.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  this.document.getElementById("info").append(firstli, secondli);
  const h2 = document.createElement("h2");
  h2.append("Source");
  bod.append(h2);
  const anchor = document.createElement("a");
  anchor.href= "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  anchor.innerHTML= "Multicolored Tanager";
  bod.appendChild(anchor);
 })
 
