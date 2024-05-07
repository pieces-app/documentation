import {Widget} from "@typeform/embed-react";

type TypeformProps = {
  formId: string;
}

const Typeform = ({ formId }: TypeformProps) => {


  return (
    <Widget id={formId} height={500} hidden={{

    }} />
  );
}

export default Typeform;
