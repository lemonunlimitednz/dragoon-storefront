import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Zap, Battery, MapPin, Star, Plus, Minus, Info } from 'lucide-react';

export default function DragoonFoldPDP() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Mock image set from Drive research
  const images = [
    "/api/placeholder/800/600", // FOLD Low Step Grey Profile
    "/api/placeholder/800/600", // Detail: Fold Mechanism
    "/api/placeholder/800/600", // Detail: Handlebar/Display
    "/api/placeholder/800/600", // Action shot
  ];

  const specs = [
    { label: "Range", value: "Up to 60km", icon: MapPin },
    { label: "Motor", value: "250W High Torque", icon: Zap },
    { label: "Battery", value: "36V 13Ah Lithium", icon: Battery },
    { label: "Brakes", value: "Mechanical Disc", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-black">Shop</a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <a href="#" className="hover:text-black">Folding Bikes</a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-black text-gray-900">Dragoon FOLD - Low Step</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start">
          
          {/* Image Gallery */}
          <div className="flex flex-col">
            <div className="aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center relative group">
              <img 
                src={images[selectedImage]} 
                alt="Dragoon FOLD Low Step Grey" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Sale - Save $230
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition ${selectedImage === idx ? 'border-blue-600' : 'border-transparent hover:border-gray-300'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0 px-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2 uppercase">
              Dragoon FOLD <span className="text-gray-400">|</span> Low Step
            </h1>
            
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-gray-500 font-medium">(18 Reviews)</span>
            </div>

            <div className="flex items-baseline space-x-4 mb-8">
              <span className="text-3xl font-bold text-gray-900">$2,069.00 NZD</span>
              <span className="text-xl text-gray-400 line-through">$2,299.00</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The ultimate urban commuter. The <span className="font-bold">FOLD Low Step</span> in Gunmetal Grey combines portability with uncompromised comfort. Our signature low-entry frame makes mounting effortless, while the high-torque rear hub motor conquers Auckland's steepest hills.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {specs.map((spec, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-lg text-blue-600">
                    <spec.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{spec.label}</p>
                    <p className="text-sm font-bold text-gray-900">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Color Selector */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Color: <span className="text-gray-500">Gunmetal Grey</span></h3>
              <div className="flex space-x-3">
                <button className="w-8 h-8 rounded-full bg-gray-500 ring-2 ring-offset-2 ring-blue-600" title="Grey"></button>
                <button className="w-8 h-8 rounded-full bg-red-600 hover:scale-110 transition" title="Red"></button>
                <button className="w-8 h-8 rounded-full bg-black hover:scale-110 transition" title="Matte Black"></button>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
                  <button className="p-1 hover:text-blue-600"><Minus className="w-4 h-4" /></button>
                  <span className="mx-6 font-bold">1</span>
                  <button className="p-1 hover:text-blue-600"><Plus className="w-4 h-4" /></button>
                </div>
                <button className="flex-1 bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition shadow-xl shadow-gray-200">
                  Add to Cart
                </button>
              </div>
              <button className="w-full bg-blue-50 text-blue-700 py-4 rounded-full font-bold border border-blue-100 hover:bg-blue-100 transition">
                Book a Free Test Ride in Meadowbank
              </button>
            </div>

            {/* Delivery/Warranty info */}
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 text-sm">
                <ShieldCheck className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-bold">2-Year Local Warranty</p>
                  <p className="text-gray-500">Full NZ backup and parts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-bold">Fully Assembled</p>
                  <p className="text-gray-500">Ready to ride on delivery.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
