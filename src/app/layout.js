import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "ITExpertNow";
const APP_DEFAULT_TITLE = "ITExpertNow";
const APP_TITLE_TEMPLATE = "%s - ITExpertNow App TEMPLATE";
const APP_DESCRIPTION = "Managed Security Service Provider (MSSP)";

export const metadata = {
  applicationName: APP_NAME,
  manifest: "/manifest.json",
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  icons: {
    icon: [
      { rel: "apple-touch-icon", sizes: "180x180", url: "/icons/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/icons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/icons/favicon-16x16.png" },
      { rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "shortcut icon", url: "/icons/favicon.ico" }
    ],
  },
  msapplication: {
    TileColor: "#2d89ef",
    config: "/icons/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
