import { Country } from "../../types/order/orderEnums";
import { CountryCodeName } from "../../utils/formatters/orderFormatter";

interface Props {
  country: Country;
  size: number;
  realSize?: number;
}

export default function Flag({ country, size, realSize }: Props) {
  const url = `https://flagcdn.com/h${size}/${CountryCodeName[country]}.png`;

  return (
    <img
      src={url}
      alt={`Flag of ${CountryCodeName[country]}`}
      style={{ height: realSize, borderRadius: "0.6rem" }}
    />
  );
}
