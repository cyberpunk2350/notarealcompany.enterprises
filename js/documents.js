// Assuming assets/index.json now contains relative paths, e.g.:
// [
//   "forms/HR-Onboarding-Internal-Checklist.md",
//   "docs/Finance-Report-External-AnnualReport2023.md"
// ]

document.addEventListener("DOMContentLoaded", () => {
  const documentList = document.getElementById("document-cards");
  const modal = document.getElementById("docModal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = modal.querySelector(".modal-close");
  const deptFilter = document.getElementById("departmentFilter");
  const catFilter = document.getElementById("categoryFilter");

  let documents = [];

  fetch("assets/index.json")
    .then(res => res.json())
    .then(data => {
      // parse filenames including subfolder path
      documents = data.map(file => parseFilename(file)).filter(d => d !== null);
      populateFilters();
      renderCards();
    })
    .catch(err => {
      documentList.innerHTML = `<div class="memo">Error loading documents: ${err}</div>`;
    });

  // Parse file name: Department-Category-Use-Title.ext
  function parseFilename(filepath) {
    // filepath may include folder, e.g., "forms/HR-Onboarding-Internal-Checklist.md"
    const filename = filepath.split("/").pop(); 
    const match = filename.match(/^(.+?)-(.+?)-(.+?)-(.+?)\.(.+)$/);
    if (!match) return null;
    return {
      department: match[1],
      category: match[2],
      use: match[3],
      title: match[4].replace(/_/g, " "),
      ext: match[5],
      path: `assets/${filepath}` // full relative path
    };
  }

  function populateFilters() {
    const depts = Array.from(new Set(documents.map(d => d.department))).sort();
    const cats = Array.from(new Set(documents.map(d => d.category))).sort();

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
    documentList.innerHTML = "";

    const filtered = documents.filter(d => {
      if (!d) return false;
      const deptMatch = !deptFilter.value || d.department === deptFilter.value;
      const catMatch = !catFilter.value || d.category === catFilter.value;
      return deptMatch && catMatch;
    });

    if (!filtered.length) {
      documentList.innerHTML = `<div class="memo">No documents match your filter. Happiness Officer is disappointed.</div>`;
      return;
    }

    filtered.forEach(doc => {
      if (!doc) return;
      const card = document.createElement("div");
      card.className = "card document-card";
      card.innerHTML = `
        <h3>${doc.title}</h3>
        <p><strong>Department:</strong> ${doc.department}</p>
        <p><strong>Category:</strong> ${doc.category}</p>
        <p><strong>Use:</strong> ${doc.use}</p>
      `;
      card.addEventListener("click", () => openModal(doc));
      documentList.appendChild(card);
    });
  }

  function openModal(doc) {
    modal.style.display = "block";
    modalBody.innerHTML = `
      <div class="loading-spinner" style="text-align:center;padding:2em;">
        <div style="font-size:2em;">⏳</div>
        <p>Loading ${doc.title}…</p>
      </div>
    `;

    const ext = doc.ext.toLowerCase();

    if (ext === "md") {
      fetch(doc.path)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
          return res.text();
        })
        .then(md => {
          modalBody.innerHTML = `<div class="markdown-body" style="padding:1em;overflow:auto;">${marked.parse(md)}</div>`;
        })
        .catch(err => {
          console.error("Error loading Markdown document:", err);
          modalBody.innerHTML = `<div class="memo">Could not load Markdown document: ${err}</div>`;
        });

    } else if (ext === "pdf") {
      modalBody.innerHTML = `<iframe src="${doc.path}" style="width:100%;height:80vh;border:none;"></iframe>`;
    } else {
      modalBody.innerHTML = `<div class="memo">Unsupported file type: ${ext}</div>`;
    }
  }

  // Modal close
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
