const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Deployment Success</title>
        <style>
          body {
            background: linear-gradient(135deg, #4CAF50, #2196F3);
            font-family: Arial, sans-serif;
            color: white;
            text-align: center;
            padding-top: 100px;
          }
          .box {
            background: rgba(0, 0, 0, 0.3);
            padding: 40px;
            border-radius: 12px;
            display: inline-block;
          }
          h1 {
            font-size: 42px;
            margin-bottom: 20px;
          }
          p {
            font-size: 20px;
          }
          .highlight {
            color: yellow;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>🎉 THIS IS FIRST DEPLOYMENT ON AWS CODE PIPELINE DEVOPS CI/CD !!</h1>
          <p>Your new website has been successfully deployed.</p>
          <p class="highlight">Hosted on AWS Elastic Beanstalk 🚀</p>
          <p>CI powered by GitHub</p>
          <p>CD powered by AWS CodePipeline</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
