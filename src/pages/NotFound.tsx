
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/">Back to Home</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
