import { Navigation } from "./components/Navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="h-full">
      <body className="min-h-full bg-bg-dark text-white flex flex-row overflow-hidden">
        <Navigation />
        <main className="flex-1 h-screen relative md:ml-64 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
