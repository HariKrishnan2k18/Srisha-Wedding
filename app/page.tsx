"use client";

import { useEffect, useRef, useState } from "react";

const GANESH_IMG = "/assets/img/ganesh-logo.png";
const MAP_LINK = "https://maps.app.goo.gl/Sivq2CyyyfTjKnax9";
const MAP_EMBED = "https://maps.google.com/maps?q=12.9245221,77.5115684&z=17&output=embed";
const PHOTOS = ["/img/image1.jpeg", "/img/image2.jpeg"];
const WEDDING_TIME = new Date("2026-11-20T09:10:00+05:30").getTime();
const CALENDAR_CELLS = ["", "", "", "", "", "", 1, ...Array.from({ length: 29 }, (_, i) => i + 2), "", "", "", "", "", ""];

/* ─── Floating petal particles ─────────────────────────── */
const PETALS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.round((i * 5.88 + 3) % 100)}%`,
  delay: `${(i * 1.37) % 12}s`,
  duration: `${10 + (i * 1.2) % 8}s`,
  size: `${8 + (i * 1.5) % 8}px`,
}));

function FloralSpray({ className = "" }: { className?: string }) {
  return (
    <svg className={`floral-spray ${className}`} viewBox="0 0 500 170" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M250 138C205 104 198 57 250 18c52 39 45 86 0 120Z" />
        <path d="M250 130c-25-29-25-61 0-92 25 31 25 63 0 92Zm0-6c-12-19-12-40 0-61 12 21 12 42 0 61Z" />
        <path d="M238 84c-24-12-39-29-43-54 27 6 44 20 52 43m15 11c24-12 39-29 43-54-27 6-44 20-52 43" />
        <path d="M250 140c-30 0-59-14-85-44-23-27-48-39-78-37 19 29 43 44 73 47m90 34c30 0 59-14 85-44 23-27 48-39 78-37-19 29-43 44-73 47" />
        <path d="M165 96c-5-18-18-31-40-39m-22 2c8 18 21 29 40 34m197 3c5-18 18-31 40-39m22 2c-8 18-21 29-40 34" />
        <path d="M203 118c-23-2-43-11-59-28 24-3 44 3 60 18m93 10c23-2 43-11 59-28-24-3-44 3-60 18" />
        <path d="M116 61c-9-9-13-20-12-34 14 8 22 18 24 31m268 3c9-9 13-20 12-34-14 8-22 18-24 31" />
        <path d="M250 145v16m-7-7 7 7 7-7" />
        <circle cx="250" cy="15" r="3" />
      </g>
    </svg>
  );
}

function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg className={`flourish ${className}`} viewBox="0 0 220 28" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 14h70m76 0h70M74 14c13 0 15-9 25-9 5 0 8 4 11 9 3-5 6-9 11-9 10 0 12 9 25 9m-72 0c13 0 15 9 25 9 5 0 8-4 11-9 3 5 6 9 11 9 10 0 12-9 25-9" />
        <path d="M101 14c3-7 15-7 18 0-3 7-15 7-18 0Zm9 0 4-4m-4 4 4 4" />
        <circle cx="82" cy="14" r="2" /><circle cx="138" cy="14" r="2" />
      </g>
    </svg>
  );
}

function Calendar() {
  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  return (
    <div className="calendar-card" aria-label="November 2026 calendar">
      <h3>November 2026</h3>
      <div className="calendar-grid calendar-weekdays">{weekdays.map((day) => <span key={day}>{day}</span>)}</div>
      <div className="calendar-grid">
        {CALENDAR_CELLS.map((day, index) => (
          <span key={index} className={day === 19 ? "reception-day" : day === 20 ? "wedding-day" : ""}>
            {day === 20 ? <><i>♥</i><b>{day}</b></> : day}
          </span>
        ))}
      </div>
      <div className="calendar-key"><span><i className="key-reception" /> Reception · 19</span><span><i className="key-wedding" /> Muhurtham · 20</span></div>
    </div>
  );
}

export default function Home() {
  const [coverOpen, setCoverOpen] = useState(false);
  const [coverLeaving, setCoverLeaving] = useState(false);
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [musicOn, setMusicOn] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const openingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const invitationRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!coverLeaving || !coverRef.current) return;
    const cover = coverRef.current;
    // Finish even if the browser cancels an animation (for example on tab switches).
    openingTimer.current = setTimeout(() => setCoverOpen(true), 3100);
    const animations: Animation[] = [];
    const play = (element: Element | null, frames: Keyframe[], options: KeyframeAnimationOptions) => {
      if (element) animations.push(element.animate(frames, { fill: "both", ...options }));
    };
    play(cover.querySelector(".ganesh-seal"), [
      { filter: "brightness(1)", boxShadow: "0 0 20px #e1bc7c55" },
      { filter: "brightness(1.4)", boxShadow: "0 0 55px 12px #edc66e99", offset: .5 },
      { filter: "brightness(1)", boxShadow: "0 0 20px #e1bc7c55" },
    ], { duration: 1000 });
    play(cover.querySelector(".ganesh-seal img"), [{ opacity: 1 }, { opacity: .3 }, { opacity: 1 }], { duration: 500, iterations: 2 });
    cover.querySelectorAll(".opening-stars span").forEach(star => play(star, [
      { opacity: 0, transform: "translateY(20px) scale(.2)" },
      { opacity: 1, offset: .3 },
      { opacity: 0, transform: "translateY(-150px) scale(1.2) rotate(70deg)" },
    ], { duration: 1000, delay: 1000, easing: "ease-out" }));
    play(cover.querySelector(".cover-card"), [
      { transform: "translateY(0)", opacity: 1 },
      { transform: "translateY(-110vh)", opacity: 0 },
    ], { duration: 1000, delay: 2000, easing: "cubic-bezier(.45,0,.2,1)" });
    play(cover, [{ opacity: 1 }, { opacity: 0 }], { duration: 1000, delay: 2000 });
    void animations[animations.length - 1].finished.then(() => setCoverOpen(true)).catch(() => {});
    return () => {
      animations.forEach(animation => animation.cancel());
      if (openingTimer.current) clearTimeout(openingTimer.current);
    };
  }, [coverLeaving]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (!coverOpen) document.body.style.overflow = "hidden";
    else invitationRef.current?.focus({ preventScroll: true });
    return () => { document.body.style.overflow = previousOverflow; };
  }, [coverOpen]);

  useEffect(() => () => {
    if (openingTimer.current) clearTimeout(openingTimer.current);
  }, []);

  /* Countdown */
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, WEDDING_TIME - Date.now());
      setRemaining({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
      });
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  /* Scroll progress */
  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? (root.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-reveal via IntersectionObserver */
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [coverOpen]);

  const openInvitation = () => {
    if (coverLeaving) return;
    window.scrollTo({ top: 0, behavior: "instant" });
    // Open explicitly starts the requested three-second celebration.
    setCoverLeaving(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.42;
      void audio.play().then(() => setMusicOn(true)).catch(() => setMusicOn(false));
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) void audio.play().then(() => setMusicOn(true)).catch(() => setMusicOn(false));
    else { audio.pause(); setMusicOn(false); }
  };

  return (
    <main className="royal-wedding">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <audio ref={audioRef} src="/assets/mp3/music.mp3" loop preload="none" />

      {!coverOpen && (
        <div ref={coverRef} className={`cover-screen${coverLeaving ? " opening-active" : ""}`} role="dialog" aria-modal="true" aria-label="Wedding invitation cover">
          {coverLeaving && <div className="opening-stars" aria-hidden="true" style={{ display: "block", position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none", overflow: "hidden" }}>
            {Array.from({ length: 24 }, (_, index) => <span key={index} style={{ position: "absolute", opacity: 0, color: "#ffe2a0", left: `${8 + (index * 37 % 84)}%`, top: `${15 + (index * 23 % 70)}%`, fontSize: `${10 + index % 4 * 5}px` }}>♥</span>)}
          </div>}
          <div className="cover-card" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 22px 64px", minHeight: 0, width: "min(360px, 100%)", overflow: "hidden", isolation: "isolate" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: "0 0 auto", height: 85, overflow: "hidden", opacity: .2, zIndex: -1, pointerEvents: "none" }}><img src="/assets/img/royal-flower.webp" alt="" style={{ position: "absolute", width: "100%", bottom: 0 }} /></div>
            <div className="ganesh-seal" style={{ position: "relative", top: "auto", left: "auto", transform: "none", flexShrink: 0, width: 60, height: 60, margin: "0 0 32px" }}><img src={GANESH_IMG} alt="Shri Ganesh" /></div>
            <h1 style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", margin: 0, font: "400 30px/1.15 Baskerville, 'Times New Roman', serif" }}><span>Srisha</span><i style={{ font: "400 20px/1.2 Georgia, serif", margin: "4px 0" }}>&amp;</i><span>Harivarmaa</span></h1>
            <Flourish className="cover-flourish" />
            <p className="cover-date">20 November 2026</p>
            <p className="cover-invite">Cordially invite you</p>
            <button className="open-button" onClick={openInvitation} disabled={coverLeaving} id="open-invitation-btn">{coverLeaving ? "Opening…" : "Open"}</button>
            <div aria-hidden="true" style={{ position: "absolute", inset: "auto 0 0", height: 75, overflow: "hidden", opacity: .2, zIndex: -1, pointerEvents: "none" }}><img src="/assets/img/royal-flower.webp" alt="" style={{ position: "absolute", width: "100%", top: 0, transform: "rotate(180deg)" }} /></div>
          </div>
        </div>
      )}

      <button className="music-button" onClick={toggleMusic} aria-label={musicOn ? "Pause music" : "Play music"}>
        <span className={musicOn ? "sound-bars is-playing" : "sound-bars"}><i /><i /><i /><i /></span>
      </button>

      <div className={`invitation-frame${coverOpen ? " invitation-entered" : " invitation-waiting"}`} ref={invitationRef} tabIndex={-1} inert={!coverOpen}>
        <section className="reference-hero" id="welcome">
          <div className="hero-flower-border" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "100%", aspectRatio: "2.6", overflow: "hidden", pointerEvents: "none" }}>
            <img src="/assets/img/royal-flower.webp" alt="" width="900" height="544" style={{ position: "absolute", width: "94%", maxWidth: "none", height: "auto", left: "3%", bottom: 0 }} />
          </div>
          <p className="hero-kicker">The Wedding Of</p>
          <h1><span>Srisha</span><i>&amp;</i><span>Harivarmaa</span></h1>
        </section>

        <section className="ceremony-info" id="ceremony" style={{ position: "relative", paddingTop: 76, border: 0 }}>
          <div className="ceremony-frame-top" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 78, pointerEvents: "none" }}>
            <img className="ceremony-corner left" src="/assets/img/frame-corner-top-left.webp" alt="" width="62" height="62" style={{ position: "absolute", top: 0, left: -10, width: 62, height: 62 }} />
            <div className="ceremony-frame-center" style={{ position: "absolute", left: 58, right: 58, top: 8, display: "flex", alignItems: "center", gap: 12 }}><span style={{ flex: 1, height: 1, background: "#dfbd79" }} /><img src="/assets/img/frame-middle-horizontal.webp" alt="" width="66" height="22" style={{ width: 66, height: "auto", flexShrink: 0 }} /><span style={{ flex: 1, height: 1, background: "#dfbd79" }} /></div>
            <img className="ceremony-corner right" src="/assets/img/frame-corner-top-left.webp" alt="" width="62" height="62" style={{ position: "absolute", top: 0, right: -10, width: 62, height: 62, transform: "scaleX(-1)" }} />
          </div>
          <SectionHeading>Ceremony Info</SectionHeading>
          <div className="parents-row">
            <div><p>Mr. &amp; Mrs.</p><span>G. Rushendrababu<br />R. Vijaya</span></div>
            <div><p>Mr. &amp; Mrs.</p><span>G. Govindarajulu<br />G. Shamala</span></div>
          </div>
          <p className="announcement">With hearts full of happiness<br />we announce our wedding</p>
          <h2 className="couple-name">Srisha G.R.<br /><i>&amp;</i><br />Harivarmaa G.S.</h2>

          <div className="ceremony-event">
            <SectionHeading>Wedding Ceremony</SectionHeading>
            <p className="event-time-large">9:10 – 10:10 AM</p>
            <DateLine day="FRIDAY" date="20" month="NOVEMBER" />
            <p className="event-year">2026</p>
            <p className="event-location">Sri Padmavathi Kalyana Mantapam<br /><span>Arch Road, Ideal Homes Township<br />Rajarajeshwari Nagar, Bengaluru – 560098</span></p>
          </div>

          <div className="ceremony-event reception-event">
            <SectionHeading>Wedding Reception</SectionHeading>
            <p className="event-time-large">7:00 PM onwards</p>
            <DateLine day="THURSDAY" date="19" month="NOVEMBER" />
            <p className="event-year">2026</p>
            <p className="event-location">Sri Padmavathi Kalyana Mantapam<br /><span>Rajarajeshwari Nagar, Bengaluru</span></p>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <OrnamentBreak />
          <SectionHeading>Photo Gallery</SectionHeading>
          <div className="photo-grid">
            {PHOTOS.map((src, index) => (
              <a href={src} target="_blank" rel="noreferrer" key={src} aria-label={`Open wedding photo ${index + 1}`}>
                <img src={src} alt={`Srisha and Harivarmaa, photo ${index + 1}`} />
              </a>
            ))}
          </div>
        </section>

        <section className="date-info" id="date">
          <OrnamentBreak />
          <SectionHeading>Reception Info</SectionHeading>
          <p className="reception-summary">Thursday · 19 November 2026<br />7:00 PM onwards</p>
          <p className="countdown-label">Countdown</p>
          <div className="countdown-grid">
            {Object.entries(remaining).map(([unit, value]) => (
              <div className="countdown-cell" key={unit}><strong>{String(value).padStart(2, "0")}</strong><span>{unit}</span></div>
            ))}
          </div>
          <Calendar />
        </section>

        <section className="venue-section" id="venue">
          <OrnamentBreak />
          <SectionHeading>Wedding &amp; Reception Venue</SectionHeading>
          <h3 className="venue-name">Sri Padmavathi Kalyana Mantapam</h3>
          <p className="venue-address">Arch Road, Ideal Homes Township<br />Rajarajeshwari Nagar, Bengaluru – 560098</p>
          <div className="map-frame"><iframe title="Map to Sri Padmavathi Kalyana Mantapam" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          <a className="directions-link" href={MAP_LINK} target="_blank" rel="noreferrer">➤ &nbsp; Get Directions</a>
        </section>

        <section className="schedule-section" id="schedule">
          <OrnamentBreak />
          <SectionHeading>Wedding Day Schedule</SectionHeading>
          <div className="schedule-list">
            <div><time>7:00 PM</time><span className="schedule-dot" /><p>Wedding Reception<br /><small>Thursday · 19 November</small></p></div>
            <div><time>9:10 AM</time><span className="schedule-dot" /><p>Muhurtham begins<br /><small>Friday · 20 November</small></p></div>
            <div><time>10:10 AM</time><span className="schedule-dot" /><p>Wedding ceremony concludes<br /><small>Sri Padmavathi Kalyana Mantapam</small></p></div>
          </div>
        </section>

        <footer className="wedding-footer">
          <OrnamentBreak />
          <p className="footer-blessing">With best compliments from</p>
          <h2>Saikrishna G.R.</h2>
          <p className="footer-degree">B.Sc. (CS)</p>
          <p className="footer-thanks">We look forward to celebrating with you</p>
          <p className="footer-mark">S <i>&amp;</i> H</p>
        </footer>
      </div>
    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="ornate-heading"><span>{children}</span></h2>;
}

function DateLine({ day, date, month }: { day: string; date: string; month: string }) {
  return <div className="event-date-line"><span>{day}</span><i /> <strong>{date}</strong><i /><span>{month}</span></div>;
}

function OrnamentBreak() {
  return <div className="ornament-break" aria-hidden="true"><span>❧</span><Flourish /><span>❧</span></div>;
}



