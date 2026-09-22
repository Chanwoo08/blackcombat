import "./globals.css";

export const metadata = {
  title: "BLACK COMBAT",
  description: "BLACK COMBAT 격투기 팬 서비스",
  icons: {
    icon: "/images/logo.png", // public 아래 images 폴더 안에 있으므로 경로 수정
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}