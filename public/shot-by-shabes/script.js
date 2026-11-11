/* =====================================================
   SHOT SHABYS — BULLET THROUGH THE SIGN
   Real layered exports: base sign+letters, a trail layer
   that tears open behind the bullet, and the bullet itself
   (the artwork's own asset) ripping in and freezing at rest.
===================================================== */
const CONFIG = {
  dieCount: 4,
  dieSides: 4,
  spreadDeg: 55,
  distMin: 200,
  distMax: 420,
  scaleMin: 1.4,
  scaleMax: 2.4,
  tumbleDur: 0.55,
  surgeDur: 0.5,
  tumbleDelay: 0.4,
};

const MAX_DICE = 9000;
const POWER_GAG_OVER = "NO IT'S NOT OVER THAT POWER LEVEL";
const POWER_GAG_UNDER = "NO IT'S NOT UNDER THAT POWER LEVEL";
const CANVAS_DIE_THRESHOLD = 60; // above this many dice, render debris on canvas instead of DOM

let sixtyNineCount = 0; // how many times 69 has been entered, so the joke escalates then resets

function checkEasterEggs(value) {
  const egg = document.getElementById("easterEgg");
  if (value === 420) {
    egg.textContent = "Not in indiana you don't";
    return;
  }
  if (value === 69) {
    sixtyNineCount++;
    if (sixtyNineCount % 69 === 0) {
      egg.textContent = "nice.";
    } else if (sixtyNineCount === 1) {
      egg.textContent = "nice.";
    } else if (sixtyNineCount === 2) {
      egg.textContent = "It's not funny the second time.";
    } else {
      egg.textContent = "real mature";
    }
    return;
  }
}

function rollDie() {
  return Math.floor(Math.random() * Math.abs(CONFIG.dieSides)) + 1;
}

