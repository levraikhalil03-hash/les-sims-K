:root {
  --bg-top: #98d8ff;
  --bg-bottom: #6be0c1;
  --ink: #1d4069;
  --ink-soft: #4d6c8f;
  --white: rgba(255, 255, 255, 0.9);
  --white-strong: rgba(255, 255, 255, 0.97);
  --line: rgba(81, 132, 181, 0.28);
  --shadow: 0 18px 40px rgba(49, 88, 138, 0.18);
  --accent: #57c84d;
  --accent-2: #4ba8ff;
  --accent-3: #ffd55a;
  --danger: #ff6b8c;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  font-family: "Trebuchet MS", "Segoe UI", system-ui, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at 20% 12%, rgba(255,255,255,0.85), rgba(255,255,255,0) 20%),
    radial-gradient(circle at 80% 22%, rgba(255,255,255,0.45), rgba(255,255,255,0) 18%),
    linear-gradient(135deg, #74b4ff 0%, #8ed2ff 36%, #79dbc5 68%, #3cc68a 100%);
}
button, input, select { font: inherit; }
button { cursor: pointer; }
main { padding: 0 18px 24px; }
.app-shell { max-width: 1480px; margin: 0 auto; }
.topbar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 18px 10px;
}
.brand-lockup { display: flex; align-items: center; gap: 14px; }
.plumbob {
  width: 28px; height: 44px; background: linear-gradient(180deg, #dcff97, #57c84d);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  border: 3px solid rgba(36, 102, 32, 0.2);
  box-shadow: var(--shadow);
}
.eyebrow { margin: 0; text-transform: uppercase; letter-spacing: 0.12em; font-size: 0.73rem; color: var(--ink-soft); }
.topbar h1 { margin: 2px 0 0; font-size: 2.2rem; }
.topbar-actions, .button-row, .menu-actions, .form-actions { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.status-pill, .tiny-pill {
  padding: 10px 14px; border-radius: 999px; background: var(--white); border: 1px solid var(--line); color: var(--ink-soft); box-shadow: var(--shadow);
}
.top-icon-btn {
  width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--line); background: var(--white); box-shadow: var(--shadow);
}
.screen { display: none; }
.screen.active { display: block; }
.panel, .glass-panel, .panel-soft {
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}
.panel {
  background: rgba(255, 255, 255, 0.74);
  backdrop-filter: blur(10px);
  border-radius: 28px;
}
.glass-panel {
  background: rgba(255,255,255,0.62);
  backdrop-filter: blur(10px);
  border-radius: 24px;
}
.panel-soft {
  background: rgba(255,255,255,0.38);
  backdrop-filter: blur(8px);
  border-radius: 34px;
}
.primary-btn, .secondary-btn, .ghost-btn {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 13px 18px;
  transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;
}
.primary-btn { background: linear-gradient(180deg, #7add65, #54c24c); color: white; }
.secondary-btn, .ghost-btn { background: var(--white); color: var(--ink); }
.xl { min-width: 260px; justify-content: center; font-size: 1.1rem; }
button:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 10px 18px rgba(49, 88, 138, 0.16); }
button:disabled { opacity: 0.5; cursor: not-allowed; }
.vertical { flex-direction: column; align-items: flex-start; }
.centered { justify-content: center; }
.compact { margin-bottom: 14px; }

.menu-shell {
  min-height: 78vh;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  padding: 30px;
}
.menu-content h2 { font-size: clamp(2.2rem, 5vw, 4.4rem); margin: 8px 0 14px; }
.menu-content p { max-width: 55ch; color: var(--ink-soft); line-height: 1.6; }
.menu-preview-grid {
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; align-content: center;
}
.mini-card {
  padding: 18px; border-radius: 22px; background: var(--white-strong); border: 1px solid var(--line);
  display: grid; gap: 10px;
}
.mini-card span { font-size: 2rem; }
.mini-card p { margin: 0; color: var(--ink-soft); }

.section-heading {
  display: flex; justify-content: space-between; align-items: center; gap: 12px;
  margin-bottom: 16px;
}
.section-heading h2 { margin: 4px 0 0; font-size: clamp(1.6rem, 4vw, 2.8rem); }

.cak-shell {
  display: grid; grid-template-columns: minmax(290px, 1.05fr) minmax(360px, 0.95fr) minmax(320px, 1fr);
  gap: 16px;
  padding: 16px;
}
.cak-left, .cak-right { display: grid; gap: 14px; align-content: start; }
.identity-card, .hex-flow, .selection-panel, .wardrobe-panel { padding: 16px; }
.identity-top-row, .panel-title-row, .wardrobe-header, .worlds-toolbar {
  display: flex; justify-content: space-between; align-items: center; gap: 12px;
}
.identity-card h3, .hex-flow h3, .selection-panel h3, .wardrobe-panel h3, .world-detail h3, .job-panel h4, .panel h3 { margin: 0; }
.grid { display: grid; gap: 12px; }
.grid.two { grid-template-columns: repeat(2, minmax(0,1fr)); }
.grid.three { grid-template-columns: repeat(3, minmax(0,1fr)); }
.compact-grid { margin-top: 12px; }
label { display: grid; gap: 6px; font-size: 0.95rem; color: var(--ink-soft); }
input[type="text"], select {
  border-radius: 14px; border: 1px solid var(--line); background: rgba(255,255,255,0.92);
  padding: 11px 12px; color: var(--ink);
}
input[type="range"] { width: 100%; accent-color: #4aa2ff; }
.muted { margin: 0; color: var(--ink-soft); }

.hex-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; }
.hex-placeholder {
  width: 54px; height: 60px; clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%);
  display: grid; place-items: center; background: rgba(126, 176, 224, 0.25); border: 2px solid rgba(255,255,255,0.78); font-weight: bold;
}
.hex-placeholder.active { border-color: var(--accent-3); }
.hex-placeholder.filled { background: linear-gradient(180deg, #7fc6ff, #77aef2); color: white; }
.hex-placeholder.aspiration.filled { background: linear-gradient(180deg, #ffd96f, #ffb84c); }

.choice-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-top: 12px; }
.choice-card {
  background: rgba(255,255,255,0.74); border: 2px solid transparent; border-radius: 18px; padding: 12px;
  display: grid; gap: 6px; text-align: left; color: var(--ink);
}
.choice-card.active { border-color: #7bcf63; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.8); }
.choice-card .icon { font-size: 1.5rem; }
.choice-card .tag { font-size: 0.72rem; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.08em; }
.choice-card p { margin: 0; color: var(--ink-soft); font-size: 0.88rem; }

.sim-stage {
  position: relative; min-height: 760px; overflow: hidden; display: grid; align-items: center; justify-items: center; padding: 24px;
}
.stage-gradient {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(97,159,255,0.8), rgba(97,159,255,0) 34%),
              radial-gradient(circle at 75% 40%, rgba(71,218,149,0.75), rgba(71,218,149,0) 30%),
              linear-gradient(135deg, #5da8ff 10%, #8fdcff 52%, #42c68f 92%);
}
.avatar-stage.advanced {
  position: relative; z-index: 2; min-height: 590px; display: flex; align-items: end; justify-content: center; gap: 24px;
}
.rotate-btn, .footer-tool, .category-pill {
  border-radius: 999px; border: 1px solid var(--line); background: var(--white); color: var(--ink); box-shadow: var(--shadow);
}
.rotate-btn { width: 56px; height: 56px; font-size: 1.5rem; }
.avatar-card.improved {
  position: relative; width: 255px; height: 560px; filter: drop-shadow(0 20px 20px rgba(48, 89, 139, 0.18));
}
.hair-layer {
  position: absolute; top: 40px; left: 50%; transform: translateX(-50%); width: 150px; height: 105px;
  border-radius: 48% 52% 38% 42%; background: linear-gradient(180deg, #5b3d2d, #392317); z-index: 2;
}
.avatar-head {
  position: absolute; top: 78px; left: 50%; transform: translateX(-50%); width: 138px; height: 162px;
  border-radius: 46% 46% 43% 43%; background: #e6b691; z-index: 3;
}
.eye { position: absolute; top: 62px; width: 20px; height: 10px; border-radius: 999px; background: #473443; }
.eye.left { left: 32px; }
.eye.right { right: 32px; }
.nose { position: absolute; left: 50%; top: 66px; transform: translateX(-50%); width: 10px; height: 32px; border-radius: 999px; background: rgba(182, 123, 98, 0.4); }
.mouth { position: absolute; left: 50%; bottom: 32px; transform: translateX(-50%); width: 38px; height: 16px; border-bottom: 3px solid #a75970; border-radius: 0 0 30px 30px; }
.avatar-torso {
  position: absolute; left: 50%; top: 210px; transform: translateX(-50%); width: 185px; height: 190px;
  border-radius: 30px 30px 24px 24px; background: linear-gradient(180deg, #303944, #545e71);
}
.avatar-torso::before, .avatar-torso::after {
  content: ""; position: absolute; top: 15px; width: 38px; height: 170px; border-radius: 20px; background: #d6a17b;
}
.avatar-torso::before { left: -25px; transform: rotate(7deg); }
.avatar-torso::after { right: -25px; transform: rotate(-7deg); }
.avatar-legs {
  position: absolute; left: 50%; bottom: 12px; transform: translateX(-50%); width: 150px; height: 170px;
  border-radius: 22px 22px 18px 18px; background: linear-gradient(180deg, #bfd7f8, #8fb3da);
}
.avatar-legs::before, .avatar-legs::after {
  content: ""; position: absolute; bottom: -18px; width: 54px; height: 30px; border-radius: 18px; background: #273449;
}
.avatar-legs::before { left: 12px; }
.avatar-legs::after { right: 12px; }
.body-sliders, .sim-footer-bar {
  position: absolute; z-index: 2; display: flex; gap: 14px; align-items: center;
}
.body-sliders { left: 18px; top: 28px; width: 148px; flex-direction: column; padding: 14px; }
.sim-footer-bar { bottom: 20px; left: 50%; transform: translateX(-50%); padding: 10px 14px; }
.footer-tool { width: 48px; height: 48px; }
.footer-tool.active { background: linear-gradient(180deg, #7ad66c, #57c84d); color: white; }
.slim-panel { padding: 12px 14px; }

.category-pills, .build-chip-row { display: flex; gap: 8px; flex-wrap: wrap; }
.category-pill { padding: 10px 14px; }
.category-pill.active { background: linear-gradient(180deg, #87d8ff, #6ab7ff); color: white; }
.wardrobe-gallery {
  display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px; margin: 14px 0;
}
.outfit-card {
  aspect-ratio: 0.85; border-radius: 18px; border: 2px solid transparent; background: rgba(255,255,255,0.78);
  display: grid; place-items: center; text-align: center; padding: 10px; color: var(--ink);
}
.outfit-card.active { border-color: var(--accent); }
.outfit-card span { font-size: 2rem; }
.outfit-card strong { display: block; }
.animal-panel { margin-top: 10px; display: grid; gap: 10px; }
.animal-preview { background: rgba(255,255,255,0.72); border: 1px solid var(--line); border-radius: 18px; padding: 12px; }
.sticky-actions { margin-top: 16px; justify-content: flex-end; }
.hidden { display: none !important; }

.world-selector { padding: 20px; }
.worlds-toolbar { margin-bottom: 18px; }
.world-orbit {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 18px; margin-bottom: 18px;
}
.world-bubble {
  background: transparent; border: none; display: grid; gap: 10px; justify-items: center; text-align: center;
}
.world-bubble .circle {
  width: 144px; height: 144px; border-radius: 50%; border: 6px solid rgba(255,255,255,0.9); box-shadow: var(--shadow);
  display: grid; place-items: center; font-size: 3rem; color: white;
  background: linear-gradient(180deg, rgba(76, 163, 255, 0.95), rgba(64, 142, 221, 0.92));
}
.world-bubble.selected .circle { outline: 5px solid rgba(255, 213, 90, 0.75); transform: scale(1.04); }
.world-bubble h3 { margin: 0; }
.world-bubble p { margin: 0; color: var(--ink-soft); max-width: 18ch; }
.world-detail { padding: 18px; margin-bottom: 18px; }

.simulation-layout { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 18px; }
.live-panel, .build-panel { padding: 20px; }
.live-summary, .job-panel, .lot-rules {
  background: rgba(255,255,255,0.68); border: 1px solid var(--line); border-radius: 22px; padding: 14px;
}
.stats-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 14px 0; }
.stat-card { background: rgba(255,255,255,0.7); border: 1px solid var(--line); border-radius: 18px; padding: 12px; }
.meter { height: 10px; border-radius: 999px; background: rgba(84, 140, 192, 0.18); overflow: hidden; margin-top: 8px; }
.meter span { display: block; height: 100%; background: linear-gradient(90deg, #53a7ff, #62d77a); }
.build-categories { display: grid; gap: 12px; }
.build-chip {
  padding: 10px 12px; border-radius: 999px; background: rgba(255,255,255,0.74); border: 1px solid var(--line); color: var(--ink-soft);
}

@media (max-width: 1180px) {
  .cak-shell, .simulation-layout, .menu-shell { grid-template-columns: 1fr; }
  .sim-stage { min-height: 620px; }
}

@media (max-width: 760px) {
  .grid.two, .grid.three, .stats-grid, .wardrobe-gallery { grid-template-columns: 1fr; }
  .topbar, main { padding-left: 12px; padding-right: 12px; }
  .topbar { align-items: flex-start; gap: 12px; flex-direction: column; }
  .world-bubble .circle { width: 120px; height: 120px; }
  .avatar-card.improved { transform: scale(0.9); }
}
