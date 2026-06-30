// Renders project cards from the PROJECTS array in projects.js.
// To add a project: edit projects.js only. This file doesn't need to change.

function renderProjects() {
  const list = document.getElementById('project-list');
  if (!list || typeof PROJECTS === 'undefined') return;

  PROJECTS.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const visualContent = project.image
      ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}">`
      : `<span class="placeholder-label">image coming soon</span>`;

    const tags = (project.tools || [])
      .map(tool => `<span>${escapeHtml(tool)}</span>`)
      .join('');

    const detailId = `detail-${index}`;

    const linkHtml = project.link
      ? `<a class="card-detail-link" href="${escapeHtml(project.link)}" target="_blank" rel="noopener">View more &rarr;</a>`
      : '';

    card.innerHTML = `
      <div class="card-header">
        <div class="card-visual">${visualContent}</div>
        <div class="card-body">
          <div class="card-meta">
            <span>${escapeHtml(project.year || '')}</span>
            <span>${escapeHtml(project.team || '')}</span>
            <span>${escapeHtml(project.role || '')}</span>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="card-tagline">${escapeHtml(project.tagline || '')}</p>
          <div class="card-tags">${tags}</div>
          <button class="card-toggle" aria-expanded="false" aria-controls="${detailId}">
            Read more
          </button>
        </div>
      </div>
      <div class="card-detail" id="${detailId}">
        <div class="card-detail-inner">
          <p>${escapeHtml(project.description || '')}</p>
          ${linkHtml}
        </div>
      </div>
    `;

    list.appendChild(card);
  });

  // Wire up toggle buttons after all cards are in the DOM
  document.querySelectorAll('.card-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const detail = document.getElementById(button.getAttribute('aria-controls'));
      const isOpen = detail.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
      button.textContent = isOpen ? 'Show less' : 'Read more';
    });
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', renderProjects);
