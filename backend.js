const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Simulated list of valid transaction IDs for demo purposes
const validTransactions = ['TXN123456', 'TXN654321'];

app.post('/verify', (req, res) => {
    const userTransaction = req.body.transaction;

    // Simulate payment verification
    if (validTransactions.includes(userTransaction)) {
        res.send(`
            <h1>Payment Verified!</h1>
            <p>Redirecting you to your target link...</p>
            <script>
                // Wait for 3 seconds before redirecting
                setTimeout(() => {
                    window.location.href = "https://picsart.com/create/editor?category=layout&customSize=1080x1080&unit=px";
                }, 3000);
            </script>
        `);
    } else {
        res.send('<h1>Payment Not Verified</h1><p>Please check your transaction ID and try again.</p>');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
