/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";

// Interface for the form data
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  province: string;
  occupation: string;
  employer: string;
  photoId: File | null;
  floorPlanNotes: string;
  hasSecondPurchaser: boolean;
  secondPurchaserFirstName: string;
  secondPurchaserLastName: string;
  secondPurchaserPhone: string;
  secondPurchaserEmail: string;
  secondPurchaserStreetAddress: string;
  secondPurchaserCity: string;
  secondPurchaserPostalCode: string;
  secondPurchaserProvince: string;
  secondPurchaserOccupation: string;
  secondPurchaserEmployer: string;
  secondPurchaserPhotoId: File | null;
  agreedToTerms: boolean;
}

// Main component for the multi-step form
export default function SimcoeWoodsForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    province: "",
    occupation: "",
    employer: "",
    photoId: null,
    floorPlanNotes: "",
    hasSecondPurchaser: false,
    secondPurchaserFirstName: "",
    secondPurchaserLastName: "",
    secondPurchaserPhone: "",
    secondPurchaserEmail: "",
    secondPurchaserStreetAddress: "",
    secondPurchaserCity: "",
    secondPurchaserPostalCode: "",
    secondPurchaserProvince: "",
    secondPurchaserOccupation: "",
    secondPurchaserEmployer: "",
    secondPurchaserPhotoId: null,
    agreedToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const TOTAL_STEPS = 8;
  const FINAL_STEP = 8;

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files && files[0] }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Function to check if the current step is valid
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() !== "" && formData.lastName.trim() !== "";
      case 2:
        return formData.phone.trim() !== "" && formData.email.trim() !== "";
      case 3:
        return (
          formData.streetAddress.trim() !== "" &&
          formData.city.trim() !== "" &&
          formData.postalCode.trim() !== "" &&
          formData.province.trim() !== ""
        );
      case 4:
        return formData.occupation.trim() !== "" && formData.employer.trim() !== "" && formData.photoId !== null;
      case 5:
        return formData.hasSecondPurchaser !== undefined;
      case 6:
        return formData.secondPurchaserFirstName.trim() !== "" && formData.secondPurchaserLastName.trim() !== "";
      case 7:
        return (
          formData.secondPurchaserPhone.trim() !== "" &&
          formData.secondPurchaserEmail.trim() !== "" &&
          formData.secondPurchaserStreetAddress.trim() !== "" &&
          formData.secondPurchaserCity.trim() !== "" &&
          formData.secondPurchaserPostalCode.trim() !== "" &&
          formData.secondPurchaserProvince.trim() !== ""
        );
      case 8:
        if (formData.hasSecondPurchaser === true) {
          return (
            formData.secondPurchaserOccupation.trim() !== "" &&
            formData.secondPurchaserEmployer.trim() !== "" &&
            formData.secondPurchaserPhotoId !== null &&
            formData.agreedToTerms
          );
        }
        return formData.agreedToTerms;
      default:
        return false;
    }
  };

  // Function to go to the next step
  const handleNext = () => {
    if (currentStep === 5) {
      if (formData.hasSecondPurchaser === false) {
        setCurrentStep(FINAL_STEP);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    } else if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Function to go to the previous step
  const handlePrev = () => {
    if (currentStep === FINAL_STEP && formData.hasSecondPurchaser === false) {
      setCurrentStep(5);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isStepValid()) {
      alert("Please ensure all required fields are filled and the terms are accepted.");
      return;
    }

    setIsSubmitting(true);

    const submissionData = new FormData();

    // Common fields (always included)
    const commonFields = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      streetAddress: formData.streetAddress,
      city: formData.city,
      postalCode: formData.postalCode,
      province: formData.province,
      occupation: formData.occupation,
      employer: formData.employer,
      floorPlanNotes: formData.floorPlanNotes,
      hasSecondPurchaser: formData.hasSecondPurchaser.toString(),
      agreedToTerms: formData.agreedToTerms.toString(),
    };

    // Append common fields
    Object.entries(commonFields).forEach(([key, value]) => {
      submissionData.append(key, value);
    });

    // Append primary purchaser's photo ID if present
    if (formData.photoId) {
      submissionData.append("files", formData.photoId);
    }

    // Append second purchaser fields only if hasSecondPurchaser is true
    if (formData.hasSecondPurchaser === true) {
      const secondPurchaserFields = {
        secondPurchaserFirstName: formData.secondPurchaserFirstName,
        secondPurchaserLastName: formData.secondPurchaserLastName,
        secondPurchaserPhone: formData.secondPurchaserPhone,
        secondPurchaserEmail: formData.secondPurchaserEmail,
        secondPurchaserStreetAddress: formData.secondPurchaserStreetAddress,
        secondPurchaserCity: formData.secondPurchaserCity,
        secondPurchaserPostalCode: formData.secondPurchaserPostalCode,
        secondPurchaserProvince: formData.secondPurchaserProvince,
        secondPurchaserOccupation: formData.secondPurchaserOccupation,
        secondPurchaserEmployer: formData.secondPurchaserEmployer,
      };

      Object.entries(secondPurchaserFields).forEach(([key, value]) => {
        submissionData.append(key, value);
      });

      if (formData.secondPurchaserPhotoId) {
        submissionData.append("files", formData.secondPurchaserPhotoId);
      }
    }

    try {
      const response = await axios.post("http://192.168.18.76:2000/forms", submissionData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Server response:", response.data);
      setIsSuccess(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
          alert(
            `Failed to submit the form: ${
              (error.response.data && (error.response.data as any).message) || error.response.statusText
            }`
          );
        } else if (error.request) {
          console.error("No response received:", error.request);
          alert("No response from server. Please check your network.");
        } else {
          console.error("Error setting up request:", error.message);
          alert("Error in setting up the request.");
        }
      } else {
        console.error("Unknown error:", error);
        alert("An unknown error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate progress percentage
  const progress = Math.round((currentStep / TOTAL_STEPS) * 100);

  if (isSuccess) {
    return (
      <div className=" bg-gray-100 flex flex-col items-center justify-center">
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Simcoe Woods Condos Worksheet</h1>
          <p className="text-gray-600 max-w-3xl mb-8">
            By completing this worksheet you will be placed in priority sequence for the first release the moment the
            developer commences the sales event. Floor plans, pricing, and incentives to follow.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
          <p className="text-gray-700">
            We have received your completed worksheet for Chrome Condos Hamilton. You have been placed in a priority
            sequence. Feel free to call or text at{" "}
            <a href="tel:+14169947919" className="text-black font-bold hover:underline">
              416-994-7919
            </a>{" "}
            or email at{" "}
            <a href="mailto:sales@simcoewoods.com" className="text-black font-bold hover:underline">
              sales@simcoewoods.com
            </a>{" "}
            if you have any further questions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white max-w-3xl mx-auto px-4 xl:py-20 py-6 md:p-10 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Simcoe Woods Condos Worksheet</h1>
      <p className="text-gray-600 mb-8 text-center ">
        By completing this worksheet you will be placed in priority sequence for the first release the moment the
        developer commences the sales event. Floor plans, pricing, and incentives to follow.
      </p>

      {/* Progress Bar and Step Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm text-gray-600">
            Step {currentStep} of {TOTAL_STEPS}
          </p>
          <p className="text-sm font-semibold">{progress}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-black h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit}>
        {/* Step 1: First & Last Name */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g., John"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g., Doe"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
          </div>
        )}

        {/* Step 2: Phone & Email */}
        {currentStep === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone/Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., 416-555-1234"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., john.doe@example.com"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
          </div>
        )}

        {/* Step 3: Address */}
        {currentStep === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                placeholder="e.g., 123 Main Street"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g., Toronto"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="e.g., M5V 2T6"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Province <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                placeholder="e.g., Ontario"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
          </div>
        )}

        {/* Step 4: Occupation and ID */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Occupation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="e.g., Software Engineer"
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Employer <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="employer"
                  value={formData.employer}
                  onChange={handleChange}
                  placeholder="e.g., Tech Corp"
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload Photo ID / Drivers License or Passport <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="photoId"
                onChange={handleChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
                required
              />
            </div>
          </div>
        )}

        {/* Step 5: Second Purchaser Query */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Notes - What Floor Plans are you interested in?
              </label>
              <input
                type="text"
                name="floorPlanNotes"
                value={formData.floorPlanNotes}
                onChange={handleChange}
                placeholder="e.g., 2 Bedroom, Penthouse..."
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Is there a Second Purchaser? <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasSecondPurchaser"
                    value="true"
                    checked={formData.hasSecondPurchaser === true}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        hasSecondPurchaser: true,
                      }))
                    }
                    className="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                    required
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasSecondPurchaser"
                    value="false"
                    checked={formData.hasSecondPurchaser === false}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        hasSecondPurchaser: false,
                      }))
                    }
                    className="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                    required
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Second Purchaser Name */}
        {currentStep === 6 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                (Second Purchaser) First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="secondPurchaserFirstName"
                value={formData.secondPurchaserFirstName}
                onChange={handleChange}
                placeholder="e.g., Jane"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                (Second Purchaser) Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="secondPurchaserLastName"
                value={formData.secondPurchaserLastName}
                onChange={handleChange}
                placeholder="e.g., Smith"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                required
              />
            </div>
          </div>
        )}

        {/* Step 7: Second Purchaser Address & Contact */}
        {currentStep === 7 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                (Second Purchaser) Phone/Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="secondPurchaserPhone"
                value={formData.secondPurchaserPhone}
                onChange={handleChange}
                placeholder="e.g., 416-555-5678"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                (Second Purchaser) Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="secondPurchaserEmail"
                value={formData.secondPurchaserEmail}
                onChange={handleChange}
                placeholder="e.g., jane.smith@example.com"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                (Second Purchaser) Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="secondPurchaserStreetAddress"
                value={formData.secondPurchaserStreetAddress}
                onChange={handleChange}
                placeholder="e.g., 456 Oak Avenue"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                (Second Purchaser) City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="secondPurchaserCity"
                value={formData.secondPurchaserCity}
                onChange={handleChange}
                placeholder="e.g., Mississauga"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                (Second Purchaser) Postal Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="secondPurchaserPostalCode"
                value={formData.secondPurchaserPostalCode}
                onChange={handleChange}
                placeholder="e.g., L5B 4A9"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                (Second Purchaser) Province <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="secondPurchaserProvince"
                value={formData.secondPurchaserProvince}
                onChange={handleChange}
                placeholder="e.g., Ontario"
                className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                required
              />
            </div>
          </div>
        )}

        {/* Step 8: Final Step - 2nd Purchaser Occupation / OR Final Confirmation */}
        {currentStep === FINAL_STEP && (
          <div>
            {formData.hasSecondPurchaser === true && (
              <div className="space-y-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      (Second Purchaser) Occupation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="secondPurchaserOccupation"
                      value={formData.secondPurchaserOccupation}
                      onChange={handleChange}
                      placeholder="e.g., Accountant"
                      className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      (Second Purchaser) Employer <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="secondPurchaserEmployer"
                      value={formData.secondPurchaserEmployer}
                      onChange={handleChange}
                      placeholder="e.g., Finance Inc."
                      className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    (Second Purchaser) Photo ID / Drivers License or Passport <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="secondPurchaserPhotoId"
                    onChange={handleChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
                    required
                  />
                </div>
              </div>
            )}

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreedToTerms"
                  name="agreedToTerms"
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                  className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreedToTerms" className="font-medium text-gray-700">
                  I have read and agree to the{" "}
                  <a href="/privacy-policy" target="_blank" className="text-teal-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and I consent to have this website store my submitted information{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
            </div>
          </div>
        )}
        <div className="mt-10 flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="py-2 px-6 rounded-md font-semibold bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
              Previous
            </button>
          )}
          {currentStep === 1 && <div></div>}
          {currentStep < TOTAL_STEPS && (
            <button
              type="button"
              onClick={handleNext}
              disabled={!isStepValid()}
              className="py-2 px-6 rounded-md font-semibold bg-gray-800 text-white hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed">
              Next
            </button>
          )}
          {currentStep === TOTAL_STEPS && (
            <button
              type="submit"
              disabled={!isStepValid() || isSubmitting}
              className="py-2 px-6 rounded-md font-semibold bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed relative">
              {isSubmitting && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                </div>
              )}
              <span className={isSubmitting ? "opacity-0" : ""}>Submit</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
