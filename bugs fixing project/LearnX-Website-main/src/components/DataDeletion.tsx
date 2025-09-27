import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DataDeletion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmDelete, setConfirmDelete] = useState("");

  const handleEmailClick = () => {
    if (confirmDelete.toLowerCase() !== "yes") {
      alert("Please confirm by typing 'yes' to proceed with account deletion.");
      return;
    }

    const subject = "Data%20Deletion%20Request";
    const body = `Full Name: [Your Full Name]%0D%0AEmail: ${email}%0D%0APassword: ${password}%0D%0AI confirm I want to delete my Learn X account.`;
    window.location.href = `mailto:applearnx@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-teachGrow-primary mb-6">Delete Your Learn X Account</h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">How to Request Account Deletion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              If you wish to delete your Learn X account and associated data, please fill out the form below and confirm your request:
            </p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Registered Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmDelete">Do you want to delete your account? Type 'yes' to confirm</Label>
                <Input
                  id="confirmDelete"
                  type="text"
                  value={confirmDelete}
                  onChange={(e) => setConfirmDelete(e.target.value)}
                  placeholder="Type 'yes' to confirm"
                  required
                />
              </div>
            </div>

            <Button
              onClick={handleEmailClick}
              className="mt-4 bg-teachGrow-primary hover:bg-teachGrow-primary/90"
              disabled={!email || !password || !confirmDelete}
            >
              <Mail className="mr-2 h-4 w-4" /> Submit Deletion Request
            </Button>

            <p className="text-sm text-gray-500 mt-2">
              Our team will process your request within 7 working days. We will send a confirmation email once your data has been deleted.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Data Deletion Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Data that will be deleted:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Account information (name, email, password, login credentials)</li>
                  <li>Educational qualifications and teaching experience</li>
                  <li>Profile data and photos</li>
                  <li>Teaching content and materials you&apos;ve uploaded</li>
                  <li>Communication history with students and our platform</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Data we retain:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Payment transactions (retained for up to 5 years as required by tax and accounting regulations)</li>
                  <li>Aggregated analytics data that does not identify you personally</li>
                  <li>Information necessary to prevent fraud or future abuse</li>
                  <li>Information required to be retained for legitimate business or legal purposes</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  We are required to retain certain information for legal and regulatory compliance purposes, even after you request deletion.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Still have questions about data deletion?</p>
          <Link to="/privacy-policy">
            <Button variant="outline">View Our Privacy Policy</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
