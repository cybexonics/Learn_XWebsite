import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "79a0e1f8-5b01-476c-9fef-5d4aa32f43f7",
        name: name,
        email:email,
        phone: phone,
        subject: subject,
        message: message
      }),
    })

    const result = await response.json()

    if (result.success) {
      setSuccess(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }) // Reset form
    } else {
      setError("Something went wrong. Please try again.")
    }

    setLoading(false)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl">
        {/* Contact Form Box */}
        <Card className="w-full mx-auto transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl font-bold text-teachGrow-primary">Contact Us</CardTitle>
            <CardDescription className="text-gray-600">Send us a message, and we&apos;ll get back to you soon!</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-teachGrow-primary"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-teachGrow-primary"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  className="transition-all duration-200 focus:ring-2 focus:ring-teachGrow-primary"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject of your message"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-teachGrow-primary"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help you"
                  rows={6}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-teachGrow-primary"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              onClick={handleSubmit}
              className="bg-teachGrow-primary hover:bg-teachGrow-primary/90 w-full transition-all duration-200 transform hover:scale-105"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </CardFooter>
        </Card>

        {/* Contact Details Box */}
        <Card className="w-full mx-auto transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl font-bold text-teachGrow-primary">Our Contact Details</CardTitle>
            <CardDescription className="text-gray-600">Reach out to us directly!</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-start space-x-3 group">
              <Mail className="h-5 w-5 text-teachGrow-primary mt-1 transition-transform duration-200 group-hover:scale-110" />
              <div>
                <h4 className="font-medium text-gray-700">Email</h4>
                <p className="text-sm text-gray-600">applearnx@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <Phone className="h-5 w-5 text-teachGrow-primary mt-1 transition-transform duration-200 group-hover:scale-110" />
              <div>
                <h4 className="font-medium text-gray-700">Phone</h4>
                <p className="text-sm text-gray-600">+91 96049 02393</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <MapPin className="h-5 w-5 text-teachGrow-primary mt-1 transition-transform duration-200 group-hover:scale-110" />
              <div>
                <h4 className="font-medium text-gray-700">Address</h4>
                <p className="text-sm text-gray-600">
                  Office no. 4, 1st Floor, The Vidya Tower,<br />
                  Pencil Chowk, Baramati,<br />
                  Dist: Pune, Maharashtra, India 413102
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
