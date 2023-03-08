import { useQuery } from '@tanstack/react-query';
// import { useLoaderData } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import Select, { components, OptionProps } from 'react-select';
// import loader, {  currencyQuery } from '../../routes/index/loader';
import loader,{currencyQuery} from './loader';

import { useCurrency } from '../context/currencyContext';


// custom option component to display flag

function Option(props) {
  const { data } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <components.Option {...props}>
      <img
        src={`https://wise.com/public-resources/assets/flags/rectangle/${data.value.toLowerCase()}.png`}
        alt={data.label}
        className="aspect-square w-[25px] rounded-full object-cover"
      />

      <span className="w-full self-start text-left">{data.label}</span>
    </components.Option>
  );
}

function CurrencySelect() {
  const { currency, setCurrency } = useCurrency();
  // fetch initial data from loader
  const initialData = useLoaderData() 
  // fetch data from query
  const { data, error, isLoading } = useQuery({ ...currencyQuery, initialData });
  const options = data.map((curr) => ({
    label: curr.code,
    value: curr.code,
  }));

  const handleChange = (selectedCurrency) => {
    if (selectedCurrency) {
      setCurrency(selectedCurrency.value);
    }
  };
  return (
    <Select
      name="currency"
      options={options}
      isMulti={false}
      defaultValue={options.find((option) => option.value === currency) || options[0]}
      components={{ Option }}
      onChange={handleChange}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderRadius: 24,
          backgroundColor: '#fafafa',
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          paddingInline: 6,
          paddingBlock: 4,
          minWidth: '80px',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          color: '#000000',
          zIndex: 50,
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          position: 'relative',
          paddingLeft: '30px',
          height: '25px',
          '&:before': {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            height: '25px',
            width: '25px',
            borderRadius: '20px',
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            background: `url("https://wise.com/public-resources/assets/flags/rectangle/${currency.toLowerCase()}.png") center/cover no-repeat`,
          },
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          width: '100%',
          display: 'flex',
          gap: '5px',
          justifyContent: 'start',
        }),
      }}
    />
  );
}

export default CurrencySelect;
