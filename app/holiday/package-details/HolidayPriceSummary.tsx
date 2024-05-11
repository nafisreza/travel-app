'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const Counter = ({
  onCountChange,
}: {
  onCountChange: (newCount: number) => void;
}) => {
  const [count, setCount] = useState<number>(1);

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className='md:p-2 inline-block bg-white md:border border-gray-200 md:rounded-lg'>
      <div className='flex items-center gap-x-1.5'>
        <button
          type='button'
          onClick={() => {
            handleCountChange(Math.max(count - 1, 1));
          }}
          className='w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
          <svg
            className='flex-shrink-0 w-4 h-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M5 12h14' />
          </svg>
        </button>

        <input
          className='p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0'
          type='text'
          value={count}
          onChange={(e) => {
            const newCount = parseInt(e.target.value);
            handleCountChange(isNaN(newCount) ? 1 : newCount);
          }}
        />
        <button
          type='button'
          onClick={() => {
            handleCountChange(count + 1);
          }}
          className='w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
          <svg
            className='flex-shrink-0 w-4 h-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M5 12h14' />
            <path d='M12 5v14' />
          </svg>
        </button>
      </div>
    </div>
  );
};

const extractNumericValue = (value) => {
  return parseFloat(value.replace(/[^0-9.-]+/g, ''));
};

const extractSymbol = (value) => {
  const match = value.match(/[^0-9.-]+/);
  return match ? match[0] : '';
};

const getSelectedPriceIndex = (productId, option) => {
  if (option && option.prices) {
    const selectedPrice = option.prices.find((price) => price.selected === true);
    if (selectedPrice) {
      return option.prices.indexOf(selectedPrice);
    }
  }
  return -1;
};

const getSelectedItineraryIndex = (productId, options) => {
  if (options) {
    const selectedOption = options.find((option) => option.id === productId);
    if (selectedOption) {
      return options.indexOf(selectedOption);
    }
  }
  return -1;
};

const calculatedPrice = (planner, products) => {
	let tp = 0;
	let currencySymbol = '';
  
	if (products && products.length > 0) {
	  const firstProduct = products[0];
	  if (firstProduct.options && firstProduct.options.length > 0) {
		const firstOption = firstProduct.options[0];
		if (firstOption.prices && firstOption.prices.length > 0) {
		  const firstPrice = firstOption.prices[0];
		  currencySymbol = extractSymbol(firstPrice.payable.current);
		}
	  }
	}
  
	products.forEach((product) => {
	  if (product.options && product.options.length > 0) {
		const option = product.options[0];
		if (option.prices && option.prices.length > 0) {
		  const price = option.prices[0].payable.current;
		  tp += extractNumericValue(price);
		}
	  }
	});
  
	return `${currencySymbol} ${tp.toFixed(2)}`;
  };
  

const HolidayPriceSummary = ({ packageId, planner }) => {
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://holiday.guideasy.com/api/v1/client-management/packages/${packageId}/products`,
          {
            headers: {
              Authorization: 'Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2',
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Accept-Language': 'en',
            },
          }
        );

        if (response.data && response.data.payload && response.data.payload.products) {
          const products = response.data.payload.products;
          setTotalPrice(calculatedPrice(planner, products));
        } else {
          console.error('Failed to fetch package data');
          setTotalPrice('Price Unavailable');
        }
      } catch (error) {
        console.error('Error fetching package data:', error);
        setTotalPrice('Price Unavailable');
      }
    };

    fetchProducts();
  }, [packageId, planner]);

  return (
    <div className='bg-white rounded-xl shadow max-wd-md flex flex-col justify-center items-center p-4'>
      <div className='flex w-full justify-between items-center p-2'>
        <p className='font-semibold'>Total Price</p>
        <p>{totalPrice}</p>
      </div>
      <Link
        href='/holiday/checkout'
        className='items-center px-8 py-3 bg-green-500 font-medium gap-2 hover:bg-green-600 inline-flex rounded-lg text-center text-white'
        type='submit'>
        Book now
      </Link>
    </div>
  );
};

export default HolidayPriceSummary;
