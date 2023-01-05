import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import path from "path";
import express from 'express';
import {requestTime, loggeer} from "./middlewares.js";
import router from './routes/servers.js'

const __dirname = path.resolve();
dotenv.config()


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, 'static'))); //* не менять номер строки (14)
app.use(requestTime);
app.use(loggeer);

app.use(router)

//* заменено строкой 14
// app.get('/', (req, res) => {
// 	// res.send('<h1>Hello from server</h1>')
// 	res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
// });
//* заменено строкой 14
// app.get('/features', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'static', 'features.ejs'));
// });

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))
console.log(app.get('views'))

app.get('/', (req, res) => {
	res.render('index', {title: "Main Page", active: 'main'});
});

app.get('/features', (req, res) => {
	res.render('features',{title: "Features Page", active: 'features'});
});


app.get('/download', (req, res) => {
	console.log(req.requestTime)
	res.download(path.resolve(__dirname, 'static/demo', 'features.html'));
})

app.listen(PORT, () => {
	console.log(process.env.PORT)
	console.log(__dirname)
	console.log(`server started on port ${PORT}...`)
});