// Function to fetch HTML content from a file or server
function fetchHtml(url, placeholderId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        });
}

// Array of pages to fetch and their corresponding placeholders
const pages = [
    { url: 'header.html', placeholder: 'header-placeholder' },
    { url: 'footer.html', placeholder: 'footer-placeholder' },
    { url: 'shirt.html', placeholder: 'shirt-placeholder' },
    { url: 'hoodies.html', placeholder: 'hoodies-placeholder' },
    { url: 'menpants.html', placeholder: 'menpants-placeholder' },
    { url: 'skirt.html', placeholder: 'skirt-placeholder' },
    { url: 'dresses.html', placeholder: 'dresses-placeholder' },
    { url: 'womenpants.html', placeholder: 'womenpants-placeholder' },
    { url: 'kids.html', placeholder: 'kids-placeholder' }
];

// Loop through pages and fetch HTML content
pages.forEach(page => {
    fetchHtml(page.url, page.placeholder);
});

// Function to check login
function checkLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@admin.com' && password === '123456') {
        alert('Login successful');
    } else {
        alert('Incorrect email or password');
    }
}
