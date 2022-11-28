import { ChangeEvent, Dispatch, SetStateAction, DragEvent } from "react";

export const handlChange = (
  e: ChangeEvent<HTMLInputElement>,
  setFileData: Dispatch<SetStateAction<string | ArrayBuffer>>,
  setSizeFile: Dispatch<SetStateAction<number>>
) => {
  const reader = new FileReader();
  const inputFile = e.target.files && e.target.files[0];
  if (inputFile) {
    reader.onloadend = () => {
      setFileData(reader.result as string);
    };
    reader.readAsDataURL(inputFile);
    setSizeFile(inputFile.size / 1024 / 1024);
  }
};

export const dragStartHandler = (
  e: DragEvent<HTMLDivElement>,
  setIsDrag: Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();
  setIsDrag(true);
};

export const dragLeaveHandler = (
  e: DragEvent<HTMLDivElement>,
  setIsDrag: Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();
  setIsDrag(false);
};

export const onDropHandler = (
  e: DragEvent<HTMLDivElement>,
  setFileData: Dispatch<SetStateAction<string | ArrayBuffer>>,
  setSizeFile: Dispatch<SetStateAction<number>>,
  setIsDrag: Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  const reader = new FileReader();
  if (file) {
    setFileData(URL.createObjectURL(e.dataTransfer.files[0]));
    reader.onloadend = () => {
      setFileData(reader.result as string);
    };
    reader.readAsDataURL(file);
    setSizeFile(file.size / 1024 / 1024);
  }
  setIsDrag(false);
};
