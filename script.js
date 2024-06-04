document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.getElementById('customAlert');
    modal.style.display = 'block';

    const closeModal = () => {
        modal.style.display = 'none';
    }

    window.closeModal = closeModal;

    
    let slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("carousel-image");
        if (n >= slides.length) {slideIndex = 0}
        if (n < 0) {slideIndex = slides.length - 1}
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        slides[slideIndex].classList.add('active');
    }

    window.plusSlides = plusSlides;

    
    const validateLogin = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'user' && password === 'password') {
            alert('Login bem-sucedido!');
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
    }

    window.validateLogin = validateLogin;

    
    const footer = document.querySelector('footer');
    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.addEventListener('click', () => {
        const loginForm = document.createElement('div');
        loginForm.innerHTML = `
            <form id="loginForm">
                <label for="username">Nome de Usuário:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required>
                <button type="button" onclick="validateLogin()">Entrar</button>
            </form>
        `;
        footer.appendChild(loginForm);
    });
    footer.appendChild(loginButton);
});