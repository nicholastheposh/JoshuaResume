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
  link: [
    {
      rel: 'icon',
      href: '/img/Profile.png'
    }
  ]
})

const stats = [
  { value: '5+', label: 'Years Enterprise IT' },
  { value: '20+', label: 'Supported Business Applications' },
  { value: '100K+', label: 'Manufacturing Transactions Automated' },
  { value: 'Like a whole bunch', label: 'Novel Solutions for Novel Problems' },
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
const hasOpenedCaveExit = ref(false)


const updateScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight

  // Prevent division by zero if the page isn't scrollable
  if (docHeight > 0) {
    scrollPercent.value = scrollTop / docHeight

    // Trigger the cave exit once near the bottom and keep it opened.
    if (!hasOpenedCaveExit.value && scrollPercent.value >= 0.82) {
      hasOpenedCaveExit.value = true
    }
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
          class="inline-flex items-center gap-3 rounded-full border border-pink-500/40 bg-slate-900/85 px-5 py-3 text-xs uppercase tracking-[0.28em] text-pink-300 shadow-2xl shadow-pink-500/10">
          <span class="h-2.5 w-2.5 rounded-full bg-pink-400 animate-pulse"></span>
          Available for Opportunities
        </span>

        <div class="shadow-panel-big space-y-30 text-left py-16 lg:py-20">
          <p class="text-sm uppercase tracking-[0.4em] text-pink-300/70"> Full-stack webdeveloper · Manufacturing Data
            
            management · Videographer <br><br></p>
          <div class="inline-flex items-center gap-8">
            <img src="/img/Profile.png" alt="Joshua Bederaux-Cayne"
              class="w-24 h-24 rounded-full object-cover border-4 border-pink-400 shadow-xl object-position-left">
            </img>
            <h1 class="text-4xl font-black tracking-[-0.04em] text-pink-300 sm:text-3xl lg:text-7xl">
              Joshua Bederaux-Cayne
            </h1>
          </div>


          <p class="max-w-3xl text-2xl leading-relaxed text-slate-200 sm:text-3xl lg:text-4xl">
            Building modern web applications, trusted with financial application full-stack management, manufacturing
            analytics, and automation systems with UI-first design and real business impact.
          </p>
        </div>

        <p class="max-w-3xl text-base leading-8 text-pink-200/85 sm:text-lg">
          Specializing in Nuxt, Vue, TypeScript, .NET, AI assistant development, SQL, Power Platform, and modern
          cloud-enabled business workflow.
        </p>


        <div class="flex flex-wrap justify-start gap-4">
          <a href="#cave-section"
            class="rounded-2xl bg-pink-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-2xl shadow-pink-500/30 transition duration-300 hover:-translate-y-1 hover:bg-pink-400">
            View Projects
          </a>
          <a href="#work-history"
            class="rounded-2xl border border-pink-400/50 bg-pink-500/20 px-8 py-4 text-base font-semibold text-pink-100 transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-500/30">
            View Work History
          </a>
          <a href="/resume/Resume%206-3.pdf" download="Joshua_Bederaux-Cayne_Resume.pdf"
            class="rounded-2xl border border-pink-500/30 bg-slate-900/85 px-8 py-4 text-base font-semibold text-pink-200 transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-slate-900">
            Resume
          </a>
        </div>
      </section>

      <section class="grid gap-8 py-16 lg:grid-cols-4 lg:gap-6">
        <article v-for="stat in stats" :key="stat.label"
          class="rounded-[2rem] border border-pink-500/10 bg-slate-900/80 p-8 shadow-2xl shadow-pink-500/10 transition duration-500 hover:-translate-y-1 hover:border-pink-400/30 ">
          <p class="text-4xl font-semibold text-pink-300">{{ stat.value }}</p>
          <p class="mt-4 text-sm uppercase tracking-[0.18em] text-slate-400">{{ stat.label }}</p>
        </article>
      </section>

      <section class="grid gap-20 py-20 lg:grid-cols-[1.45fr_0.95fr] lg:items-end">
        <div class="shadow-panel-big space-y-8 text-left p-8">
          <p class="text-sm uppercase tracking-[0.4em] text-pink-300/80">About</p>
          <h2 class="text-4xl font-bold text-white sm:text-5xl">Enterprise Experience in Modern Systems Design</h2>
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
            Application development and support, dashboards, and enterprise solutions powered by Nuxt, Vue, TypeScript,
            SQL, and cloud
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

      <section id="cave-section" class="cave-section" :style="{
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

        <div class="crystal-field">
          <div class="crystal crystal1">
            <div class="crystal-label">Managed<br>
              internal <br> Financial tool webapp, My main role was project manager, balancing offshore teams workload and
              financial
              <br> Customers
            </div>
          </div>

          <div class="crystal crystal2">
            <div class="crystal-label"><br><br>Manufacturing <br> data czar, integrated data from Quality SPC
              software, Azure Data lake, Computer Vision systems, PLC's, and Manufacturing <br> execution <br>software </div>
          </div>
          <div class="crystal crystal3">
            <div class="crystal-label"><br><br>Developed <br>a data transfer <br> from an engineering problem tracking
              Node.js/Sharepoint<br> web Application <br>into the company wide knowledge base <br>filtering out private
              <br>communications
            </div>
          </div>

          <div class="crystal crystal4">
            <div class="crystal-label">Co-Developed <br>a workorder tracking system to replace a system that would have
              cost more than a house to upgrade</div>
          </div>

          <div class="crystal crystal5">
            <div class="crystal-label font-weight 2000">Videography<br><br><br><br></div>
            <blockquote class="instagram-media" data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DUTG1VhClql/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
              <div style="padding:16px;"> <a
                  href="https://www.instagram.com/reel/DUTG1VhClql/?utm_source=ig_embed&amp;utm_campaign=loading"
                  style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
                  target="_blank">
                <div style=" display: flex; flex-direction: row; align-items: center;">
                  <div
                    style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;">
                  </div>
                  <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                    <div
                      style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;">
                    </div>
                    <div
                      style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;">
                    </div>
                  </div>
                </div>
                <div style="padding: 19% 0;"></div>
                <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px"
                    viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg"
                    xmlns:xlink="https://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path
                            d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631">
                          </path>
                        </g>
                      </g>
                    </g>
                  </svg></div>
                <div style="padding-top: 8px;">
                  <div
                    style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">
                    View this post on Instagram</div>
                </div>
                <div style="padding: 12.5% 0;"></div>
                <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                  <div>
                    <div
                      style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);">
                    </div>
                    <div
                      style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;">
                    </div>
                    <div
                      style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);">
                    </div>
                  </div>
                  <div style="margin-left: 8px;">
                    <div
                      style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;">
                    </div>
                    <div
                      style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)">
                    </div>
                  </div>
                  <div style="margin-left: auto;">
                    <div
                      style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);">
                    </div>
                    <div
                      style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);">
                    </div>
                    <div
                      style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);">
                    </div>
                  </div>
                </div>
                <div
                  style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
                  <div
                    style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;">
                  </div>
                  <div
                    style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;">
                  </div>
                </div>
              </a>
              <p
                style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
                <a href="https://www.instagram.com/reel/DUTG1VhClql/?utm_source=ig_embed&amp;utm_campaign=loading"
                  style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;"
                  target="_blank">A post shared by Kid (Coach Nuni) (@kidsofthesky)</a>
              </p>
              </div>
            </blockquote>
          </div>
        </div>

        <div class="cave-intro relative z-10 max-w-3xl mx-auto py-32 px-6 text-center">

          <div class="relative z-10 max-w-2xl mx-auto py-16 md:py-32 px-4 sm:px-6 text-center">

            <h2 class="text-4xl sm:text-5xl md:text-6xl font-semibold font-black text-cyan-400 leading-tight">
              Joshua's<br>allegory of the cave
            </h2>

            <p class="mt-4 md:mt-8 text-sm sm:text-base md:text-xl text-cyan-100 mx-auto leading-relaxed max-w-prose">
              If you are reading this, you have already seen the light. You have seen the world outside of the cave. If
              instead life was just the experience of watching shadow puppet plays along the wall in front of you, then that
              would be all you know. You could not even conceive of what the actual world consists of. In this way all
              resumes are but shadows on the walls—an invitation to come and see the real in the person behind them.
            </p> </div>



          </div>


          <div class="cave-exit" :class="{ 'is-open': hasOpenedCaveExit }" aria-hidden="true"></div>

      </section>

      <section class="work-history-section" id="work-history">
        <div class="work-history-shell">
          <p class="work-history-kicker">Outside The Cave</p>
          <h2 class="work-history-title">Work History</h2>

          <article class="work-role">
            <h3>IT Business &amp; Technical Analyst - Cummins Fuel Systems</h3>
            <p class="work-date">June 2021 - August 2025</p>
            <ul>
              <li>Managed finance apps and SharePoint for Fuel Systems and Cummins Electronics, oversaw offshore teams, developed .NET and SQL updates, and handled user permissions.</li>
              <li>Built a Quality Scoreboard for business units to identify and drill into defects and causes.</li>
              <li>Oversaw Manufacturing Execution Systems and quality checkpoints, resolved code issues through decompiling, and rapidly delivered feature requests.</li>
              <li>Expert in Prolink QC-Calc SPC software; upgraded gauges, organized data, created scripts to pull in external data, and produced training documentation.</li>
              <li>Skilled in Cognex Designer, Power BI, PowerApps, and Power Automate; developed SSIS packages and quality tools, and collaborated to create a lab work order app.</li>
            </ul>
          </article>

          <article class="work-role">
            <h3>Video Editor - Memnon Archiving Services Inc., Bloomington Indiana</h3>
            <p class="work-date">December 8th - May, 2021</p>
            <ul>
              <li>Editing, documenting, subtitling, and quality control on televised media.</li>
              <li>Followed exacting standards for large clients including A&amp;E and Fox.</li>
              <li>Maintained strong technical communication with coworkers while establishing new procedures.</li>
            </ul>
          </article>

          <article class="work-role">
            <h3>Cummins Midrange Engine Plant (CMEP), Columbus Indiana - Engine Block Machining Area</h3>
            <p class="work-date">June 5th - August 9th, 2019</p>
            <ul>
              <li>Installed barring caps into engine blocks, expedited production flow, and handled materials.</li>
              <li>Accelerated block-line output by preventing avoidable stoppages and stepping in across tasks as needed.</li>
              <li>Identified machining errors and escalated issues quickly, preventing incorrect blocks from moving further into processing.</li>
            </ul>
          </article>

          <article class="work-role compact">
            <h3>Additional Roles</h3>
            <p><strong>July 7th - Sept 27th, 2018:</strong> Indiana University Catering Kitchen, Bloomington Indiana - Cold Side Cook.</p>
            <p><strong>February 26, 2017 - July 16, 2017:</strong> Indiana University / Manpower, Bloomington Indiana - Custodian.</p>
            <p><strong>May 23, 2016 - August 30, 2016:</strong> Taco Bell, Bloomington Indiana.</p>
            <p><strong>August 2014 - March 2015:</strong> Crew's Carwash, Columbus Indiana.</p>
            <p><strong>May 2011:</strong> Internship at Nintendo of Australia, Scoresby Victoria.</p>
          </article>
        </div>
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
    transform: translateY(-100px);
  }

  50% {
    transform: translateY(100px);
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
      rgb(62, 84, 97) 90%);

  position: relative;

  z-index: 6;

}

