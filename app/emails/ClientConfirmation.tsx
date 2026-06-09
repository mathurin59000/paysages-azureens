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
} from "@react-email/components";

interface ClientConfirmationProps {
  name: string;
}

export default function ClientConfirmation({
  name,
}: ClientConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Votre demande de contact a bien été reçue</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>Paysages Azuréens</Text>
          </Section>

          <Section style={content}>
            <Heading style={h1}>
              Merci !
            </Heading>
            <Text style={text}>
              Bonjour {name},
            </Text>
            <Text style={text}>
              Nous avons bien reçu votre message et nous vous recontacterons dans les plus
              brefs délais, généralement sous 24 à 48h ouvrées.
            </Text>
            <Text style={text}>
              En attendant, n&apos;hésitez pas à consulter nos réalisations et à nous suivre sur les réseaux sociaux.
            </Text>

            <Section style={dividerSection}>
              <Hr style={hr} />
              <Text style={footer}>
                Cet email a été envoyé automatiquement suite à votre demande de
                contact. Merci de ne pas y répondre directement.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const header = {
  backgroundColor: "#0f172a",
  borderRadius: "8px 8px 0 0",
  padding: "24px 40px",
};

const logo = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0",
  letterSpacing: "-0.3px",
};

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "0 0 8px 8px",
  padding: "40px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
};

const h1 = {
  color: "#0f172a",
  fontSize: "26px",
  fontWeight: "700",
  margin: "0 0 20px",
  letterSpacing: "-0.5px",
};

const text = {
  color: "#475569",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const dividerSection = {
  marginTop: "32px",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "0 0 20px",
};

const footer = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0",
};
