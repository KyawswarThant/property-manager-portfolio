import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-900 p-4">
        <h1 className="text-white text-2xl">
          <Link href="/">Kiinteistönhoitaja</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/profile" className="text-white">Minä</Link>
          <Link href="/contact" className="text-white">Yhteystiedot</Link>
          <Link href="/experience" className="text-white">Kokemus</Link>
        </nav>
      </div>
    </div>
  );
}