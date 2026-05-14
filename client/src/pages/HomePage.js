import React from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Giả định các components này đã được cài đặt qua Shadcn UI
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const EcommerceHomepage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Top Black Banner */}
      <div className="bg-black text-white text-xs py-2 flex items-center overflow-hidden whitespace-nowrap">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-semibold px-4 tracking-wide">
              Black Friday sale 22% off
            </span>
            <Sparkles className="w-4 h-4 text-purple-500 shrink-0" />
            <span className="font-semibold px-4 tracking-wide">
              Black Friday sale 22% off
            </span>
            <Sparkles className="w-4 h-4 text-green-500 shrink-0" />
            <span className="font-semibold px-4 tracking-wide">
              Black Friday sale 22% off
            </span>
            <Sparkles className="w-4 h-4 text-red-500 shrink-0" />
          </div>
        ))}
      </div>

      {/* 2. Top Utility Nav */}
      <div className="border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex justify-between items-center text-[13px] text-gray-500 font-medium">
          <div className="flex space-x-6">
            <a href="#" className="hover:text-black">
              Shipping & Returns
            </a>
            <a href="#" className="hover:text-black">
              Payment
            </a>
            <a href="#" className="hover:text-black">
              Warranty
            </a>
            <a href="#" className="hover:text-black">
              Location
            </a>
            <a href="#" className="hover:text-black">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>English</span> <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>USD</span> <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex space-x-3">
              <span className="cursor-pointer hover:text-black">Ig</span>
              <span className="cursor-pointer hover:text-black">Fb</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Header / Navbar */}
      <header className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between bg-white sticky top-0 z-40">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-black text-white p-1.5 rounded-full">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold tracking-tight">Shopix</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
          <div className="flex items-center space-x-1 cursor-pointer">
            <ShoppingBag className="w-4 h-4" /> <span>Shops</span>{" "}
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer bg-gray-50 px-3 py-1.5 rounded-full">
            <span>Today's Deal</span>{" "}
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <Sparkles className="w-4 h-4" /> <span>New Arrivals</span>{" "}
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Pages</span> <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Type here"
              className="pl-9 rounded-full bg-gray-50 border-gray-200 h-10 focus-visible:ring-1"
            />
          </div>

          <div className="flex items-center space-x-5">
            <div className="relative cursor-pointer">
              <Heart className="w-6 h-6 text-gray-700" />
              <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 px-1.5 min-w-[1.25rem] h-5 flex items-center justify-center rounded-full text-[10px]">
                8
              </Badge>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingBag className="w-6 h-6 text-gray-700" />
              <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 px-1.5 min-w-[1.25rem] h-5 flex items-center justify-center rounded-full text-[10px]">
                2
              </Badge>
            </div>
            <Avatar className="w-9 h-9 border border-gray-200 cursor-pointer">
              <AvatarImage
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="User"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* 4. Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
        {/* Hero Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Macbook */}
          <div className="bg-[#F5F5F7] rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[400px]">
            <div className="z-10">
              <h2 className="text-3xl font-bold mb-3">Macbook m4 pro</h2>
              <p className="text-gray-600 mb-6 max-w-[280px] leading-relaxed">
                Enjoy stunning picture clarity, immersive sound, and smart
                features designed to elevate your everyday entertainment.
              </p>
              <Button
                variant="outline"
                className="rounded-full bg-white font-semibold"
              >
                Purchase Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="absolute -bottom-8 -right-8 w-[120%] h-[60%] bg-gradient-to-t from-gray-300 to-transparent rounded-lg opacity-50"></div>
          </div>

          {/* Card 2: AirPods Max */}
          <div className="bg-[#FAF6F0] rounded-3xl p-8 flex flex-col justify-between items-center text-center relative min-h-[400px]">
            <div className="w-full h-48 bg-gradient-to-b from-gray-200 to-transparent rounded-full opacity-40 mb-4"></div>
            <div>
              <h2 className="text-3xl font-bold mb-3">AirPods Max</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AirPods Max deliver stunningly detailed, high-fidelity audio for
                an unparalleled listening experience.
              </p>
              <Button
                variant="outline"
                className="rounded-full bg-white font-semibold inline-flex"
              >
                Get Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Card 3: Stacked Promo Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#EAF3FA] rounded-3xl p-8 flex-1 relative overflow-hidden flex flex-col justify-center">
              <div className="z-10 w-2/3">
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  Flat 20% Off on Regular Shoes
                </h3>
                <Button
                  variant="outline"
                  className="rounded-full bg-white font-semibold text-xs h-9"
                >
                  Claim Discount <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-800/20 rounded-full blur-xl"></div>
            </div>

            <div className="bg-[#FDF0EE] rounded-3xl p-8 flex-1 relative overflow-hidden flex flex-col justify-center">
              <div className="z-10 w-2/3">
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  Discover Deals That Define Your
                </h3>
                <Button
                  variant="outline"
                  className="rounded-full bg-white font-semibold text-xs h-9"
                >
                  Explore More <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rose-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </section>

        {/* 5. Category Section */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Shop by Category
            </h2>
            <a href="#" className="text-sm font-semibold hover:underline">
              View All
            </a>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {[
                { name: "Electronics", color: "bg-blue-50" },
                { name: "Beauty Products", color: "bg-orange-50" },
                { name: "Smart Watches", color: "bg-gray-100" },
                { name: "Home Decor", color: "bg-sky-50" },
                { name: "Kitchen Appliances", color: "bg-pink-50" },
                { name: "Toys & Games", color: "bg-yellow-50" },
              ].map((category, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div
                      className={`w-32 h-32 rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow`}
                    >
                      <div className="w-16 h-16 bg-black/5 rounded-full" />
                    </div>
                    <span className="text-sm font-semibold text-center">
                      {category.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </section>
      </main>
    </div>
  );
};

export default EcommerceHomepage;
