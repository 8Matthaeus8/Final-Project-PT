// server.js
const express = require('express'); // <-- FIXED: Was require('require'), now correct
const app = express();
// Using process.env.PORT is crucial for deployment on PaaS like Render
const PORT = process.env.PORT || 3000; 

// Define variables for clean code and easy updates
const staticQuote = "The Best Way To Predict The Future Is To Create It.";
// CRITICAL: Ensure this GIF_URL is the correct Raw URL you copied from GitHub
const GIF_URL = "https://raw.githubusercontent.com/8Matthaeus8/Final-Project-PT/main/assets/background11.gif"; 
const myName = "JAN MATTHEW A. TANCHANCO";
const mySection = "NT - 4101";

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Platform Technologies Final Project</title>
        <style>
          /* Define the animation for the floating effect */
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
        
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
            
            /* --- BACKGROUND GIF STYLES --- */
            background-image: url('${GIF_URL}'); 
            background-size: cover; 
            background-position: center; 
            background-repeat: no-repeat; 
            background-attachment: fixed; 
          }
          
          /* Container Style */
          .container {
            max-width: 700px; 
            padding: 50px 70px;
            border-radius: 12px;
            background-color: rgb(255, 255, 255); 
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2); 
            border: 1px solid #e0e0e0; 
            z-index: 10; 
            position: relative; 
            
            /* --- FLOATING EFFECT APPLIED --- */
            animation: float 4s ease-in-out infinite;
          }
          
          h1 {
            display: none; 
          }
          
          /* Quote Emphasis */
          .quote {
            font-size: 2.2em; 
            font-weight: 700; 
            color: #2c3e50; 
            margin: 0 0 45px 0;
            line-height: 1.3;
          }

          /* Details Section (New Footer Style) */
          .details {
            font-size: 0.9em; 
            font-weight: 400; 
            color: #7f8c8d; 
            line-height: 1.8;
            margin-top: 5px; 
            letter-spacing: 0.05em; 
          }
          .detail-name {
              font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          
          <div class="quote">
            &ldquo;${staticQuote}&rdquo;
          </div>
          
          <div class="details">
            <span class="detail-name">Name: ${myName}</span>
            &mdash;
            <span class="detail-section">Section: ${mySection}</span>
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