



const express = require('express'); 
const cors = require('cors');
const app = express();
const PORT =  3000; 

app.use(cors());

app.get('/', (req, res)=> {
	res.send({ message : "bom dia " });
});

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});  

