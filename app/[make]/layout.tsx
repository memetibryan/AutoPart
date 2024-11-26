import { SEO } from "../config";

export async function generateMetadata({ params }: { params: { make: string } }) {
  const make = params.make.charAt(0).toUpperCase() + params.make.slice(1);

  return SEO[make] ? {
    title: SEO[make].title,
    description: SEO[make].description,
    alternates: {
      canonical: 'https://usedautoparts.pro/' + params.make
    }
  } : {}
}

export default function MakeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}