function showPowerGag(message) {
  const result = document.getElementById("diceResult");
  result.innerHTML = `<div class="power-gag">${message}</div>`;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

/* ---------- palindrome highlighting ---------- */
function isPalindrome(n) {
  const s = String(Math.abs(n));
  // need at least 3 digits so two-number palindromes (11, 22, 88...) don't count
  return s.length > 2 && s === s.split("").reverse().join("");
}

// Rarity tiers by how many times the same palindrome repeats in a roll
const PAL_TIERS = [
  { min: 1, color: "#35d461", name: "green" },      // least rare
  { min: 2, color: "#f2d518", name: "yellow" },
  { min: 3, color: "#f04b3a", name: "red" },
  { min: 4, color: "#ff5fd0", name: "pink" },
  { min: 6, color: "#b26bff", name: "purple" },
  { min: 9, color: "#2ee6ff", name: "neon-blue" },  // most rare
];

function palTierColor(count) {
  let color = PAL_TIERS[0].color;
  for (const t of PAL_TIERS) if (count >= t.min) color = t.color;
  return color;
}

function recordPalindromes(values, total) {
  const panel = document.getElementById("palPanel");
  const list = document.getElementById("palList");
  if (!panel || !list) return;
  list.innerHTML = "";

  const counts = {};
  values.forEach((n) => {
    if (isPalindrome(n)) counts[n] = (counts[n] || 0) + 1;
  });
  // the roll's total counts as a palindrome entry too (e.g. 1 + 22 + 303 + 22 + 1 = 349... or a pal total)
  const totalIsPal = typeof total === "number" && isPalindrome(total);
  const pals = Object.keys(counts).map(Number).sort((a, b) => a - b);
  if (!pals.length && !totalIsPal) {
    panel.classList.remove("active");
    return;
  }
  panel.classList.add("active");

  let maxCount = 0;
  pals.forEach((p) => {
    const c = counts[p];
    if (c > maxCount) maxCount = c;
    const color = palTierColor(c);
    const el = document.createElement("span");
    el.className = "pal-entry";
    el.style.setProperty("--pal-color", color);
    el.innerHTML = `${p} × <b class="pal-count">0</b>`;
    list.appendChild(el);
    const counter = { n: 0 };
    gsap.to(counter, {
      n: c,
      duration: Math.min(0.6, 0.08 * c),
      ease: "power2.out",
      onUpdate: () => { el.querySelector(".pal-count").textContent = Math.round(counter.n); },
    });
  });

  // flag a palindromic total separately, marked as the sum
  if (totalIsPal) {
    const el = document.createElement("span");
    el.className = "pal-entry pal-total";
    el.style.setProperty("--pal-color", palTierColor(2));
    el.innerHTML = `Σ ${total}`;
    list.appendChild(el);
    maxCount = Math.max(maxCount, 2);
  }

  // A big palindrome haul triggers the Weird Al gag
  if (maxCount >= 3) showEgg("Weird Al Bob Dylan Parody 🎤");
}

function recordPrimes(values) {
  // tally only primes above 7, as "prime × count" entries
  const counts = {};
  values.forEach((n) => {
    if (isPrime(n) && n > 7) counts[n] = (counts[n] || 0) + 1;
  });
  const panel = document.getElementById("primePanel");
  const list = document.getElementById("primeList");
  list.innerHTML = ""; // fresh tally every roll
  const primes = Object.keys(counts).map(Number).sort((a, b) => a - b);
  if (!primes.length) {
    panel.classList.remove("active");
    return;
  }
  panel.classList.add("active");
  primes.forEach((p) => {
    const el = document.createElement("span");
    el.className = "prime-entry";
    const target = counts[p];
    el.innerHTML = `${p} × <b class="prime-count">0</b>`;
    list.appendChild(el);
    // the count ticks up very quickly to its final value
    const counter = { n: 0 };
    gsap.to(counter, {
      n: target,
      duration: Math.min(0.6, 0.08 * target),
      ease: "power2.out",
      onUpdate: () => { el.querySelector(".prime-count").textContent = Math.round(counter.n); },
    });
  });
  showEgg("Prime Number Prime Rib 🍖");
}

function recordStats(values) {
  if (!values.length) return;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const freq = {};
  let mode = values[0], maxF = 0;
  values.forEach((n) => {
    freq[n] = (freq[n] || 0) + 1;
    if (freq[n] > maxF) { maxF = freq[n]; mode = n; }
  });
  document.getElementById("statMedian").textContent = median;
  document.getElementById("statMean").textContent = mean.toFixed(2).replace(/\.?0+$/, "");
  document.getElementById("statMode").textContent = mode;
}

function showEgg(message) {
  document.getElementById("easterEgg").textContent = message;
}

function renderEquation(values) {
  const result = document.getElementById("diceResult");
  result.innerHTML = "";
  const sum = values.reduce((a, b) => a + b, 0);
  const subtracting = CONFIG.dieSides < 0; // negative-sided dice subtract instead of add
  const total = subtracting ? values.reduce((a, b) => a - b) : sum;
  window.lastRollSum = total; // saved for later site logic

  const CHARS_PER_LINE = 100;
  const joiner = subtracting ? " - " : " + ";
  // tally palindromes up front so each number can be highlighted by its rarity tier
  const palCounts = {};
  values.forEach((n) => { if (isPalindrome(n)) palCounts[n] = (palCounts[n] || 0) + 1; });
  const parts = values.map((v) => {
    if (isPalindrome(v)) {
      const c = palTierColor(palCounts[v]);
      return `<mark class="pal" style="--pal-color:${c}">${v}</mark>`;
    }
    return `${v}`;
  }); // each die's rolled value, e.g. 3 + 4 + 3 + 1
  const lines = [];
  let current = "";
  parts.forEach((part, i) => {
    const piece = (i === 0 ? "" : joiner) + part;
    if ((current + piece).length > CHARS_PER_LINE && current) {
      lines.push(current);
      current = part;
    } else {
      current += piece;
    }
  });
  if (current) lines.push(current);
  lines.push(`= ${total}`);

  recordPrimes(values); // log any prime rolls to the side panel
  recordPalindromes(values, total); // highlight palindromes, including a palindromic total
  recordStats(values); // median / mean / mode next to the prime & palindrome panels

  // All lines shrink together so no line is bigger than another as more are added
  const lineCount = lines.length;
  const fontSize = Math.max(0.45, 1.35 * Math.pow(0.9, lineCount - 1));
  lines.forEach((text, i) => {
    const div = document.createElement("div");
    const isSum = i === lines.length - 1;
    div.className = isSum ? "eq-line sum" : "eq-line";
    div.innerHTML = text; // palindrome numbers are wrapped in <mark> highlights
    if (!isSum) div.style.fontSize = `${fontSize}rem`; // sum stays at its large title size
    result.appendChild(div);
  });

  gsap.from(result.children, { opacity: 0, y: 10, duration: 0.3, stagger: 0.05, ease: "power2.out" });
}

/* ---------- small-count DOM dice path ---------- */
function buildSparks(container, count) {
  container.innerHTML = "";
  const sparks = [];
  const numbers = [];
  const useCaltrops = CONFIG.dieSides < 0; // negative-sided dice shed caltrops, otherwise triangles
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.className = useCaltrops ? "caltrop" : "triangle";
    const isDark = Math.random() > 0.5;
    if (isDark) s.classList.add("debris-white"); // black die with gold glow
    if (useCaltrops) {
      // three crossed lines form the caltrop
      for (let k = 0; k < 3; k++) {
        const line = document.createElement("i");
        line.style.transform = `rotate(${k * 60}deg)`;
        s.appendChild(line);
      }
    }
    container.appendChild(s);
    sparks.push(s);
    // The number lives inside the die so the two move as one
    const num = document.createElement("em");
    num.className = "die-number" + (isDark ? " on-dark" : "");
    s.appendChild(num);
    numbers.push(num);
  }
  return { sparks, numbers };
}

