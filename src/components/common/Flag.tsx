import { Country } from "../../types/order/orderEnums";
import { CountryCodeAbbreviation } from "../../utils/formatters/orderFormatter";

interface Props {
  country: Country;
  size: number;
  radius?: string;
}

export default function Flag({ country, size, radius = "0.6rem" }: Props) {
  const url = `https://flagcdn.com/${CountryCodeAbbreviation[country]}.svg`;

  return (
    <img
      src={url}
      alt={`${CountryCodeAbbreviation[country]}`}
      style={{ height: size, borderRadius: radius }}
    />
  );
}
