"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink, Zap } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
  alignRight?: boolean;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpandedDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileExpandedDropdown((prev) => (prev === label ? null : label));
  };

  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      hasDropdown: false,
    },
    {
      label: "About",
      href: "/about",
      hasDropdown: false,
    },
    {
      label: "Committees",
      href: "/committees",
      hasDropdown: false,
    },
    {
      label: "Call for Papers",
      href: "/call-for-papers",
      hasDropdown: true,
      alignRight: false,
      dropdownItems: [
        { label: "Scope & Research Tracks", href: "/tracks" },
        { label: "Author Submission Guidelines", href: "/call-for-papers" },
        { label: "Paper Templates (IEEE Format)", href: "/call-for-papers" },
        { label: "Plagiarism Policy & Review Process", href: "/call-for-papers" },
        {
          label: "EasyChair Submission Portal ↗",
          href: "https://easychair.org/conferences/?conf=icetite28",
          external: true,
        },
      ],
    },
    {
      label: "Dates",
      href: "/important-dates",
      hasDropdown: true,
      alignRight: false,
      dropdownItems: [
        { label: "Milestone Schedule Timeline", href: "/important-dates" },
        { label: "Full Paper Submission Deadline", href: "/important-dates" },
        { label: "Acceptance Notification", href: "/important-dates" },
        { label: "Camera-Ready Final Submission", href: "/important-dates" },
        { label: "Conference Days (Feb 10–11, 2028)", href: "/important-dates" },
      ],
    },
    {
      label: "Registration",
      href: "/registration",
      hasDropdown: true,
      alignRight: true,
      dropdownItems: [
        { label: "Registration Tariffs & Categories", href: "/registration" },
        { label: "Indian Authors & Delegates (INR)", href: "/registration" },
        { label: "International Authors (USD)", href: "/registration" },
        { label: "Student & Co-Author Registration", href: "/registration" },
        { label: "Online Fee Payment & Invoicing", href: "/registration" },
        { label: "International Delegate Visa Assistance", href: "/visa" },
      ],
    },
    {
      label: "Visa",
      href: "/visa",
      hasDropdown: true,
      alignRight: true,
      dropdownItems: [
        { label: "Conference Visa Guidelines", href: "/visa" },
        { label: "Request Visa Invitation Letter", href: "/visa#invitation-letter" },
        {
          label: "Indian e-Visa Official Portal ↗",
          href: "https://indianvisaonline.gov.in/evisa/tvoa.html",
          external: true,
        },
        { label: "Government of India Clearances", href: "/visa" },
        { label: "Campus Venue & Travel Logistics", href: "/venue" },
      ],
    },
    {
      label: "Events",
      href: "/hackathon",
      hasDropdown: true,
      alignRight: true,
      dropdownItems: [
        { label: "BOLT 3.0 National Flagship Hackathon", href: "/hackathon" },
        { label: "Keynote & Plenary Addresses", href: "/keynote-speakers" },
        { label: "Technical Paper Presentation Sessions", href: "/tracks" },
        { label: "Student Symposia & Workshops", href: "/about" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
      hasDropdown: false,
    },
    {
      label: "Other",
      href: "#other",
      hasDropdown: true,
      alignRight: true,
      dropdownItems: [
        { label: "Organizing Committee", href: "/committees" },
        { label: "Advisory Board", href: "/advisory" },
        { label: "Campus Venue & Travel Logistics", href: "/venue" },
        { label: "Keynote Luminaries & Speakers", href: "/keynote-speakers" },
        { label: "Web Development Team", href: "/team" },
        {
          label: "IEEE ITS VIT Chapter Portal ↗",
          href: "https://ieee-its-1-tzbd.vercel.app/",
          external: true,
        },
      ],
    },
  ];

  return (
    <header
      id="site-nav"
      className="sticky top-0 z-50 w-full bg-[#002147] shadow-xl border-b border-white/15 py-2 sm:py-2.5"
    >
      <nav
        className="w-full max-w-[1700px] mx-auto px-3 sm:px-4 xl:px-6 flex items-center justify-between gap-2.5 xl:gap-3.5"
        aria-label="Conference Primary Navigation"
      >
        {/* LEFT: ic-ETITE '28 Logo & IEEE ITS Emblem */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <Link
            href="/"
            title="ic-ETITE'28 International Conference"
            className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
          >
            <div className="relative h-7 sm:h-8 xl:h-9 w-24 sm:w-28 xl:w-32">
              <Image
                src="/logos/ic-etite28-cropped-transparent.png"
                alt="ic-ETITE'28"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* IEEE Information Theory Society Round Emblem */}
          <a
            href="https://ieee-its-1-tzbd.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="IEEE Information Theory Society"
            className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
          >
            <div className="relative h-7 sm:h-8 xl:h-9 w-7 sm:w-8 xl:w-9 rounded-full overflow-hidden border border-white/20 shadow-xs bg-[#00142E]">
              <Image
                src="/logos/ieee-its-circle-logo.png"
                alt="IEEE Information Theory Society Emblem"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
          </a>

          {/* BOLT 3.0 Hackathon Tag for wider screens */}
          <Link
            href="/hackathon"
            className="group hidden 2xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00142E] hover:bg-[#00244D] border border-[#CCFF00] shadow-[0_0_12px_rgba(204,255,0,0.25)] shrink-0"
            title="Register for BOLT 3.0 National Flagship Hackathon"
          >
            <Zap className="w-3 h-3 text-[#CCFF00] fill-[#CCFF00]" />
            <span className="text-xs font-black tracking-wide text-[#CCFF00]">
              BOLT 3.0
            </span>
          </Link>
        </div>

        {/* DESKTOP NAVIGATION ITEMS WITH CRISP SELECTION EFFECT */}
        <div className="hidden xl:flex items-center flex-nowrap whitespace-nowrap min-w-0">
          <ul className="flex items-center gap-0.5 2xl:gap-1 text-[12px] 2xl:text-[13px] font-semibold text-white flex-nowrap whitespace-nowrap">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isOpen = activeDropdown === item.label;

              return (
                <li
                  key={item.label}
                  className="relative group py-1"
                  onMouseEnter={() => {
                    if (item.hasDropdown) handleMouseEnter(item.label);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                  }}
                >
                  <Link
                    href={item.href}
                    className={`relative inline-flex items-center gap-1 py-1.5 px-2 2xl:px-3 rounded-full transition-all whitespace-nowrap ${
                      active
                        ? "bg-white/25 text-[#FFB81C] font-bold border border-white/35 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 opacity-80 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu with viewport-safe bounds */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div
                      className={`absolute top-full ${
                        item.alignRight ? "right-0" : "left-0"
                      } w-max max-w-[calc(100vw-32px)] min-w-[240px] sm:min-w-[270px] py-2 bg-[#001833] border border-white/20 rounded-2xl shadow-2xl transition-all duration-200 z-50 mt-1 ${
                        isOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {item.dropdownItems.map((subItem) => (
                        <div key={subItem.label}>
                          {subItem.external ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-2.5 text-[13px] text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              <span>{subItem.label}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#FFB81C]" />
                            </a>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2.5 text-[13px] text-white/90 hover:text-[#FFB81C] hover:bg-white/10 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT: Official VIT Logo on right side */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/"
            title="Vellore Institute of Technology"
            className="flex items-center shrink-0 hover:opacity-95 transition-opacity"
          >
            <div className="relative h-7 sm:h-8 xl:h-9 w-24 sm:w-32 xl:w-36">
              <Image
                src="/logos/vit-header-logo.webp"
                alt="VIT Vellore Institute of Technology"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </Link>

          {/* MOBILE / TABLET MENU TRIGGER BUTTON (< xl) */}
          <button
            id="menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-1.5 sm:p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 active:scale-95 flex items-center justify-center ml-1"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#FFB81C]" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </nav>

      {/* MOBILE & TABLET DRAWER NAVIGATION (< xl) */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[52px] sm:top-[57px] bottom-0 bg-[#00142E] border-t border-white/15 text-white shadow-2xl z-40 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="container-x py-6 space-y-6 pb-20">
            {/* BOLT 3.0 Hackathon Banner in Mobile Drawer */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#00142E] to-[#002244] border border-[#CCFF00]/50 shadow-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#CCFF00]/15 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-[#CCFF00] fill-[#CCFF00]" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#CCFF00] tracking-wide">BOLT 3.0 Hackathon</p>
                  <p className="text-[11px] text-white/70">National Flagship 36hr Hackathon</p>
                </div>
              </div>
              <Link
                href="/hackathon"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-[#CCFF00] text-[#001C3D] font-bold text-xs tracking-wider uppercase hover:bg-white transition-colors shrink-0"
              >
                Register
              </Link>
            </div>

            {/* Navigation List with Accordions */}
            <ul className="flex flex-col gap-1 text-base font-semibold">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const isExpanded = mobileExpandedDropdown === item.label;

                return (
                  <li key={item.label} className="border-b border-white/5 pb-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (!item.hasDropdown) setMobileOpen(false);
                        }}
                        className={`flex-1 py-3 px-3 rounded-xl transition-colors ${
                          active
                            ? "bg-white/15 text-[#FFB81C] font-bold"
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>

                      {/* Dropdown Expand Toggle for Mobile */}
                      {item.hasDropdown && (
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="p-3 text-white/60 hover:text-[#FFB81C] transition-colors"
                          aria-label={`Toggle ${item.label} sub-menu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-[#FFB81C]" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Expandable Sub-items */}
                    {item.hasDropdown && item.dropdownItems && isExpanded && (
                      <div className="ml-4 pl-3 border-l-2 border-[#FFB81C]/40 py-2 space-y-2 animate-in fade-in-50 duration-150">
                        {item.dropdownItems.map((sub) => (
                          <div key={sub.label}>
                            {sub.external ? (
                              <a
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-medium text-white/80 hover:text-white hover:bg-white/10"
                              >
                                <span>{sub.label}</span>
                                <ExternalLink className="w-3.5 h-3.5 text-[#FFB81C]" />
                              </a>
                            ) : (
                              <Link
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 px-3 rounded-lg text-xs font-medium text-white/80 hover:text-[#FFB81C] hover:bg-white/10"
                              >
                                • {sub.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
              <a
                href="https://ieee-its-1-tzbd.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
              >
                <span className="font-semibold">IEEE ITS Student Chapter Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#72EFDD]" />
              </a>

              <a
                href="https://easychair.org/conferences/?conf=icetite28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
              >
                <span className="font-semibold">EasyChair Submission Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FFB81C]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
