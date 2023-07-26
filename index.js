const toggleTheme = document.querySelector('.toggle')

toggleTheme.addEventListener('click', () => {
    const body = document.querySelector('body')
    const ball = document.querySelector('.ball')

    body.classList.toggle('dark')
    ball.classList.toggle('dark')
})