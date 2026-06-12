import logo from "@/assets/logo_round_288x288.webp";
import Image from "next/image";
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconProps } from "@radix-ui/themes";

const Footer = () => {
  const socialNetworks: {
    id: string,
    label: string,
    url: string,
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>,
  }[] = [{
    id: 'instagram',
    label: 'Instagram',
    icon: InstagramLogoIcon,
    url: 'https://instagram.com/paysagesazureens',
  }];

  return (
    <footer className="py-12 bg-foreground">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-10">
          <div>
            <Image src={logo} alt="Paysages Azuréens" className="h-16 w-auto mb-4" />
            <p className="font-body text-sm text-cream/60 leading-relaxed">
              Paysagiste sur la Côte d'Azur. Création, entretien et aménagement de jardins méditerranéens d'exception.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-cream mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Services", "Réalisations", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l === "À propos" ? "apropos" : l === "Réalisations" ? "projets" : l.toLowerCase()}`} className="font-body text-sm text-cream/60 hover:text-cream transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-cream mb-4">Suivez-nous</h4>
            <p className="font-body text-sm text-cream/60 mb-4">Suivez nos réalisations en direct</p>
            <div className="flex gap-4">
              {socialNetworks.map(({ id, label, url, icon: Icon}) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/60 transition-colors text-xs font-body"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 text-center">
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Paysages Azuréens — Paysagiste Côte d'Azur. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
