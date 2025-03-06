import { Country } from "../../types/order/orderEnums";
import { CountryCodeAbbreviation } from "../../utils/formatters/orderFormatter";

interface Props {
  country: Country;
  size: number;
}

export default function Flag({ country, size }: Props) {
  const url = `https://flagcdn.com/${CountryCodeAbbreviation[country]}.svg`;

  return (
    <img
      src={url}
      alt={`${CountryCodeAbbreviation[country]}`}
      style={{ height: size, borderRadius: "0.6rem" }}
    />
  );
}
