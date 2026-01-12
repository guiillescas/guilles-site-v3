import Orb from "@/components/Orb"
import GradualBlur from "@/components/GradualBlur"
import PixelCard from "@/components/PixelCard"
import ProfileCard from "@/components/ProfileCard"
import ResponsiveMenu from "@/components/home/ResponsiveMenu"
import ExperienceCard from "@/components/home/ExperienceCard"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen" itemScope itemType="https://schema.org/ProfilePage">
      <ResponsiveMenu />
      
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-black pt-20 md:pt-32 px-4 md:px-6" aria-label="Hero section with introduction">
          <div className="absolute inset-0 w-full h-full opacity-80">
            <Orb hoverIntensity={1} forceHoverState />
          </div>
          
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />
          
          <div className="text-center relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-2xl px-2">
                Hey, I'm Guilherme Illescas{" "}
                <span className="inline-block animate-wave">👋</span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-4">
              I'm a Senior Software Engineer specializing in high-performance web applications with exceptional user experiences.
            </p>
            
            <div className="flex items-center justify-center gap-4 md:gap-6 pt-4">
              <a
                href="https://github.com/guiillescas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/guilherme-illescas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/gui.illescas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-rose-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        <div className="h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
        
        <section id="projects" className="py-16 md:py-32 px-4 md:px-6 relative" aria-labelledby="projects-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-400 px-4">
                Some of my recent work showcasing different skills
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8 max-w-6xl mx-auto">
              <a
                href="https://guidefy.guilhermeillescas.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PixelCard variant="blue" className="bg-black w-[min(90vw,500px)] h-[380px] md:h-[420px]">
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col gap-4 md:gap-6 z-10">
                    <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden">
                      <Image
                        src="/assets/portfolios/guidefy.png"
                        alt="Guidefy - Music Director tool for band management and song coordination"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                        guidefy
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base">
                        A simple but effective tool to help Music Directors to lead their bands.
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </a>

              <a
                href="https://digital-hippo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:mt-8"
              >
                <PixelCard variant="pink" className="bg-black w-[min(90vw,450px)] h-[360px] md:h-[380px]">
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col gap-4 md:gap-5 z-10">
                    <div className="relative w-full h-36 md:h-44 rounded-xl overflow-hidden">
                      <Image
                        src="/assets/portfolios/digital-hippo.png"
                        alt="Digital Hippo - Digital marketplace for buying and selling products online"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                        Digital hippo
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base">
                        A digital marketplace. Buy and sell easily.
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </a>

              <a
                href="https://coffee-delivery.guilhermeillescas.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:-mt-4"
              >
                <PixelCard variant="yellow" className="bg-black w-[min(90vw,480px)] h-[400px] md:h-[440px]">
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col gap-4 md:gap-6 z-10">
                    <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden">
                      <Image
                        src="/assets/portfolios/coffee-delivery.png"
                        alt="Coffee Delivery - Modern coffee shop website with online ordering system"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                        Coffee Delivery
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base">
                        Do you love coffee? Me too. This website is insane, and it is from Rocketseat's course. I made it completly from scratch.
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </a>

              <a
                href="https://www.viralify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:mt-6"
              >
                <PixelCard variant="default" className="bg-black w-[min(90vw,450px)] h-[360px] md:h-[380px]">
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col gap-4 md:gap-5 z-10">
                    <div className="relative w-full h-36 md:h-44 rounded-xl overflow-hidden">
                      <Image
                        src="/assets/portfolios/viralify.png"
                        alt="Viralify - Plataforma de análise de vídeos virais com IA"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                        Viralify
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base">
                        Platform that helps entrepreneurs transform viral videos into real sales, with daily analyses and scripts generated by AI.
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </a>

              <a
                href="https://www.guilherme-e-giovana.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:-mt-6"
              >
                <PixelCard variant="blue" className="bg-black w-[min(90vw,500px)] h-[380px] md:h-[420px]">
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col gap-4 md:gap-6 z-10">
                    <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden">
                      <Image
                        src="/assets/portfolios/wedding-site.png"
                        alt="Site de casamento Guilherme & Giovana"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                        Guilherme & Giovana
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base">
                        My wedding website with lots of cool things. Worth exploring the website!
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </a>
            </div>
          </div>
        </section>

        <div className="h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />

        <section id="experience" className="py-16 md:py-32 px-4 md:px-6 relative" aria-labelledby="experience-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
                Experience
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-400 px-4">
                My professional journey
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-700" />

              <div className="space-y-12 md:space-y-20">
                <ExperienceCard
                  id="awsales"
                  title="Senior Software Engineer"
                  company="AwSales · Full-time"
                  date="Jul 2024 - Present"
                  duration="1 year 4 months"
                  color="cyan"
                  position="left"
                  defaultExpanded
                  description={
                    <>
                      <p>AwSales is an AI-powered sales platform that automates WhatsApp outreach, recovers leads, runs campaigns, and integrates with tools like Hotmart and Assiny. It lets customers build custom webhooks, create knowledge bases for high-accuracy AI assistants, test agents in a playground, and review full message histories.</p>
                      <p>- Frontend development for the customer platform: design and ship production features, refactor key flows, fix high-impact bugs, and co-define UX with Product and Design.</p>
                      <p>- Contribute to product discovery: participate in scoping sessions, propose simpler user journeys, and align roadmap with the business vision.</p>
                      <p>- Build and maintain the collaborator back-office app (internal tooling) with Nuxt (Vue) and Node, improving day-to-day operational visibility and efficiency.</p>
                      <p>- Implement and maintain core integrations on the client platform, including Stripe and Meta's WhatsApp API.</p>
                      <p>- Collaborate across two squads: (1) customer platform (5 devs, 1 QA, 1 designer, 1 PO, 1 tech lead) and (2) back-office (1 PO, 1 tech lead, 1 dev).</p>
                      <p>- Advocate for code quality and speed: pragmatic refactors, component reuse, and consistent UI patterns with Tailwind + React Query.</p>
                      <p>- Work fully remote, async-first, documenting decisions and keeping tight iteration loops with PO/Tech Lead.</p>
                      <p className="font-semibold">Tech & Tools:</p>
                      <p>Next.js, React, React Query, Tailwind CSS, Prisma, Nuxt (Vue), Node.js, Stripe, Meta WhatsApp API, Google Cloud (GCP), Docker, GitHub Actions (CI/CD), Figma.</p>
                    </>
                  }
                  tags={['Next.js', 'React Query', 'Vue.js', 'Node.js', 'React.js']}
                />

                <ExperienceCard
                  id="previdenciarista"
                  title="Senior Software Engineer"
                  company="Previdenciarista · Freelance"
                  date="Nov 2023 - Sep 2025"
                  duration="1 year 11 months"
                  color="emerald"
                  position="right"
                  description={
                    <>
                      <p>I am responsible for maintaining applications to the highest standards and ensuring stability for our 27000+ active customers on the platform, enabling them to perform pension calculations and more. Additionally, I oversee the main website, ensuring it achieves the highest levels of SEO and performance.</p>
                      <p>I enhanced the website's performance by 22%, improved SEO by approximately 9%, and implemented good practices, resulting in a 29% enhancement.</p>
                      <p>- Feature development: Demonstrated experience and good hands-on programming experience Next, HTML, Tailwind CSS, Typescript and React Hooks;</p>
                      <p>- SEO improvement: Implementation of SEO techniques using Google Analytics and Google Tag Manager;</p>
                      <p>- Bug fixes: Bug-fixing initiatives, enhancing software reliability and user satisfaction;</p>
                      <p>- Code refactoring: I am responsible to reduce tones of code lines, increasing development experience and improving the efficiency;</p>
                      <p>- Testing: Build unit and e2e tests using Jest and Playwright</p>
                    </>
                  }
                  tags={['TypeScript', 'API REST', 'Next.js', 'SEO', 'Playwright']}
                />

                <ExperienceCard
                  id="conquer"
                  title="Senior Software Engineer"
                  company="Escola Conquer · Full-time"
                  date="Out 2022 - Out 2023"
                  duration="1 year 1 month"
                  color="yellow"
                  position="left"
                  description={
                    <>
                      <p>As the Lead Software Engineer, I spearheaded the development of the Conquer Plus Platform, a project that has significantly impacted over 2 million customers globally by issuing more than 1 million certificates. My role was pivotal in every phase of the platform's lifecycle, from the initial planning stages to the selection of cutting-edge technologies and the architecture of the entire system.</p>
                      <p className="font-semibold">My responsibilities included:</p>
                      <p>- Led and fostered professional growth within team, driving individual advancement and overall team success;</p>
                      <p>- Implemented impactful features resulting in significant user base growth and enhanced customer engagement using Next.js, Styled-Components, HTML, Jest, Storybook, React Hooks, and Typescript;</p>
                      <p>- Addressing bugs through the use of Jest and debugging techniques;</p>
                      <p>- Implementing improvements to enhance performance, validated through Google Lighthouse;</p>
                      <p>- Planning features and system architectures;</p>
                      <p>- Improved team performance establishing and maintaining the Design System using Figma and implementation of micro-front-end with Single SPA;</p>
                      <p>- Delivered insightful presentations on key technical topics, establishing thought leadership within and beyond the team.</p>
                    </>
                  }
                  tags={['TypeScript', 'Next.js', 'Leadership', 'Microfrontend']}
                />

                <ExperienceCard
                  id="amank"
                  title="Co-Founder and Senior Software Engineer"
                  company="Amank · Owner"
                  date="Aug 2022 - May 2023"
                  duration="10 months"
                  color="rose"
                  position="right"
                  description={
                    <>
                      <p>I worked as a front-end developer and co-founder at Amank, a SaaS management platform that helped companies centralize, control, and reduce software costs. I was responsible for developing the product's interface, leveraging modern technologies to ensure usability, performance, and scalability.</p>
                      <p>Beyond coding, I actively contributed to the product planning and end-to-end development, shaping features, architecture, and user experience from the ground up.</p>
                      <p>Amank stood out in the market and was acquired by BHUB in 2024, consolidating its relevance in the SaaS ecosystem in Brazil.</p>
                    </>
                  }
                  tags={['TypeScript', 'API REST', 'Styled-components', 'Next.js', 'Storybook']}
                />

                <ExperienceCard
                  id="dobank"
                  title="Mobile Software Engineer"
                  company="DoBank · Freelance"
                  date="Jun 2021 - Dec 2021"
                  duration="7 months"
                  color="blue"
                  position="left"
                  description={
                    <>
                      <p>I was instrumental in DoBank app creation from the ground up, utilizing React Native and leveraging cutting-edge technologies to ensure unparalleled security, user experience, and usability. My strategic use of GraphQL for API integration set the foundation for efficient data management and app functionality.</p>
                      <p>- App Development and Feature Creation: Pioneered the entire app development, crafting its core features and architecture, which led to a robust platform with enhanced user engagement and satisfaction.</p>
                      <p>- Screen Development: Implementation of all app screens, focusing on intuitive user interfaces and seamless navigation.</p>
                      <p>- API Consumption with GraphQL: Engineered the app's data management system using GraphQL, optimizing performance and data retrieval.</p>
                    </>
                  }
                  tags={['React Native', 'GraphQL', 'Jest', 'React.js', 'Styled-components']}
                />

                <ExperienceCard
                  id="chamer"
                  title="Software Engineer"
                  company="Chamer Soluções em Tecnologia · Freelance"
                  date="Mar 2021 - Sep 2021"
                  duration="7 months"
                  color="purple"
                  position="right"
                  description={
                    <>
                      <p>I was pivotal in driving innovation and development across various projects. Within a dynamic, small team environment, I specialized in feature development, e-commerce, and dashboard creation, utilizing REST APIs for seamless database integration.</p>
                      <p>- Feature Development: Creation and implementation of key features, enhancing user interaction and functionality across platforms using React and Typescript.</p>
                      <p>- E-commerce and Dashboard Development: Spearheaded the development of e-commerce platforms and data-driven dashboards, improving business operations and decision-making processes.</p>
                      <p>- Database Integration: Expertly managed database connections through REST APIs, ensuring efficient data flow and system reliability</p>
                      <p>- SEO Implementation: Implemented advanced SEO techniques to enhance online visibility and search rankings for our platforms. I improved search engine rankings by over 20%, significantly increasing organic traffic and user acquisition.</p>
                      <p>- App Performance Optimization: Focused on optimizing the performance of applications, reducing load times and improving responsiveness</p>
                    </>
                  }
                  tags={['Jest', 'E-Commerce', 'UX', 'React.js', 'TypeScript']}
                />

                <ExperienceCard
                  id="webtrip"
                  title="Jr Software Engineer"
                  company="WebTrip Viagens Corporativas"
                  date="Jan 2020 - Nov 2020"
                  duration="11 months"
                  color="slate"
                  position="left"
                  description={
                    <>
                      <p>My responsibilities extended beyond traditional development roles, encompassing website maintenance, server management, and comprehensive IT support within the company. My versatile skill set allowed me to contribute significantly to both technical and operational aspects of the business.</p>
                      <p>- Servers Maintenance: Ensured high availability and reliability of company servers, minimizing downtime and supporting seamless business operations.</p>
                      <p>- Advanced Spreadsheet Automation: Leveraged Google Scripts and Google Sheets to automate complex data processes, enhancing efficiency and accuracy. I Automated over 6 internal reporting processes, reducing manual data entry time by 70% and reduce phone calls into 12%.</p>
                      <p>- Telecommunication Systems Management: Implemented and maintained telephony infrastructure, including IVR and extensions, to improve communication flow</p>
                      <p>- Website Improvements: Drove enhancements to the front and back end of the company's websites using HTML, CSS, and JavaScript, elevating user experience and performance.</p>
                      <p>- Process Improvement: Utilized Bizagi and LucidChart to refine internal processes, fostering a more efficient and transparent workflow.I Enhanced team efficiency by designing and implementing 10+ process improvements, reducing process turnaround time.</p>
                      <p>- CRM Development and Maintenance: Managed the development and upkeep of Suite CRM, ensuring its alignment with business needs and user requirements. I Customized and optimized CRM functionalities, improving sales team productivity</p>
                    </>
                  }
                  tags={['HTML', 'CSS', 'JavaScript', 'DevOps', 'SuiteCRM']}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-20 px-4 md:px-6" aria-labelledby="about-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                About
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-400 px-4">
                A bit more about me
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="flex justify-center items-center order-2 md:order-1">
                <ProfileCard 
                  avatarUrl="/assets/me.jpg"
                  name=""
                  title=""
                  status="Available for new opportunities"
                  showUserInfo={false}
                  enableTilt={true}
                  className="max-w-md mx-auto w-full"
                  aria-label="Guilherme Illescas profile card with photo and contact information"
                />
              </div>

              <div className="space-y-4 md:space-y-6 order-1 md:order-2">
                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                  As a senior software engineer, I have designed and developed high-performance applications that have reached over 1 million users worldwide. My expertise lies in crafting seamless user experiences, optimizing performance, and building scalable solutions that drive business success.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                  Beyond coding, I am passionate about empowering people and fostering growth—both in the products I develop and in the individuals I mentor. My goal is to leverage technology to create meaningful impact and transform the way people interact with digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <div className="hidden md:block fixed bottom-0 left-0 right-0">
        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={5}
          divCount={10}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
    </div>
  )
}



