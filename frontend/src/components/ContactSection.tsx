import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useCreateEnquiryMutation } from "../store/slice/apiSlice";
import { toast } from 'react-toastify'
import CustomModal from "./Modal/CustomeModal";

interface EnquiryFormData {
  name: string,
  email: string,
  message: string,
}

const ContactSection: React.FC = () => {

  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [createEnquiry, { isLoading }] = useCreateEnquiryMutation();
  const [open, setOpen] = useState(false);

  /** ✅ Handles input changes */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /** ✅ Opens confirmation modal */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  /** ✅ Submits form data to API */
  const confirmForm = async () => {
    try {
      const res = await createEnquiry(formData).unwrap();


      if (res.success) {
        console.log(res);
        toast.success("Enquiry submitted successfully");
        resetForm();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to submit enquiry");
      console.error("Error creating enquiry:", error);
    } finally {
      setOpen(false);
    }
  };

  /** ✅ Resets form state */
  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="text-white py-10 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row items-start  justify-between gap-10">
        {/* Left Section (Text) */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl font-semibold mb-4">
            Drop Me a Message
          </h1>

          <p className="text-sm md:text-base font-normal max-w-2xl mx-auto md:mx-0">
            A Self-Taught Full-Stack Developer, passionate and highly motivated
            with hands-on experience building dynamic, responsive, and scalable
            web applications. Skilled in both front-end and back-end
            development, with a solid grasp of modern technologies including
            HTML, CSS, JavaScript, React, Node.js, Express, and databases
            SQL/NoSQL.
          </p>

          <div className="mt-6 flex flex-col space-y-4 md:items-start items-center ">
            <div className="flex items-center space-x-6">
              <Phone size={18} className="hover:text-gray-300 cursor-pointer" />
              <span>+91 8547412614</span>
            </div>
            <div className="flex items-center space-x-6">
              <Mail size={18} className="hover:text-gray-300 cursor-pointer" />
              <span>example@mail.com</span>
            </div>
            <div className="flex items-center space-x-6">
              <MapPin size={18} className="hover:text-gray-300 cursor-pointer" />
              <span>Location</span>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg w-full bg-gradient-to-b from-purple-900/30 to-purple-500/10 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Type here..."
                className="w-full p-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Type here..."
                className="w-full p-2 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type here..."
                className="w-full p-2 rounded-lg bg-gray-900 border border-gray-600 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-200 py-2 rounded-lg font-semibold cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>


      <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        title="Are You sure to confirm this action?"
        // description={`This modal works with TypeScript. Service ID: ${selectedServiceId}`}
        size={{ width: 300 }}
        color="#f0f0f0"
        buttonText="OK"
        loading={isLoading}
        onButtonClick={async () => {
          await confirmForm()
        }}
      />
    </section>
  );
};

export default ContactSection;
