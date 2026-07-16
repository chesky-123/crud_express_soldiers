import express from "express";
import { createSoldier } from "../ctrls/postCtrl.js";
import { isProperBody } from "../middelweres/postMiddelwere.js";
import { isValidCondition, isValidId } from "../middelweres/getMiddelwere.js";
import { getSoldierByCondition, getSoldierById } from "../ctrls/getCtrl.js";
import { isValidBody } from "../middelweres/putMiddelwere.js";
import { updateSoldier } from "../ctrls/putCtrl.js";
import { deleteSoldier } from "../ctrls/deleteCtrl.js";

export const router = express.Router();

// router.post("/",await createTable)


router.post("/newSoldier", isProperBody, await createSoldier);

router.get("/", isValidCondition, await getSoldierByCondition);

router.get("/:id", isValidId, await getSoldierById);

router.put("/:id", isValidId, await isValidBody, await updateSoldier);

router.delete("/:id", isValidId, await deleteSoldier);






















