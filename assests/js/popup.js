let msg = document.querySelector('.msg');
  let list = document.querySelector('.bt');
  let select = document.querySelector('#quote');
  list.addEventListener('click',()=>{
    if(select.value!=0){
      let pagename = select.value;
      let path = `${pagename}`
    location.href=path;
    }
    else{
      msg.style.color = "red";
      msg.innerHTML = '*Please select a product'
      select.classList.add('input-shake')
    }
  })