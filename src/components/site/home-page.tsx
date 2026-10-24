import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, Menu, X, Phone, Clock, MapPin, MessageCircle } from "lucide-react";

const photos = {
  hero: "/photos/hero.jpg",
  balayage: "/photos/balayage.jpg",
  brows: "/photos/brows.jpg",
  nails: "/photos/nails.jpg",
  spa: "/photos/spa.jpg",
  anna: "/photos/anna.jpg",
  elena: "/photos/elena.jpg",
  maria: "/photos/maria.jpg",
  before: "/photos/before.jpg",
  after: "/photos/after.jpg",
};

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState("idle");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#2a1a14", color: "#fff", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong>Бархат</strong>
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: 20 }}>
        <section style={{ minHeight: "70vh", display: "grid", placeItems: "center", textAlign: "center" }}>
          <img src={photos.hero} alt="Бархат" style={{ width: "100%", maxWidth: 600, borderRadius: 12 }} />
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 48, margin: "16px 0" }}>Бархат</h1>
          <p>Журнальный салон красоты</p>
        </section>
        <section id="services" style={{ marginTop: 40 }}>
          <h2>Услуги</h2>
          <div style={{ display: "grid", gap: 16 }}>
            <div><img src={photos.balayage} alt="" style={{ width: "100%", borderRadius: 8 }} /><p>Балаяж от 4 500 ₽</p></div>
            <div><img src={photos.brows} alt="" style={{ width: "100%", borderRadius: 8 }} /><p>Брови от 1 800 ₽</p></div>
            <div><img src={photos.nails} alt="" style={{ width: "100%", borderRadius: 8 }} /><p>Маникюр от 2 200 ₽</p></div>
          </div>
        </section>
      </main>
    </div>
  );
}
