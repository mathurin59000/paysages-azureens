import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

interface ClientConfirmationProps {
  name: string;
}

const ClientConfirmation = ({ name }: ClientConfirmationProps) => {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Votre demande de contact a bien été reçue — Paysages Azuréens</Preview>
      <Body style={main}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Text style={brandLabel}>PAYSAGES AZURÉENS</Text>
            <Text style={brandTagline}>Paysagiste sur la Côte d&apos;Azur</Text>
          </Section>

          {/* Accent bar */}
          <Section style={accentBar} />

          {/* Content */}
          <Section style={content}>
            <Heading style={h1}>Merci, {name} !</Heading>
            <Text style={intro}>
              Nous avons bien reçu votre demande de contact et nous vous recontacterons
              dans les plus brefs délais, généralement sous 24 à 48h ouvrées.
            </Text>

            {/* Highlight box */}
            <Section style={highlightBox}>
              <Text style={highlightText}>
                Notre équipe de paysagistes prendra soin d&apos;étudier votre projet
                et vous proposera des solutions adaptées à votre espace extérieur
                et au micro-climat méditerranéen.
              </Text>
            </Section>

            <Text style={text}>
              En attendant, n&apos;hésitez pas à consulter nos réalisations sur notre
              site et à nous suivre sur Instagram pour découvrir nos derniers projets.
            </Text>

            <Hr style={hr} />

            {/* Contact info */}
            <Section style={contactRow}>
              <Text style={contactItem}>✉ contact@paysages-azureens.fr</Text>
              <Text style={contactItem}>✆ 06 46 80 09 12</Text>
            </Section>

            <Hr style={hr} />

            <Text style={footer}>
              Cet email a été envoyé automatiquement suite à votre demande de
              contact sur paysages-azureens.fr. Merci de ne pas y répondre directement.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ClientConfirmation;

// ─── Palette (issue de globals.css) ───────────────────────────────────────────
const FOREGROUND  = "#2a341c"; // hsl(85 30% 15%)
const PRIMARY     = "#4f6630"; // hsl(85 35% 30%)
const CREAM       = "#faf8f5"; // hsl(40 33% 97%)
const SAND_LIGHT  = "#f3efe7"; // hsl(40 33% 93%)
const MUTED_FG    = "#757e67"; // hsl(85 10% 45%)
const BORDER      = "#e6e2da"; // hsl(40 20% 88%)

// ─── Styles ───────────────────────────────────────────────────────────────────
const main = {
  backgroundColor: SAND_LIGHT,
  fontFamily: "'Lato', Arial, Helvetica, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "32px 0 56px",
  maxWidth: "560px",
};

const header = {
  backgroundColor: FOREGROUND,
  borderRadius: "6px 6px 0 0",
  padding: "32px 40px 28px",
  textAlign: "center" as const,
};

const brandLabel = {
  color: CREAM,
  fontSize: "20px",
  fontWeight: "600",
  letterSpacing: "3px",
  fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
  margin: "0 0 6px",
};

const brandTagline = {
  color: `${CREAM}99`,
  fontSize: "12px",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0",
};

const accentBar = {
  backgroundColor: PRIMARY,
  height: "3px",
};

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "0 0 6px 6px",
  padding: "40px",
};

const h1 = {
  color: FOREGROUND,
  fontSize: "28px",
  fontWeight: "600",
  fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
  margin: "0 0 20px",
  lineHeight: "34px",
};

const intro = {
  color: FOREGROUND,
  fontSize: "15px",
  lineHeight: "26px",
  margin: "0 0 20px",
};

const highlightBox = {
  backgroundColor: SAND_LIGHT,
  borderLeft: `3px solid ${PRIMARY}`,
  borderRadius: "0 4px 4px 0",
  padding: "16px 20px",
  marginBottom: "20px",
};

const highlightText = {
  color: MUTED_FG,
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0",
  fontStyle: "italic",
};

const text = {
  color: MUTED_FG,
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const hr = {
  borderColor: BORDER,
  margin: "24px 0",
};

const contactRow = {
  paddingBottom: "4px",
};

const contactItem = {
  color: PRIMARY,
  fontSize: "13px",
  margin: "0 0 6px",
  fontWeight: "600",
};

const footer = {
  color: BORDER,
  fontSize: "11px",
  lineHeight: "18px",
  margin: "0",
  textAlign: "center" as const,
};
