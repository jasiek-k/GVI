import React, { useRef } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const GenerativeModal = () => {
  const componentRef = useRef();

  return (
    <>
      <div ref={componentRef}>MODAL</div>
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </>
  );
};

export default GenerativeModal;
