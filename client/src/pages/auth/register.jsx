import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommonForm from "@/components/common/form";

const initialState = {
    userName: "",
    email: "",
    password: "",
  };
function AuthRegister() {
 
  const [formData, setFormData] = useState(initialState);
  function onSubmit() {}

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p  className="mt-2">Alerady have an account</p>
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/login"
        >
          {" "}
          Login
        </Link>
      </div>

      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
