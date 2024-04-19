import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import getZipCode from "./zipcode";

function Geolocation() {
    const [location, setLocation] = useState(null);
    const [zipCode, setZipCode] = useState(null);
    // const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // let zip =  getZipCode(position.coords.latitude, position.coords.longitude)

            // console.log(zipCode)
            setZipCode(getZipCode(position.coords.latitude, position.coords.longitude).result
            )
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        },
            (error) => {
                console.log("Error occurred while getting location: ", error);
            },
            {
                timeout: 5000, // Timeout after 5 seconds
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }




    useEffect(() => {
        if (location) {
            getZipCode(location.latitude, location.longitude)
                .then(zipCode => {
                    setZipCode(zipCode)

                })
                .catch(error => {
                    console.log('Error getting zip code:', error);
                });
        }
    }, [zipCode]);
    return (
        <div className="flex justify-center mx-auto w-full text-2xl">
            {/* <button onClick={getLocation} className="mt-2 w-48 h-9 border-2 border-teal-700 bg-teal-600 rounded-xl text-center text-pink-50 font-['Jomolhari']">Get Location</button> */}
            {/* {location && <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>} */}
            {/* {zipCode && <p>Zip Code: {zipCode}</p>} */}

        </div>
    )
}



export default Geolocation