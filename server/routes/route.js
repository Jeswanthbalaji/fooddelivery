import { Router } from "express";
import { userController } from "../controllers/controller.js";

const route =Router() ;

route.get("/api",userController)

 export default route ;