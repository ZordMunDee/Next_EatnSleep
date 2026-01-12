import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

const TextAreaInput = ({
  name,
  LabelText,
  defaultValue,
}: {
  name: string;
  LabelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {LabelText || name}
      </Label>
      <Textarea 
      id = {name}
      name = {name}
      defaultValue = {defaultValue}
      rows={5}
      required
      />
    </div>
  );
};

export default TextAreaInput;
