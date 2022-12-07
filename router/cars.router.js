const {Router} = require('express');
const {carsController} = require("../controllers");

const carsRouter = Router();

carsRouter.get('/',
    carsController.getCars
)