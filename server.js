const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(
	["/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"],
	createProxyMiddleware({
		changeOrigin: true,
		target: "https://www.cnb.cz",
	})
);

app.listen(
	3000,
	"0.0.0.0",
	() => {
		process.stdout.write(
			`Listening at http://localhost:3000`,
		);
	}
);
