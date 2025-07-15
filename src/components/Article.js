import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Determine emoji based on minutes
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const repeatCount = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
  const emojiDisplay = emoji.repeat(repeatCount);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {emojiDisplay} {minutes} min read • {date}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
