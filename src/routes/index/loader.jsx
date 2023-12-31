import { z } from 'zod';

const currencySchema = z.object({
  symbol: z.string().min(1).max(3),
  name: z.string().min(1).max(50),
  symbol_native: z.string().min(1).max(4),
  decimal_digits: z.number().min(0).max(10),
  rounding: z.number().min(0).max(10),
  code: z.string().min(1).max(4),
  name_plural: z.string().min(1).max(50),
});

const currenciesSchema = z
  .object({
    data: z.record(currencySchema),
  })
  .transform((val) =>{

   const res= Object.keys(val.data).map((key) => val.data[key]);
   res.unshift({
    symbol:'QUEC',
    name:'Quecoin',
    symbol_native:'QUE',
    decimal_digits:2,
    rounding:2,
    code:'QUEC',
    name_plural:"Quecoins"
   });
   return res;

  
  })

// define your query
export const currencyQuery = {
  queryKey: ['currency'],
  queryFn: async () => {
    const response = await fetch(
      'https://api.freecurrencyapi.com/v1/currencies?apikey=wyYOvYBYFnvzXN5vqfzlvpBOuWsTQbmCezQvqwir'
    );
    const data = await response.json();
    const currencies = currenciesSchema.parse(data);
    return currencies;
  },
  staleTime: 1000 * 60 * 60 * 24, // 24 hours
};

const loader = (queryClient) => () => {
  const query = currencyQuery;
  // return data or fetch it
  return queryClient.ensureQueryData(query);
};

export default loader;
