import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/utils/provinces";
import { ScrollArea } from "../ui/scroll-area";

const ProvincesInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "province";

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Select
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        name={name}
        required
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className="h-60">
            {provinces.map((item) => {
              return (
                <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                  <span className="capitalize flex items-center gap-3">
                    {item.PROVINCE_NAME}
                  </span>
                </SelectItem>
              );
            })}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProvincesInput;
