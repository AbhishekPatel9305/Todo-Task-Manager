let btn = document.querySelector("button");
let input = document.querySelector("input");
let ol = document.querySelector("ol");
btn.addEventListener('click',function(){
    console.log(input.value);
    let list = document.createElement("li");
    let  deleteBtn = document.createElement("button");
    list.innerText = input.value;
    deleteBtn.innerText="delete";
    deleteBtn.classList.add("delete");
    list.appendChild(deleteBtn);
    ol.appendChild(list);
    input.value = '';
});
let deleteBtns = document.querySelectorAll(".delete");
for(deleteBtn of deleteBtns){
    deleteBtn.addEventListener("click",function() {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}

ol.addEventListener("click",function(){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
});