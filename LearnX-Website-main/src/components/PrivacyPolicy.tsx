import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-teachGrow-primary mb-6">Legal Terms & Policies</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: May 6, {currentYear}</p>

      <div className="prose prose-gray max-w-none">
        <Accordion type="single" collapsible className="w-full">

          {/* 1. Business Overview */}
          <AccordionItem value="business-overview">
            <AccordionTrigger className="text-xl font-semibold">Business Overview</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                Learn X is a digital platform operated by Cybexonics IT Consultants Pvt. Ltd. for teacher registration and
                online education services. We enable educators to build profiles, offer classes, and receive payments online.
              </p>
              <p>
                No physical goods are sold on this platform. All services are provided digitally through the Learn X website.
              </p>
              <p>
                Registered Business Name: <strong>LearnX Edutech Pvt. Ltd.</strong>
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* 2. Terms & Conditions */}
          <AccordionItem value="terms">
            <AccordionTrigger className="text-xl font-semibold">Terms & Conditions</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>By registering on Learn X, you agree to the following:</p>
              <ul className="list-disc pl-6">
                <li>Provide truthful and accurate registration details.</li>
                <li>Use the platform only for educational purposes.</li>
                <li>Respect copyright and intellectual property rules.</li>
                <li>Maintain confidentiality of your account.</li>
              </ul>
              <p>We reserve the right to update these terms without prior notice.</p>
            </AccordionContent>
          </AccordionItem>

          {/* 3. Shipping & Delivery Policy */}
          <AccordionItem value="shipping">
            <AccordionTrigger className="text-xl font-semibold">Shipping & Delivery Policy</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                Learn X is a 100% digital service platform. We do not sell or deliver any physical goods.
              </p>
              <p>Hence, no shipping or delivery policy is applicable.</p>
            </AccordionContent>
          </AccordionItem>

          {/* 4. Refund & Cancellation */}
          <AccordionItem value="refund">
            <AccordionTrigger className="text-xl font-semibold">Refund & Cancellation Policy</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                The annual registration fee of ₹999 is non-refundable once paid. Cancellations will not result in refunds.
              </p>
              <p>
                Please review platform benefits before registration.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* 5. Payment Terms */}
          <AccordionItem value="payment-terms">
            <AccordionTrigger className="text-xl font-semibold">Payment Terms</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>Registration Fee: ₹999 per year (non-refundable).</p>
              <p>Commission: 10% per transaction; 90% goes to the teacher.</p>
              <p>Payments are made every 15 days via bank/UPI.</p>
              <p>All applicable Indian taxes must be handled by the teacher.</p>
            </AccordionContent>
          </AccordionItem>

          {/* 6. Product/Service Details */}
          <AccordionItem value="services">
            <AccordionTrigger className="text-xl font-semibold">Product / Service Details</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                Learn X is a digital platform for teacher registration, profile creation, and student engagement.
              </p>
              <p>
                No physical products are sold or shipped. The services are fully digital.
              </p>
              <p>
                Registration is paid, and includes profile setup, promotion, and digital tools for classes.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* 7. Privacy Policy */}
          <AccordionItem value="privacy-policy">
            <AccordionTrigger className="text-xl font-semibold">Privacy Policy</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                This policy describes how Learn X collects and uses your personal data. We prioritize your privacy and
                ensure your information is used only to deliver our services.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* 8. Data Collection */}
          <AccordionItem value="data-collection">
            <AccordionTrigger className="text-xl font-semibold">Data Collection</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6">
                <li>Name, email, phone, qualifications</li>
                <li>Teaching preferences, uploaded content</li>
                <li>Bank/UPI details for payments</li>
                <li>IP address, device/browser info</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 9. Use of Information */}
          <AccordionItem value="use-of-information">
            <AccordionTrigger className="text-xl font-semibold">Use of Information</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6">
                <li>Profile creation and verification</li>
                <li>Secure payment processing</li>
                <li>Customer support and communication</li>
                <li>Legal compliance and analytics</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* 10. Cookies */}
          <AccordionItem value="cookies">
            <AccordionTrigger className="text-xl font-semibold">Cookies & Tracking</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                We use session and persistent cookies for login, analytics, and personalization. You can disable cookies in
                your browser settings.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* 11. Security */}
          <AccordionItem value="security">
            <AccordionTrigger className="text-xl font-semibold">Data Security</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                We use encryption and secure protocols to protect your data. However, 100% security cannot be guaranteed.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* 12. Data Retention */}
          <AccordionItem value="retention">
            <AccordionTrigger className="text-xl font-semibold">Data Retention</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>We retain your data as long as needed to provide services and for legal compliance.</p>
              <p>Deleted accounts may still leave behind anonymized or necessary information.</p>
            </AccordionContent>
          </AccordionItem>

          {/* 13. User Rights */}
          <AccordionItem value="rights">
            <AccordionTrigger className="text-xl font-semibold">Your Rights</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6">
                <li>Right to access, correct, and delete your information</li>
                <li>Right to object to or restrict certain processing</li>
                <li>Right to data portability</li>
              </ul>
              <p>Email us at <a href="mailto:applearnx@gmail.com">applearnx@gmail.com</a> to exercise these rights.</p>
            </AccordionContent>
          </AccordionItem>

          {/* 14. Changes to Policy */}
          <AccordionItem value="changes">
            <AccordionTrigger className="text-xl font-semibold">Policy Updates</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>
                This policy may be updated from time to time. The latest version will always be available on this page with
                the effective date mentioned.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* 15. Contact Us */}
          <AccordionItem value="contact">
            <AccordionTrigger className="text-xl font-semibold">Contact Us</AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-3">
              <p>If you have any questions, feel free to reach out:</p>
              <p className="font-medium">
                Learn X<br />
                Operated by Cybexonics IT Consultants Pvt. Ltd.<br />
                2nd Floor, ABC Complex,<br />
                Bannerghatta Road, JP Nagar,<br />
                Bangalore, Karnataka - 560076, India<br />
                Email: <a href="mailto:applearnx@gmail.com" className="underline text-blue-600">applearnx@gmail.com</a><br />
                Phone: +91 9604902393
              </p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        <div className="mt-10 p-4 bg-gray-50 rounded-md border border-gray-200">
          <p className="text-sm text-gray-600">
            By registering on Learn X, you agree to the terms and policies stated above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
