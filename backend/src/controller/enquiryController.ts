import { Request, Response } from "express";
import { HttpStatusCode } from "../constants/httpStatusCodes";
import { enquirySchema } from "../validations/enquiryValidation"
import { sendEmail } from "../utils/mailService";


const createEnquiry = async (req: Request, res: Response) => {
  try {

    const { error, value } = enquirySchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      console.log(error);
      res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({
          success: false,
          error: error.details.map((err) => err.message),
        });
      return;
    }

    const { name, email, message } = value;

    const fromMail = process.env.MAIL_FROM;

    // // send email to admin
    sendEmail({
        from: fromMail,
        // replyTo: email, 
        to: "shabadmk969@gmail.com",
        subject: `New contact from ${name} (${email})`,
        text: `Email: ${email}\nName: ${name}\nPhone: ${message}`,
    }).catch(err => console.error(`Error sending email to admin:`, err));

    // send email to user
    sendEmail({
        from: fromMail,
        replyTo: fromMail,
        to: email,
        subject: "Thank you for your contact",
        text: `Thank you for your contact. I will get back to you soon.`,
    }).catch(err => console.error(`Error sending email to user:`, err));

    console.log("mail sended succesfully");

    res.status(HttpStatusCode.CREATED).json({
      success: true,
      message: "Enquiry submitted succesfully",
    });
  } catch (error) {
    console.log(error);
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ success: false, error: "Error creating user" });
  }
};

const enquiryController = {
    createEnquiry
}

export default enquiryController;