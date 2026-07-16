import express from "express";
import { createSoldier } from "../ctrls/postCtrl.js";
import { isProperBody } from "../middelweres/postMiddelwere.js";
import { isValidCondition, isValidId } from "../middelweres/getMiddelwere.js";
import { getSoldierByCondition, getSoldierById } from "../ctrls/getCtrl.js";
import { isValidBody } from "../middelweres/putMiddelwere.js";
import { updateSoldier } from "../ctrls/putCtrl.js";

export const router = express.Router();

// router.post("/",await createTable)


router.post("/newSoldier", await isProperBody, await createSoldier);

router.get("/", await isValidCondition, await getSoldierByCondition);

router.get("/:id", await isValidId, await getSoldierById);

router.put("/:id",await isValidId,await isValidBody,await updateSoldier);






















