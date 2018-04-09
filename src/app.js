import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import {port} from "./config"
import {
  serverRendering,
  serverRenderingError
} from "client/serverRendering"
import Api from './server';

   //express app settings
const app = express();
app.use(express.static(path.resolve(__dirname, "public")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//server api
app.use('/api', Api);

//route for server side rendering page
app.get("*", serverRendering);

//route for server side rendering error page
app.use((err, req, res, next) => serverRenderingError(err, req, res, next));

if(!module.hot){
	app.listen(port, () => {
	  console.log(`Server started at port 4848 ${port}`);
	});
}



if (module.hot) {
  module.hot.accept();
  app.hot = module.hot;
}

export default app
