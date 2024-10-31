// CSS styles
const styles = `
* { margin: 0; padding: 0; overflow: hidden; /* Hides both scrollbars */}
body { font-family: 'Poppins', sans-serif; background: #f4f4f9; color: #333; text-align: center; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
#loader { position: fixed; inset: 0; background: rgba(255,255,255,0.8); display: flex; justify-content: center; align-items: center; z-index: 9999; }
.circle { border: 5px solid #f3f3f3; border-top: 5px solid #4a90e2; border-radius: 50%; width: 60px; height: 60px; animation: spin 1s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
#media-select { width: 50%; max-width: 300px; padding: 12px 18px; margin: 20px 5px auto; border: 2px solid #4a90e2; border-radius: 30px; font-size: 16px; background: #fff; appearance: none; cursor: pointer; transition: 0.3s; }
#media-select:focus { outline: none; border-color: #4a90e2; }
#intro { display: block; }
.content { display: none; }
.content.active { display: block; }
footer { position: fixed; bottom: 0; left: 0; width: 100%; padding: 1px; background-color: #f4f4f9; color: #888; text-align: center; border-top: 1px solid #ddd; font-size: 14px; }
@media (max-width: 600px) { #media-select { width: 70%; padding: 12px 20px; } }
#protected-content, #error-message { display: none; width: 100%; height: 100vh; }
#password-container { height: 100vh; }
object { width: 100vw; height: 100vh; display: block; /* Ensures no extra space */ }
`;

// Apply styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Main page functions
const startTime = performance.now();
const loaderDuration = 300;

// Show content based on dropdown selection and save it to localStorage
function showContent() {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    const selectedValue = document.getElementById('media-select').value;
    localStorage.setItem('selectedMedia', selectedValue); // Save selection
    if (selectedValue) {
        document.getElementById(selectedValue).classList.add('active');
        document.getElementById('home').style.display = selectedValue === 'home' ? 'block' : 'none';
    }
}

// Load saved dropdown selection from localStorage
function loadSavedSelection() {
    const savedSelection = localStorage.getItem('selectedMedia');
    if (savedSelection) {
        document.getElementById('media-select').value = savedSelection;
        showContent(); // Apply saved selection
    }
}

// Update and display current date and time
function updateTime() {
    const now = new Date();
    document.getElementById('date-time').textContent = 
        `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}, ${now.toLocaleTimeString()}`;
}

setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    const loadTime = ((performance.now() - startTime) / 1000).toFixed(2);
    document.getElementById('loadingTime').textContent = `Page loaded in ${loadTime} seconds.`;
}, loaderDuration);

setInterval(updateTime, 1000);

// Password protection
const correctPassword = "123";
const passwordInput = document.getElementById('password-input');
const showProtectedContent = () => {
    document.getElementById('password-container').style.display = 'none';
    document.getElementById('protected-content').style.display = 'block';
};

if (localStorage.getItem("unlocked")) showProtectedContent();

document.getElementById('submit-password').addEventListener('click', () => {
    if (passwordInput.value === correctPassword) {
        localStorage.setItem("unlocked", true);
        showProtectedContent();
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

// Load saved states on page load
window.addEventListener('DOMContentLoaded', () => {
    loadSavedSelection();
});