.cave-section {

  position: relative;
  display: flex;
  flex-direction: column;

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
  top: 10px;
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
  top: 20px;
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
  top: 30px;
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
    linear-gradient(to bottom,
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
  position: relative;
  --tilt: 0deg;
  width: min(440px, 88vw);
  aspect-ratio: 1 / 1;
  min-height: 340px;
  justify-self: center;
  transform: rotate(var(--tilt));
  will-change: transform;

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

.crystal-field {
  position: relative;
  order: 2;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  width: min(1200px, 92vw);
  margin: 4rem auto 6rem;
  padding: 0 1rem;
}

.cave-intro {
  order: 1;
}

@media (min-width: 960px) {
  .crystal-field {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.crystal-label {
  position: absolute;
  inset: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(77, 157, 255, 0.1);
  box-shadow: inset 0 1px 38px rgba(0, 255, 234, 0.37), 0 0 2px rgba(83, 255, 40, 0.308);
  clip-path: polygon(50% 0,
      100% 40%,
      80% 100%,
      20% 100%,
      0 40%);
  color: #000000;
  font-size: 1.2rem;
  font-family: 'Courier New', Courier, monospace;
  font-stretch: condensed;
  font-variant: ruby;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: 0.13em;
  backdrop-filter: hue-rotate(calc(var(--scroll-percent)*var(--scroll-percent) * -60deg)) saturate(1.5) blur(2px);
  pointer-events: none;
  filter: drop-shadow(0 0 0.75rem rgb(0, 43, 124));
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
  backface-visibility: hidden;
  transform: translateZ(0);
}



.crystal1 {
  --tilt: -4deg;
}

.crystal2 {
  --tilt: 3deg;
}

.crystal3 {
  --tilt: -2deg;
}

.crystal4 {
  --tilt: 2deg;
}

.crystal5 {
  --tilt: 0deg;
}


@media (min-width: 960px) {
  .crystal2,
  .crystal4 {
    margin-top: 4rem;
  }

  .crystal5 {
    grid-column: 1 / -1;
  }
}


.crystal {

  animation: floatCrystal 5s ease-in-out infinite;

}

@keyframes floatCrystal {

  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(var(--tilt));

  }

  50% {
    transform: translate3d(0, -12px, 0) rotate(var(--tilt));

  }

}

@keyframes floatCrystalLabel {

  0%,
  100% {

    transform: translateY(-8px);

  }

  50% {

    transform: translateY(0px);

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
  bottom: -96px;
  left: 50%;
  width: clamp(700px, 98vw, 1380px);
  height: clamp(220px, 40vh, 380px);
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.96) 54%, rgba(255, 255, 255, 0.82) 100%);
  box-shadow:
    0 -20px 60px rgba(255, 255, 255, 0.75),
    0 -40px 140px rgba(255, 255, 255, 0.5),
    0 -80px 300px rgba(255, 255, 255, 0.35);

  transform: translateX(-50%) translateY(90px) scale(0.72);

  opacity: 0;
  overflow: hidden;
  isolation: isolate;
  transition: opacity 420ms ease, transform 700ms ease;
  z-index: 25;

}

.cave-exit.is-open {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}

.cave-exit::before,
.cave-exit::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}

.cave-exit::before {
  inset: -30%;
  border: 4px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
  opacity: 0;
}

.cave-exit::after {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.45) 45%, rgba(255, 255, 255, 0) 72%);
  opacity: 0;
}

