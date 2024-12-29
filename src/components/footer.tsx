import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Learn Hive</p>
      <div className="footer__links">
        {["Sobre", "Politica de Privacidade", "Contato"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLocaleLowerCase().replace(" ", "-")}`}
            className="footer__link"
          >
            {item}
          </Link>
        ))}
      </div>
    </footer>
  );
};
