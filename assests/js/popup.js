let msg = document.querySelector('.msg');
let pagename = location.pathname

// let boxModel = document.querySelector('.box-model');
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
//


  // =======================================
  
  let label = document.querySelector('.lb');
  let selec = document.querySelector('#quote-select')
  selec.addEventListener('change',()=>{
    let number_field = document.querySelector('.number-field');
    let value = selec.value;
    if(value != 0){
      number_field.style.display ='block';
      number_field.style.animationName ='fadeInUp';
      number_field.style.visibility ='visible';
      
      
      label.innerHTML = `Please Enter a ${value} Number`;
      console.log(value)

    }else{
      number_field.style.display ='none';
      number_field.style.visibility ='hidden';
    }

  });