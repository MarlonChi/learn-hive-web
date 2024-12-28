"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { useCarousel } from "@/hooks/useCarousel";

const Landing = () => {
  const currentImage = useCarousel({ totalImages: 3 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
      >
        <div className="landing__hero-content">
          <h1 className="landing__title">Cursos</h1>
          <p className="landing__description">
            Estes são alguns cursos que você pode se inscrever.
            <br />
          </p>
          <div className="landing__cta">
            <Link href="/search">
              <div className="landing__cta-button">Buscar por cursos</div>
            </Link>
          </div>
        </div>
        <div className="landing__hero-images">
          {["hero1.jpg", "hero2.jpg", "hero3.jpg"].map((src, index) => (
            <Image
              key={src}
              src={`/images/${src}`}
              alt={`Hero Banner ${index + 1}`}
              fill
              priority={index === currentImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`landing__hero-image ${
                index === currentImage ? "landing__hero-image--active" : ""
              }`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3, once: true }}
        className="landing__featured"
      >
        <h2 className="landing__featured-title">Cursos em Destaque</h2>
        <p className="landing__featured-description">
          De iniciante a avançado, em todos os setores, temos os cursos certos
          para você, preparando toda a sua jornada de aprendizado e aproveitando
          ao máximo cada etapa.
        </p>

        <div className="landing__tags">
          {[
            "web development",
            "front-end",
            "back-end",
            "fullstack",
            "gestão",
            "redes",
          ].map((tag, index) => (
            <span key={index} className="landing__tag">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
