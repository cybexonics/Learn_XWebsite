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

const CLOUDINARY_UPLOAD_PRESET = "ml_default"; // Replace with your Cloudinary preset
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
    data.append("upload_preset", "ml_default"); // Replace with your preset
    data.append("cloud_name", "djowkrpwk"); // Replace with your Cloud name

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/djowkrpwk/${resourceType}/upload`,
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

      // 👉 Send to backend
      // const response = await fetch("https://learnx-backend-ot3j.onrender.com/auth/teacher/", {
      const response = await fetch("https://learnx-backend-h6h0.onrender.com/api/auth/signup", {
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
            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
<div className="space-y-2">
              <Label htmlFor="password">
                password <span className="text-red-500">*</span>
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number (WhatsApp) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subjects">
                Subject(s) You Teach <span className="text-red-500">*</span>
              </Label>
              <Input
                id="subjects"
                name="subjects"
                placeholder="e.g., Mathematics, Physics, English"
                value={formData.subjects}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">
                Teaching Experience (Years){" "}
                <span className="text-red-500">*</span>
              </Label>
              <Select
                onValueChange={(value) =>
                  handleSelectChange("experience", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select years of experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">Less than 1 year</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">More than 10 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="profilePhoto">
                Upload Profile Photo <span className="text-red-500">*</span>
              </Label>
              <Input
                id="profilePhoto"
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
                required
              />
              <p className="text-xs text-gray-500">
                Upload a clear, professional photo (JPEG, PNG, max 5MB)
              </p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio">
                Short Bio <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="bio"
                name="bio"
                placeholder="Tell students about yourself, your qualifications, and teaching style (Max 500 characters)"
                value={formData.bio}
                onChange={handleInputChange}
                maxLength={500}
                rows={4}
                required
              />
              <p className="text-xs text-gray-500">
                {formData.bio.length}/500 characters
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demoVideo">Upload Demo Video (Optional)</Label>
              <Input
                id="demoVideo"
                type="file"
                accept="video/*"
                onChange={handleDemoVideoChange}
              />
              <p className="text-xs text-gray-500">
                A short video demonstrating your teaching style (MP4, max 50MB)
              </p>
            </div>

            <div className="space-y-2">
              <Label>Preferred Teaching Mode</Label>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="liveClasses"
                    checked={formData.preferredMode.includes("live")}
                    onCheckedChange={() => handleTeachingModeChange("live")}
                  />
                  <label htmlFor="liveClasses" className="text-sm">
                    Live Classes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="recordedVideos"
                    checked={formData.preferredMode.includes("recorded")}
                    onCheckedChange={() => handleTeachingModeChange("recorded")}
                  />
                  <label htmlFor="recordedVideos" className="text-sm">
                    Recorded Videos
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="languages">
                Preferred Language(s) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="languages"
                name="languages"
                placeholder="e.g., English, Hindi, Tamil"
                value={formData.languages}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="upiId">
                UPI ID / Bank Account for Payments{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="upiId"
                name="upiId"
                placeholder="Enter your UPI ID or bank details"
                value={formData.upiId}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("agreeTerms", !!checked)
                  }
                  required
                />
                <label htmlFor="agreeTerms" className="text-sm">
                  I agree to the{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-teachGrow-primary underline"
                  >
                    privacy policy and terms
                  </Link>{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
            </div>
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
