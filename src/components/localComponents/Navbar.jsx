import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <NavigationMenu className="relative flex justify-center w-full py-2">
      <NavigationMenuList className="flex items-center gap-2 list-none">
        {/* Home Link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className=" px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary   transition-colors"
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Tools Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="  capitalize flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary  transition-colors">
            tools
            <ChevronDown className="w-3 h-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </NavigationMenuTrigger>
          <NavigationMenuContent
            component="div"
            className="absolute top-full  mt-2  bg-popover border border-border rounded-md shadow-md p-1 min-w-30"
          >
            <NavigationMenuLink component="div" asChild>
              <Link
                to="/tools/calculator"
                className="block px-3 py-2 text-sm hover:bg-secondary rounded-sm   capitalize"
              >
                calculator
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to="/tools/marks"
                className="block px-3 py-2 text-sm hover:bg-secondary rounded-sm   capitalize"
              >
                marks
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to="/tools/resources"
                className="block px-3 py-2 text-sm hover:bg-secondary rounded-sm   capitalize"
              >
                resources
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Study Dropdown */}
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="study-group capitalize flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary  transition-colors">
            study
            <ChevronDown className="w-3 h-3 transition-transform duration-200 study-group-data-[state=open]:rotate-180" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute top-full  mt-2  bg-popover border border-border rounded-md shadow-md p-1 min-w-30">
            <NavigationMenuLink asChild>
              <Link
                to="/study/flashcards"
                className="block px-3 py-2 text-sm hover:bg-secondary rounded-sm capitalize"
              >
                flashcards
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to="/study/quiz"
                className="block px-3 py-2 text-sm hover:bg-secondary rounded-sm capitalize"
              >
                quiz
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to="/study/todo"
                className="block px-3 py-2 text-sm hover:bg-secondary rounded-sm capitalize"
              >
                todo
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* About Link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className=" px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary   transition-colors"
          >
            <Link to="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
