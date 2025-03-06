import "./globals.css";

export const metadata = {
  title: "NotiToast - Your Ultimate Notification Library",
  description:
    "Seamlessly add customizable and stylish notifications to your React app with just a few imports.",
  keywords: "React, notifications, toast, UI components, NotiToast",
  author: "NotiToast Team",
  openGraph: {
    title: "NotiToast 🍞 - Effortless Notification Management",
    description:
      "NotiToast makes handling app notifications simple and elegant. Plug and play with customizable toasts!",
  },
};
import { ToastProvider } from "@/components/notitoast/ToastProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`h-screen w-screen flex flex-col justify-center items-center`}
      >
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
