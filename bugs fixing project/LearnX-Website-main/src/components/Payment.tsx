import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RazorpayEmbedButton from "@/components/PaymentButton";
import { useToast } from "@/components/ui/use-toast";


const Payment = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePayment = async () => {
    setLoading(true);

    const res = await loadRazorpayScript();
    if (!res) {
      toast({
        title: "Failed to load payment gateway",
        description: "Please check your internet connection.",
      });
      setLoading(false);
      return;
    }

    try {
      const options = {
  key: "rzp_geQDVGSnt95quu",
  amount: 99900,
  currency: "INR",
  name: "LearnX",
  description: "Annual Membership Fee",
  handler: function (response: any) {
    toast({
      title: "Payment successful!",
      description:
        "Your registration is complete. Welcome to LearnX!",
    });
    navigate("/payment-success");
  }
}; // ✅ This closing brace was missing

const rzp = new (window as any).Razorpay(options);
rzp.open();


      rzp.on("payment.failed", function (response: any) {
        toast({
          title: "Payment failed",
          description: response.error.description || "Something went wrong.",
        });
        setLoading(false);
      });

      rzp.on("dismiss", function () {
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Unable to process payment at this time.",
      });
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Complete Your Registration</CardTitle>
        <CardDescription>
          One-time payment of ₹999 for annual membership
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Payment Summary</h3>
            <div className="bg-teachGrow-muted p-4 rounded-md">
              <div className="flex justify-between mb-2">
                <span>Annual Membership Fee</span>
                <span>₹999.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>GST (18%)</span>
                <span>Included</span>
              </div>
              <div className="border-t pt-2 mt-2 font-medium flex justify-between">
                <span>Total</span>
                <span>₹999.00</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-sm text-gray-500 mb-4">
              By proceeding with payment, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        {/*<Button
          onClick={handlePayment}
          className="bg-teachGrow-primary hover:bg-teachGrow-primary/90 w-full"
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay ₹999 with Razorpay"}
        </Button>*/}
        <RazorpayEmbedButton/>
      </CardFooter>
    </Card>
  );
};
export default Payment;
