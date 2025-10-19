# HoWeather 🌤️

A modern, responsive weather application built with Next.js 15 that provides real-time weather information for cities worldwide.

## ✨ Features

- **Real-time Weather Data**: Fetch current weather conditions from OpenWeatherMap API [4](#0-3) 
- **City Search**: Search for weather by city name with instant results [5](#0-4) 
- **Comprehensive Metrics**: View temperature, feels-like temperature, humidity, and wind speed [6](#0-5) 
- **Smooth Animations**: Elegant UI transitions powered by Framer Motion [7](#0-6) 
- **Error Handling**: User-friendly error messages with validation [8](#0-7) 
- **Dark Theme**: Optimized dark interface with gradient backgrounds [9](#0-8) 
- **Type-Safe**: Full TypeScript implementation with runtime validation using Zod [10](#0-9) 

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.6 with App Router [11](#0-10) 
- **Language**: TypeScript 5.x [12](#0-11) 
- **UI Library**: React 19.1.0 [13](#0-12) 
- **Styling**: Tailwind CSS 4.x [14](#0-13) 
- **Components**: shadcn/ui with Radix UI primitives [15](#0-14) 
- **Animations**: Framer Motion [16](#0-15) 
- **Icons**: Lucide React [17](#0-16) 
- **Validation**: Zod [18](#0-17) 
- **API**: OpenWeatherMap [4](#0-3) 

## 📋 Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun
- OpenWeatherMap API key (get one at [openweathermap.org](https://openweathermap.org/api))

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pedrohmac07/HoWeather.git
   cd HoWeather
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory: [4](#0-3) 
   ```env
   OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Run the development server** [19](#0-18) 
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
HoWeather/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main weather search page
│   │   ├── layout.tsx        # Root layout with fonts
│   │   └── globals.css       # Global styles and theme
│   ├── actions/
│   │   └── action.ts         # Server action for weather API
│   ├── interface/
│   │   └── weather.ts        # TypeScript interfaces
│   ├── components/
│   │   └── ui/               # Reusable UI components
│   └── lib/
│       └── utils.ts          # Utility functions
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
``` [20](#0-19) [21](#0-20) [22](#0-21) 

## 🎯 Usage

1. Enter a city name in the search input
2. Click the search button or press Enter
3. View real-time weather information including:
   - Current temperature
   - Weather conditions with icon
   - Feels-like temperature
   - Humidity percentage
   - Wind speed [23](#0-22) 

## 🏗️ Architecture

The application uses Next.js 15's App Router with a clear separation between client and server code:

- **Client Components**: Handle user interaction and state management [24](#0-23) 
- **Server Actions**: Secure API calls and data validation [25](#0-24) 
- **Type Safety**: Runtime validation with Zod schemas [10](#0-9) 

## 🔒 Security

- API keys are stored server-side only and never exposed to the client [4](#0-3) 
- Input validation prevents malicious requests [26](#0-25) 
- Runtime schema validation ensures data integrity [27](#0-26) 

## 📜 Available Scripts [28](#0-27) 

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your `OPENWEATHER_API_KEY` environment variable
4. Deploy!

For other platforms, run `npm run build` and deploy the `.next` folder.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Notes**

This README provides a comprehensive overview of the HoWeather application, including its features, tech stack, installation instructions, and architecture<cite />. The project structure section maps to the actual file organization in the codebase<cite />. The security section highlights the server-side API key protection implemented through Next.js server actions<cite />. All technical details are derived from the actual implementation in `package.json`, `src/app/page.tsx`, `src/actions/action.ts`, and related files<cite />.

Wiki pages you might want to explore:
- [Overview (Pedrohmac07/HoWeather)](/wiki/Pedrohmac07/HoWeather#1)
- [Architecture Overview (Pedrohmac07/HoWeather)](/wiki/Pedrohmac07/HoWeather#3)
- [Core Application (Pedrohmac07/HoWeather)](/wiki/Pedrohmac07/HoWeather#4)

### Citations

**File:** package.json (L1-4)
```json
{
  "name": "howeather",
  "version": "0.1.0",
  "private": true,
```

**File:** package.json (L5-10)
```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
```

**File:** package.json (L12-12)
```json
    "@radix-ui/react-slot": "^1.2.3",
```

**File:** package.json (L15-15)
```json
    "framer-motion": "^12.23.24",
```

**File:** package.json (L16-16)
```json
    "lucide-react": "^0.546.0",
```

**File:** package.json (L17-17)
```json
    "next": "15.5.6",
```

**File:** package.json (L18-18)
```json
    "react": "19.1.0",
```

**File:** package.json (L21-21)
```json
    "zod": "^4.1.12"
```

**File:** package.json (L31-31)
```json
    "tailwindcss": "^4",
```

**File:** package.json (L33-33)
```json
    "typescript": "^5"
```

**File:** src/app/page.tsx (L1-12)
```typescript
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
```

**File:** src/app/page.tsx (L24-44)
```typescript
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
```

**File:** src/app/page.tsx (L47-47)
```typescript
    <div className="min-h-screen bg-gradient-to-b from-sky-950 to-gray-900 p-4 flex items-center justify-center">
```

**File:** src/app/page.tsx (L49-58)
```typescript
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
```

**File:** src/app/page.tsx (L60-65)
```typescript
        {error && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center text-red-200 bg-red-500/20 rounded-md border-1 border-red-700 p-2 text-2xl">
            {error}
            <LucideX className="m-auto mt-1 size-24" />
          </motion.div>
        )}
```

**File:** src/app/page.tsx (L67-104)
```typescript
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
```

**File:** src/actions/action.ts (L1-23)
```typescript
"use server"

import { WeatherData } from "@/interface/weather"
import { z } from "zod"

const weatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    humidity: z.number(),
    feels_like: z.number(),
  }),
  weather: z.array(
    z.object({
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    }),
  ),
  wind: z.object({
    speed: z.number(),
  })
})
```

**File:** src/actions/action.ts (L25-51)
```typescript
export async function getWeatherData(city: string): Promise<{
  data?: WeatherData,
  error?: string
}> {
  try {
    if (!city.trim()) {
      return { error: "City name is required" }
    }

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`)

    if (!res.ok) {
      throw new Error("City not found")
    }

    const rawData = await res.json()
    const data = weatherSchema.parse(rawData)
    return { data }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: "Invalid weather data recived" }
    }
    return {
      error: error instanceof Error ? error.message : "Failed to fetch weather data"
    }
  }
} 
```

**File:** src/interface/weather.ts (L1-16)
```typescript
export interface WeatherData {
 name: string
 main: {
  temp: number,
  humidity: number,
  feels_like: number,
 },
 weather: Array<{
  main: string,
  description: string,
  icon: string
 }>,
 wind: {
  speed: number,
 }
}
```
