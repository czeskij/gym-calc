import { useState } from "react";
import { GREETINGS } from "../data/greetings";

const STORAGE_KEY = "greetingBanner";

function getTodayString() {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}

function getDailyGreeting() {
  const today = getTodayString();
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  if (stored.day === today && stored.index !== undefined) {
    return stored.index;
  }

  const index = Math.floor(Math.random() * GREETINGS.length);
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...stored, day: today, index }),
  );
  return index;
}

export default function GreetingBanner() {
  const today = getTodayString();
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  const alreadyClosed = stored.closedDay === today;

  const [visible, setVisible] = useState(!alreadyClosed);

  if (!visible) return null;

  const greetingIndex = getDailyGreeting();

  function handleClose() {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...current, closedDay: today }),
    );
    setVisible(false);
  }

  return (
    <div className="greeting-banner" role="status">
      <span className="greeting-text">{GREETINGS[greetingIndex]}</span>
      <button
        className="greeting-close"
        onClick={handleClose}
        aria-label="Zamknij"
      >
        ×
      </button>
    </div>
  );
}
