import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials);
    console.log(currentPotentials);
    return (
        <div className="stack">
            {currentPotentials.map((e, i) => {
                return (
                    <h2 
                    key={e.name.official} 
                    className="country-option"
                    onClick={() => {
                        dispatchEvent(setDisplayCountry(currentPotentials[i]));
                    }}
                    >
                    {e.name.cmmon}
                </h2>
            );
        })}
    </div>
    );
};

export default OptionDisplay;
