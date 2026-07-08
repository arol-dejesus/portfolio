import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeContent from '@/components/HomeContent';
import ProjectsContent from '@/components/ProjectsContent';
import PostsContent from '@/components/PostsContent';
import AboutContent from '@/components/AboutContent';
import ContactContent from '@/components/ContactContent';
import StatsContent from '@/components/StatsContent';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Quadrillage orange/vert partout — fixe, discret */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f95d1720_1px,transparent_1px),linear-gradient(to_bottom,#1f7a3d20_1px,transparent_1px)] bg-[size:28px_48px]"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        <Navbar />

        {/* Hero — fills the first screen */}
        <section id="home" className="min-h-screen flex flex-col scroll-mt-20">
          <HomeContent />
        </section>

        {/* Chiffres clés + outils de travail */}
        <StatsContent />

        <section id="projects" className="scroll-mt-20">
          <ProjectsContent />
        </section>

        <section id="posts" className="scroll-mt-20">
          <PostsContent />
        </section>

        <section id="about" className="scroll-mt-20">
          <Reveal>
            <AboutContent />
          </Reveal>
        </section>

        <section id="contact" className="scroll-mt-20">
          <Reveal>
            <ContactContent />
          </Reveal>
        </section>

        <Footer />
      </div>
    </main>
  );
}
