import { Country } from "../../types/order/orderEnums";
import { CountryCodeName } from "../../utils/formatters/orderFormatter";

interface Props {
  country: Country;
  size: number;
}

export default function Flag({ country, size }: Props) {
  const url = `https://flagcdn.com/${CountryCodeName[country]}.svg`;

  return (
    <img
      src={url}
      alt={`${CountryCodeName[country]}`}
      style={{ height: size, borderRadius: "0.6rem" }}
    />
  );
}
