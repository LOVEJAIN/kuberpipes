import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="text-4xl">Page not found</h1>
      <p className="text-body mt-4 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  )
}
