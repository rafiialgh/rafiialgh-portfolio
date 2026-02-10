"use client";
import { useState, useEffect } from "react";

export const TimeDisplay = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // 1. Ambil Jam & Menit
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");

      // 2. Ambil Timezone Offset (Menit)
      // getTimezoneOffset mengembalikan negatif untuk zona timur (Asia), jadi kita balik tandanya.
      const offset = -now.getTimezoneOffset(); 
      const sign = offset >= 0 ? "+" : "-";
      const offsetHours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
      const offsetMinutes = String(Math.abs(offset) % 60).padStart(2, "0");

      setTime(`${hours}:${minutes} (UTC ${sign}${offsetHours}:${offsetMinutes})`);
    };

    updateTime(); // Jalankan langsung
    const interval = setInterval(updateTime, 1000); // Update tiap detik

    return () => clearInterval(interval);
  }, []);

  // Render kosong dulu saat server-side biar gak error hydration
  if (!time) return null; 

  return (
    <div className="mt-4 ">
      <p className="text-xs font-medium text-gray-500 font-mono bg-white/50 px-3 py-1 rounded-full inline-block backdrop-blur-sm border border-gray-200">
        {time}
      </p>
    </div>
  );
};