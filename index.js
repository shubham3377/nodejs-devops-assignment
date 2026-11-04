
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send(`
        <html>
        <head>
            <title>DevOps Assignment</title>
            <style>
                body {
                    font-family: Arial;
                    background: #101827;
                    color: white;
                    text-align: center;
                    padding: 100px 20px;
                }
                .container {
                    background: #1e293b;
                    padding: 35px;
                    border-radius: 15px;
                    max-width: 650px;
                    margin: auto;
                }
                h1 { color: #38bdf8; }
                .success { color: #4ade80; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>DevOps Assignment</h1>
                <h2>Node.js Application</h2>
                <p class="success">Application is running successfully!</p>
                <p class="success">Application successfully deployed through Jenkins CI/CD!</p>
                <p>Managed by PM2</p>
                <p>Reverse Proxy: Nginx</p>
                <p>CI/CD: Jenkins</p>
                <p>Operating System: Ubuntu</p>
            </div>
        </body>
        </html>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        application: 'Node.js DevOps Assignment',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Application running on http://127.0.0.1:${PORT}`);
});



