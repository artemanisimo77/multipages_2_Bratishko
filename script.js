const form = document.getElementById("AuthForm");


form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    setTimeout(() => {
        alert('Успешная регистрация!');
        window.location.href = './main.html'; 
    }, 1000); 
});


(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()