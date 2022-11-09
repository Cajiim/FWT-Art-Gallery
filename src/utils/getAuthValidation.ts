import { FormEvent, Dispatch, SetStateAction } from "react";

export const handlChangeEmail = (
  e: FormEvent<HTMLInputElement>,
  setEmail: Dispatch<SetStateAction<string>>,
  setEmailError: Dispatch<SetStateAction<string>>
) => {
  const target = e.target as HTMLInputElement;
  setEmail(target.value);
  const re =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  if (!re.test(String(target.value).toLowerCase())) {
    setEmailError("Incorrect email");
  } else {
    setEmailError("");
  }
};

export const handlChangePassword = (
  e: FormEvent<HTMLInputElement>,
  setPassword: Dispatch<SetStateAction<string>>,
  setPasswordError: Dispatch<SetStateAction<string>>
) => {
  const target = e.target as HTMLInputElement;
  setPassword(target.value);
  if (target.value.length < 7) {
    setPasswordError("Password must contain at least 7 characters");
  } else {
    setPasswordError("");
  }
};

export const handlClickBlur = (
  e: FormEvent<HTMLInputElement>,
  setEmailDirty: Dispatch<SetStateAction<boolean>>,
  setPasswordDirty: Dispatch<SetStateAction<boolean>>
) => {
  const target = e.target as HTMLInputElement;
  switch (target.name) {
    case "email":
      setEmailDirty(true);
      break;
    case "password":
      setPasswordDirty(true);
      break;
    default:
  }
};
