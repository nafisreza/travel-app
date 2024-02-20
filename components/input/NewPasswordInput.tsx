import React, { FC, useState } from "react";
import Input from "./InputBox";
import Button from "../buttons/Button";

interface NewPasswordInputProps {
  onSetNewPassword: (password: string) => void;
}

const NewPasswordInput: FC<NewPasswordInputProps> = ({ onSetNewPassword }): JSX.Element => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSavePassword = () => {
    // password validation logic if needed
    if (newPassword === confirmPassword) {
      onSetNewPassword(newPassword);
    } else {
      // Handle password mismatch error logic
      console.error("Passwords do not match");
    }
  };

  return (
    <>
    <p className="text-md font-bold mb-5">Enter the new password.</p>
    <div className="flex gap-5">
      <Input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
          <Button onClick={handleSavePassword} classes="py-3 px-8">Save</Button>
    </>
  );
};

export default NewPasswordInput;
