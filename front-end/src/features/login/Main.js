"use client";
import { DisplayContainer } from "@/app/page";
import { Row } from "@/lib/CommonStyles";
import Button from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Label } from "@/ui/Lable";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import styled from "styled-components";
import { SignInApi } from "./services";


const SignIn = () => {
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("check form data", formData);
    const response = await SignInApi({
      email: formData.email,
      password: formData.password,
    });

    console.log("CHEK RESPONSE OVER HRE", response);
  };

  return (
    <CenterContainer>
      <div>
        <Label>Email</Label>
        <Input
          placeholder="Enter your email"
          p="2rem"
          height="2rem"
          width={"100%"}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label>Password</Label>
        <PasswordInputContainer>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            p="2rem"
            height="2rem"
            width={"100%"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <ToggleButton onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
            {/* Toggle eye icon based on password visibility */}
          </ToggleButton>
        </PasswordInputContainer>
      </div>

      <ButtonContainer>
        <Button onClick={handleSubmit}>Submit</Button>
      </ButtonContainer>
    </CenterContainer>
  );
};

export default SignIn;

const NameInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const CenterContainer = styled.div`
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 40px;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const ImageUploadInput = styled.input`
  height: ${(height) => (height ? height : "")};
  padding: 1rem;
  width: 100%;
  border-radius: 9999px;
  border: 1px solid var(--color-grey-300);
  outline: none;
  display: block;
  color: var(--color-grey-500);
  &:focus {
    outline: 0.5rem solid var(--color-yellow-500);
  }
`;

const PasswordInputContainer = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
