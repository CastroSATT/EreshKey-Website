const greeting = document.getElementById('greeting');
const clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click', () => {
    const messages = [
        'Hello World',
        'Welcome!',
        'How are you?',
        'Nice to meet you!',
        'Have a great day!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    greeting.textContent = randomMessage;
    greeting.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        greeting.style.transform = 'scale(1)';
    }, 200);
});

