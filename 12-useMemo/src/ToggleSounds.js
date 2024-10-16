import { memo } from "react";

const ToggleSounds = memo(function ToggleSounds({
  allowSound,
  toggleAllowSound,
}) {
  return (
    <button className="btn-sound" onClick={toggleAllowSound}>
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
});

export { ToggleSounds };
