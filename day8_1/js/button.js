var btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = 0;
document.body.appendChild(btn);

btn.onclick = function() {
    var nbr = Number(this.innerHTML);
    nbr += 1;
    this.innerHTML = nbr.toString();
    document.body.appendChild(this);
    
}