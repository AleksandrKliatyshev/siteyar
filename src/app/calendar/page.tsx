"use client";

import { getRandomBackground } from "@/lib/backgrounds";
import { usePathname } from "next/navigation";

export default function Calendar() {
  const pathname = usePathname();
  const background = getRandomBackground(pathname);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
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
          justifyContent: "center"
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            maxWidth: "42rem",
            margin: "0 auto",
            padding: "2rem"
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            Календарь ярмарок
          </h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
            Актуальное расписание мероприятий и событий
          </p>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "1.5rem",
              borderRadius: "0.5rem"
            }}
          >
            <p>Скоро здесь появится календарь</p>
          </div>
        </div>
      </div>
    </div>
  );
}