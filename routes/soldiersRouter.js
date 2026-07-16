import express from "express";
import { createSoldier } from "../ctrls/postCtrl.js";
import { isProperBody } from "../middelweres/postMiddelwere.js";
import { isValidCondition, isValidId } from "../middelweres/getMiddelwere.js";
import { getSoldierByCondition, getSoldierById } from "../ctrls/getCtrl.js";
import { isValidBody } from "../middelweres/putMiddelwere.js";
import { updateSoldier } from "../ctrls/putCtrl.js";
import { deleteSoldier } from "../ctrls/deleteCtrl.js";
import { updateSoldierStatus } from "../ctrls/patchCtrls.js";
import { isStatusInBody } from "../middelweres/patchMiddlwere.js";

export const router = express.Router();

// router.post("/",await createTable)


router.post("/newSoldier", isProperBody, createSoldier);

router.get("/", isValidCondition, getSoldierByCondition);

router.get("/:id", isValidId, getSoldierById);

router.put("/:id", isValidId, isValidBody, updateSoldier);

router.delete("/:id", isValidId, deleteSoldier);

router.patch("/:id", isValidId, isStatusInBody, updateSoldierStatus);






















