import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://alissaosoresconsulting.lovable.app/blog/${post.slug}`;
  const formattedDate = new Date(post.date).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            image: post.image,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Alissa Osores",
              url: "https://www.linkedin.com/in/alissamov",
            },
            publisher: {
              "@type": "Organization",
              name: "Alissa Osores Consulting",
            },
            mainEntityOfPage: url,
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-28 pb-24">
        <article className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              {post.category}
            </p>

            {/* H1 único */}
            <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
              {post.title}
            </h1>

            {/* Resumen atractivo */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime} de lectura
              </span>
            </div>

            <div className="aspect-[16/9] overflow-hidden rounded-xl my-10 bg-secondary">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Cuerpo escaneable */}
            <div className="space-y-8">
              {post.sections.map((section, i) =>
                section.level === 2 ? (
                  <section key={i}>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4"
                      >
                        {p}
                      </p>
                    ))}
                  </section>
                ) : (
                  <div key={i}>
                    <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                      {section.heading}
                    </h3>
                    {section.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ),
              )}
            </div>

            {/* CTA al final */}
            <aside className="mt-16 bg-secondary rounded-2xl p-8 md:p-10 text-center">
              <p className="text-xl md:text-2xl font-bold text-primary mb-6">
                {post.ctaText}
              </p>
              <a
                href="https://calendly.com/alissaov/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground font-medium px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Agendar llamada gratuita
              </a>
            </aside>
          </motion.div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
