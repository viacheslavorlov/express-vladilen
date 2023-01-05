import colors from "colors";

export const requestTime = (req, res, next) => {
	req.requestTime = new Date().toLocaleString();
	next();
}

export const loggeer = (req, res, next) => {
	console.log(colors.bgGreen.black(`Req time: ${req.requestTime}`))
	next();
}