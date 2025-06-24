"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white max-w-3xl mx-auto my-10 px-4 xl:py-10 py-6 md:p-10 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>
      <p className="text-center text-gray-600 mb-8">
        Simcoe Woods Condos is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you submit our worksheet form.
      </p>

      <div className="space-y-6 text-gray-700">
        {/* Section 1: Information We Collect */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide when completing the Simcoe Woods Condos
            worksheet form. This includes:
          </p>
          <ul className="list-disc list-inside    mt-2 space-y-1">
            <li>Personal details such as first name, last name, phone number, and email address.</li>
            <li>Address information including street address, city, postal code, and province.</li>
            <li>Employment details such as occupation and employer.</li>
            <li>Identification documents, such as a driver’s license or passport, for verification purposes.</li>
            <li>Optional notes regarding preferred floor plans.</li>
            <li>
              Information about a second purchaser, if applicable, including their personal, address, employment, and
              identification details.
            </li>
          </ul>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
          <p>The information we collect is used to:</p>
          <ul className="list-disc list-inside    mt-2 space-y-1">
            <li>Process your registration for priority placement in the Simcoe Woods Condos sales event.</li>
            <li>Contact you with updates about floor plans, pricing, incentives, and the sales process.</li>
            <li>Verify your identity and eligibility for purchasing a condo.</li>
            <li>Improve our services and customize communications based on your preferences.</li>
            <p>
              We may also use your information to comply with legal obligations or to protect our rights and interests.
            </p>
          </ul>
        </section>

        {/* Section 3: How We Share Your Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Share Your Information</h2>
          <p>
            We do not sell or rent your personal information to third parties for marketing purposes. We may share your
            information with:
          </p>
          <ul className="list-disc list-inside    mt-2 space-y-1">
            <li>The developer of Simcoe Woods Condos to facilitate the sales event and condo purchase process.</li>
            <li>
              Service providers who assist with form processing, data storage, or analytics, under strict
              confidentiality agreements.
            </li>
            <li>Legal authorities, if required by law or to protect our legal rights.</li>
          </ul>
        </section>

        {/* Section 4: Data Security */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access,
            use, or alteration. However, no method of transmission over the Internet or electronic storage is completely
            secure, so we cannot guarantee absolute security.
          </p>
        </section>

        {/* Section 5: Your Rights */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Access the personal information we hold about you.</li>
            <li>Request corrections to inaccurate or incomplete information.</li>
            <li>Request deletion of your information, subject to legal or contractual obligations.</li>
            <li>Withdraw consent for the use of your information, where applicable.</li>
          </ul>
          <p className="   mt-2">
            To exercise these rights, please contact us at{" "}
            <a href="mailto:privacy@simcoewoods.com" className="text-teal-600 hover:underline">
              privacy@simcoewoods.com
            </a>
          </p>
        </section>

        {/* Section 6: Data Retention */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this
            Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </section>
        {/* Section 7: Changes to This Privacy Policy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the
            effective date will be updated. We encourage you to review this policy periodically.
          </p>
        </section>

        {/* Section 8: Contact Us */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mt-2">
            Email:{" "}
            <a href="/mailto:privacy@simcoewoods.com" className="text-teal-600 hover:underline">
              privacy@simcoewoods.com
            </a>
            <br />
            Address: Simcoe Woods Inc., 123 Main Street, Toronto, ON, M5V 2E3, Canada
          </p>
        </section>
      </div>

      <div className="mt-10 text-center  text-gray-600">
        <p>Effective Date: June 24, 2025</p>
      </div>
    </div>
  );
}