.cave-exit.is-open::before {
  animation: cavePortalOpen 1.7s ease-out 1 forwards;
}

.cave-exit.is-open::after {
  animation: cavePortalCore 1.4s ease-out 1 forwards;
}

@keyframes cavePortalOpen {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }

  35% {
    transform: scale(1);
    opacity: 0.9;
  }

  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

@keyframes cavePortalCore {
  0%,
  100% {
    transform: scale(0.82);
    opacity: 0.6;
  }

  50% {
    transform: scale(1.15);
    opacity: 0.95;
  }
}

.work-history-section {
  position: relative;
  z-index: 30;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: -72px;
  background: #ffffff;
  color: #0f172a;
  padding: 9rem 1.25rem 6rem;
}

.work-history-shell {
  max-width: 980px;
  margin: 0 auto;
}

.work-history-kicker {
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  font-weight: 700;
}

.work-history-title {
  margin-top: 0.65rem;
  margin-bottom: 2rem;
  font-size: clamp(2rem, 4.8vw, 3rem);
  color: #020617;
}

.work-role {
  border: 1px solid #dbe3ee;
  border-radius: 20px;
  padding: 1.25rem;
  background: #f8fafc;
  margin-bottom: 1rem;
}

.work-role h3 {
  color: #0f172a;
  font-size: 1.15rem;
  line-height: 1.3;
  margin: 0 0 0.45rem;
}