/* ---------- large-count canvas dice path ---------- */
function runCanvasDice(count, values) {
  const canvas = document.getElementById("diceCanvas");
  const plate = document.querySelector(".logo-plate");
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const plateRect = plate.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // reset so repeated replays don't compound the scale

  // origin: just past the sign's right edge, in viewport coordinates (canvas overlays the whole screen)
  const ox = plateRect.right + rect.width * 0.02;
  const oy = plateRect.top + plateRect.height * 0.5;
  const ceilingY = plateRect.top; // top edge of the logo; debris bounces off this line
  const spread = CONFIG.spreadDeg * Math.PI / 180;

  const parts = Array.from({ length: count }, (_, i) => {
    const angle = (Math.random() * 2 - 1) * spread;
    const dist = gsap.utils.random(CONFIG.distMin, CONFIG.distMax);
    const dark = Math.random() > 0.5;
    let ty = oy + Math.sin(angle) * dist;
    // deflect off the boundary line so nothing crosses above the logo's top edge
    if (ty < ceilingY) {
      const overshoot = ceilingY - ty;
      ty = ceilingY + overshoot * 0.55; // bounce back down
    }
    return {
      x: ox, y: oy, rot: 0,
      tx: ox + Math.cos(angle) * dist,
      ty,
      rotEnd: gsap.utils.random(-180, 180),
      scale: gsap.utils.random(CONFIG.scaleMin, CONFIG.scaleMax),
      dark,
      value: values[i],
    };
  });

  const state = { p: 0 };
  const tumbleDur = Math.min(CONFIG.tumbleDur, 0.8);
  const total = tumbleDur + CONFIG.surgeDur;

  const draw = () => {
    ctx.clearRect(0, 0, rect.width, rect.height);
    const p = state.p;
    for (const pt of parts) {
      const x = pt.x + (pt.tx - pt.x) * p;
      const y = pt.y + (pt.ty - pt.y) * p + (p > 0.7 ? (p - 0.7) * 100 : 0);
      const rot = pt.rot + (pt.rotEnd - pt.rot) * p;
      const sc = 0.5 + pt.scale * p;
      const fade = p > 0.85 ? (1 - p) / 0.15 : 1;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot * Math.PI / 180);
      ctx.scale(sc, sc);
      ctx.globalAlpha = fade;
      const caltrop = CONFIG.dieSides < 0;
      if (pt.dark) {
        ctx.strokeStyle = "#0b0b0b";
        ctx.fillStyle = "#0b0b0b";
        ctx.shadowColor = "rgba(245,197,24,0.9)";
        ctx.shadowBlur = 8;
      } else {
        ctx.strokeStyle = "#fff";
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "rgba(0,0,0,0.55)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetY = 2;
      }
      if (caltrop) {
        ctx.lineWidth = 1.5;
        for (let k = 0; k < 3; k++) {
          ctx.save();
          ctx.rotate(k * Math.PI / 3);
          ctx.beginPath();
          ctx.moveTo(0, -7);
          ctx.lineTo(0, 7);
          ctx.stroke();
          ctx.restore();
        }
      } else {
        ctx.beginPath();
        ctx.moveTo(0, -7);
        ctx.lineTo(6, 5);
        ctx.lineTo(-6, 5);
        ctx.closePath();
        ctx.fill();
      }
      // the rolled number sits on the die
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.fillStyle = pt.dark ? "#F5C518" : "#0b0b0b";
      ctx.font = "700 7px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(pt.value, 0, 0.5);
      ctx.restore();
    }
  };

  gsap.to(state, {
    p: 1,
    duration: total,
    ease: "power2.out",
    onUpdate: draw,
    onComplete: () => ctx.clearRect(0, 0, rect.width, rect.height),
  });
  window.__canvasState = state; // so a retrigger can kill an in-flight burst
}

