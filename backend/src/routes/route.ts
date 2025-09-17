import express from "express";
import enquiryController from "../controller/enquiryController";

const router = express.Router()



router.post('/enquiry', enquiryController.createEnquiry)

export default router;