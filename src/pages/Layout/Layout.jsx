import { Outlet, NavLink, Link } from "react-router-dom";
import {  PackagePlus, UserRoundPlus } from "lucide-react";
import { CircleUser } from "lucide-react";
import { useSession } from '@/hooks'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {Button } from "@/components/ui/button";


const Layout = () => {
    const { isAuthenticated, user,signOut, loadingUserData } = useSession()
  if (loadingUserData) {
    return null
  }


  return (
    <div className="flex min-h-screen w-full flex-col  ">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        {isAuthenticated && (
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 mb-1">
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <p>Logo</p>
                <span className="sr-only">Dashboard</span>
              </Link>
              <div className="ml-auto flex-1 sm:flex-initial"></div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/settings" className="w-full">
                      <p>Dashboard</p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/support" className="w-full">
                      <p>Dashboard</p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button onClick={signOut}>Logout</button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
        )}
        <Outlet />
      </div>
      {isAuthenticated && (
        <footer>
          <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Name
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
