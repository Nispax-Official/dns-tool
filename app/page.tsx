import DnsForm from "./components/DnsForm";

export default function Home() {
  return (
    <div style={{ marginBottom: 24 }}>
      <a
        href="https://discord.gg/6HFySAMv6K"
        target="_blank"
        style={{
          fontSize: 20,
          color: "grey",
          textDecoration: "none",   // remove underline
          display: "block",
          marginBottom: 18
        }}
      >
        Powered by NISPAX InfoTech
      </a>

      <DnsForm />
    </div>
  );
}