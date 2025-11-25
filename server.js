// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>PT Final Project Deployment</title>
        <style>
          /* Minimalist Style */
          body {
            font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            background-color: #fafafa; 
            color: #2c3e50; 
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; 
            text-align: center;
          }
          
          .container {
            max-width: 700px; 
            padding: 40px;
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08); 
          }
          
          h1 {
            font-size: 1.2em; 
            font-weight: 500;
            margin-bottom: 20px; 
            color: #bdc3c7; 
          }
          
          .details {
            font-size: 1em;
            font-weight: 400; 
            color: #3498db; 
            line-height: 1.6;
            margin-bottom: 15px; 
          }

          /* Quote Emphasis: The largest element */
          .quote {
            font-size: 2.2em; 
            font-weight: 700; 
            color: #2c3e50; 
            margin: 0 0 35px 0; 
            line-height: 1.3;
          }
        </style>
      </head>
      <body>
        <div class="container">
          
          <div class="quote">
            &ldquo;The best way to predict the future is to create it.&rdquo;
          </div>
          
          <h1>Platform Technologies Final Project Deployment</h1>
          
          <div class="details">
            <p>Name: **JAN MATTHEW A. TANCHANCO**</p>
            <p>Section: **NT - 4101**</p>
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