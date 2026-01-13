import {
  Coffee,
  Cookie,
  ShoppingCart,
  MapPin,
  Clock,
  Heart,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-linear-to-r from-amber-900 via-orange-800 to-amber-900 text-white shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/">
                <Coffee className="w-10 h-10 text-amber-300" />
              </Link>
              <div>
                <h1 className="text-xl md:text-3xl font-bold">Cuddle Cup</h1>
                <p className="text-amber-200 text-sm md:text-m">
                  Coffee & Desserts
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 text-amber-100">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Main Street</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-amber-100">
                <Clock className="w-4 h-4" />
                <span className="text-sm">7am - 9pm</span>
              </div>
              <div className="flex gap-3">
                <Heart className="w-6 h-6"/>
                <ShoppingCart className="w-6 h-6" />
                {/* {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