.work-date {
  margin: 0 0 0.85rem;
  color: #334155;
  font-weight: 600;
}

.work-role ul {
  margin: 0;
  padding-left: 1.1rem;
}

.work-role li {
  margin-bottom: 0.55rem;
  color: #0f172a;
  line-height: 1.5;
}

.work-role.compact p {
  margin: 0.35rem 0;
  line-height: 1.5;
  color: #0f172a;
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

@media (max-width: 640px) {
  .mountain-back {
    top: 8vh;
    height: 120vh;
    clip-path: polygon(-30% 56%, -10% 48%, 12% 54%, 34% 44%, 56% 52%, 78% 42%, 102% 50%, 124% 44%, 124% 100%, -30% 100%);
  }

  .mountain-mid {
    top: 12vh;
    height: 120vh;
    clip-path: polygon(-30% 62%, -8% 52%, 16% 60%, 40% 48%, 62% 58%, 84% 46%, 104% 56%, 124% 50%, 124% 100%, -30% 100%);
  }

  .mountain-front {
    top: 16vh;
    height: 120vh;
    clip-path: polygon(-34% 66%, -10% 56%, 18% 64%, 44% 50%, 68% 62%, 90% 48%, 108% 58%, 126% 54%, 126% 100%, -34% 100%);
  }

  .mountain-transition {
    height: 38vh;
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  .cave-section {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    min-height: 320vh;
  }

  .cave-exit {
    width: min(760px, 145vw);
    height: clamp(150px, 26vh, 230px);
    bottom: -68px;
  }

  .mountain-descent,
  .cave {
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  .crystal {
    width: min(320px, 92vw);
    min-height: 260px;
  }

  .crystal-label {
    inset: 8%;
    padding: 1rem;
    font-size: 0.82rem;
    line-height: 1.25;
    letter-spacing: 0.05em;
  }

  .cave-mountain-back,
  .cave-mountain-mid,
  .cave-mountain-front,
  .cave-mountain-bottom-back,
  .cave-mountain-bottom-mid,
  .cave-mountain-bottom-front {
    height: 120vh;
  }

  .cave-mountain-back,
  .cave-mountain-bottom-back {
    clip-path: polygon(-30% 56%, -10% 48%, 12% 54%, 34% 44%, 56% 52%, 78% 42%, 102% 50%, 124% 44%, 124% 100%, -30% 100%);
  }

  .cave-mountain-mid,
  .cave-mountain-bottom-mid {
    clip-path: polygon(-30% 62%, -8% 52%, 16% 60%, 40% 48%, 62% 58%, 84% 46%, 104% 56%, 124% 50%, 124% 100%, -30% 100%);
  }

  .cave-mountain-front,
  .cave-mountain-bottom-front {
    clip-path: polygon(-34% 66%, -10% 56%, 18% 64%, 44% 50%, 68% 62%, 90% 48%, 108% 58%, 126% 54%, 126% 100%, -34% 100%);
  }

  .work-history-section {
    margin-top: -48px;
    padding: 6.2rem 1rem 4.5rem;
  }

  .work-role {
    border-radius: 16px;
    padding: 1rem;
  }

  .work-role h3 {
    font-size: 1rem;
  }
}
</style>
```
