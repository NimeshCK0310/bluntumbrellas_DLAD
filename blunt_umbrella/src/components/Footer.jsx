"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="w-full flex justify-start">
            <h4
              className="text-[54px] leading-[60px] font-[600] font-blunt text-white"
              style={{ maxWidth: "370px" }}
            >
              Made with forever in mind.
            </h4>
          </div>

          {/* Right Side */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {/* Shop */}
              <div>
                <p className="font-semibold text-white mb-3">Shop</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <Link href="/collections/all-umbrellas">Umbrellas</Link>
                  </li>
                  <li>
                    <Link href="/collections/limited-editions">
                      Limited Editions
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/branded-umbrellas">
                      Corporate Branded
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/about">About</Link>
                  </li>
                  <li>
                    <Link href="/pages/sustainability">Sustainability</Link>
                  </li>
                  <li>
                    <Link href="/pages/journal">Journal</Link>
                  </li>
                  <li>
                    <Link href="/pages/stockists">Stockists</Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <p className="font-semibold text-white mb-3">Support Hub</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <Link href="/pages/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/pages/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/account/register">Register</Link>
                  </li>
                  <li>
                    <Link href="/pages/care">Care</Link>
                  </li>
                  <li>
                    <Link href="/pages/repairs">Repairs</Link>
                  </li>
                  <li>
                    <Link href="/pages/warranty">Warranty</Link>
                  </li>
                  <li>
                    <Link href="/pages/compare-model">Size Guide</Link>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <p className="font-semibold text-white mb-3">Follow Us</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a
                      href="https://www.instagram.com/bluntumbrellas/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/BluntUmbrellasUS/"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/user/bluntumbrellas"
                      target="_blank"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@blunt_official"
                      target="_blank"
                    >
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/blunt-umbrellas-hq/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Trade */}
              <div>
                <p className="font-semibold text-white mb-3">Trade Contacts</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="mailto:ashley@bluntumbrellas.com">Wholesale</a>
                  </li>
                  <li>
                    <a href="mailto:fee@bluntumbrellas.com">PR Enquiries</a>
                  </li>
                  <li>
                    <a href="mailto:fee@bluntumbrellas.com">
                      Marketing Enquiries
                    </a>
                  </li>
                  <li>
                    <a href="mailto:jenna@bluntumbrellas.com">
                      Corporate Branded
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <form
              action="//manage.kmail-lists.com/subscriptions/subscribe"
              method="GET"
              target="_blank"
              className="w-full max-w-md"
            >
              <input type="hidden" name="g" value="Y4eEm4" />
              <input type="hidden" name="$fields" value="$consent, email" />
              <input type="hidden" name="$list_fields" value="$consent" />
              <input type="hidden" name="$consent" value="email" />

              <p className="text-sm font-semibold mb-2">Sign up for 10% off</p>
              <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  required
                  className="flex-1 px-3 py-2 text-sm outline-none text-black"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-white text-black px-4 py-2"
                >
                  →
                </button>
              </div>
            </form>

            {/* Certification Logo */}
            <div className="mt-6 text-center">
              <Image
                src="https://bluntumbrellas.com/cdn/shop/files/Group_a49f590d-01b6-4fc6-870c-ca556f067c29.png?v=1689537902"
                alt="Certification Logo"
                width={80}
                height={40}
              />
              <p className="text-xs text-gray-400 mt-1">
                Certified Corporation
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="Blunt Logo"
              width={260}
              height={140}
              className="filter brightness-0 invert" // makes logo white
            />
          </div>

          {/* Links */}
          <ul className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <li>
              <Link href="/pages/shipping-and-returns">Shipping & Returns</Link>
            </li>
            <li>
              <Link href="/pages/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/pages/privacy-notice">Privacy Policy</Link>
            </li>
            <li>© 2025 MadeBlunt</li>
            <li>
              <a href="https://almond.studio" target="_blank">
                Site by S/A
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
