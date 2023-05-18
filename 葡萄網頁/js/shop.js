const googleURL="https://script.google.com/macros/s/AKfycbzKpty_Zc7CZCSjR2COC5Cd3e-5xpBCala1cg16RdxaXhdqNZ6UCy1BSZTbeKwaX-CZJQ/exec";
const apiurl="http://localhost:3000/order";
// const form = new FormData(document.getElementById('myform'));
          
document.getElementById('five1').value = window.sessionStorage.getItem('fivenormal');
document.getElementById('twenty1').value = window.sessionStorage.getItem('twentynormal');
document.getElementById('five2').value = window.sessionStorage.getItem('fiveice');
document.getElementById('twenty2').value = window.sessionStorage.getItem('twentyice');
document.getElementById('price').value = window.sessionStorage.getItem('price');



// document.getElementById('submit').addEventListener('submit', (e) => {
//   e.preventDefault()
// })
// ======接api============
// form.addEventListener('submit', () => {
//   e.preventDefault()
//   fetch('apiurl', { method: 'post'})
//     .then((response) =>  {
//       alert("訂購成功");
//       response.json();
//       console.log(response);
//     })
//     .then((data)=>{
//       history.go(0);
//       window.sessionStorage.clear();
//       console.log(data);
//     })
//     .catch(error => console.error('Error!', error.message))
// })

const form = document.forms['order']
          
          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(googleURL, { method: 'POST', body: new FormData(form)})
              .then(response => {
                alert("訂購成功");
                history.go(0);
                window.sessionStorage.clear();
              })
              .catch(error => console.error('Error!', error.message))
          })