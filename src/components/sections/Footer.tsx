"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-3xl font-bold text-white">Welisse</h3>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-400 sm:text-base">
              Vállalati szintű web és AI megoldások növekvő cégeknek. Digitális élményeket építünk, amelyek mérhető eredményeket hoznak.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/welisse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-purple-500/50 hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/welisse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-purple-500/50 hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/welisse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-purple-500/50 hover:bg-white/10"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white sm:text-lg">Szolgáltatások</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#szolgaltatasok"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Webfejlesztés
                </Link>
              </li>
              <li>
                <Link
                  href="#szolgaltatasok"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Egyedi Szoftver
                </Link>
              </li>
              <li>
                <Link
                  href="#szolgaltatasok"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  AI Integráció
                </Link>
              </li>
              <li>
                <Link
                  href="#arazas"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Árazás
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-white sm:text-lg">Cég</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Portfólió
                </Link>
              </li>
              <li>
                <Link
                  href="#kapcsolat"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Kapcsolat
                </Link>
              </li>
              <li>
                <Link
                  href="/adatkezeles"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Adatkezelés
                </Link>
              </li>
              <li>
                <Link
                  href="/aszf"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  ÁSZF
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">Email</p>
                <a
                  href="mailto:info@welisse.hu"
                  className="block truncate text-sm font-medium text-white hover:text-purple-400"
                >
                  info@welisse.hu
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">Telefon</p>
                <a
                  href="tel:+36XXXXXXXXX"
                  className="text-sm font-medium text-white hover:text-cyan-400"
                >
                  +36 XX XXX XXXX
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:col-span-2 lg:col-span-1">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-600 to-red-600">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">Elérhetőség</p>
                <p className="text-sm font-medium text-white">Hétfő-Péntek: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear} Welisse. Minden jog fenntartva.
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-red-500">♥</span>-tal készült Budapesten
          </p>
        </div>
      </div>
    </footer>
  );
}