function playLogoSequence() {
  const frame = document.getElementById("logoFrame");
  const plate = frame.querySelector(".logo-plate");
  const bullet = document.getElementById("bullet");
  const trail = plate.querySelector(".logo-trail");
  const flash = plate.querySelector(".impact-flash");
  const sparkEl = document.getElementById("sparkBurst");
  const diceResult = document.getElementById("diceResult");
  const canvas = document.getElementById("diceCanvas");

  // Hard gates: power-level gags for absurd dice counts
  if (CONFIG.dieCount > MAX_DICE) { showPowerGag(POWER_GAG_OVER); return; }
  if (CONFIG.dieCount < -MAX_DICE) { showPowerGag(POWER_GAG_UNDER); return; }

  // Zero-sided die collapses the logo into a black hole
  if (CONFIG.dieSides === 0) {
    diceResult.innerHTML = "";
    gsap.killTweensOf(plate);
    gsap.timeline()
      .to(plate, { scale: 0, rotation: 720, duration: 1.1, ease: "power4.in" })
      .to(plate, { opacity: 0, duration: 0.15 }, ">-0.1")
      .call(() => showPowerGag("THE LOGO FELL IN"));
    window.lastRollSum = 0;
    return;
  }

  const reversed = CONFIG.dieCount < 0;
  const count = Math.min(Math.abs(CONFIG.dieCount) || 1, MAX_DICE);

  // Restore the plate if a previous run collapsed it into the black hole
  gsap.set(plate, { scale: 1, rotation: 0, opacity: 1, x: 0 });
  plate.classList.toggle("inverted", reversed);

  const useCanvas = count > CANVAS_DIE_THRESHOLD;
  let sparks = [];
  let numbers = [];
  if (window.__canvasState) gsap.killTweensOf(window.__canvasState); // stop any in-flight canvas burst from a prior trigger
  if (useCanvas) {
    sparkEl.innerHTML = "";
  } else {
    const cctx = canvas.getContext("2d");
    cctx.setTransform(1, 0, 0, 1, 0, 0);
    cctx.clearRect(0, 0, canvas.width, canvas.height);
    const built = buildSparks(sparkEl, count);
    sparks = built.sparks;
    numbers = built.numbers;
  }

  // Pre-roll every die so both the debris and the equation agree
  const values = Array.from({ length: count }, rollDie);

  gsap.killTweensOf([bullet, trail, plate, flash, ...sparks]);
  sparks.forEach((s) => s.classList.remove("shape-gone"));
  diceResult.innerHTML = "";

  const startX = reversed ? "115%" : "-115%";
  const impactX = reversed ? "84%" : "-84%";

  gsap.set(bullet, { x: startX });
  gsap.set(trail, { clipPath: reversed ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }); // trail tears open from the direction the bullet enters
  gsap.set(flash, { opacity: 0 });
  if (!useCanvas) {
    gsap.set(sparks, { opacity: 0, x: 0, y: 0, rotation: 0, scale: 1 });
  }

  const tl = gsap.timeline({ reversed: false });

  // Approach: swift travel through open air before it reaches the sign
  tl.to(bullet, { x: impactX, duration: 0.22, ease: "power4.in" })
    .addLabel("impact")

    // Impact: the hit lands right as it reaches the front edge of the text
    .to(flash, { opacity: 0.9, duration: 0.04 }, "impact")
    .to(flash, { opacity: 0, duration: 0.3 }, "impact+=0.04")
    .to(plate, {
      x: reversed ? "-=10" : "+=10",
      duration: 0.05,
      yoyo: true,
      repeat: 3,
      ease: "power1.inOut",
    }, "impact")
    .addLabel("tunnel", "impact+=0.12")

    // Tunnels through the sign — trail tears open behind it, forgiving deceleration to rest
    .to(bullet, { x: "0%", duration: 0.55, ease: "power2.out" }, "tunnel")
    .to(trail, {
      clipPath: reversed ? "inset(0 0 0 0%)" : "inset(0 0% 0 0)",
      duration: 0.55,
      ease: "power2.out",
    }, "tunnel");

  if (!useCanvas) {
    // The horizontal boundary line sits along the top edge of the logo; debris that would
    // fly above it gets deflected down and bounces off it.
    const plateRect = plate.getBoundingClientRect();
    const sparkRect = sparkEl.getBoundingClientRect();
    const sparkOriginY = sparkRect.top - plateRect.top; // spark origin relative to the plate
    const ceilingY = 0; // top edge of the logo, in plate coords
    const headroom = sparkOriginY - ceilingY; // px of room above the spark origin before hitting the line

    tl.to(sparks, {
      opacity: 1,
      x: () => Math.cos(gsap.utils.random(-CONFIG.spreadDeg, CONFIG.spreadDeg) * Math.PI / 180) * gsap.utils.random(CONFIG.distMin, CONFIG.distMax),
      y: (i) => {
        const raw = Math.sin(gsap.utils.random(-CONFIG.spreadDeg, CONFIG.spreadDeg) * Math.PI / 180) * gsap.utils.random(CONFIG.distMin, CONFIG.distMax);
        // clamp upward travel so it never crosses the line, then bounce back down
        const up = -raw; // negative raw = upward
        if (up > headroom) {
          const overshoot = up - headroom;
          return -(headroom) + overshoot * 0.55; // bounce off the boundary
        }
        return raw;
      },
      rotation: () => gsap.utils.random(-180, 180),
      scale: () => gsap.utils.random(CONFIG.scaleMin, CONFIG.scaleMax), // grow as they tumble
      duration: CONFIG.tumbleDur,
      stagger: 0.012,
      ease: "power2.out",
      onStart: () => {
        // Stamp each die's pre-rolled value onto its debris; the number is a child so it rides along
        sparks.forEach((s, i) => {
          numbers[i].textContent = values[i];
        });
      },
    }, `tunnel+=${CONFIG.tumbleDelay}`)
    // Surge toward the viewer, the whole die (shape + number) growing together
    .to(sparks, {
      scale: "+=1.4",
      y: "+=30",
      duration: CONFIG.surgeDur,
      stagger: 0.012,
      ease: "power1.out",
    }, `tunnel+=${CONFIG.tumbleDelay + CONFIG.tumbleDur + 0.02}`)
    .addLabel("settle", `tunnel+=${CONFIG.tumbleDelay + CONFIG.tumbleDur + 0.15}`)

    // Numbers form the equation, then the whole debris die fades once it settles
    .call(() => renderEquation(values), null, "settle+=0.35")
    .to(sparks, {
      opacity: 0,
      y: "+=12",
      duration: 0.5,
    }, "settle+=1.1");
  } else {
    // Canvas path: fire the debris burst, then drop straight to the equation
    tl.call(() => runCanvasDice(count, values), null, `tunnel+=${CONFIG.tumbleDelay}`)
      .call(() => renderEquation(values), null, `tunnel+=${CONFIG.tumbleDelay + Math.min(CONFIG.tumbleDur, 0.8) + CONFIG.surgeDur + 0.2}`);
  }

  window.__logoTl = tl; // exposed for deterministic frame-by-frame capture during video export
  return tl;
}


