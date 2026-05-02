import "./globals.css";

export const metadata = {
  title: "沐爪宠护洗护店",
  description: "宠物洗护、SPA、造型与健康护理预约页面",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
