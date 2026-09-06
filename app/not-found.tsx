import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main id="main" className="col pt-[88px] pb-32">
        <p className="mono">404</p>
        <h1 className="serif mt-3 text-[clamp(40px,6vw,58px)] leading-none">Scene missing.</h1>
        <p className="mt-8">
          <Link href="/">Back to the index</Link>
        </p>
      </main>
    </>
  );
}
