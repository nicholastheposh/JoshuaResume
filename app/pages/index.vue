```vue
<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Joshua Bederaux-Cayne | Nuxt Developer',
  meta: [
    {
      name: 'description',
      content: 'IT Business & Technical Analyst, Full Stack Developer, Manufacturing Systems Expert',
    },
  ],
})

const stats = [
  { value: '5+', label: 'Years Enterprise IT' },
  { value: '20+', label: 'Business Applications' },
  { value: '100K+', label: 'Manufacturing Transactions' },
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
</script>

<template>
  <div class="min-h-screen bg-[#12031e] text-slate-100 overflow-hidden">
    <div class="background-scene pointer-events-none fixed inset-0 z-0">
      
      <div class="mountain-back"></div>
      <div class="cloud-layer"></div>
      <div class="mountain-mid"></div>
      <div class="mountain-front"></div>
      <div class="glow-grid"></div>
    </div>

    <main class="mx-auto relative z-10 flex min-h-screen max-w-7xl flex-col px-6 py-16 lg:px-12">
      <section class="flex flex-1 flex-col items-start justify-center gap-14 text-left py-16 lg:py-20">
        <span class="inline-flex items-center gap-3 rounded-full border border-pink-500/40 bg-slate-900/85 px-5 py-3 text-xs uppercase tracking-[0.28em] text-pink-300 shadow-2xl shadow-pink-500/10 backdrop-blur-lg">
          <span class="h-2.5 w-2.5 rounded-full bg-pink-400 animate-pulse"></span>
          Available for Opportunities
        </span>

        <div class="space-y-8 max-w-4xl">
          <p class="text-sm uppercase tracking-[0.4em] text-pink-300/70">Hacker UI · Cloud Automation · Manufacturing</p>
          <h1 class="text-5xl font-black tracking-[-0.04em] text-pink-300 sm:text-6xl lg:text-7xl">Joshua Bederaux-Cayne</h1>
          <p class="max-w-3xl text-2xl font-semibold leading-relaxed text-slate-200 sm:text-3xl lg:text-4xl">
            Creating green-lit enterprise interfaces, pink-mountain atmospheres, and bold systems for data-driven teams.
          </p>
        </div>

        <p class="max-w-3xl text-base leading-8 text-pink-200/85 sm:text-lg">
          Specializing in Nuxt, Vue, TypeScript, SQL, Power Platform, and modern cloud-enabled business workflows with sleek motion and hacker energy.
        </p>

        <div class="flex flex-wrap justify-start gap-4">
          <NuxtLink
            to="/projects"
            class="rounded-2xl bg-pink-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-2xl shadow-pink-500/30 transition duration-300 hover:-translate-y-1 hover:bg-pink-400"
          >
            View Projects
          </NuxtLink>
          <NuxtLink
            to="/resume"
            class="rounded-2xl border border-pink-500/30 bg-slate-900/85 px-8 py-4 text-base font-semibold text-pink-200 transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-slate-900"
          >
            Resume
          </NuxtLink>
        </div>
      </section>

      <section class="grid gap-8 py-16 lg:grid-cols-4 lg:gap-6">
        <article v-for="stat in stats" :key="stat.label" class="rounded-[2rem] border border-pink-500/10 bg-slate-900/80 p-8 shadow-2xl shadow-pink-500/10 transition duration-500 hover:-translate-y-1 hover:border-pink-400/30">
          <p class="text-4xl font-semibold text-pink-300">{{ stat.value }}</p>
          <p class="mt-4 text-sm uppercase tracking-[0.18em] text-slate-400">{{ stat.label }}</p>
        </article>
      </section>

      <section class="grid gap-20 py-20 lg:grid-cols-[1.45fr_0.95fr] lg:items-end">
        <div class="space-y-8 text-left">
          <p class="text-sm uppercase tracking-[0.4em] text-pink-300/80">About</p>
          <h2 class="text-4xl font-bold text-white sm:text-5xl">Enterprise Experience Meets Modern Systems Design</h2>
          <p class="max-w-2xl text-base leading-9 text-pink-200/90 sm:text-lg">
            Experienced in manufacturing, analytics, automation, and business application delivery. I build systems that feel polished, secure, and visually confident.
          </p>
        </div>

        <aside class="rounded-[2rem] border border-pink-500/10 bg-slate-900/85 p-8 shadow-2xl shadow-pink-500/10">
          <h3 class="text-xl font-semibold text-pink-200">Technology Stack</h3>
          <div class="mt-6 flex flex-wrap justify-start gap-3">
            <span v-for="tech in techStack" :key="tech" class="rounded-full border border-pink-500/15 bg-pink-500/10 px-4 py-2 text-sm text-pink-100">
              {{ tech }}
            </span>
          </div>
        </aside>
      </section>

      <section class="py-16">
        <div class="space-y-6 text-left">
          <h2 class="text-4xl font-bold text-white">Featured Projects</h2>
          <p class="max-w-2xl text-base leading-8 text-pink-200/80">
            Applications, dashboards, and enterprise solutions powered by Nuxt, Vue, TypeScript, SQL, and cloud automation.
          </p>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <article class="rounded-[2rem] border border-pink-500/10 bg-slate-900/85 p-8 shadow-2xl shadow-pink-500/10 transition duration-500 hover:-translate-y-1 hover:border-pink-400/30">
            <h3 class="text-2xl font-semibold text-pink-300">Manufacturing Analytics</h3>
            <p class="mt-4 text-slate-400">Quality metrics, disruption scores, and KPI dashboards for plant optimization.</p>
          </article>

          <article class="rounded-[2rem] border border-pink-500/10 bg-slate-900/85 p-8 shadow-2xl shadow-pink-500/10 transition duration-500 hover:-translate-y-1 hover:border-pink-400/30">
            <h3 class="text-2xl font-semibold text-pink-300">Enterprise Applications</h3>
            <p class="mt-4 text-slate-400">.NET, SQL Server, SharePoint, and Power Platform solutions that scale with business needs.</p>
          </article>

          <article class="rounded-[2rem] border border-pink-500/10 bg-slate-900/85 p-8 shadow-2xl shadow-pink-500/10 transition duration-500 hover:-translate-y-1 hover:border-pink-400/30">
            <h3 class="text-2xl font-semibold text-pink-300">Modern Web Apps</h3>
            <p class="mt-4 text-slate-400">Nuxt, Vue, TypeScript, and responsive UI for sleek, performant product experiences.</p>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
:global(body) {
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, #23061f 0%, #12031e 40%, #621783 100%);
  color: #f8f0ff;
}

.background-scene {
  overflow: hidden;
    width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #4e0027;
}

.cloud-layer,
.mountain-back,
.mountain-mid,
.mountain-front,
.glow-grid {
  position: absolute;
  left: 0;
  right: 0;
}

/* Explicit stacking so the background layers render above the page background */
.mountain-back { z-index: 10; }
.mountain-mid { z-index: 20; }
.mountain-front { z-index: 30; }
.cloud-layer { z-index: 40; }
.glow-grid { z-index: 50; }

.cloud-layer {
  top: 0;
  height: 36vh;
  background: radial-gradient(circle at 25% 18%, rgba(244, 114, 182, 0.32), transparent 20%),
    radial-gradient(circle at 75% 12%, rgba(236, 72, 153, 0.25), transparent 18%),
    linear-gradient(180deg, rgba(251, 207, 232, 0.84), rgba(251, 207, 232, 0.54) 35%, rgba(248, 113, 184, 0.16) 70%, #a88ccc00 100%);
  filter: blur(10px);
  animation: cloudMove 38s linear infinite;
}

.mountain-back {
  top: 22vh;
  height: 42vh;
  background: linear-gradient(180deg, rgba(236, 72, 153, 0.16) 0%, rgba(219, 39, 119, 0.22) 30%, rgba(112, 26, 117, 0.72) 100%);
  clip-path: polygon(0 46%, 8% 36%, 18% 44%, 28% 32%, 35% 38%, 45% 24%, 55% 30%, 65% 20%, 73% 29%, 82% 22%, 92% 30%, 100% 24%, 100% 100%, 0 100%);
  opacity: 0.78;
  animation: mountainShift 37s linear infinite;
}

.mountain-mid {
  top: 30vh;
  height: 44vh;
  background: linear-gradient(180deg, rgba(236, 72, 153, 0.04) 0%, rgba(244, 114, 182, 0.24) 28%, rgba(190, 24, 93, 0.72) 100%);
  clip-path: polygon(0 56%, 10% 42%, 20% 52%, 30% 38%, 40% 48%, 52% 30%, 62% 44%, 72% 34%, 82% 44%, 94% 36%, 100% 44%, 100% 100%, 0 100%);
  opacity: 0.9;
  animation: mountainShift 29s linear infinite reverse;
}

.mountain-front {
  top: 40vh;
  height: 46vh;
  background: linear-gradient(180deg, rgba(248, 113, 184, 0.06) 0%, rgba(236, 72, 153, 0.32) 28%, rgba(153, 27, 88, 0.92) 100%);
  clip-path: polygon(0 65%, 9% 52%, 18% 60%, 28% 47%, 38% 59%, 50% 44%, 60% 55%, 70% 42%, 78% 54%, 88% 46%, 96% 54%, 100% 48%, 100% 100%, 0 100%);
  opacity: 1;
  animation: mountainShift 22s linear infinite;
}

.glow-grid {
  top: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 15% 18%, rgba(244, 114, 182, 0.16), transparent 10%),
    radial-gradient(circle at 80% 18%, rgba(251, 207, 232, 0.14), transparent 10%),
    linear-gradient(90deg, rgba(245, 158, 240, 0.02) 1px, transparent 1px),
    linear-gradient(rgba(245, 158, 240, 0.02) 1px, transparent 1px);
  background-size: 160px 160px, 160px 160px, 44px 44px, 44px 44px;
  opacity: 0.55;
}

@keyframes cloudMove {
  0% {
    transform: translateX(-14%);
  }
  100% {
    transform: translateX(14%);
  }
}

@keyframes mountainShift {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(25%);
  }
  100% {
    transform: translateY(5);
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
