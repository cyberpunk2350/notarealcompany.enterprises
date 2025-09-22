document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-cards");
  const modal = document.getElementById("projModal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = modal.querySelector(".modal-close");
  const deptFilter = document.getElementById("departmentFilter");
  const catFilter = document.getElementById("categoryFilter");

  let projects = [];

  fetch("assets/projects/index.json")
    .then(res => res.json())
    .then(data => {
      projects = data.map(file => parseFilename(file)).filter(p => p !== null);
      populateFilters();
      renderCards();
    })
    .catch(err => {
      projectList.innerHTML = `<div class="memo">Error loading projects: ${err}</div>`;
    });

  function parseFilename(filepath) {
    const filename = filepath.split("/").pop();
    const extIndex = filename.lastIndexOf(".");
    if (extIndex === -1) return null;

    const ext = filename.slice(extIndex + 1);
    const nameWithoutExt = filename.slice(0, extIndex);

    // Split into parts: department, category, use, title (remaining parts)
    const parts = nameWithoutExt.split("-");
    if (parts.length < 4) return null;

    const department = parts[0];
    const category = parts[1];
    const use = parts[2];
    const title = parts.slice(3).join("-").replace(/_/g, " ");

    return {
      department,
      category,
      use,
      title,
      ext,
      path: `assets/projects/${filepath}`
    };
  }

  function populateFilters() {
    const depts = Array.from(new Set(projects.map(p => p.department))).sort();
    const cats = Array.from(new Set(projects.map(p => p.category))).sort();

    depts.forEach(d => {
      const opt = document.createElement("option");
      opt.value = d;
      opt.textContent = d;
      deptFilter.appendChild(opt);
    });

    cats.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      catFilter.appendChild(opt);
    });

    deptFilter.addEventListener("change", renderCards);
    catFilter.addEventListener("change", renderCards);
  }

  function renderCards() {
    projectList.innerHTML = "";

    const filtered = projects.filter(p => 
      p && (!deptFilter.value || p.department === deptFilter.value) && 
          (!catFilter.value || p.category === catFilter.value)
    );

    if (!filtered.length) {
      projectList.innerHTML = `<div class="memo">No projects match your filter. Happiness Officer is disappointed.</div>`;
      return;
    }

    filtered.forEach(proj => {
      const card = document.createElement("div");
      card.className = "card document-card";
      card.innerHTML = `
        <h3>${proj.title}</h3>
        <p><strong>Department:</strong> ${proj.department}</p>
        <p><strong>Category:</strong> ${proj.category}</p>
        <p><strong>Use:</strong> ${proj.use}</p>
      `;
      card.addEventListener("click", () => openModal(proj));
      projectList.appendChild(card);
    });
  }

  function openModal(proj) {
    modal.style.display = "block";
    modalBody.innerHTML = `
      <div class="loading-spinner" style="text-align:center;padding:2em;">
        <div style="font-size:2em;">⏳</div>
        <p>Loading ${proj.title}…</p>
      </div>
    `;

    const ext = proj.ext.toLowerCase();

    if (ext === "md") {
      fetch(proj.path)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
          return res.text();
        })
        .then(md => {
          modalBody.innerHTML = `<div class="markdown-body" style="padding:1em;overflow:auto;">${marked.parse(md)}</div>`;
        })
        .catch(err => {
          console.error("Error loading Markdown project:", err);
          modalBody.innerHTML = `<div class="memo">Could not load Markdown project: ${err}</div>`;
        });
    } else if (ext === "pdf") {
      modalBody.innerHTML = `<iframe src="${proj.path}" style="width:100%;height:80vh;border:none;"></iframe>`;
    } else {
      modalBody.innerHTML = `<div class="memo">Unsupported file type: ${ext}</div>`;
    }
  }

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    modalBody.innerHTML = "";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalBody.innerHTML = "";
    }
  });
});
