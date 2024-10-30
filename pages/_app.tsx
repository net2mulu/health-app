import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { useRouter } from "next/router";
import AdminLayout from "@/components/admin/layout/AdminLayout";
import Layout from "@/components/landing/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname);

  return (
    <ThemeProvider>
      {pathname.startsWith("/admin") ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}
