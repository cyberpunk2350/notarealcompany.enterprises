// documents.js – dynamically loads files from assets/index.json

async function loadDocuments() {
  try {
    const response = await fetch("assets/index.json");
    if (!response.ok) throw new Error("Failed to load document index");
    const files = await response.json();

    const docs = files.map(parseDocument).filter(Boolean);
    populateFilters(docs);
    renderDocuments(docs);
  } catch (err) {
    document.getElementById("document-list").innerHTML = `<p>Error loading documents: ${err.message}</p>`;
  }
}

function parseDocument(filename) {
  const match = filename.match(/^([^-]+)-([^-]+)-([^-]+)-(.+)\.(pdf|md)$/i);
  if (!match) return null;
  return {
    department: match[1],
    category: match[2],
    use: match[3],
    title: match[4].replace(/_/g, ' '),
    ext: match[5],
    path: `assets/${filename}`
  };
}

function openModalWithContent(html) {
  const modal = document.getElementById("docModal");
  const body = document.getElementById("modal-body");
  body.innerHTML = html;
  modal.style.display = "block";
}

function renderDocuments(docs) {
  const list = document.getElementById("document-list");
  list.innerHTML = "";

  if (docs.length === 0) {
    list.innerHTML = "<p>No documents found matching your filters.</p>";
    return;
  }

  docs.forEach(doc => {
    const card = document.createElement("div");
    card.className = "document-card";

    card.innerHTML = `
      <h3>${doc.title}</h3>
      <p><strong>Department:</strong> ${doc.department}</p>
      <p><strong>Category:</strong> ${doc.category}</p>
      <p><strong>Use:</strong> ${doc.use}</p>
      <button class="btn" data-doc="${doc.path}" data-ext="${doc.ext}">View</button>
    `;
    list.appendChild(card);
  });

  document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", async (e) => {
      const path = e.target.getAttribute("data-doc");
      const ext = e.target.getAttribute("data-ext").toLowerCase();

      if (ext === "pdf") {
        openModalWithContent(`<iframe src="${path}" style="width:100%;height:80vh;border:none;"></iframe>`);
      } else if (ext === "md") {
        const response = await fetch(path);
        const text = await response.text();
        const html = window.marked ? window.marked(text) : `<pre>${text}</pre>`;
        openModalWithContent(`<div class="markdown-body">${html}</div>`);
      }
    });
  });
}

function populateFilters(docs) {
  const departments = [...new Set(docs.map(d => d.department))];
  const categories = [...new Set(docs.map(d => d.category))];

  const deptSelect = document.getElementById("departmentFilter");
  const catSelect = document.getElementById("categoryFilter");

  departments.forEach(dept => {
    const option = document.createElement("option");
    option.value = dept;
    option.textContent = dept;
    deptSelect.appendChild(option);
  });

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    catSelect.appendChild(option);
  });

  function applyFilters() {
    const selectedDept = deptSelect.value;
    const selectedCat = catSelect.value;
    const filtered = docs.filter(d =>
      (selectedDept === "" || d.department === selectedDept) &&
      (selectedCat === "" || d.category === selectedCat)
    );
    renderDocuments(filtered);
  }

  deptSelect.addEventListener("change", applyFilters);
  catSelect.addEventListener("change", applyFilters);
}

document.addEventListener("DOMContentLoaded", loadDocuments);

// Modal close handlers
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("docModal");
  const closeBtn = document.querySelector(".modal-close");

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
