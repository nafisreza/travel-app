import { fetchApi } from '@/app/redux/slice/apiSlice';
import { selectedCountry, setSelected } from '@/app/redux/slice/countrySlice';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export function SelectCountry() {
	const dispatch = useDispatch();
	const countries = useSelector((state: any) => state.api.data);
	const selected = useSelector(selectedCountry);

	useEffect(() => {
		fetchApi();
	}, []);

	useEffect(() => {
		if (countries && countries.length > 0) {
			dispatch(setSelected(countries[1]));
		}
	}, [countries]);

<<<<<<< HEAD
	const handleCountryChange = (country: any) => {
		dispatch(setSelected(country));
	};

	return (
		<div className='relative'>
			<span>{selected?.title}</span>
			<Listbox value={selected?.id} onChange={handleCountryChange}>
				<div className='relative'>
					<Listbox.Button className='relative w-full cursor-default rounded-lg border bg-white p-2 lg:py-3 md:py-4 md:px-4 md:text-base pr-10 text-left shadow-md+ focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300'>
						<span className='block truncate text-xs md:text-base text-gray-500'>
							{selected?.title}
						</span>
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
							<ChevronUpDownIcon
								className='h-5 w-5 text-gray-400'
								aria-hidden='true'
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none z-10'>
							{countries &&
								countries.map((country: any) => (
									<Listbox.Option
										key={country.id}
										value={country}
										className={({ active }) =>
											`relative text-xs md:text-base cursor-default text-start select-none py-2 px-2 ${
												active
													? 'bg-green-100 text-green-900'
													: 'text-gray-500'
											}`
										}>
										{({ selected }) => (
											<>
												<span
													className={`block truncate text-xs md:text-base ${
														selected
															? 'font-medium'
															: 'font-normal'
													}`}>
													{country.title}
												</span>
											</>
										)}
									</Listbox.Option>
								))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
=======
  useEffect(() => {
    if (countries && countries.length > 0) {
      setSelected(countries[0]);
    }
  }, [countries]);

  const handleCountryChange = (country) => {
    setSelected(country);
    dispatch(setSelectedCountry(country));
  };

  return (
    <div className="relative">
      <Listbox value={selected} onChange={handleCountryChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg border bg-white p-2 lg:py-3 md:py-4 md:px-4 md:text-base pr-10 text-left shadow-md+ focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
            <span className="block truncate text-xs md:text-base text-gray-500">
              {selected?.title}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
              {countries &&
                countries.map((country: any) => (
                  <Listbox.Option
                    key={country.id}
                    value={country}
                    className={({ active }) =>
                      `relative text-xs md:text-base cursor-default text-start select-none py-2 px-2 ${
                        active ? "bg-green-100 text-green-900" : "text-gray-500"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate text-xs md:text-base ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {country.title}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
>>>>>>> 3244408a8b6b7b9042e626f2760a638b67936b6a
}
