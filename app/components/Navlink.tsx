"use client";

import { forwardRef } from "react";
import { cn } from "@/app/lib/utils";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkCompatProps extends Omit<LinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const hrefString = typeof href === "string" ? href : href?.toString();
    const isActive =
      hrefString && !hrefString.startsWith("#")
        ? pathname === hrefString || pathname?.startsWith(`${hrefString}/`)
        : false;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName, pendingClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
