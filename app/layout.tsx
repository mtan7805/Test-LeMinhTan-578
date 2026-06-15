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
        <main className="flex-1 h-screen relative sm:ml-24 md:ml-64 overflow-hidden flex justify-center items-center bg-zinc-950">
          <div className="w-full h-full max-w-[450px] md:max-w-none relative bg-bg-dark border-x border-border-dark md:border-x-0 flex flex-col overflow-hidden shadow-2xl md:shadow-none">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
