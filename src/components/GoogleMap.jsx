"use client";

export default function GoogleMap({ width = "100%", height = "256px", className = "" }) {
  return (
    <div className={`w-full bg-gray-800 rounded-lg border border-gray-700 overflow-hidden ${className}`} style={{ height }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7920.678599784658!2d107.626977!3d-6.969239000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sid!2sid!4v1751624702918!5m2!1sid!2sid"
        width={width}
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map showing Telkom University Landmark Tower (TULT)"
      />
    </div>
  );
} 