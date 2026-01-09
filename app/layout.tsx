import "./globals.css";

export const metadata = {
  title: "Lamiss de Paris",
  description: "Lamiss de Paris — Beauty & Style",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="lamiss-body">
        {children}
      </body>
    </html>
  );
}
