"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kapcsolat" className="border-t bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo & About */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Welisse</h3>
            <p className="text-sm text-gray-400">
              Egyedi webes és AI megoldások KKV-knak. Modern technológiák,
              mérhető eredmények.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/welisse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/welisse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/welisse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Szolgáltatások */}
          <div>
            <h4 className="mb-4 font-semibold">Szolgáltatások</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#szolgaltatasok"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Webfejlesztés
                </Link>
              </li>
              <li>
                <Link
                  href="#szolgaltatasok"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Egyedi Szoftver
                </Link>
              </li>
              <li>
                <Link
                  href="#szolgaltatasok"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  AI Integráció
                </Link>
              </li>
              <li>
                <Link
                  href="#szolgaltatasok"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="#szolgaltatasok"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  CRM Rendszerek
                </Link>
              </li>
            </ul>
          </div>

          {/* Cég */}
          <div>
            <h4 className="mb-4 font-semibold">Cég</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#rolunk"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Rólunk
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#arazas"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Árazás
                </Link>
              </li>
              <li>
                <Link
                  href="#kapcsolat"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>

          {/* Jogi */}
          <div>
            <h4 className="mb-4 font-semibold">Jogi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/adatkezeles"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Adatkezelési Tájékoztató
                </Link>
              </li>
              <li>
                <Link
                  href="/aszf"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  ÁSZF
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Cookie Szabályzat
                </Link>
              </li>
              <li>
                <Link
                  href="/impresszum"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Impresszum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-sm font-semibold">📧 Email</div>
              <a
                href="mailto:info@welisse.hu"
                className="text-sm text-gray-400 hover:text-primary"
              >
                info@welisse.hu
              </a>
            </div>
            <div>
              <div className="mb-2 text-sm font-semibold">📞 Telefon</div>
              <a
                href="tel:+36XXXXXXXXX"
                className="text-sm text-gray-400 hover:text-primary"
              >
                +36 XX XXX XXXX
              </a>
            </div>
            <div>
              <div className="mb-2 text-sm font-semibold">⏰ Elérhetőség</div>
              <p className="text-sm text-gray-400">H-P: 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} Welisse. Minden jog fenntartva. | Készítette:{" "}
            <span className="text-primary">Welisse</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
