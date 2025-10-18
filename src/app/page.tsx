"use client"

import { getWeatherData } from "@/actions/action";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { WeatherData } from "@/interface/weather";
import { error } from "console";
import { Droplets, LucideX, Search, Thermometer, Wind } from "lucide-react"
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { easeInOut, motion } from "framer-motion"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      <Search className={`h-4 w-4 ${pending ? "animate-spin" : ""}`} />
    </Button>
  )
}

export default function Home() {

  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState<string>("")

  const handleSearch = async (formData: FormData) => {
    setError("")

    const city = formData.get("city") as string
    const { data, error: weatherError } = await getWeatherData(city)
    console.log(error)

    if (weatherError) {
      setError(weatherError)
      setWeather(null)
    }

    if (data) {
      setWeather(data)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-950 to-gray-900 p-4 flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <form action={handleSearch} className="flex gap-2">
          <Input
            name="city"
            type="text"
            placeholder="enter city name..."
            className="bg-white/90 "
            required
          />
          <SubmitButton />
        </form>

        {error && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center text-red-200 bg-red-500/20 rounded-md border-1 border-red-700 p-2 text-2xl">
            {error}
            <LucideX className="m-auto mt-1 size-24" />
          </motion.div>
        )}

        {weather && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1, ease: "easeInOut" }} >
            <Card className="bg-gray-700 backdrop-blur">
              <CardContent className="p-6">
                <div>
                  <h2 className="text-4xl bg-amber-50 text-center rounded-2xl p-2 m-auto">{weather.name}</h2>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                      width={80}
                      height={80}
                    />
                    <div><p className="text-white text-2xl bold">{Math.round(weather.main.temp)}°C</p></div>
                  </div>
                  <div><h3 className="text-gray-400 text-center capitalize">{weather.weather[0].description}</h3></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <Thermometer className="w-6 h-6 mx-auto text-orange-500" />
                    <div className="mt-2 text-sm text-gray-300">feels like</div>
                    <div className="font-semibold text-gray-200">{Math.round(weather.main.feels_like)}°C</div>
                  </div>
                  <div className="text-center">
                    <Droplets className="w-6 h-6 mx-auto text-blue-500" />
                    <div className="mt-2 text-sm text-gray-300">Humiditty</div>
                    <div className="font-semibold text-gray-200">{Math.round(weather.main.humidity)}%</div>
                  </div>
                  <div className="text-center">
                    <Wind className="w-6 h-6 mx-auto text-white" />
                    <div className="mt-2 text-sm text-gray-300">Wind</div>
                    <div className="font-semibold text-gray-200">{Math.round(weather.main.feels_like)} m/s</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
