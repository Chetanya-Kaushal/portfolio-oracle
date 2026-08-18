export default function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-oracle-surface border border-oracle-red/50 flex items-center justify-center">
              <span className="font-display text-[10px] font-bold text-oracle-red">CK</span>
            </div>
            <span className="font-mono text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Chetanya Kaushal
            </span>
          </div>

          {/* Center */}
          <div className="font-mono text-xs text-text-muted text-center">
            Built with <span className="text-oracle-red">&#9829;</span> and Oracle AI Agent Studio
          </div>

          {/* Right */}
          <div className="font-mono text-xs text-text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neural-green animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
