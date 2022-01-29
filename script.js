
document.getElementById('submit-button').addEventListener('click',function(){
  const parent=document.getElementById('list-section');
  const newElement= document.createElement('li');
  newElement.innerText="Brand New Button";
  newElement.classList.add('listi');
  parent.appendChild(newElement);
 })

const titles = document.getElementsByTagName("h3");
for (const title of titles) {
  title.style.color = "red";
}
const topTags=document.getElementsByClassName("top-tags");
for(const topTag of topTags){
  topTag.style.backgroundColor ="rgba(255, 99, 71, 0.6)";
}

// const lists=document.getElementsByClassName('listi');
// for(const list of lists){
//   list.addEventListener('click',function(event){
//     event.target.parentNode.removeChild(event.target);
//   })
// }

// const lists=document.getElementsByClassName("listi");
// for(const list of lists){
//  list.addEventListener('click',function(event){
//   event.target.parentNode.removeChild(event.target);
// })
// }

document.getElementById('list-section').addEventListener('click',function(event){
  event.target.parentNode.removeChild(event.target);
})

document.getElementById('plus-button').addEventListener('click',function(){
  const inputField=document.getElementById('input-field');
  const inputFieldText=inputField.value;
  const inputFieldNumber=parseInt(inputFieldText);
  newValue= inputFieldNumber + 1;
  inputField.value=newValue;
  const button= document.getElementById('plus-button');
  if(newValue<5){
   button.removeAttribute('disabled');
  }
  else{
    button.setAttribute('disabled',true);
  }
})

numArray=[12,1,44,98,65,77,4,49];
newA=numArray.sort(function(a,b){
  return a-b;
});
console.log(newA);