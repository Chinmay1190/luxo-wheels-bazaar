
import { Product } from "@/types";

// Generate unique IDs
const generateId = (prefix: string, index: number): string => {
  return `${prefix}-${index.toString().padStart(3, '0')}`;
};

// Define products
const products: Product[] = [
  // Supercars
  {
    id: generateId('supercar', 1),
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    category: "supercar",
    price: 75000000, // ₹7.5 Crore
    description: "The Ferrari SF90 Stradale is the most powerful Ferrari road car ever built. It features a hybrid powertrain that combines a V8 engine with three electric motors to produce 986 horsepower.",
    specs: {
      engine: "4.0L Twin-Turbocharged V8 + 3 Electric Motors",
      power: "986 hp",
      torque: "800 Nm",
      topSpeed: "340 km/h",
      acceleration: "0-100 km/h in 2.5 seconds",
      transmission: "8-speed dual-clutch",
      weight: "1,570 kg"
    },
    images: ["/ferrari-sf90.jpg"],
    featured: true
  },
  {
    id: generateId('supercar', 2),
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    category: "supercar",
    price: 85000000, // ₹8.5 Crore
    description: "The Lamborghini Aventador SVJ represents the pinnacle of Lamborghini's naturally aspirated V12 engine technology. It's a track-focused supercar that set a record lap time at the Nürburgring.",
    specs: {
      engine: "6.5L Naturally Aspirated V12",
      power: "770 hp",
      torque: "720 Nm",
      topSpeed: "350 km/h",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "7-speed ISR",
      weight: "1,525 kg"
    },
    images: ["/lamborghini-aventador.jpg"],
    featured: true
  },
  {
    id: generateId('supercar', 3),
    name: "Bugatti Chiron",
    brand: "Bugatti",
    category: "supercar",
    price: 250000000, // ₹25 Crore
    description: "The Bugatti Chiron is one of the fastest and most powerful production cars in the world. It's the successor to the Bugatti Veyron and features a quad-turbocharged W16 engine.",
    specs: {
      engine: "8.0L Quad-Turbocharged W16",
      power: "1,500 hp",
      torque: "1,600 Nm",
      topSpeed: "420 km/h (limited)",
      acceleration: "0-100 km/h in 2.4 seconds",
      transmission: "7-speed dual-clutch",
      weight: "1,995 kg"
    },
    images: ["/bugatti-chiron.jpg"],
    featured: true
  },
  {
    id: generateId('supercar', 4),
    name: "McLaren P1",
    brand: "McLaren",
    category: "supercar",
    price: 140000000, // ₹14 Crore
    description: "The McLaren P1 is a limited production hybrid hypercar that combines a twin-turbocharged V8 engine with an electric motor to deliver exceptional performance and track capability.",
    specs: {
      engine: "3.8L Twin-Turbocharged V8 + Electric Motor",
      power: "903 hp",
      torque: "900 Nm",
      topSpeed: "350 km/h (limited)",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "7-speed dual-clutch",
      weight: "1,395 kg"
    },
    images: ["/mclaren-p1.jpg"]
  },
  {
    id: generateId('supercar', 5),
    name: "Porsche 918 Spyder",
    brand: "Porsche",
    category: "supercar",
    price: 160000000, // ₹16 Crore
    description: "The Porsche 918 Spyder is a hybrid hypercar that combines a naturally aspirated V8 engine with two electric motors to deliver both thrilling performance and surprising efficiency.",
    specs: {
      engine: "4.6L Naturally Aspirated V8 + 2 Electric Motors",
      power: "887 hp",
      torque: "1,280 Nm",
      topSpeed: "345 km/h",
      acceleration: "0-100 km/h in 2.6 seconds",
      transmission: "7-speed dual-clutch",
      weight: "1,640 kg"
    },
    images: ["/porsche-918.jpg"]
  },
  {
    id: generateId('supercar', 6),
    name: "Koenigsegg Jesko",
    brand: "Koenigsegg",
    category: "supercar",
    price: 240000000, // ₹24 Crore
    description: "The Koenigsegg Jesko is named after the father of the company's founder and is one of the most powerful production cars in the world with a twin-turbocharged V8 engine.",
    specs: {
      engine: "5.0L Twin-Turbocharged V8",
      power: "1,600 hp (on E85 fuel)",
      torque: "1,500 Nm",
      topSpeed: "500+ km/h (claimed)",
      acceleration: "0-100 km/h in 2.5 seconds",
      transmission: "9-speed multi-clutch",
      weight: "1,420 kg"
    },
    images: ["/koenigsegg-jesko.jpg"],
    new: true
  },
  {
    id: generateId('supercar', 7),
    name: "Aston Martin Valkyrie",
    brand: "Aston Martin",
    category: "supercar",
    price: 260000000, // ₹26 Crore
    description: "The Aston Martin Valkyrie is a limited production hypercar developed in collaboration with Red Bull Racing. It features a naturally aspirated V12 engine and F1-inspired aerodynamics.",
    specs: {
      engine: "6.5L Naturally Aspirated V12 + Electric Motor",
      power: "1,160 hp",
      torque: "900 Nm",
      topSpeed: "350+ km/h",
      acceleration: "0-100 km/h in 2.5 seconds",
      transmission: "7-speed sequential",
      weight: "1,030 kg"
    },
    images: ["/aston-martin-valkyrie.jpg"],
    new: true
  },
  {
    id: generateId('supercar', 8),
    name: "Pagani Huayra",
    brand: "Pagani",
    category: "supercar",
    price: 190000000, // ₹19 Crore
    description: "The Pagani Huayra is an Italian mid-engine sports car produced by Pagani. It features a twin-turbocharged V12 engine and active aerodynamics with four independently operating flaps.",
    specs: {
      engine: "6.0L Twin-Turbocharged V12",
      power: "730 hp",
      torque: "1,000 Nm",
      topSpeed: "383 km/h",
      acceleration: "0-100 km/h in 3.0 seconds",
      transmission: "7-speed sequential",
      weight: "1,350 kg"
    },
    images: ["/pagani-huayra.jpg"]
  },
  {
    id: generateId('supercar', 9),
    name: "Rimac Nevera",
    brand: "Rimac",
    category: "supercar",
    price: 170000000, // ₹17 Crore
    description: "The Rimac Nevera is an all-electric hypercar with four electric motors that produce a combined output of 1,914 horsepower. It's one of the fastest accelerating cars in the world.",
    specs: {
      engine: "Four Electric Motors",
      power: "1,914 hp",
      torque: "2,360 Nm",
      topSpeed: "412 km/h",
      acceleration: "0-100 km/h in 1.85 seconds",
      transmission: "Single-speed direct drive",
      weight: "2,150 kg"
    },
    images: ["/rimac-nevera.jpg"],
    new: true
  },
  {
    id: generateId('supercar', 10),
    name: "Ferrari LaFerrari",
    brand: "Ferrari",
    category: "supercar",
    price: 210000000, // ₹21 Crore
    description: "The Ferrari LaFerrari is a limited production hybrid sports car and was Ferrari's first hybrid. It combines a V12 engine with an electric motor to produce 950 horsepower.",
    specs: {
      engine: "6.3L Naturally Aspirated V12 + Electric Motor",
      power: "950 hp",
      torque: "900 Nm",
      topSpeed: "350+ km/h",
      acceleration: "0-100 km/h in 2.4 seconds",
      transmission: "7-speed dual-clutch",
      weight: "1,585 kg"
    },
    images: ["/ferrari-laferrari.jpg"]
  },
  {
    id: generateId('supercar', 11),
    name: "Lamborghini Sián FKP 37",
    brand: "Lamborghini",
    category: "supercar",
    price: 220000000, // ₹22 Crore
    description: "The Lamborghini Sián FKP 37 is the first hybrid production vehicle produced by Lamborghini. It combines a V12 engine with a supercapacitor-based hybrid system.",
    specs: {
      engine: "6.5L Naturally Aspirated V12 + Electric Motor",
      power: "819 hp",
      torque: "720 Nm",
      topSpeed: "350+ km/h",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "7-speed ISR",
      weight: "1,645 kg"
    },
    images: ["/lamborghini-sian.jpg"],
    new: true
  },
  {
    id: generateId('supercar', 12),
    name: "McLaren Senna",
    brand: "McLaren",
    category: "supercar",
    price: 180000000, // ₹18 Crore
    description: "The McLaren Senna is a track-focused hypercar with extreme aerodynamics and lightweight construction. It's named after Formula One driver Ayrton Senna.",
    specs: {
      engine: "4.0L Twin-Turbocharged V8",
      power: "789 hp",
      torque: "800 Nm",
      topSpeed: "340 km/h",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "7-speed dual-clutch",
      weight: "1,198 kg"
    },
    images: ["/mclaren-senna.jpg"]
  },
  {
    id: generateId('supercar', 13),
    name: "SSC Tuatara",
    brand: "SSC North America",
    category: "supercar",
    price: 190000000, // ₹19 Crore
    description: "The SSC Tuatara is an American hypercar that claimed the title of the world's fastest production car. It features a twin-turbocharged V8 engine and exceptional aerodynamics.",
    specs: {
      engine: "5.9L Twin-Turbocharged V8",
      power: "1,750 hp (on E85 fuel)",
      torque: "1,735 Nm",
      topSpeed: "508+ km/h",
      acceleration: "0-100 km/h in 2.5 seconds",
      transmission: "7-speed automated manual",
      weight: "1,247 kg"
    },
    images: ["/ssc-tuatara.jpg"]
  },
  {
    id: generateId('supercar', 14),
    name: "Gordon Murray Automotive T.50",
    brand: "Gordon Murray Automotive",
    category: "supercar",
    price: 220000000, // ₹22 Crore
    description: "The Gordon Murray Automotive T.50 is a mid-engine sports car designed by Gordon Murray, the designer of the McLaren F1. It features a naturally aspirated V12 engine and a fan-assisted active aerodynamics system.",
    specs: {
      engine: "4.0L Naturally Aspirated V12",
      power: "654 hp",
      torque: "467 Nm",
      topSpeed: "330+ km/h",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "6-speed manual",
      weight: "986 kg"
    },
    images: ["/gordon-murray-t50.jpg"],
    new: true
  },
  {
    id: generateId('supercar', 15),
    name: "Pininfarina Battista",
    brand: "Pininfarina",
    category: "supercar",
    price: 200000000, // ₹20 Crore
    description: "The Pininfarina Battista is a pure electric hyper GT and the most powerful road-legal car ever to be built in Italy. It features four electric motors that deliver extreme performance.",
    specs: {
      engine: "Four Electric Motors",
      power: "1,900 hp",
      torque: "2,300 Nm",
      topSpeed: "350 km/h",
      acceleration: "0-100 km/h in 1.9 seconds",
      transmission: "Single-speed direct drive",
      weight: "2,200 kg"
    },
    images: ["/pininfarina-battista.jpg"],
    new: true
  },
  {
    id: generateId('supercar', 16),
    name: "Lotus Evija",
    brand: "Lotus",
    category: "supercar",
    price: 180000000, // ₹18 Crore
    description: "The Lotus Evija is a limited production electric sports car and the first electric hypercar from a British manufacturer. It features four electric motors with a combined output of nearly 2,000 horsepower.",
    specs: {
      engine: "Four Electric Motors",
      power: "1,973 hp",
      torque: "1,700 Nm",
      topSpeed: "320+ km/h",
      acceleration: "0-100 km/h in under 3.0 seconds",
      transmission: "Single-speed automatic",
      weight: "1,680 kg"
    },
    images: ["/lotus-evija.jpg"]
  },

  // Luxury cars
  {
    id: generateId('luxurycar', 1),
    name: "Rolls-Royce Phantom",
    brand: "Rolls-Royce",
    category: "luxurycar",
    price: 90000000, // ₹9 Crore
    description: "The Rolls-Royce Phantom is a full-sized luxury saloon and the flagship model of Rolls-Royce Motors. It embodies the height of luxury with its handcrafted interior and whisper-quiet ride.",
    specs: {
      engine: "6.75L Twin-Turbocharged V12",
      power: "563 hp",
      torque: "900 Nm",
      topSpeed: "250 km/h (limited)",
      acceleration: "0-100 km/h in 5.3 seconds",
      transmission: "8-speed automatic",
      weight: "2,560 kg"
    },
    images: ["/rolls-royce-phantom.jpg"],
    featured: true
  },
  {
    id: generateId('luxurycar', 2),
    name: "Bentley Continental GT",
    brand: "Bentley",
    category: "luxurycar",
    price: 45000000, // ₹4.5 Crore
    description: "The Bentley Continental GT is a grand tourer manufactured and marketed by British automaker Bentley Motors. It combines luxurious handcrafted interiors with powerful performance.",
    specs: {
      engine: "6.0L Twin-Turbocharged W12",
      power: "626 hp",
      torque: "900 Nm",
      topSpeed: "333 km/h",
      acceleration: "0-100 km/h in 3.7 seconds",
      transmission: "8-speed dual-clutch",
      weight: "2,244 kg"
    },
    images: ["/bentley-continental.jpg"]
  },
  {
    id: generateId('luxurycar', 3),
    name: "Mercedes-Maybach S-Class",
    brand: "Mercedes-Benz",
    category: "luxurycar",
    price: 35000000, // ₹3.5 Crore
    description: "The Mercedes-Maybach S-Class represents the ultimate in luxury from Mercedes-Benz. It features an extended wheelbase, opulent interior, and exceptional comfort for rear passengers.",
    specs: {
      engine: "4.0L Twin-Turbocharged V8",
      power: "503 hp",
      torque: "700 Nm",
      topSpeed: "250 km/h (limited)",
      acceleration: "0-100 km/h in 4.8 seconds",
      transmission: "9-speed automatic",
      weight: "2,350 kg"
    },
    images: ["/mercedes-maybach.jpg"]
  },
  {
    id: generateId('luxurycar', 4),
    name: "Aston Martin DBS Superleggera",
    brand: "Aston Martin",
    category: "luxurycar",
    price: 53000000, // ₹5.3 Crore
    description: "The Aston Martin DBS Superleggera is a high-performance grand tourer that combines the luxury of a GT with the performance of a supercar. It features a twin-turbocharged V12 engine.",
    specs: {
      engine: "5.2L Twin-Turbocharged V12",
      power: "715 hp",
      torque: "900 Nm",
      topSpeed: "340 km/h",
      acceleration: "0-100 km/h in 3.4 seconds",
      transmission: "8-speed automatic",
      weight: "1,693 kg"
    },
    images: ["/aston-martin-dbs.jpg"],
    featured: true
  },
  {
    id: generateId('luxurycar', 5),
    name: "Bentley Bentayga",
    brand: "Bentley",
    category: "luxurycar",
    price: 40000000, // ₹4 Crore
    description: "The Bentley Bentayga is a mid-size luxury SUV that offers the perfect blend of luxury and performance. It's the first SUV from Bentley and features handcrafted interiors and powerful engine options.",
    specs: {
      engine: "4.0L Twin-Turbocharged V8",
      power: "542 hp",
      torque: "770 Nm",
      topSpeed: "290 km/h",
      acceleration: "0-100 km/h in 4.5 seconds",
      transmission: "8-speed automatic",
      weight: "2,416 kg"
    },
    images: ["/bentley-bentayga.jpg"]
  },
  {
    id: generateId('luxurycar', 6),
    name: "Rolls-Royce Cullinan",
    brand: "Rolls-Royce",
    category: "luxurycar",
    price: 69500000, // ₹6.95 Crore
    description: "The Rolls-Royce Cullinan is a full-sized luxury SUV produced by Rolls-Royce Motor Cars. Named after the Cullinan Diamond, it's the first SUV from Rolls-Royce and offers unparalleled luxury and off-road capability.",
    specs: {
      engine: "6.75L Twin-Turbocharged V12",
      power: "563 hp",
      torque: "850 Nm",
      topSpeed: "250 km/h (limited)",
      acceleration: "0-100 km/h in 5.2 seconds",
      transmission: "8-speed automatic",
      weight: "2,660 kg"
    },
    images: ["/rolls-royce-cullinan.jpg"]
  },
  {
    id: generateId('luxurycar', 7),
    name: "Maserati Quattroporte",
    brand: "Maserati",
    category: "luxurycar",
    price: 17500000, // ₹1.75 Crore
    description: "The Maserati Quattroporte is a luxury sports sedan produced by Italian car manufacturer Maserati. The name comes from Italian and means 'four doors'. It combines the luxury of a sedan with sports car performance.",
    specs: {
      engine: "3.8L Twin-Turbocharged V8",
      power: "580 hp",
      torque: "730 Nm",
      topSpeed: "326 km/h",
      acceleration: "0-100 km/h in 4.7 seconds",
      transmission: "8-speed automatic",
      weight: "1,900 kg"
    },
    images: ["/maserati-quattroporte.jpg"]
  },
  {
    id: generateId('luxurycar', 8),
    name: "Range Rover Autobiography",
    brand: "Land Rover",
    category: "luxurycar",
    price: 25000000, // ₹2.5 Crore
    description: "The Range Rover Autobiography is the pinnacle of luxury SUVs, combining off-road capability with opulent interiors and refined on-road manners. It's the flagship model of the Range Rover line.",
    specs: {
      engine: "5.0L Supercharged V8",
      power: "557 hp",
      torque: "700 Nm",
      topSpeed: "250 km/h (limited)",
      acceleration: "0-100 km/h in 5.4 seconds",
      transmission: "8-speed automatic",
      weight: "2,450 kg"
    },
    images: ["/range-rover.jpg"]
  },
  {
    id: generateId('luxurycar', 9),
    name: "Lexus LS 500h",
    brand: "Lexus",
    category: "luxurycar",
    price: 19500000, // ₹1.95 Crore
    description: "The Lexus LS 500h is a full-size luxury hybrid sedan that offers a perfect blend of luxury, performance, and efficiency. It features a multi-stage hybrid system that combines a V6 engine with electric motors.",
    specs: {
      engine: "3.5L V6 + Multi-Stage Hybrid",
      power: "354 hp",
      torque: "350 Nm",
      topSpeed: "250 km/h (limited)",
      acceleration: "0-100 km/h in 5.4 seconds",
      transmission: "Multi-stage hybrid transmission",
      weight: "2,240 kg"
    },
    images: ["/lexus-ls.jpg"]
  },
  {
    id: generateId('luxurycar', 10),
    name: "BMW 7 Series",
    brand: "BMW",
    category: "luxurycar",
    price: 16000000, // ₹1.6 Crore
    description: "The BMW 7 Series is a full-size luxury sedan produced by the German automaker BMW. It serves as the flagship of BMW's line-up and offers cutting-edge technology, comfort, and driving dynamics.",
    specs: {
      engine: "4.4L Twin-Turbocharged V8",
      power: "523 hp",
      torque: "750 Nm",
      topSpeed: "250 km/h (limited)",
      acceleration: "0-100 km/h in 4.0 seconds",
      transmission: "8-speed automatic",
      weight: "2,110 kg"
    },
    images: ["/bmw-7-series.jpg"]
  },
  {
    id: generateId('luxurycar', 11),
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    category: "luxurycar",
    price: 16500000, // ₹1.65 Crore
    description: "The Mercedes-Benz S-Class is a series of full-size luxury sedans produced by the German automaker Mercedes-Benz. It's known for introducing the latest technology and safety features before they trickle down to other models.",
    specs: {
      engine: "3.0L Inline-6 Turbo + EQ Boost",
      power: "429 hp",
      torque: "520 Nm",
      topSpeed: "250 km/h (limited)",
      acceleration: "0-100 km/h in 4.9 seconds",
      transmission: "9-speed automatic",
      weight: "2,065 kg"
    },
    images: ["/mercedes-s-class.jpg"]
  },
  {
    id: generateId('luxurycar', 12),
    name: "Audi A8 L",
    brand: "Audi",
    category: "luxurycar",
    price: 15800000, // ₹1.58 Crore
    description: "The Audi A8 L is a full-size luxury sedan produced by the German automaker Audi. It features an extended wheelbase for enhanced rear-seat comfort and cutting-edge technology.",
    specs: {
      engine: "3.0L Turbocharged V6",
      power: "340 hp",
      torque: "500 Nm",
      topSpeed: "250 km/h (limited)",
      acceleration: "0-100 km/h in 5.7 seconds",
      transmission: "8-speed automatic",
      weight: "1,995 kg"
    },
    images: ["/audi-a8.jpg"]
  },
  {
    id: generateId('luxurycar', 13),
    name: "Genesis G90",
    brand: "Genesis",
    category: "luxurycar",
    price: 12500000, // ₹1.25 Crore
    description: "The Genesis G90 is a full-size luxury sedan produced by the Korean luxury automaker Genesis. It offers exceptional value with its luxurious features and powerful performance.",
    specs: {
      engine: "5.0L Naturally Aspirated V8",
      power: "420 hp",
      torque: "519 Nm",
      topSpeed: "240 km/h",
      acceleration: "0-100 km/h in 5.4 seconds",
      transmission: "8-speed automatic",
      weight: "2,120 kg"
    },
    images: ["/genesis-g90.jpg"]
  },
  {
    id: generateId('luxurycar', 14),
    name: "Porsche Panamera Turbo S E-Hybrid",
    brand: "Porsche",
    category: "luxurycar",
    price: 24000000, // ₹2.4 Crore
    description: "The Porsche Panamera Turbo S E-Hybrid is a plug-in hybrid grand tourer that offers the perfect blend of performance and luxury. It combines a twin-turbocharged V8 with an electric motor.",
    specs: {
      engine: "4.0L Twin-Turbocharged V8 + Electric Motor",
      power: "680 hp",
      torque: "850 Nm",
      topSpeed: "310 km/h",
      acceleration: "0-100 km/h in 3.2 seconds",
      transmission: "8-speed dual-clutch",
      weight: "2,350 kg"
    },
    images: ["/porsche-panamera.jpg"]
  },
  {
    id: generateId('luxurycar', 15),
    name: "Ferrari Roma",
    brand: "Ferrari",
    category: "luxurycar",
    price: 38000000, // ₹3.8 Crore
    description: "The Ferrari Roma is a 2+ grand touring sports car produced by Italian automobile manufacturer Ferrari. It features a sleek design inspired by the Ferrari's of the 1950s and 60s.",
    specs: {
      engine: "3.9L Twin-Turbocharged V8",
      power: "612 hp",
      torque: "760 Nm",
      topSpeed: "320 km/h",
      acceleration: "0-100 km/h in 3.4 seconds",
      transmission: "8-speed dual-clutch",
      weight: "1,570 kg"
    },
    images: ["/ferrari-roma.jpg"],
    new: true
  },
  {
    id: generateId('luxurycar', 16),
    name: "Bentley Flying Spur",
    brand: "Bentley",
    category: "luxurycar",
    price: 33000000, // ₹3.3 Crore
    description: "The Bentley Flying Spur is a luxury sports sedan produced by Bentley Motors. It combines the luxury of a limousine with the performance of a sports car.",
    specs: {
      engine: "6.0L Twin-Turbocharged W12",
      power: "626 hp",
      torque: "900 Nm",
      topSpeed: "333 km/h",
      acceleration: "0-100 km/h in 3.8 seconds",
      transmission: "8-speed dual-clutch",
      weight: "2,437 kg"
    },
    images: ["/bentley-flying-spur.jpg"]
  },
  
  // Superbikes
  {
    id: generateId('superbike', 1),
    name: "Ducati Panigale V4 R",
    brand: "Ducati",
    category: "superbike",
    price: 6900000, // ₹69 Lakh
    description: "The Ducati Panigale V4 R is a race-bred superbike with a 998cc Desmosedici Stradale R engine and aerodynamic winglets. It's the closest thing to a MotoGP bike for the road.",
    specs: {
      engine: "998cc Desmosedici Stradale R V4",
      power: "221 hp (234 hp with race exhaust)",
      torque: "112 Nm",
      topSpeed: "300+ km/h",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "6-speed",
      weight: "172 kg (dry)"
    },
    images: ["/ducati-panigale.jpg"],
    featured: true
  },
  {
    id: generateId('superbike', 2),
    name: "BMW S 1000 RR",
    brand: "BMW",
    category: "superbike",
    price: 2500000, // ₹25 Lakh
    description: "The BMW S 1000 RR is a race-oriented sport bike manufactured by BMW Motorrad. It features a powerful inline-4 engine and advanced electronics package.",
    specs: {
      engine: "999cc Inline-4",
      power: "205 hp",
      torque: "113 Nm",
      topSpeed: "303 km/h",
      acceleration: "0-100 km/h in 3.1 seconds",
      transmission: "6-speed",
      weight: "197 kg (wet)"
    },
    images: ["/bmw-s1000rr.jpg"]
  },
  {
    id: generateId('superbike', 3),
    name: "Kawasaki Ninja H2R",
    brand: "Kawasaki",
    category: "superbike",
    price: 7500000, // ₹75 Lakh
    description: "The Kawasaki Ninja H2R is a track-only motorcycle with a supercharged engine, making it one of the most powerful production motorcycles ever built.",
    specs: {
      engine: "998cc Supercharged Inline-4",
      power: "310 hp",
      torque: "165 Nm",
      topSpeed: "400 km/h",
      acceleration: "0-100 km/h in 2.5 seconds",
      transmission: "6-speed",
      weight: "216 kg (wet)"
    },
    images: ["/kawasaki-h2r.jpg"],
    featured: true
  },
  {
    id: generateId('superbike', 4),
    name: "Aprilia RSV4 Factory",
    brand: "Aprilia",
    category: "superbike",
    price: 2700000, // ₹27 Lakh
    description: "The Aprilia RSV4 Factory is a high-performance sports bike with a V4 engine and advanced electronics. It's designed for both track and road use.",
    specs: {
      engine: "1099cc V4",
      power: "217 hp",
      torque: "125 Nm",
      topSpeed: "305 km/h",
      acceleration: "0-100 km/h in 3.0 seconds",
      transmission: "6-speed",
      weight: "199 kg (wet)"
    },
    images: ["/aprilia-rsv4.jpg"]
  },
  {
    id: generateId('superbike', 5),
    name: "Honda CBR1000RR-R Fireblade SP",
    brand: "Honda",
    category: "superbike",
    price: 2400000, // ₹24 Lakh
    description: "The Honda CBR1000RR-R Fireblade SP is a high-performance sports bike inspired by MotoGP technology. It features a powerful inline-4 engine and advanced electronics package.",
    specs: {
      engine: "999cc Inline-4",
      power: "214 hp",
      torque: "113 Nm",
      topSpeed: "299 km/h",
      acceleration: "0-100 km/h in 3.1 seconds",
      transmission: "6-speed",
      weight: "201 kg (wet)"
    },
    images: ["/honda-fireblade.jpg"]
  },
  {
    id: generateId('superbike', 6),
    name: "Yamaha YZF-R1M",
    brand: "Yamaha",
    category: "superbike",
    price: 2600000, // ₹26 Lakh
    description: "The Yamaha YZF-R1M is a track-focused superbike with carbon fiber bodywork, electronic racing suspension, and a powerful crossplane crankshaft engine.",
    specs: {
      engine: "998cc Crossplane Inline-4",
      power: "200 hp",
      torque: "113 Nm",
      topSpeed: "299 km/h",
      acceleration: "0-100 km/h in 3.2 seconds",
      transmission: "6-speed",
      weight: "202 kg (wet)"
    },
    images: ["/yamaha-r1m.jpg"]
  },
  {
    id: generateId('superbike', 7),
    name: "MV Agusta F4 RC",
    brand: "MV Agusta",
    category: "superbike",
    price: 4500000, // ₹45 Lakh
    description: "The MV Agusta F4 RC is a limited-edition superbike with a hand-built engine, carbon fiber bodywork, and titanium components. It's one of the most beautiful motorcycles ever made.",
    specs: {
      engine: "998cc Inline-4",
      power: "212 hp (with race kit)",
      torque: "115 Nm",
      topSpeed: "302 km/h",
      acceleration: "0-100 km/h in 2.9 seconds",
      transmission: "6-speed",
      weight: "175 kg (dry)"
    },
    images: ["/mv-agusta-f4.jpg"]
  },
  {
    id: generateId('superbike', 8),
    name: "Suzuki GSX-R1000R",
    brand: "Suzuki",
    category: "superbike",
    price: 2200000, // ₹22 Lakh
    description: "The Suzuki GSX-R1000R is a high-performance sports bike with a powerful engine and advanced electronics. It's the flagship model of Suzuki's sport bike lineup.",
    specs: {
      engine: "999cc Inline-4",
      power: "202 hp",
      torque: "117 Nm",
      topSpeed: "299 km/h",
      acceleration: "0-100 km/h in 3.2 seconds",
      transmission: "6-speed",
      weight: "203 kg (wet)"
    },
    images: ["/suzuki-gsxr1000.jpg"]
  },
  {
    id: generateId('superbike', 9),
    name: "Ducati Streetfighter V4 S",
    brand: "Ducati",
    category: "superbike",
    price: 2400000, // ₹24 Lakh
    description: "The Ducati Streetfighter V4 S is a naked sports bike based on the Panigale V4. It features a powerful V4 engine and aggressive styling.",
    specs: {
      engine: "1103cc Desmosedici Stradale V4",
      power: "208 hp",
      torque: "123 Nm",
      topSpeed: "285 km/h",
      acceleration: "0-100 km/h in 2.9 seconds",
      transmission: "6-speed",
      weight: "199 kg (wet)"
    },
    images: ["/ducati-streetfighter.jpg"],
    new: true
  },
  {
    id: generateId('superbike', 10),
    name: "KTM 1290 Super Duke R",
    brand: "KTM",
    category: "superbike",
    price: 1900000, // ₹19 Lakh
    description: "The KTM 1290 Super Duke R is a naked sports bike with a powerful V-twin engine and aggressive styling. It's known as 'The Beast' for its raw power and aggressive character.",
    specs: {
      engine: "1301cc V-Twin",
      power: "180 hp",
      torque: "140 Nm",
      topSpeed: "290 km/h",
      acceleration: "0-100 km/h in 3.0 seconds",
      transmission: "6-speed",
      weight: "189 kg (dry)"
    },
    images: ["/ktm-superduke.jpg"]
  },
  {
    id: generateId('superbike', 11),
    name: "Triumph Daytona Moto2 765",
    brand: "Triumph",
    category: "superbike",
    price: 1700000, // ₹17 Lakh
    description: "The Triumph Daytona Moto2 765 is a limited-edition sports bike inspired by Triumph's Moto2 racing engines. It features a powerful triple engine and advanced electronics.",
    specs: {
      engine: "765cc Inline-3",
      power: "130 hp",
      torque: "80 Nm",
      topSpeed: "270 km/h",
      acceleration: "0-100 km/h in 3.4 seconds",
      transmission: "6-speed",
      weight: "189 kg (wet)"
    },
    images: ["/triumph-daytona.jpg"]
  },
  {
    id: generateId('superbike', 12),
    name: "Kawasaki Ninja ZX-10R",
    brand: "Kawasaki",
    category: "superbike",
    price: 1600000, // ₹16 Lakh
    description: "The Kawasaki Ninja ZX-10R is a high-performance sports bike that has been successful in World Superbike Championship racing. It features a powerful inline-4 engine and advanced electronics.",
    specs: {
      engine: "998cc Inline-4",
      power: "203 hp",
      torque: "114 Nm",
      topSpeed: "299 km/h",
      acceleration: "0-100 km/h in 3.2 seconds",
      transmission: "6-speed",
      weight: "207 kg (wet)"
    },
    images: ["/kawasaki-zx10r.jpg"]
  },
  {
    id: generateId('superbike', 13),
    name: "Energica Ego",
    brand: "Energica",
    category: "superbike",
    price: 2800000, // ₹28 Lakh
    description: "The Energica Ego is a high-performance electric sports bike with impressive acceleration and range. It's the world's first all-electric racing motorcycle championship bike.",
    specs: {
      engine: "Electric Motor",
      power: "145 hp",
      torque: "215 Nm",
      topSpeed: "240 km/h",
      acceleration: "0-100 km/h in 2.8 seconds",
      transmission: "Single-speed direct drive",
      weight: "258 kg"
    },
    images: ["/energica-ego.jpg"],
    new: true
  },
  {
    id: generateId('superbike', 14),
    name: "BMW HP4 Race",
    brand: "BMW",
    category: "superbike",
    price: 8500000, // ₹85 Lakh
    description: "The BMW HP4 Race is a limited-production track-only superbike with a carbon fiber frame and advanced electronics. It's one of the most exclusive motorcycles ever built by BMW.",
    specs: {
      engine: "999cc Inline-4",
      power: "215 hp",
      torque: "120 Nm",
      topSpeed: "310 km/h",
      acceleration: "0-100 km/h in 2.9 seconds",
      transmission: "6-speed",
      weight: "171 kg (wet)"
    },
    images: ["/bmw-hp4.jpg"]
  },
  {
    id: generateId('superbike', 15),
    name: "Ducati Superleggera V4",
    brand: "Ducati",
    category: "superbike",
    price: 9500000, // ₹95 Lakh
    description: "The Ducati Superleggera V4 is a limited-edition superbike with a carbon fiber frame, swingarm, and wheels. It's the most powerful and technologically advanced production Ducati ever.",
    specs: {
      engine: "998cc Desmosedici Stradale R V4",
      power: "234 hp (with race exhaust)",
      torque: "119 Nm",
      topSpeed: "310 km/h",
      acceleration: "0-100 km/h in 2.7 seconds",
      transmission: "6-speed",
      weight: "159 kg (dry)"
    },
    images: ["/ducati-superleggera.jpg"],
    new: true
  },
  {
    id: generateId('superbike', 16),
    name: "Lightning LS-218",
    brand: "Lightning",
    category: "superbike",
    price: 3200000, // ₹32 Lakh
    description: "The Lightning LS-218 is an American-made electric superbike that's one of the fastest production motorcycles in the world. It's named after its top speed of 218 mph (351 km/h).",
    specs: {
      engine: "Electric Motor",
      power: "200 hp",
      torque: "228 Nm",
      topSpeed: "351 km/h",
      acceleration: "0-100 km/h in 2.2 seconds",
      transmission: "Single-speed direct drive",
      weight: "224 kg"
    },
    images: ["/lightning-ls218.jpg"]
  },
];

export default products;
