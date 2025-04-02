
// Clear the input field when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('input');
    urlInput.value = ''; // Clear the input field
});

document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const urlInput = document.getElementById('input').value;
    const loadingElement = document.getElementById('loading');
     const resultsElement = document.getElementById('results');
    const resultListElement = document.getElementById('result-list');
    const errorCountElement = document.getElementById('error-count');
    const warningCountElement = document.getElementById('warning-count');

    // Hide results and show loading indicator
    resultsElement.style.display = 'none';
    loadingElement.style.display = 'block';

    // Clear previous results
    resultListElement.innerHTML = '';
    errorCountElement.textContent = '0';
    warningCountElement.textContent = '0';

    // Show loading indicator
   // loadingElement.style.display = 'block';

    try {
        // Send the URL to the backend for scanning
        const response = await fetch('/scan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: urlInput })
        });

        const data = await response.json();

        // Hide loading indicator and show results
        loadingElement.style.display = 'none';
        resultsElement.style.display = 'block';

        if (data.error) {
            // Display error message
            resultListElement.innerHTML = `<p style="color: red;">Error: ${data.error}</p>`;
            return;
        }

        // Display results
        const issues = data.issues || [];
        errorCountElement.textContent = issues.filter(issue => issue.type === 'error').length;
        warningCountElement.textContent = issues.filter(issue => issue.type === 'warning').length;

        if (issues.length === 0) {
            resultListElement.innerHTML = '<p>No accessibility issues found!<p>';
        } else {
            issues.forEach((issue, index) => {
                const listItem = document.createElement('div');
                listItem.innerHTML = `
                    <strong>Issue ${index + 1}:</strong> ${issue.message}<br>
                    <em>WCAG criteria:</em> ${issue.code}<br>
                    <em>The location on the webpage:</em> ${issue.context}
                `;
                resultListElement.appendChild(listItem);
            });
        }
    } catch (error) {
        // Hide loading indicator and display error
        loadingElement.style.display = 'none';
        resultListElement.innerHTML = `<p style="color: red;">Could not retrieve results. Error: ${error.message}</p>`;
    }
});