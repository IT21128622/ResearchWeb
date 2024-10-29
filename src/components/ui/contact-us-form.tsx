import React from "react";
import MagicButton from "./magic-button";

const ContactUsForm = () => {
  return (
    <div className="flex justify-center items-center py-16  text-[#C1C2D3]">
      <form className="w-full max-w-lg bg-gradient-to-br from-[#121238] to-[#141423] p-8 rounded-lg shadow-lg">

        <div className="mb-4">
          <label className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 bg-[#1A1A37] border border-[#3E3E55] rounded-lg focus:outline-none focus:border-[#6272A4] placeholder-gray-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 bg-[#1A1A37] border border-[#3E3E55] rounded-lg focus:outline-none focus:border-[#6272A4] placeholder-gray-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            className="w-full px-4 py-2 bg-[#1A1A37] border border-[#3E3E55] rounded-lg focus:outline-none focus:border-[#6272A4] placeholder-gray-500"
            placeholder="Enter the subject"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            className="w-full px-4 py-2 bg-[#1A1A37] border border-[#3E3E55] rounded-lg focus:outline-none focus:border-[#6272A4] placeholder-gray-500"
            placeholder="Write your message"
          />
        </div>

        <div className="flex justify-center">
        <MagicButton
            className="h-8 text-xs rounded-full cursor-default"
            icon={<></>}
            title="Submit"
            />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
