import "./globals.css";
import Background from "./components/Background";

export const metadata = {
  title: "DNS Tools by NISPAX",
  description: "DNS lookup tools for everyone, powered by NISPAX InfoTech.",
  openGraph: {
    title: "DNS-Tools",
    description: "Free online DNS lookup tools for everyone.",
    url: "https://zetarho.nispax.in",
    siteName: "DNS-Tools by NISPAX",
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/1426246195449299067/1477996620686823485/discord-card.jpg?ex=69a6cb1e&is=69a5799e&hm=1d39530cab0d52fe247acb8282c98da6d4291f2564207cdb8579cfa6839ff172&",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DNS-Tools by NISPAX",
    description: "Free online DNS lookup tools for everyone.",
    images: ["/og.png"],
  },
};

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
