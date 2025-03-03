import MainCard from "@/components/mainCard";
import { ToastProvider } from "@/components/notitoast/ToastProvider";

export default function App() {
  return (
    <ToastProvider>
      <header className="mb-5 border-b-3 border-gray-800">
        <span className="text-3xl md:text-4xl font-bold">NotiToast 🍞</span>
      </header>
      <MainCard />
    </ToastProvider>
  );
}
