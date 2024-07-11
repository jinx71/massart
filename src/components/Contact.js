"use client";

import { useEffect, useState } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

import config from "../components/config/config.json";
const Contact = () => {
  const [submitBtnDisable, setSubmitBtnDisable] = useState(true);
  const [clickSubmit, setClickSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    fName: "",
    lName: "",
    address: "",
    areaCode: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    const emailPattern =
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

    const phoneNumberRegex =
      /^(?:(?:\+|00)([1-9]\d{0,2})[.\-\s]?)?(?!0+\s+,?$)[1-9]\d{9}\s?(?:#|(?:ext|int)\.? ?\d{1,5})?$/gm;

    const isValid = phoneNumberRegex.test(formData.mobileNumber);

    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "Please enter your email address.";
    } else if (!emailPattern.test(formData.email)) {
      formIsValid = false;
      errors["email"] = "Please enter a valid email.";
    }

    if (!formData.mobileNumber) {
      formIsValid = false;
      errors["mobile"] = "Please enter your phone number.";
    } else if (!isValid) {
      formIsValid = false;
      errors["mobile"] = "The phone number is not valid.";
    }

    if (!formData.fName) {
      formIsValid = false;
      errors["fName"] = "Please enter your first name.";
    }

    if (!formData.lName) {
      formIsValid = false;
      errors["lName"] = "Please enter your last name.";
    }

    if (!formData.address) {
      formIsValid = false;
      errors["address"] = "Please enter your address.";
    }

    if (!formData.areaCode) {
      formIsValid = false;
      errors["areaCode"] = "Please enter your area code.";
    }

    if (!formData.message) {
      formIsValid = false;
      errors["message"] = "Please enter your message.";
    } else if (formData.message.length > 255) {
      formIsValid = false;
      errors["message"] = "Message cannot exceed 255 characters.";
    }

    setErrors(errors);
    return formIsValid;
  };

  useEffect(() => {
    if (
      formData.lName &&
      formData.fName &&
      formData.message &&
      formData.areaCode &&
      formData.address &&
      formData.email &&
      formData.mobileNumber &&
      validateForm()
    ) {
      setSubmitBtnDisable(false);
    } else {
      setSubmitBtnDisable(true);
    }
  }, [
    formData.lName,
    formData.fName,
    formData.message,
    formData.areaCode,
    formData.address,
    formData.email,
    formData.mobileNumber,
    validateForm
  ]);

  useEffect(() => {
    if (clickSubmit == true) {
      validateForm();
    }
  }, [
    formData.lName,
    formData.fName,
    formData.message,
    formData.areaCode,
    formData.address,
    formData.email,
    formData.mobileNumber,
    clickSubmit
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClickSubmit(true);
    if (validateForm()) {
      setIsLoading(true);
      sendContactUsInfo();
    }
  };

  const sendContactUsInfo = async () => {
    try {
      const response = await fetch(
        config.apiEndpoint + `/api/contact-us-info`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        // Handle successful response
        console.log("Form submitted successfully");
      } else {
        // Handle error response
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
      setSubmitBtnDisable(false);
    }
  };

  return (
    <div className="max-w-7xl 2xl:ms-auto 2xl:me-auto ms-[38px] lg:ms-[100px] lg:me-[100px] me-[38px] grid grid-cols lg:mt-[150px] mt-[50px]">
      <div className="flex flex-col bg-gray-100 p-8 rounded-[10px]">
        <div className="lg:text-[50px] lg:leading-[56px] text-[24px] leading-[36px] font-bold mb-[35px] text-buttonCustomColor">
          Get in Touch
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[27px] md:mb-8 mb-6 md:text-[24px] md:leading-[30px] text-[12px] leading-[30px]">
          <div className="flex flex-col">
            <input
              type="text"
              name="fName"
              placeholder="First Name"
              value={formData.fName}
              onChange={handleChange}
              className="black-placeholder font-helvetica md:text-[24px] text-[12px] leading-[30px] w-full pt-0 md:pb-8 pb-[25px] border-b-[1px] bg-transparent outline-none border-black p-4 ps-0"
            />
            {errors.fName && <p className="text-red-500 md:text-base text-[12px] mt-1">{errors.fName}</p>}
          </div>

          <div className="flex flex-col w-full">
            <input
              type="text"
              name="lName"
              placeholder="Last Name"
              value={formData.lName}
              onChange={handleChange}
              className="black-placeholder font-helvetica md:text-[24px] text-[12px] leading-[30px] w-full pt-0 md:pb-8 pb-[25px] border-b-[1px] bg-transparent outline-none border-black p-4 ps-0"
            />
            {errors.lName && <p className=" text-red-500 md:text-base text-[12px] mt-1">{errors.lName}</p>}
          </div>

        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[27px] md:mb-8 mb-6 md:text-[24px] md:leading-[30px] text-[12px] leading-[30px]">
          <div className="flex flex-col">
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Phone"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="black-placeholder font-helvetica md:text-[24px] text-[12px] leading-[30px] w-full pt-0 md:pb-8 pb-[25px] border-b-[1px] bg-transparent outline-none border-black p-4 ps-0"
            />
            {errors.mobile && <p className=" text-red-500 md:text-base text-[12px] mt-1">{errors.mobile}</p>}
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="black-placeholder font-helvetica md:text-[24px] text-[12px] leading-[30px] w-full pt-0 md:pb-8 pb-[25px] border-b-[1px] bg-transparent outline-none border-black p-4 ps-0"
            />
            {errors.email && <p className=" text-red-500 md:text-base text-[12px] mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[27px] md:mb-8 mb-6 md:text-[24px] md:leading-[30px] text-[12px] leading-[30px]">
          <div className="flex flex-col">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="black-placeholder font-helvetica md:text-[24px] text-[12px] leading-[30px] w-full pt-0 md:pb-8 pb-[25px] border-b-[1px] bg-transparent outline-none border-black p-4 ps-0"
            />
            {errors.address && <p className="text-red-500 md:text-base text-[12px] mt-1">{errors.address}</p>}
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              name="areaCode"
              placeholder="Area Code"
              value={formData.areaCode}
              onChange={handleChange}
              className="black-placeholder font-helvetica md:text-[24px] text-[12px] leading-[30px] w-full pt-0 md:pb-8 pb-[25px] border-b-[1px] bg-transparent outline-none border-black p-4 ps-0"
            />
            {errors.areaCode && <p className="text-red-500 md:text-base text-[12px] mt-1">{errors.areaCode}</p>}
          </div>
        </div>




        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          maxLength={255}
          className="md:text-[24px]  black-placeholder leading-[30px] font-helvetica text-[12px] md:pb-8 pb-4 h-[200px] border-[1px] bg-transparent outline-none border-black p-4 rounded-[10px] mt-4"
        ></textarea>
        {errors.message && <p className="text-red-500 md:text-base text-[12px] mt-1">{errors.message}</p>}

        {isLoading ? (
          <a
            type="button"
            className="cursor-pointer text-white font-bold md:h-[48px] lg:leading-[48px] h-[32px] leading-[32px] md:text-[18px] text-[12px] bg-buttonCustomColor md:mt-[60px] mt-[30px] rounded-[50px] text-center flex items-center justify-center"
          >
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 14h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.411 3.589 8 8 8v-2.709z"
              ></path>
            </svg>
          </a>
        ) : (
          <a
            type="button"
            className="cursor-pointer text-black hover:text-white font-bold md:h-[48px] lg:leading-[48px] h-[32px] leading-[32px] md:text-[18px] text-[12px] border border-black hover:border-buttonCustomColor duration-200 hover:bg-buttonCustomColor md:mt-[60px] mt-[30px] rounded-[50px] text-center flex items-center justify-center"
            disabled={submitBtnDisable}
            onClick={(e) => handleSubmit(e)}
          >
            Send Now
          </a>
        )}
      </div>

      <div className="justify-between items-center bg-white-100 grid md:grid-cols-3 p-4 grid-cols-1 md:my-[52px] my-[45px]">
        <div className="flex items-center md:mb-0 mb-6">
          <div className="me-4">
            <div className="bg-buttonCustomColor lg:w-[81px] lg:h-[81px] w-[42px] h-[42px]  flex justify-center items-center text-white rounded-full">
              <FiPhoneCall className="text-[20px] lg:text-[39px]" />
            </div>
          </div>

          <div>
            <p className="font-bold xl:text-[30px] lg:text-[24px] text-[18px] mt-2">
              Have Queries?
            </p>
            <p className="xl:text-[18px] lg:text-[15px] text-[12px] text-[#6E6E6E]">
              Chat with live assistant
            </p>
          </div>
        </div>

        <div className="flex items-center md:mb-0 mb-6">
          <div className="me-4">
            <div className="bg-buttonCustomColor lg:w-[81px] lg:h-[81px] w-[42px] h-[42px] flex justify-center items-center text-white rounded-full">
              <IoIosMail className="text-[20px] lg:text-[39px]" />
            </div>
          </div>

          <div>
            <p className="font-bold xl:text-[30px] lg:text-[24px] text-[18px] mt-2">
              Mail us Today
            </p>
            <p className="xl:text-[18px] lg:text-[15px] text-[12px] text-[#6E6E6E]">
              Seestrasse 7, Zurich, CH
            </p>
          </div>
        </div>

        <div className="flex items-center md:mb-0 mb-6">
          <div className="me-4">
            <div className="bg-buttonCustomColor lg:w-[81px] lg:h-[81px] w-[42px] h-[42px] flex justify-center items-center text-white rounded-full">
              <FaLocationDot className="text-[20px] lg:text-[39px]" />
            </div>
          </div>

          <div>
            <p className="font-bold xl:text-[30px] lg:text-[24px] text-[18px]  mt-2">
              Locate & Visit Us
            </p>
            <p className="xl:text-[18px] lg:text-[15px] text-[12px] text-[#6E6E6E]">
              +966 573 5737
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
