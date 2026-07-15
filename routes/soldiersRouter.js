import express from "express";
import { createSoldier, createTable } from "../ctrls/postCtrl.js";
import { isProperBody } from "../middelweres/postMiddelwere.js";

export const router = express.Router();

router.post("/",await createTable)


router.post("/newSoldier",isProperBody,createSoldier);






















