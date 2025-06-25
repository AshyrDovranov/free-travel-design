customSelect('select');

 const picker = new easepick.create({
        element: document.getElementById('date'),
        css: [
          'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
        ],
        format: 'DD.MM.YY',
      });
/*subscribe label*/
 const inputSubscribe = document.querySelector('.subscribe_input');
 const label = document.querySelector('.subscribe_label');

 inputSubscribe.addEventListener('input', ()=> {
   if (inputSubscribe.value.trim() !== '') {
     label.classList.add('subscribe_label--top');
   } else {
     label.classList.remove('subscribe_label--top');
   }
  
 });

