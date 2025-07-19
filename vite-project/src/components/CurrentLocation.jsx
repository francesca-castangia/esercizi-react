import { useCurrentLocation } from "../useCurrentLocation";

export function CurrentLocation(){
     const { location, error: locationError, loading: locationLoading, getLocation } = useCurrentLocation();

     return(
        <section>
       
        <button onClick={getLocation}>Get Current Location</button>
        {locationLoading && <p>Getting location...</p>}
        {locationError && <p>Error: {locationError}</p>}
        {location && (
          <p>
            Latitude: {location.latitude} <br />
            Longitude: {location.longitude}
          </p>
        )}
      </section>
     )
}