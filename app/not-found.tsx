import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>The page you were looking for is not here.</p>
      <Link href="/">Go to the home page</Link>
    </main>
  )
}
