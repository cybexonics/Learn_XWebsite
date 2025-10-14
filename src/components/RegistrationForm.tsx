import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const CLOUDINARY_UPLOAD_PRESET = "ml_default";
const CLOUDINARY_CLOUD_NAME = "djowkrpwk";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    subjects: "",
    experience: "",
    bio: "",
    preferredMode: [],
    languages: "",
    upiId: "",
    agreeTerms: false,
  });

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [demoVideo, setDemoVideo] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  // ✅ Log current backend URL to confirm correct environment variable usage
  console.log("API base URL:", import.meta.env.VITE_API_BASE);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleTeachingModeChange = (mode: string) => {
    setFormData((prev) => {
      const currentModes = [...(prev.preferredMode as string[])];
      if (currentModes.includes(mode)) {
        return {
          ...prev,
          preferredMode: currentModes.filter((m) => m !== mode),
        };
      } else {
        return { ...prev, preferredMode: [...currentModes, mode] };
      }
    });
  };

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  const handleDemoVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDemoVideo(e.target.files[0]);
    }
  };

  const uploadToCloudinary = async (
    file: File,
    resourceType: "image" | "video"
  ) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", CLOUDINARY_CLOUD_NAME);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();
    console.log(result);
    return result.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.agreeTerms
    ) {
      toast({
        title: "Missing required fields",
        description:
          "Please fill in all required fields and agree to the terms and conditions.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      let profilePhotoUrl = "";
      let demoVideoUrl = "";

      if (profilePhoto) {
        profilePhotoUrl = await uploadToCloudinary(profilePhoto, "image");
      }

      if (demoVideo) {
        demoVideoUrl = await uploadToCloudinary(demoVideo, "video");
      }

      const completeData = {
        ...formData,
        profilePhoto: profilePhotoUrl,
        demoVideo: demoVideoUrl || null,
      };

      // ✅ Use environment variable (now correctly set to h6h0 backend)
      const apiBase = import.meta.env.VITE_API_BASE || "https://learnx-backend-h6h0.onrender.com";
      console.log("Using API base:", apiBase);

      const response = await fetch(`${apiBase}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      toast({
        title: "Registration successful!",
        description: "Redirecting to payment...",
      });

      setTimeout(() => {
        navigate("/payment");
      }, 1500);
    } catch (error) {
      console.error("Upload or Registration Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Teacher Registration</CardTitle>
        <CardDescription>
          Fill out the form below to register as a teacher on Learn X
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* --- FORM FIELDS REMAIN UNCHANGED --- */}
          </div>

          <CardFooter className="flex justify-end pt-6 px-0">
            <Button
              type="submit"
              className="bg-teachGrow-primary hover:bg-teachGrow-primary/90"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
