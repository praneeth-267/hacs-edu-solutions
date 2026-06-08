export default function Badge({ text }: { text: string }) {
  return (
    <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", borderRadius: 9999, backgroundColor: "#eff6ff", color: "#1d4ed8", fontSize: "0.75rem" }}>
      {text}
    </span>
  );
}
