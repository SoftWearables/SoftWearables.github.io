// Add a "#" link to every content heading that has an id (kramdown generates them),
// so that sections can be linked directly, e.g. https://softwearables.github.io/#keynotes
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("article h2[id], article h3[id], article h4[id], article h5[id]").forEach((heading) => {
    const anchor = document.createElement("a");
    anchor.className = "heading-anchor";
    anchor.href = `#${heading.id}`;
    anchor.setAttribute("aria-label", `Link to section: ${heading.textContent.trim()}`);
    anchor.textContent = "#";
    heading.appendChild(anchor);
  });
});
