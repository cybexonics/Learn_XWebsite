
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does Learn X simplify my online teaching workflow?",
      answer: "Learn X eliminates the chaos of copy-pasted meeting links and WhatsApp groups with a professional, one-click class setup system. Students access your classes through a secure portal after payment, ensuring only paying students can join your lessons.",
    },
    {
      question: "How does the payment system work?",
      answer: "We handle all payment collection for you. Students must pay before accessing your classes, and you receive 90% of all fees directly to your bank account. No more awkward payment reminders or manual tracking—we handle it all.",
    },
    {
      question: "How secure are the classes on Learn X?",
      answer: "All classes are encrypted and protected from unauthorized sharing. Unlike mainstream meeting platforms, our system prevents link sharing and ensures only registered, paying students can access your content, maintaining the exclusivity of your teaching.",
    },
    {
      question: "How does Learn X help me get more students?",
      answer: "When you register for ₹999/year, your profile becomes part of our marketplace where potential students can discover you. We actively promote teachers through our marketing efforts, social media, and search engine optimization—bringing students to you without additional marketing costs.",
    },
    {
      question: "How can I build my personal brand with Learn X?",
      answer: "Our platform allows you to create a comprehensive professional profile, showcase your expertise through course portfolios, collect and display student testimonials, and build a loyal following. As your student base grows, so does your reputation as an authority in your field.",
    },
    {
      question: "Is the ₹999 registration fee refundable?",
      answer: "The annual registration fee of ₹999 is non-refundable, but it provides you access to all platform features for a full year, including student acquisition support, secure class hosting, payment processing, and personal brand building tools.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teachGrow-dark mb-4">Common Questions About Learn X</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about transforming your teaching career with our platform.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
