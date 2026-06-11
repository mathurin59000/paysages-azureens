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
    <Html>
      <Head />
      <Preview>
        Nouvelle demande de contact de {name}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={badge}>Nouvelle demande de contact</Text>
            <Heading style={h1}>
              {name} souhaite vous contacter
            </Heading>
            <Text style={meta}>{submittedAt}</Text>
          </Section>

          <Section style={content}>
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
                  <Text style={value}>{phone}</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section>
              <Text style={label}>Message</Text>
              <Section style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </Section>
            </Section>

            <Hr style={hr} />

            <Text style={footer}>
              Demande reçue via le formulaire de contact de votre site.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default OwnerNotification;

const main = {
  backgroundColor: "#f1f5f9",
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
  padding: "32px 40px",
};

const badge = {
  backgroundColor: "#3b82f6",
  color: "#ffffff",
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "0.8px",
  textTransform: "uppercase" as const,
  padding: "4px 10px",
  borderRadius: "4px",
  display: "inline-block",
  margin: "0 0 16px",
};

const h1 = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "700",
  margin: "0 0 8px",
  lineHeight: "28px",
  letterSpacing: "-0.3px",
};

const meta = {
  color: "#94a3b8",
  fontSize: "13px",
  margin: "0",
};

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "0 0 8px 8px",
  padding: "32px 40px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
};

const infoGrid = {
  marginBottom: "8px",
};

const infoCell = {
  paddingRight: "24px",
  paddingBottom: "16px",
  verticalAlign: "top" as const,
};

const label = {
  color: "#94a3b8",
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "0.6px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px",
};

const value = {
  color: "#0f172a",
  fontSize: "15px",
  fontWeight: "500",
  margin: "0",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "24px 0",
};

const messageBox = {
  backgroundColor: "#f8fafc",
  borderLeft: "3px solid #3b82f6",
  borderRadius: "0 6px 6px 0",
  padding: "16px 20px",
};

const messageText = {
  color: "#334155",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: "#94a3b8",
  fontSize: "12px",
  margin: "0",
};
