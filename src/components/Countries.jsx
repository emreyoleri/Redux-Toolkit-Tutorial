import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../redux/slices/countrySlice";

const Countries = () => {
  const loading = useSelector((state) => state.countries.loading);
  const countries = useSelector((state) => state.countries.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  if (loading) return <div className="App">Loading...</div>;

  return (
    <div className="App">
      {countries.map((item, i) => (
        <div className="country" key={i}>
          <img src={item.flags.png} alt="" height={13} /> {item.name.common}
        </div>
      ))}
      {console.log(countries)}
    </div>
  );
};

export default Countries;
