import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("es-PE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      <Helmet>
        <title>Blog | Alissa Osores Consulting</title>
        <meta
          name="description"
          content="Artículos sobre operaciones, mejora de procesos y automatización para PYMEs en crecimiento. Aprende a ordenar tu negocio."
        />
        <link rel="canonical" href="https://alissaosoresconsulting.lovable.app/blog" />
        <meta property="og:title" content="Blog | Alissa Osores Consulting" />
        <meta
          property="og:description"
          content="Ideas prácticas para ordenar la operación de tu PYME y crecer con claridad."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Alissa Osores Consulting",
            url: "https://alissaosoresconsulting.lovable.app/blog",
            blogPost: blogPosts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.excerpt,
              datePublished: p.date,
              url: `https://alissaosoresconsulting.lovable.app/blog/${p.slug}`,
            })),
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Ideas para ordenar tu operación
            </h1>
            <p className="text-lg text-muted-foreground">
              Artículos prácticos sobre procesos, automatización y crecimiento
              operativo para PYMEs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5 bg-secondary">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    {post.category}
                  </p>
                  <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                    Leer artículo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
