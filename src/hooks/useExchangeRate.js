import { z } from "zod";
import { useQuery } from "@tanstack/react-query";

const ExchangeRateSchema = z
  .object({
    meta: z
      .object({
        last_updated_at: z.string(),
      })
      .optional(),
    data: z.record(z.string(), z.number()),
  })
  .transform((data) => data.data);

export default function useExchangeRate(currency) {
  const exchangeRateQuery = {
    queryKey: ["exchangeRate", currency],
    queryFn: async () => {
      if (currency === "QUEC") {
        return 1;
      }
      const response = await fetch(
        `https://api.freecurrencyapi.com/v1/latest?&currencies=${currency}`,
        {
          headers: {
            apikey: "wyYOvYBYFnvzXN5vqfzlvpBOuWsTQbmCezQvqwir",
          },
        }
      );
      const data = await response.json();
      return ExchangeRateSchema.parse(data)[currency];
    },
    staleTime: 1000 * 60 * 5,
  };
  const { data, isLoading, error } = useQuery(exchangeRateQuery);
  return { data, isLoading, error };
}
