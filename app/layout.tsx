import "./globals.css";
import Background from "./components/Background";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Background />

        <div className="page">
          {/* Left image */}
          <aside className="ad-side">
            <img
              src="/advertisements/vertical/ad1.gif"
              className="fixed-ad vertical"
              alt=""
            />
          </aside>

          {/* Main content */}
          <main className="content">
            {children}

            {/* Bottom image */}
            <div className="ad-bottom">
              <a
                href="https://zetarho.nispax.in"
                target="_blank"
              rel="noopener noreferrer"
              >
                <img
                  src="/advertisements/horizontal/ad1.gif"
                  className="fixed-ad horizontal"
                  alt=""
                />
              </a>
            </div>
          </main>

          {/* Right image */}
          <aside className="ad-side">
            <img
              src="/advertisements/vertical/ad1.gif"
              className="fixed-ad vertical"
              alt=""
            />
          </aside>
        </div>
      </body>
    </html>
  );
}
