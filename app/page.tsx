"use client";

import { useState } from "react";

const whatsappLink =
  "https://wa.me/6281234567890?text=Halo%20ARSA%20Barbershop%2C%20saya%20ingin%20booking%20haircut.";

const services = [
  { name: "Haircut", price: "Rp45.000", note: "Potongan presisi sesuai bentuk wajah", featured: false },
  { name: "Haircut + Wash", price: "Rp60.000", note: "Potong, cuci, dan segarkan rambut", featured: false },
  { name: "Haircut + Styling", price: "Rp70.000", note: "Finishing dengan styling khas ARSA", featured: true },
  { name: "Haircut + Beard", price: "Rp75.000", note: "Rapikan rambut dan janggut sekaligus", featured: false },
  { name: "Premium Grooming", price: "Rp100.000", note: "Pengalaman grooming lengkap tanpa kompromi", featured: false },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85", alt: "Barber giving a precise haircut", size: "tall" },
  { src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=85", alt: "Classic barbershop chair", size: "wide" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85", alt: "Barber tools and craftsmanship", size: "standard" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85", alt: "Modern gentleman grooming", size: "standard" },
];

const barbers = [
  { name: "Raka Pratama", role: "Founder · Classic cuts", initials: "RP", image: "https://images.unsplash.com/photo-1581299327559-40e4e1e5f9c1?auto=format&fit=crop&w=700&q=85" },
  { name: "Dimas Aditya", role: "Senior barber · Modern fades", initials: "DA", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=85" },
  { name: "Bagas Wicaksono", role: "Barber · Beard specialist", initials: "BW", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85" },
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className={`brand ${compact ? "brand-compact" : ""}`} aria-label="ARSA Barbershop home">
      <span className="brand-mark">A</span>
      <span className="brand-copy"><strong>ARSA</strong><small>BARBERSHOP</small></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="navbar" aria-label="Main navigation">
        <div className="shell nav-inner">
          <Mark />
          <div id="primary-navigation" className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#location" onClick={closeMenu}>Location</a>
            <a href={whatsappLink} className="nav-book" target="_blank" rel="noreferrer" onClick={closeMenu}>Book now <ArrowUpRight /></a>
          </div>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}><span /><span /></button>
        </div>
      </nav>
      <a className="mobile-booking" href={whatsappLink} target="_blank" rel="noreferrer"><span className="mobile-booking-icon">↗</span><span><strong>Booking via WhatsApp</strong><small>Balas pesan untuk pilih jadwal</small></span></a>

      <section id="home" className="hero section-pad">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Yogyakarta · Est. 2018</p>
            <h1>Find your<br /><em>sharpest</em> shape.</h1>
            <p className="hero-lede">A considered grooming experience for modern gentlemen. Precision cuts, good conversation, zero shortcuts.</p>
            <div className="hero-actions"><a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">Book via WhatsApp <ArrowUpRight /></a><a className="text-link" href="#services">View services <span>↓</span></a></div>
            <div className="hero-meta"><span><i className="status-dot" /> Open daily · 09:00—21:00</span><span>Jl. Kaliurang, Yogyakarta</span></div>
          </div>
          <div className="hero-visual" aria-label="ARSA barbershop interior"><div className="hero-image" /><div className="hero-stamp"><span>ARSA</span><small>MODERN GENTLEMEN</small></div><div className="hero-caption"><span>01 / 04</span><span>THE ARSA STANDARD</span></div></div>
        </div>
      </section>

      <section className="trust-strip"><div className="shell trust-grid"><div><strong>1,500<span>+</span></strong><small>gentlemen served</small></div><div><strong>4.9<span>/5</span></strong><small>customer rating</small></div><div><strong>7<span>days</span></strong><small>open every week</small></div><div><strong>5<span>+</span></strong><small>years of craft</small></div></div></section>

      <section id="services" className="section-pad services-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> The menu</p><h2>Good hair days<br /><em>start here.</em></h2></div><p>Setiap layanan berangkat dari hal yang sama: memahami kebutuhan Anda, lalu membuat potongan terasa effortless.</p></div><div className="services-list">{services.map((service, index) => <div className={`service-card ${service.featured ? "featured" : ""}`} key={service.name}><span className="service-number">0{index + 1}</span><div><h3>{service.name}</h3><p>{service.note}</p></div><strong className="service-price">{service.price}</strong><ArrowUpRight /></div>)}</div></div></section>

      <section className="why-section section-pad"><div className="shell why-grid"><div className="why-intro"><p className="eyebrow"><span className="eyebrow-line" /> Why ARSA</p><h2>Details make<br /><em>the difference.</em></h2><p>Bukan sekadar potong rambut. Ini waktu untuk berhenti sejenak, dirawat, lalu kembali menjalani hari dengan lebih siap.</p><a href="#about" className="text-link">Cara kami bekerja <ArrowUpRight /></a></div><div className="feature-grid"><div className="feature-card"><span className="feature-icon">✦</span><h3>Barber berpengalaman</h3><p>Kami membaca detail: bentuk wajah, tekstur rambut, dan gaya harian Anda.</p></div><div className="feature-card"><span className="feature-icon">◌</span><h3>Studio yang nyaman</h3><p>Pencahayaan hangat, musik yang pas, dan kursi yang membuat Anda betah.</p></div><div className="feature-card"><span className="feature-icon">✧</span><h3>Produk pilihan</h3><p>Produk premium yang dipilih karena performanya, bukan sekadar labelnya.</p></div><div className="feature-card"><span className="feature-icon">↗</span><h3>Booking mudah</h3><p>Kirim pesan, pilih waktu, dan kami siapkan kunjungan Anda.</p></div></div></div></section>

      <section id="gallery" className="section-pad gallery-section"><div className="shell"><div className="section-heading gallery-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> Inside ARSA</p><h2>Crafted in<br /><em>the details.</em></h2></div><p>A glimpse of the chairs, tools, and quiet confidence that make up an ARSA appointment.</p></div><div className="gallery-grid">{gallery.map((item) => <div className={`gallery-item ${item.size}`} key={item.src} style={{ backgroundImage: `url(${item.src})` }} role="img" aria-label={item.alt}><span className="gallery-hover">View <ArrowUpRight /></span></div>)}</div></div></section>

      <section className="team-section section-pad"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> The team</p><h2>Good hands.<br /><em>Good people.</em></h2></div><p>Meet the people behind the chair. Skilled, easy to talk to, and serious about the craft.</p></div><div className="team-grid">{barbers.map((barber) => <article className="barber-card" key={barber.name}><div className="barber-photo" style={{ backgroundImage: `url(${barber.image})` }}><span>{barber.initials}</span></div><div className="barber-info"><h3>{barber.name}</h3><p>{barber.role}</p><span className="barber-arrow">↗</span></div></article>)}</div></div></section>

      <section className="testimonial-section section-pad"><div className="shell testimonial-grid"><div><p className="eyebrow"><span className="eyebrow-line" /> Words from the chair</p><div className="quote-mark">“</div><blockquote>Datang buat haircut, pulang rasanya seperti versi terbaik dari diri sendiri.</blockquote><p className="quote-author">— Fajar, Yogyakarta</p></div><div className="testimonial-side"><div className="rating">★★★★★ <span>4.9 average rating</span></div><p>“Barbernya ngerti banget apa yang saya mau meskipun cuma kasih referensi tipis. Hasilnya clean dan tetap natural.”</p><p className="quote-author">— Naufal, Sleman</p><div className="quote-rule" /><p>“Tempatnya nyaman, booking gampang, dan hasilnya konsisten. ARSA sudah jadi langganan saya.”</p><p className="quote-author">— Rizky, Kota Baru</p></div></div></section>

      <section id="about" className="about-section section-pad"><div className="shell about-grid"><div className="about-image" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1400&q=85)" }}><span>EST. 2018</span></div><div className="about-copy"><p className="eyebrow"><span className="eyebrow-line" /> The ARSA story</p><h2>More than a<br /><em>fresh cut.</em></h2><p>ARSA dibangun dari keyakinan sederhana: barbershop seharusnya memberi lebih dari sekadar layanan. Ini ruang untuk melambat, dirawat, lalu pulang dengan rasa lebih siap.</p><p>Dari kursi pertama pada 2018 hingga studio kami hari ini, standarnya tetap sama — hasil yang teliti, saran yang jujur, dan pengalaman tanpa basa-basi.</p><a href={whatsappLink} className="button button-outline" target="_blank" rel="noreferrer">Kunjungi kami <ArrowUpRight /></a></div></div></section>

      <section id="location" className="location-section section-pad"><div className="shell location-grid"><div className="location-copy"><p className="eyebrow"><span className="eyebrow-line" /> Find us</p><h2>Your new<br /><em>usual place.</em></h2><div className="address-block"><strong>ARSA Barbershop</strong><p>Jl. Kaliurang KM 5.5<br />Sleman, Yogyakarta 55281</p><a href="https://maps.google.com/?q=Yogyakarta" target="_blank" rel="noreferrer" className="text-link">Buka di Maps <ArrowUpRight /></a></div><div className="hours-block"><strong>Jam buka</strong><p>Senin — Minggu<br /><span>09:00 — 21:00</span></p></div></div><div className="map-placeholder"><div className="map-grid-lines" /><div className="map-pin"><span>ARSA</span><i /></div><div className="map-label"><span>YOGYAKARTA</span><strong>Lokasi studio</strong></div><div className="map-note">Siap diganti dengan Google Maps</div></div></div></section>

      <section className="final-cta section-pad"><div className="shell final-cta-inner"><p className="eyebrow"><span className="eyebrow-line" /> Your next good decision</p><h2>Leave looking<br /><em>like yourself.</em></h2><a className="button button-primary button-large" href={whatsappLink} target="_blank" rel="noreferrer">Book your chair <ArrowUpRight /></a></div></section>

      <footer className="footer"><div className="shell"><div className="footer-top"><Mark compact /><p>Precision cuts.<br />Modern gentlemen.</p><a href={whatsappLink} target="_blank" rel="noreferrer" className="footer-book">Book via WhatsApp <ArrowUpRight /></a></div><div className="footer-bottom"><span>© 2026 ARSA Barbershop</span><span>Yogyakarta, Indonesia</span><div><a href="#home">Instagram</a><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a><a href="#location">Location</a></div></div></div></footer>
    </main>
  );
}