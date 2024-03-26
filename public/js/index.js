const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const chatContainer = document.querySelector('.chat-container');
const inputText = document.querySelector('#user-input');

// Function to set initial theme
function setInitialTheme() {
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
        setThemeColors(currentTheme);
    }
}

// Function to set theme colors
function setThemeColors(theme) {
    if (theme === 'dark') {
        chatContainer.style.backgroundColor = '#33333369';
        inputText.style.backgroundColor = '#33333369';
        inputText.style.color = '#fff';
    } else {
        chatContainer.style.backgroundColor = '#f0f0f0';
        inputText.style.backgroundColor = '#f0f0f0';
        inputText.style.color = 'black';
    }
}

// Function to switch theme
function switchTheme(e) {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setThemeColors(theme);
}

// Event listener for theme switch
toggleSwitch.addEventListener('change', switchTheme);

// Set initial theme
setInitialTheme();
