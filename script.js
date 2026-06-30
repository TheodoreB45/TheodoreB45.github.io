// Renders project cards from the PROJECTS array in projects.js.
// Each card links to its dedicated page at projects/<slug>.html.
// To add a project: edit projects.js and add a matching HTML page.
// This file doesn't need to change.

function renderProjects() {
  const list = document.getElementById('project-list');
  if (!list || typeof PROJECTS === 'undefined') return;

  PROJECTS.forEach((project) => {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = `projects/${encodeURIComponent(project.slug)}.html`;

    const visualContent = project.image
      ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}">`
      : `<span class="placeholder-label">image coming soon</span>`;

    const tags = (project.tools || [])
      .map(tool => `<span>${escapeHtml(tool)}</span>`)
      .join('');

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
          <span class="card-view-link">View project &rarr;</span>
        </div>
      </div>
    `;

    list.appendChild(card);
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', renderProjects);