let gamblePressCount = 0;
document.getElementById("replayLogo").addEventListener("click", () => {
  gamblePressCount++;
  // First press reveals the quick-step +/− buttons; third press reveals "More options"
  if (gamblePressCount >= 1) {
    document.querySelectorAll(".quick-steps").forEach((el) => el.removeAttribute("hidden"));
  }
  if (gamblePressCount >= 3) {
    document.getElementById("moreBtn").removeAttribute("hidden");
  }
  playLogoSequence();
});

// Live controls: update CONFIG so the next replay uses the new dice-roll values
const controlMap = {
  ctlCount: "dieCount",
  ctlSides: "dieSides",
  ctlSpread: "spreadDeg",
  ctlDistMin: "distMin",
  ctlDistMax: "distMax",
  ctlScaleMin: "scaleMin",
  ctlScaleMax: "scaleMax",
  ctlTumbleDur: "tumbleDur",
  ctlSurgeDur: "surgeDur",
  ctlTumbleDelay: "tumbleDelay",
};
Object.entries(controlMap).forEach(([id, key]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("input", () => {
    CONFIG[key] = Number(el.value);
    checkEasterEggs(Number(el.value));
  });
});

// Dice/Sides steppers and quick-step buttons
function bumpField(targetId, delta) {
  const el = document.getElementById(targetId);
  const next = (Number(el.value) || 0) + delta;
  el.value = next;
  el.dispatchEvent(new Event("input"));
}
document.querySelectorAll(".step-btn, .quick-steps button").forEach((btn) => {
  btn.addEventListener("click", () => bumpField(btn.dataset.target, Number(btn.dataset.step)));
});

// More options reveals the advanced control menu
document.getElementById("moreBtn").addEventListener("click", () => {
  const adv = document.getElementById("advancedControls");
  const open = adv.hasAttribute("hidden");
  if (open) adv.removeAttribute("hidden"); else adv.setAttribute("hidden", "");
  document.getElementById("moreBtn").textContent = open ? "Fewer options ▴" : "More options ▾";
});

window.addEventListener("DOMContentLoaded", () => {
  playLogoSequence();
});
