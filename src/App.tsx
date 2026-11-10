import { useState } from "react";
import {
  ArrowUpRight,
  Star,
  Utensils,
  X,
  ChevronLeft,
  ChevronRight,
  Space,
} from "lucide-react";

const logo = "pizza88-logo.png";
// Google Maps / restaurant review link supplied by you:
const REVIEW_URL =
  "https://www.google.com/search?q=pizza+88&rlz=1CDGOYI_enEG1086EG1086&oq=pizza&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIHCAAQABiPAjINCAEQLhiDARixAxiABDIGCAIQIxgnMgcIAxAAGIAEMgoIBBAAGLEDGIAEMhAIBRAuGMcBGLEDGNEDGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEIMzEzOGoxajeoAhmwAgHiAwQYASBf&hl=en-US&sourceid=chrome-mobile&source=chrome.ob&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FERGJXZWEtNXphdU9jVTNxMV9NR2RDTXZZUWx1WW9rdHVaM2lqYzIyTjRjbmZ3elRiVnVWN250UG12RHgzaTVONUtsSng3bnJ2RlpxVzZGNmhPTFN6UkMyeEo3dVlmNUFmWEpMTWFSQy1jdFVpZ19wZ3F4VVVZEhdmMGJwYXJTbUZQMkctZDhQbnJDOTZRbxoiQUhOMEU3SG40OGJoX2dFNVRDR1c0S0I4QzBjclprWTAtZxIEODA1MRoBMyoAMAA4AUAAGAAglIqrgAlKAhAB";

// Put menu images in public/menu and add their filenames here:
const MENU_IMAGES: string[] = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const prev = () =>
    setSelected((i) =>
      i === null ? null : (i - 1 + MENU_IMAGES.length) % MENU_IMAGES.length,
    );
  const next = () =>
    setSelected((i) => (i === null ? null : (i + 1) % MENU_IMAGES.length));

  return (
    <main className="page">
      <header>
        <img className="logo" src={logo} alt="" style={{width: "15%" , height: "auto"}} />
        <div>
         <a className="logo" style={{margin: "10px"}} href="https://www.facebook.com/share/1MNyaxUUZk/?mibextid=wwXIfr">facebook</a>
         <a className="logo" style={{margin: "10px"}} href="https://www.instagram.com/pizza88egy?xtok=aWw2MnUwbDF6MjZ2">instagram</a>
        </div>

      </header>
      <section className="hero">
        <div className="copy">
          <h1>
            EAT BETTER
            <br /> <em>PIZZA.</em>
          </h1>
          <h2 className="thanks" style={{fontSize:'13px'}}>✦ &nbsp; Fouad Branch</h2>
          <div className="buttons">
            <button className="btn primary" onClick={() => setMenuOpen(true)}>
              <i>
                <Utensils />
              </i>
              <span>
                <strong>VIEW OUR MENU</strong>
                <small>Find your perfect slice</small>
              </span>
              <ArrowUpRight />
            </button>
            <a
              className="btn secondary"
              href={REVIEW_URL}
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <Star />
              </i>
              <span>
                <strong>RATE YOUR EXPERIENCE</strong>
                <small>Your feedback means a lot</small>
              </span>
              <ArrowUpRight />
            </a>
          </div>
          <p className="thanks" style={{fontSize:'10px'}}>✦ &nbsp; THANK YOU FOR CHOOSING PIZZA 88</p>
        </div>
        <div className="pizza-art">
          <div className="ring"></div>
          <div className="ring ring2"></div>
          <img src={logo} style={{width: "70%" , height: "auto"}} />
          <b>88</b>
          <label>FRESH INGREDIENTS</label>
          <label className="love">MADE WITH LOVE ♥</label>
        </div>
      </section>
      <footer>
        <span>© Created and developed by<br/>&nbsp;&nbsp;&nbsp; Abdullah Mostafa</span>
        <span>© The Branch Manager is<br/>&nbsp;&nbsp;&nbsp; Milad</span>
      </footer>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}>
          <section className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <small>PIZZA 88</small>
                <h2>
                  OUR <em>MENU</em>
                </h2>
              </div>
              <button className="close" onClick={() => setMenuOpen(false)}>
                <X />
              </button>
            </div>
            {MENU_IMAGES.length === 0 ? (
              <div className="empty">
                <Utensils size={34} />
                <button onClick={() => setMenuOpen(false)}>BACK TO HOME</button>
              </div>
            ) : (
              <div className="gallery">
                {MENU_IMAGES.map((file, i) => (
                  <button
                    className="menu-card"
                    key={file}
                    onClick={() => setSelected(i)}
                  >
                    <img src={"/menu/" + file} alt={"Menu page " + (i + 1)} />
                    <small>PAGE {i + 1}</small>
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {selected !== null && MENU_IMAGES[selected] && (
        <div className="viewer" onClick={() => setSelected(null)}>
          <button className="x" onClick={() => setSelected(null)}>
            <X />
          </button>
          {MENU_IMAGES.length > 1 && (
            <button
              className="arrow left"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft />
            </button>
          )}
          <img
            src={`/menu/${MENU_IMAGES[selected]}`}
            onClick={(e) => e.stopPropagation()}
            alt="Menu"
          />
          {MENU_IMAGES.length > 1 && (
            <button
              className="arrow right"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight />
            </button>
          )}
          <small>
            {selected + 1} / {MENU_IMAGES.length}
          </small>
        </div>
      )}
    </main>
  );
}
