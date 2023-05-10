

const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express(); 

const port = process.env.PORT || 3000; 

const apiProxy = createProxyMiddleware({
	target: 'http://localhost:4000',
	changeOrigin: true,
  });
  
app.use('/api', apiProxy);
  
app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

