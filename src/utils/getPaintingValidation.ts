import { FormEvent, Dispatch, SetStateAction } from "react";

export const handlChangeName = (
  e: FormEvent<HTMLInputElement>,
  setName: Dispatch<SetStateAction<string>>,
  setNameError: Dispatch<SetStateAction<string>>
) => {
  const target = e.target as HTMLInputElement;
  setName(target.value);
  const re = /[a-z]/i;
  if (!re.test(String(target.value).toLowerCase())) {
    setNameError("Incorrect name");
  } else {
    setNameError("");
  }
};

export const handlChangeYear = (
  e: FormEvent<HTMLInputElement>,
  setYear: Dispatch<SetStateAction<string>>,
  setYearError: Dispatch<SetStateAction<string>>
) => {
  const target = e.target as HTMLInputElement;
  setYear(target.value);
  if (target.value.length != 4) {
    setYearError("Year has 4 digits");
  } else {
    setYearError("");
  }
};

export const handlClickBlur = (
  e: FormEvent<HTMLInputElement>,
  setNameDirty: Dispatch<SetStateAction<boolean>>,
  setYearDirty: Dispatch<SetStateAction<boolean>>
) => {
  const target = e.target as HTMLInputElement;
  switch (target.name) {
    case "name":
      setNameDirty(true);
      break;
    case "year":
      setYearDirty(true);
      break;
    default:
  }
};
