import { ImageResponse } from "next/og";
export const alt = "Ship or Skip — We actually ran it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0b0d12", color: "white" }}>
    <div style={{ fontSize: 48, display: "flex" }}><span style={{ color: "#22c55e" }}>Ship</span>&nbsp;or&nbsp;<span style={{ color: "#f43f5e" }}>Skip</span></div>
    <div style={{ fontSize: 96, fontWeight: 900, marginTop: 20 }}>We actually ran it.</div>
    <div style={{ fontSize: 32, color: "#9ca3af", marginTop: 20 }}>Hands-on verdicts on new AI agent & vibe-coding tools</div></div>, size);
}
