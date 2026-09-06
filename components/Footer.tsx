export default function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-ink px-6 pb-8 pt-16 text-[#cfd0d4]">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 border-b border-[#2a2c33] pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 text-base font-bold text-white">
              <span className="h-2.5 w-2.5 rounded-sm bg-brand" />
              KNOWNAXIS
            </div>
            <p className="max-w-xs text-[13.5px] text-[#8a8c92]">
              Autonomous AI agents that handle your repetitive tasks, so you can focus
              on the work that actually moves your business forward.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[13.5px]">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <div className="flex flex-col gap-3 text-[13.5px]">
            <a href="https://knownaxis.framer.website/legals/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://knownaxis.framer.website/legals/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-[12.5px] text-[#6f7178] md:flex-row">
          <span>© 2024 Knownaxis. Built for busy founders.</span>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
