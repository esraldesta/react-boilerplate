import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/services"
import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Register() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    api.post("/auth/register", {
      name,
      email,
      password
    })
      .then(() => {
        setName("");
        setEmail("");
        setPassword("");
        setErrors({});
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);

        // Extract the message for global errors
        const globalMessage = err.response?.data?.message;
      
        // Create an object to hold field-specific errors
        let tempErrors = {};
      
        // Check if the message contains errors for each expected field
        if (globalMessage) {
          // Split the message by commas to handle multiple errors
          const errorMessages = globalMessage.split(', ');
      
          errorMessages.forEach(error => {
            // Extract the field name and error message
            const match = error.match(/"([^"]+)" is (.*)/);
            if (match) {
              const fieldName = match[1]; // Extract field name
              const errorDetail = match[2]; // Extract the specific error message
              tempErrors[fieldName] = errorDetail; // Assign the error message to the field
            }
          });
        }
      
        console.log("tempErrors", tempErrors);
      
        // Set the errors in the state
        setErrors({ ...tempErrors, global: "" });
        setIsLoading(false);
      });
  };


  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            {errors.name && (
              <div className="text-red-600 text-xs">{errors.name}</div>
            )}
            <Input id="name" placeholder="Max" value={name} onChange={(e) => { setName(e.target.value) }} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            {errors.email && (
              <div className="text-red-600 text-xs">{errors.email}</div>
            )}
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email} onChange={(e) => { setEmail(e.target.value) }}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            {errors.password && (
              <div className="text-red-600 text-xs">{errors.password}</div>
            )}
            <Input id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <Button className="w-full" onClick={handleSubmit}>
            Create an account
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
