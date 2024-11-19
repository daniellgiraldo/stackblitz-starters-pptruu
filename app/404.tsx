export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center">
      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <p className="text-xl mb-4">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary">Go Back Home</a>
    </div>
  );
}