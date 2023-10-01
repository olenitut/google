"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [location, setLocation] = useState<GeolocationPosition>();
  const [country, setCountry] = useState("");

  const getCountry = async (lat: number, lng: number) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    const data = await res.json();
    setCountry(data.address.country);
    console.log(data.address.country);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setLocation);
  }, []);

  useEffect(() => {
    if (!location) return;

    getCountry(location.coords.latitude, location.coords.longitude);
  }, [location]);

  return (
    <footer>
      {country && (
        <div className="px-5 py-4 bg-gray-100 w-full text-sm text-gray-700 border-b">
          <Link
            className="hover:underline cursor-pointer"
            href={`/search/web?query=${country}`}
          >
            {country}
          </Link>
        </div>
      )}
      <div className="px-5 py-4 bg-gray-100 w-full text-sm text-gray-700 border-b flex justify-between">
        <div className="flex gap-6">
          <Link
            className="hover:underline cursor-pointer"
            href="https://about.google"
          >
            About
          </Link>
          <Link
            className="hover:underline cursor-pointer"
            href="https://ads.google.com/intl/en_ua/home/"
          >
            Advertising
          </Link>
          <Link
            className="hover:underline cursor-pointer"
            href="https://www.google.com/services"
          >
            Business
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            className="hover:underline cursor-pointer"
            href="https://policies.google.com/privacy"
          >
            Privacy
          </Link>
          <Link
            className="hover:underline cursor-pointer"
            href="https://policies.google.com/terms"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
