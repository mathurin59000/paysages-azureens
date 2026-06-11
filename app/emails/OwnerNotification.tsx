import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from "react-email";

interface OwnerNotificationProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

const OwnerNotification = ({
  name,
  email,
  phone,
  message,
  submittedAt,
}: OwnerNotificationProps) => {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Nouvelle demande de contact de {name} — Paysages Azuréens</Preview>
      <Body style={main}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Text style={brandLabel}>PAYSAGES AZURÉENS</Text>
            <Text style={badge}>Nouvelle demande de contact</Text>
            <Heading style={h1}>{name} souhaite vous contacter</Heading>
            <Text style={meta}>{submittedAt}</Text>
          </Section>

          {/* Accent bar */}
          <Section style={accentBar} />

          {/* Content */}
          <Section style={content}>

            {/* Contact info grid */}
            <Section style={infoGrid}>
              <Row>
                <Column style={infoCell}>
                  <Text style={label}>Nom</Text>
                  <Text style={value}>{name}</Text>
                </Column>
              </Row>
              <Row>
                <Column style={infoCell}>
                  <Text style={label}>Email</Text>
                  <Text style={value}>{email}</Text>
                </Column>
              </Row>
              <Row>
                <Column style={infoCell}>
                  <Text style={label}>Téléphone</Text>
                  <Text style={value}>{phone || "—"}</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={hr} />

            {/* Message */}
            <Section>
              <Text style={label}>Message</Text>
              <Section style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </Section>
            </Section>

            <Hr style={hr} />

            <Text style={footer}>
              Demande reçue via le formulaire de contact de paysages-azureens.fr
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default OwnerNotification;

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
};

const brandLabel = {
  color: `${CREAM}80`,
  fontSize: "11px",
  letterSpacing: "2.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px",
};

const badge = {
  backgroundColor: PRIMARY,
  color: CREAM,
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "0.8px",
  textTransform: "uppercase" as const,
  padding: "4px 12px",
  borderRadius: "3px",
  display: "inline-block",
  margin: "0 0 16px",
};

const h1 = {
  color: CREAM,
  fontSize: "22px",
  fontWeight: "600",
  fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
  margin: "0 0 8px",
  lineHeight: "28px",
};

const meta = {
  color: `${CREAM}66`,
  fontSize: "12px",
  margin: "0",
};

const accentBar = {
  backgroundColor: PRIMARY,
  height: "3px",
};

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "0 0 6px 6px",
  padding: "32px 40px",
};

const infoGrid = {
  marginBottom: "4px",
};

const infoCell = {
  paddingBottom: "16px",
  verticalAlign: "top" as const,
};

const label = {
  color: MUTED_FG,
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "0.8px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px",
};

const value = {
  color: FOREGROUND,
  fontSize: "15px",
  fontWeight: "500",
  margin: "0",
};

const hr = {
  borderColor: BORDER,
  margin: "24px 0",
};

const messageBox = {
  backgroundColor: SAND_LIGHT,
  borderLeft: `3px solid ${PRIMARY}`,
  borderRadius: "0 4px 4px 0",
  padding: "16px 20px",
};

const messageText = {
  color: FOREGROUND,
  fontSize: "15px",
  lineHeight: "26px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: MUTED_FG,
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
};
