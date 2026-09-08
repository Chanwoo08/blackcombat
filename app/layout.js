import "./globals.css";

export const metadata = {
  title: "BLACK COMBAT",
  description: "BLACK COMBAT 격투기 팬 서비스",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}