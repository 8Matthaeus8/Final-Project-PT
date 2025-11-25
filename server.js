// server.js
const express = require('express');
const app = express();
// Using process.env.PORT is crucial for deployment on PaaS like Render
const PORT = process.env.PORT || 3000; 

// Define variables for clean code and easy updates
const staticQuote = "The best way to predict the future is to create it.";
const GIF_URL = "https://github.com/8Matthaeus8/Final-Project-PT/blob/main/assets/background11.gif"; 
const myName = "JAN MATTHEW A. TANCHANCO";
const mySection = "NT - 4101";

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Platform Technologies Final Project</title>
        <style>
          /* Global & Layout Styles */
          body {
            font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            color: #2c3e50; 
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; 
            text-align: center;

            /* --- BACKGROUND GIF STYLES (Additional Feature) --- */
            background-image: url('${GIF_URL}'); 
            background-size: cover; 
            background-position: center; 
            background-repeat: no-repeat; 
            background-attachment: fixed; 
            /* Overlay for text readability on the moving background */
            background-color: rgba(244, 244, 249, 0.7); 
            background-blend-mode: overlay; 
          }
          
          /* Container Style */
          .container {
            max-width: 700px; 
            padding: 50px 70px;
            border-radius: 12px;
            /* Slightly transparent white background for high contrast */
            background-color: rgba(255, 255, 255, 0.95); 
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12); 
            border: 1px solid #e0e0e0; 
            z-index: 10; 
            position: relative; 
          }
          
          h1 {
            display: none; 
          }
          
          /* Quote Emphasis: The most prominent element (Required Output) */
          .quote {
            font-size: 2.2em; 
            font-weight: 700; 
            color: #2c3e50; 
            margin: 0; 
            line-height: 1.3;
          }

          /* Details Section (Name and Section - Required Output) */
          .details {
            font-size: 1.1em; 
            font-weight: 500; 
            color: #3498db; 
            line-height: 1.8;
            margin-bottom: 5px; 
            margin-top: 35px; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          
          <div class="quote">
            &ldquo;${staticQuote}&rdquo;
          </div>
          
          <div class="details">
            <p>Name: ${myName}</p>
            <p>Section: ${mySection}</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});