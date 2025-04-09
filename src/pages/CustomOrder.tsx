
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  productType: string;
  description: string;
  budget: string;
  attachments?: FileList;
}

const CustomOrder = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  
  const onSubmit = (data: FormValues) => {
    console.log({ ...data, deliveryDate: date });
    toast({
      title: "Custom order request submitted",
      description: "We'll review your request and get back to you soon.",
    });
    setSubmitted(true);
    reset();
    setDate(undefined);
  };

  return (
    <Layout>
      <div className="eco-container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="eco-heading mb-2">Custom Order Request</h1>
          <p className="text-muted-foreground mb-8">
            Looking for something special? Our artisans can create custom pieces just for you. 
            Fill out the form below to start the conversation.
          </p>
          
          {submitted ? (
            <div className="bg-eco-sand/50 rounded-lg p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="text-eco-green h-8 w-8" />
              </div>
              <h2 className="text-2xl font-semibold text-eco-green">Thank You!</h2>
              <p className="text-muted-foreground">
                Your custom order request has been submitted. One of our team members 
                will review your request and contact you within 1-2 business days.
              </p>
              <Button onClick={() => setSubmitted(false)} className="mt-4 bg-eco-green hover:bg-eco-green/90">
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    {...register("name", { required: "Name is required" })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    {...register("phone")}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="productType">Product Type <span className="text-destructive">*</span></Label>
                  <Input
                    id="productType"
                    placeholder="e.g., Basket, Textile, Jewelry"
                    {...register("productType", { required: "Product type is required" })}
                    className={errors.productType ? "border-destructive" : ""}
                  />
                  {errors.productType && (
                    <p className="text-destructive text-sm">{errors.productType.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range (USD)</Label>
                  <Input
                    id="budget"
                    placeholder="e.g., $50-100"
                    {...register("budget")}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Desired Delivery Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">
                  Description <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you're looking for in detail. Include size, color, material preferences, and any other important details."
                  className={cn("min-h-32", errors.description ? "border-destructive" : "")}
                  {...register("description", { 
                    required: "Description is required",
                    minLength: {
                      value: 20,
                      message: "Description should be at least 20 characters"
                    }
                  })}
                />
                {errors.description ? (
                  <p className="text-destructive text-sm">{errors.description.message}</p>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    Please provide as much detail as possible to help our artisans understand your request.
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="attachments">Attachments (Optional)</Label>
                <Input
                  id="attachments"
                  type="file"
                  multiple
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-eco-green/10 file:text-eco-green hover:file:bg-eco-green/20"
                  {...register("attachments")}
                />
                <p className="text-xs text-muted-foreground">
                  You can attach images, sketches, or inspiration photos (max 5 files, 5MB each)
                </p>
              </div>
              
              <Button 
                type="submit"
                className="w-full md:w-auto bg-eco-green hover:bg-eco-green/90"
              >
                Submit Request
              </Button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CustomOrder;
