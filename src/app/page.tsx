"use client";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/heroes/hero1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "1rem"
        }}
      >
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 5vw, 3rem)", marginBottom: "1rem" }}>
          Добро пожаловать
        </h1>
        <p style={{ color: "white", fontSize: "clamp(0.9rem, 4vw, 1.2rem)", maxWidth: "600px" }}>
          Платформа для организации и участия в ярмарочных мероприятиях
        </p>
      </div>
    </div>
  );
}