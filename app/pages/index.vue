```vue
<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Joshua Bederaux-Cayne | Nuxt Resume site',
  meta: [
    {
      name: 'description',
      content: 'IT Business & Technical Analyst, Full Stack Developer, Manufacturing Systems Expert',
    },
  ],
})

const stats = [
  { value: '5+', label: 'Years Enterprise IT' },
  { value: '20+', label: 'Supported Business Applications' },
  { value: '100K+', label: 'Manufacturing Transactions Automated' },
  { value: '∞', label: 'Novel Solutions for Novel Problems' },
]

const techStack = [
  'SQL',
  '.NET',
  'Java',
  'Python',
  'Power Apps',
  'Power BI',
  'Azure',
  'SharePoint',
  'Active Directory',
  'Nuxt 3',
  'Vue',
  'TypeScript',
  'JavaScript',
  'SSMS',
]

import { ref, onMounted, onUnmounted } from 'vue'

const scrollPercent = ref(0)


const updateScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight

  // Prevent division by zero if the page isn't scrollable
  if (docHeight > 0) {
    scrollPercent.value = scrollTop / docHeight
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
  window.addEventListener('resize', updateScroll)
  updateScroll() // Initial calculation
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('resize', updateScroll)
})

</script>

<template>
  <div class="min-h-screen bg-[#12031e] text-slate-100 overflow-hidden">

    <main class="mx-auto relative z-10 flex min-h-screen max-w-7xl flex-col px-6 py-16 lg:px-12">
      <section class="flex flex-1 flex-col items-start justify-center gap-14 text-left py-16 lg:py-20">
        <span
          class="inline-flex items-center gap-3 rounded-full border border-pink-500/40 bg-slate-900/85 px-5 py-3 text-xs uppercase tracking-[0.28em] text-pink-300 shadow-2xl shadow-pink-500/10 backdrop-blur-lg">
          <span class="h-2.5 w-2.5 rounded-full bg-pink-400 animate-pulse"></span>
          Available for Opportunities
        </span>

        <div class="shadow-panel-big space-y-30 text-left py-16 lg:py-20">
          <p class="text-sm uppercase tracking-[0.4em] text-pink-300/70"> Full-stack webdeveloper · Manufacturing Data
            management · Videographer </p>
          <h1 class="text-5xl font-black tracking-[-0.04em] text-pink-300 sm:text-6xl lg:text-7xl">Joshua Bederaux-Cayne
          </h1>
          <p class="max-w-3xl text-2xl font-semibold leading-relaxed text-slate-200 sm:text-3xl lg:text-4xl">
            Building modern web applications, trusted with financial application full-stack management, manufacturing
            analytics, and automation systems with UI-first design and real business impact.
          </p>
        </div>

        <p class="max-w-3xl text-base leading-8 text-pink-200/85 sm:text-lg">
          Specializing in Nuxt, Vue, TypeScript, .NET, AI assistant development, SQL, Power Platform, and modern
          cloud-enabled business workflows with sleek motion and hacker energy.
        </p>

        <div class="flex flex-wrap justify-start gap-4">
          <NuxtLink to="/projects"
            class="rounded-2xl bg-pink-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-2xl shadow-pink-500/30 transition duration-300 hover:-translate-y-1 hover:bg-pink-400">
            View Projects
          </NuxtLink>
          <NuxtLink to="/resume"
            class="rounded-2xl border border-pink-500/30 bg-slate-900/85 px-8 py-4 text-base font-semibold text-pink-200 transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-slate-900">
            Resume
          </NuxtLink>
        </div>
      </section>

      <section class="grid gap-8 py-16 lg:grid-cols-4 lg:gap-6">
        <article v-for="stat in stats" :key="stat.label"
          class="rounded-[2rem] border border-pink-500/10 bg-slate-900/80 p-8 shadow-2xl shadow-pink-500/10 transition duration-500 hover:-translate-y-1 hover:border-pink-400/30">
          <p class="text-4xl font-semibold text-pink-300">{{ stat.value }}</p>
          <p class="mt-4 text-sm uppercase tracking-[0.18em] text-slate-400">{{ stat.label }}</p>
        </article>
      </section>

      <section class="grid gap-20 py-20 lg:grid-cols-[1.45fr_0.95fr] lg:items-end">
        <div class="shadow-panel-big space-y-8 text-left p-8">
          <p class="text-sm uppercase tracking-[0.4em] text-pink-300/80">About</p>
          <h2 class="text-4xl font-bold text-white sm:text-5xl">Enterprise Experience Meets Modern Systems Design</h2>
          <p class="max-w-2xl text-base leading-9 text-pink-200/90 sm:text-lg">
            Experienced in manufacturing, analytics, automation, and business application delivery. I build systems that
            feel polished, secure, and visually confident.
          </p>
        </div>

        <aside class="rounded-[2rem] border border-pink-500/10 bg-slate-900/85 p-8 shadow-2xl shadow-pink-500/10">
          <h3 class="text-xl font-semibold text-pink-200">Technology Stack</h3>
          <div class="mt-6 flex flex-wrap justify-start gap-3">
            <span v-for="tech in techStack" :key="tech"
              class="rounded-full border border-pink-500/15 bg-pink-500/10 px-4 py-2 text-sm text-pink-100">
              {{ tech }}
            </span>
          </div>
        </aside>
      </section>

      <section class="py-16">
        <div class="space-y-6 text-left shadow-panel-big p-8">
          <h2 class="text-4xl font-bold text-white">Featured Projects</h2>
          <p class="max-w-2xl text-base leading-8 text-pink-200/80">
            Application development and support, dashboards, and enterprise solutions powered by Nuxt, Vue, TypeScript, SQL, and cloud
            automation.
          </p>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <article
            class="rounded-[2rem] border border-pink-500/10 bg-slate-900/85 p-8 shadow-2xl shadow-pink-500/10 transition duration-500 hover:-translate-y-1 hover:border-pink-400/30">
            <h3 class="text-2xl font-semibold text-pink-300">Manufacturing Analytics</h3>
            <p class="mt-4 text-slate-400">Quality metrics, disruption scores, and KPI dashboards for plant
              optimization.</p>
          </article>

          <article
            class="rounded-[2rem] border border-pink-500/10 bg-slate-900/85 p-8 shadow-2xl shadow-pink-500/10 transition duration-500 hover:-translate-y-1 hover:border-pink-400/30">
            <h3 class="text-2xl font-semibold text-pink-300">Enterprise Applications</h3>
            <p class="mt-4 text-slate-400">.NET, SQL Server, SharePoint, and Power Platform solutions that scale with
              business needs.</p>
          </article>

          <article
            class="rounded-[2rem] border border-pink-500/10 bg-slate-900/85 p-8 shadow-2xl shadow-pink-500/10 transition duration-500 hover:-translate-y-1 hover:border-pink-400/30">
            <h3 class="text-2xl font-semibold text-pink-300">Modern Web Apps</h3>
            <p class="mt-4 text-slate-400">Nuxt, Vue, TypeScript, and responsive UI for sleek, performant product
              experiences.</p>
          </article>
        </div>
      </section>
      <section class="mountain-transition"></section>

      <section class="cave-section" :style="{
        '--scroll-percent': scrollPercent
      }">

        <div class="cave-glow"></div>

        <!-- Cave Top Mountains (Stalactites) -->
        <div class="cave-mountain-back"></div>
        <div class="cave-mountain-mid"></div>
        <div class="cave-mountain-front"></div>

        <!-- Cave Bottom Mountains (Stalagmites) -->
        <div class="cave-mountain-bottom-back"></div>
        <div class="cave-mountain-bottom-mid"></div>
        <div class="cave-mountain-bottom-front"></div>

        <div class="crystal crystal1"></div>
        <div class="crystal crystal2"></div>
        <div class="crystal crystal3"></div>
        <div class="crystal crystal4"></div>
        <div class="crystal crystal5"></div>

        <div class="relative z-10 max-w-6xl mx-auto py-32">

          <h2 class="text-6xl font-black text-cyan-200">
            Journey Underground
          </h2>

          <p class="mt-8 text-xl text-cyan-100 max-w-3xl">
            Beneath the mountains lies the foundation of my experience—
            enterprise software, manufacturing systems, automation,
            AI tools, and modern web development.
          </p>

          <!-- Put your Experience cards here -->

        </div>
        <div class="cave-exit"></div>
      </section>
    </main>
    <div :style="{ '--scroll-percent': scrollPercent }" class="background-scene">
      <div class="cloud-layer"></div>
      <div class="mountain-back"></div>
      <div class="mountain-mid"></div>
      <div class="mountain-front"></div>
      <div class="glow-grid"></div>
    </div>
  </div>
</template>

<style scoped>
:global(body) {
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, #23061f 0%, #12031e 40%, #621783 100%);
  color: #f8f0ff;
}

.background-scene {
  position: fixed;
  inset: 0;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: #4e0027;
  z-index: 0;
  pointer-events: none;
}

.cloud-layer,
.mountain-back,
.mountain-mid,
.mountain-front,
.glow-grid {
  position: fixed;
  left: 0;
  right: 0;
  will-change: transform;
  pointer-events: none;
}

/* Explicit stacking behind the page content */
.glow-grid {
  z-index: 1;
}

.mountain-back {
  z-index: 2;
}

.mountain-mid {
  z-index: 3;
}

.mountain-front {
  z-index: 4;
}

.cloud-layer {
  z-index: 5;
}

.cloud-layer {
  top: -30vh;
  height: 90vh;
  background: radial-gradient(circle at 12% 24%, rgba(244, 114, 182, 0.36), transparent 16%),
    radial-gradient(circle at 30% 18%, rgba(236, 72, 153, 0.32), transparent 16%),
    radial-gradient(circle at 48% 30%, rgba(236, 72, 153, 0.28), transparent 14%),
    radial-gradient(circle at 65% 16%, rgba(244, 114, 182, 0.30), transparent 16%),
    radial-gradient(circle at 82% 24%, rgba(236, 72, 153, 0.26), transparent 14%),
    radial-gradient(circle at 90% 8%, rgba(236, 72, 153, 0.20), transparent 12%);
  filter: blur(.4px);
  transform: translateY(calc(var(--scroll-percent) * 20px));
  animation: cloudFloat 10s infinite;
}

/* 
  Each mountain layer uses 'var(--scroll-percent)' multiplied by a pixel range.
  Example: back layer moves up by 150px at maximum page scroll.
*/
.mountain-back {
  top: 6vh;
  height: 140vh;
  background: linear-gradient(180deg, rgba(236, 72, 153, 0.32) 0%, rgba(219, 39, 119, 0.42) 35%, rgba(112, 26, 117, 0.96) 100%);
  clip-path: polygon(0% 42%, 10% 30%, 18% 38%, 28% 26%, 36% 32%, 46% 20%, 56% 26%, 66% 16%, 74% 24%, 82% 18%, 90% 26%, 100% 20%, 100% 100%, 0% 100%);
  opacity: 1;
  transform: translateY(calc(clamp(var(--scroll-percent), 0, 0.22) * -70px + clamp(var(--scroll-percent) - 0.22, 0, 1) * -3200px));
}

.mountain-mid {
  top: 12vh;
  height: 140vh;
  background: linear-gradient(180deg, rgba(236, 72, 153, 0.18) 0%, rgba(244, 114, 182, 0.42) 28%, rgba(190, 24, 93, 0.96) 100%);
  clip-path: polygon(0% 52%, 10% 38%, 22% 48%, 32% 34%, 42% 44%, 52% 26%, 62% 40%, 72% 30%, 82% 42%, 94% 34%, 100% 42%, 100% 100%, 0% 100%);
  opacity: 1;
  transform: translateY(calc(clamp(var(--scroll-percent), 0, 0.22) * -100px + clamp(var(--scroll-percent) - 0.22, 0, 1) * -3900px));
}

.mountain-front {
  top: 18vh;
  height: 140vh;
  background: linear-gradient(180deg, rgba(248, 113, 184, 0.24) 0%, rgba(236, 72, 153, 0.56) 28%, rgba(153, 27, 88, 1) 100%);
  clip-path: polygon(-20% 56%, 9% 46%, 18% 54%, 28% 42%, 38% 54%, 50% 40%, 60% 52%, 70% 38%, 78% 50%, 88% 42%, 96% 50%, 100% 46%, 100% 100%, -20% 100%);
  opacity: 100%;
  transform: translateY(calc(clamp(var(--scroll-percent), 0, 0.22) * -160px + clamp(var(--scroll-percent) - 0.22, 0, 1) * -4000px));
}

.glow-grid {
  top: 0;
  bottom: 0;
  background-color: rgba(12, 8, 40, 0.55);
  background-image: radial-gradient(circle at 8% 12%, rgba(255, 255, 255, 0.9) 0%, transparent 4%),
    radial-gradient(circle at 18% 28%, rgba(255, 255, 255, 0.6) 0%, transparent 3%),
    radial-gradient(circle at 32% 14%, rgba(255, 255, 255, 0.72) 0%, transparent 3%),
    radial-gradient(circle at 45% 8%, #fff8b68c 0%, transparent 2.5%),
    radial-gradient(circle at 60% 22%, rgba(255, 250, 183, 0.774) 0%, transparent 4%),
    radial-gradient(circle at 75% 12%, rgba(255, 255, 255, 0.7) 0%, transparent 2.5%),
    radial-gradient(circle at 88% 30%, rgba(255, 255, 255, 0.45) 0%, transparent 3.5%),
    radial-gradient(circle at 52% 40%, rgba(255, 255, 255, 0.3) 0%, transparent 3%),
    radial-gradient(circle at 20% 70%, rgba(255, 255, 255, 0.22) 0%, transparent 2.5%),
    radial-gradient(circle at 85% 70%, rgba(255, 255, 255, 0.24) 0%, transparent 3.5%);
  background-repeat: no-repeat;
  opacity: 0.62;
  filter: blur(0.2px);
  transform: translateY(calc(var(--scroll-percent) * -20px));
}



@keyframes cloudMove {
  0% {
    transform: translateX(-14%);
  }

  100% {
    transform: translateX(14%);
  }
}

@keyframes cloudFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.shadow-panel {
  border-radius: 5rem;
  background: rgba(15, 12, 33, 0.88);
  box-shadow:
    -3px -3px rgba(0, 0, 0, 0.39),
    -5px 0 -8px rgba(254, 255, 204, 0.301);
}

.shadow-panel-big {
  background: rgba(0, 0, 0, 0.671);
  padding: 24px;
  border-radius: 30px;
  /* x-offset, y-offset, blur-radius, spread-radius, color */
  box-shadow: 0 4px 6px 10px rgba(0, 0, 0, 0.336), 10px 10px 10px 10px rgba(0, 0, 0, 0.555);
  backdrop-filter: blur(5px);
}


.mountain-transition {

  height: 40vh;
  width: 300%;
  margin-left: -100%;
  background: linear-gradient(to bottom,
      transparent,
      #7f1d67 25%,
      #3c175b 75%,
      rgb(62, 84, 97) 90%
    );

  position: relative;

  z-index: 6;

}

.cave-section {

  position: relative;

  min-height: 350vh;
  width: 300%;
  margin-left: -100%;
  overflow: hidden;
  background:
    linear-gradient(180deg,

      #132b5c 0%,

      #081428 15%,

      #050b14 35%,

      #020407 55%,

      #000000 75%,

      #000000 100%);

  z-index: 20;

}

/* Cave Top Mountains (Stalactites - upside down) */
.cave-mountain-back {
  position: absolute;
  top: 10;
  left: 0;
  right: 0;
  height: 140vh;
  background: linear-gradient(180deg, rgba(90, 122, 140, 0.32) 0%, rgba(70, 100, 120, 0.42) 35%, rgba(50, 75, 95, 0.96) 100%);
  clip-path: polygon(0% 42%, 10% 30%, 18% 38%, 28% 26%, 36% 32%, 46% 20%, 56% 26%, 66% 16%, 74% 24%, 82% 18%, 90% 26%, 100% 20%, 100% 100%, 0% 100%);
  opacity: 0.7;
  transform: scaleY(-1.3) translateY(calc(var(--scroll-percent) * 50px));
}

.cave-mountain-mid {
  position: absolute;
  top: 20;
  left: 0;
  right: 0;
  height: 140vh;
  background: linear-gradient(180deg, rgba(100, 132, 155, 0.18) 0%, rgba(85, 115, 140, 0.42) 28%, rgba(60, 90, 115, 0.96) 100%);
  clip-path: polygon(0% 52%, 10% 38%, 22% 48%, 32% 34%, 42% 44%, 52% 26%, 62% 40%, 72% 30%, 82% 42%, 94% 34%, 100% 42%, 100% 100%, 0% 100%);
  opacity: 0.7;
  transform: scaleY(-1.3) translateY(calc(var(--scroll-percent) * 80px));
}

.cave-mountain-front {
  position: absolute;
  top: 30;
  left: 0;
  right: 0;
  height: 140vh;
  background: linear-gradient(180deg, rgba(110, 145, 165, 0.24) 0%, rgba(90, 120, 145, 0.56) 28%, rgba(45, 70, 95, 1) 100%);
  clip-path: polygon(-20% 56%, 9% 46%, 18% 54%, 28% 42%, 38% 54%, 50% 40%, 60% 52%, 70% 38%, 78% 50%, 88% 42%, 96% 50%, 100% 46%, 100% 100%, -20% 100%);
  opacity: 0.7;
  transform: scaleY(-1.3) translateY(calc(var(--scroll-percent) * 115px));
}

/* Cave Bottom Mountains (Stalagmites) */
.cave-mountain-bottom-back {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140vh;
  background: linear-gradient(180deg, rgba(90, 122, 140, 0.32) 0%, rgba(70, 100, 120, 0.42) 35%, rgba(50, 75, 95, 0.96) 100%);
  clip-path: polygon(0% 42%, 10% 30%, 18% 38%, 28% 26%, 36% 32%, 46% 20%, 56% 26%, 66% 16%, 74% 24%, 82% 18%, 90% 26%, 100% 20%, 100% 100%, 0% 100%);
  opacity: 0.7;
  transform: translateY(calc(var(--scroll-percent) * 50px));
  pointer-events: none;
}

.cave-mountain-bottom-mid {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140vh;
  background: linear-gradient(180deg, rgba(100, 132, 155, 0.18) 0%, rgba(85, 115, 140, 0.42) 28%, rgba(60, 90, 115, 0.96) 100%);
  clip-path: polygon(0% 52%, 10% 38%, 22% 48%, 32% 34%, 42% 44%, 52% 26%, 62% 40%, 72% 30%, 82% 42%, 94% 34%, 100% 42%, 100% 100%, 0% 100%);
  opacity: 0.7;
  transform: translateY(calc(var(--scroll-percent) * 80px));
  pointer-events: none;
}

.cave-mountain-bottom-front {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140vh;
  background: linear-gradient(180deg, rgba(110, 145, 165, 0.24) 0%, rgba(90, 120, 145, 0.56) 28%, rgba(45, 70, 95, 1) 100%);
  clip-path: polygon(-20% 56%, 9% 46%, 18% 54%, 28% 42%, 38% 54%, 50% 40%, 60% 52%, 70% 38%, 78% 50%, 88% 42%, 96% 50%, 100% 46%, 100% 100%, -20% 100%);
  opacity: 0.7;
  transform: translateY(calc(var(--scroll-percent) * 115px));
  pointer-events: none;
}


.mountain-descent {
  position: relative;
  height: 45vh;
  width: 300%;
  margin-left: -100%;
  overflow: hidden;

  background:
    linear-gradient(to cave,
      transparent 0%,
      #7d185e 20%,
      #4f0f63 45%,
      #379600 65%,
      #8f4000 75%,
      rgba(90, 122, 140, 0.32) 100%);
}

.cave {

  width: 300%;
  margin-left: -100%;
  min-height: 120vh;

  position: relative;

  background:
    radial-gradient(circle at 50% 0%,
      rgba(80, 180, 255, .35),
      transparent 35%),

    linear-gradient(to bottom,
      rgba(90, 122, 140, 0.32),
      #041221,
      #020d19,
      #01060d);

  overflow: hidden;
}



.crystal {

  position: absolute;

  width: 130px;

  height: 220px;

  clip-path: polygon(50% 0,
      100% 40%,
      80% 100%,
      20% 100%,
      0 40%);

  background:
    linear-gradient(180deg,
      #ffffff,
      #8de8ff,
      #4aa8ff,
      #003f9f);

  box-shadow:
    0 0 25px #5ecfff,
    0 0 70px #2e9eff;

}



.crystal1 {

  left: 30%;

  top: 600px;

 

  transform: rotate(-8deg) translateX(calc(-50% - var(--scroll-percent) * 100px)) scale(calc(0.5 + var(--scroll-percent) * 300px));

}

.crystal2 {

  left: 50%;

  top: 800px;

  transform: translateX(calc(-50% - var(--scroll-percent) * 120px)) scale(calc(0.75 + var(--scroll-percent) * 0.85)), top(var(--scroll-percent ) * 300px);

  animation: none;

}

.crystal3 {

  left: 45%;

  bottom: 800px;

  transform: scale(1.4);

}

.crystal4 {

  left: 60%;

  bottom: 1000px;

  transform: translate-scale(var(--scroll) * 100, var(--scroll) * 50);

}

.crystal5 {

  left: 38%;

  bottom: 197px;
  scale: 0.6;

  transform: scale(0.6);

}


.crystal {

  animation: floatCrystal 1s ease-in-out infinite;

}

@keyframes floatCrystal {

  0%,
  100% {

    transform: translateY(0);

  }

  50% {

    transform: translateY(-12px);

  }

}

.cave-section::before {

  content: "";

  position: absolute;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background:

    radial-gradient(ellipse at center,

      transparent 20%,

      rgba(0, 0, 0, .15) 30%,

      rgba(0, 0, 0, .35) 45%,

      rgba(0, 0, 0, .65) 60%,

      rgba(0, 0, 0, .95) 80%,

      black 100%);

  pointer-events: none;

}


@keyframes particles {

  from {

    transform: translateY(200px);

  }

  to {

    transform: translateY(-200px);

  }

}

.cave-exit {

  position: absolute;

  bottom: 5vh;

  left: 50%;

  width: 120px;

  height: 120px;

  border-radius: 50%;

  background: white;

  box-shadow:

    0 0 120px white,

    0 0 240px white,

    0 0 500px white;

  transform: translateX(-50%) translateY(calc(
      clamp(80px - var(--scroll-percent) * 180px, 40px, 80px)
      + clamp((var(--scroll-percent) - 0.98) * 140px, 0px, 140px)
    )) scale(calc(0.3 + var(--scroll-percent) * 3));

  opacity: clamp(calc((var(--scroll-percent) - 0.50) * 1.6), 0, 1);

}


@keyframes drift {

  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-200px);
  }

}

section {
  letter-spacing: 0.01em;
}

h1,
h2,
h3 {
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

p,
span,
button,
article {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
</style>
```
