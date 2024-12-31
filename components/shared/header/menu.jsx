import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/signin" className="header-button flex items-center">
          Hello, Sign In
        </Link>

        <Link href="/cart" className="header-button">
          <div className="flex items-end">
            <ShoppingCartIcon className="h-6 w-8" />
            Cart
          </div>
        </Link>
      </nav>
    </div>
  );
}