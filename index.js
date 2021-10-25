const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', function (req, res) {
	fs.promises
		.readdir('myfolder')
		.then((fileNames) => {
			res.json({
				yamlFileNames: fileNames.filter((fn) => fn.endsWith('.yml')),
				fileNames,
			});
		})
		.catch((err) => console.log(err));
});

app.listen(3000);
