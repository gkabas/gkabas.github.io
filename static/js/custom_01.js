// Global cache for preloaded PDF documents (promises)
const pdfPreloadCache = {};

const yourCustomFunction01 = (message) => {
  console.log(message);
};

// --- PDF Data Map for Staged Loading (Extensible up to 25 papers) ---
// IMPORTANT: Extend this map when you add papers 8 through 25.
const pdfUrlMap = [
    // Existing Papers (1-7)
    { key: 1, url: "/files/BKO.pdf" },
    { key: 2, url: "/files/KR.pdf" },
    { key: 3, url: "/files/ADK.pdf" },
    { key: 4, url: "/files/DKO.pdf" },
    { key: 5, url: "/files/ADGKK.pdf" }, 
    { key: 6, url: "/files/Paper06_MainResults.pdf" }, 
    { key: 7, url: "/files/Paper07_MainResults.pdf" },
    
    // Placeholder for new papers (ADD 18 MORE PAPERS HERE)
    { key: 8, url: "/files/Paper08_MainResults.pdf" }, 
    { key: 9, url: "/files/Paper09_MainResults.pdf" },
    { key: 10, url: "/files/Paper10_MainResults.pdf" },
    { key: 11, url: "/files/Paper11_MainResults.pdf" },
    { key: 12, url: "/files/Paper12_MainResults.pdf" },
    { key: 13, url: "/files/Paper13_MainResults.pdf" },
    { key: 14, url: "/files/Paper14_MainResults.pdf" },
    { key: 15, url: "/files/Paper15_MainResults.pdf" },
    { key: 16, url: "/files/Paper16_MainResults.pdf" },
    { key: 17, url: "/files/Paper17_MainResults.pdf" },
    { key: 18, url: "/files/Paper18_MainResults.pdf" },
    { key: 19, url: "/files/Paper19_MainResults.pdf" },
    { key: 20, url: "/files/Paper20_MainResults.pdf" },
    { key: 21, url: "/files/Paper21_MainResults.pdf" },
    { key: 22, url: "/files/Paper22_MainResults.pdf" },
    { key: 23, url: "/files/Paper23_MainResults.pdf" },
    { key: 24, url: "/files/Paper24_MainResults.pdf" },
    { key: 25, url: "/files/Paper25_MainResults.pdf" },
];

// --- Staged Preload Function ---
function stagedPreloadAllPDFs() {
    if (typeof pdfjsLib === 'undefined' || !pdfjsLib.getDocument) {
        console.warn("PDF.js library is not loaded. PDF preloading skipped.");
        return;
    }

    const BATCH_SIZE = 5;
    const DELAY_MS = 750; // 0,75 seconds between batches

    function loadBatch(startIndex) {
        const endIndex = Math.min(startIndex + BATCH_SIZE, pdfUrlMap.length);
        
        if (startIndex >= endIndex) {
            console.log("PDF Staged Preloading Complete.");
            return;
        }

        console.log(`Starting PDF Preload Batch: ${startIndex + 1} to ${endIndex}`);

        for (let i = startIndex; i < endIndex; i++) {
            const { key, url } = pdfUrlMap[i];
            
            if (pdfPreloadCache[key]) {
                 continue; // Skip if already started/finished
            }

            const loadingTask = pdfjsLib.getDocument(url);
            pdfPreloadCache[key] = loadingTask.promise; // Store the promise
            
            loadingTask.promise.catch((error) => {
                console.error(`Error during preloading for PDF ${key}:`, error);
                delete pdfPreloadCache[key]; 
            });
        }

        // Schedule the next batch load after the delay
        if (endIndex < pdfUrlMap.length) {
            setTimeout(() => loadBatch(endIndex), DELAY_MS);
        }
    }

    // Start the first batch
    loadBatch(0);
}
// ------------------------------------


// This function turns off all buttons at the beginning
function initializeDisplay() {
  const ids = [
    "abs1", "pdf1", "pres1", "pdf-navigation1",
    "abs2", "pdf2", "pres2", "pdf-navigation2",
    "abs3", "pdf3", "pres3", "pdf-navigation3",
    "abs4", "pdf4", "pres4", "pdf-navigation4",
    "abs5", "pdf5", "pres5", "pdf-navigation5",
    "abs6", "pdf6", "pres6", "pdf-navigation6",
    "abs7", "pdf7", "pres7", "pdf-navigation7",
  ];

  ids.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = "none";
    }
  });
}

// Call initialization immediately and DEFER PDF preloading by 500ms (BEST PRACTICE)
window.onload = function() {
    initializeDisplay();
    // Defer staged loading to ensure main page elements load first.
    setTimeout(stagedPreloadAllPDFs, 500);
};


function pdf1() {
    window.open("/files/BenincasaKabasOngena.pdf", "_blank");
    }

function ssrn1() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4075737", "_blank");
    }

function pdf2() {
    window.open("/files/KabasRoszbach.pdf", "_blank");
    }

function ssrn2() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3835232", "_blank");
    }

function pdf3() {
    window.open("/files/ArslanDegerliKabas.pdf", "_blank");
    }

function ssrn3() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3280437", "_blank");
    }
function published3() {
    window.open("https://doi.org/10.1287/mnsc.2022.03217", "_blank");
    }

function pdf4() {
    window.open("/files/DoerrKabasOngena.pdf", "_blank");
    }

function ssrn4() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3430184", "_blank");
    }

function published4() {
    window.open("https://doi.org/10.1017/S0022109023001011", "_blank");
    }


function pdf5() {
    window.open("/files/UI_ADGKK.pdf", "_blank");
    }

function ssrn5() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4915102", "_blank");
    }

function pdf6() {
    window.open("/files/UI_ADGKK.pdf", "_blank");
    }

function ssrn6() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4915102", "_blank");
    }

function dis1() {
    window.open("/files/KabasDiscussion_NB2023.pdf", "_blank");
    }

function dis2() {
    window.open("/files/KabasDiscussion_TFS2024.pdf", "_blank");
    }

function dis3() {
    window.open("/files/KabasDiscussion_Bristol2024.pdf", "_blank");
    }

function dis4() {
    window.open("/files/KabasDiscussion_SGF2025.pdf", "_blank");
    }

function dis5() {
    window.open("/files/KabasDiscussion_TFS2025.pdf", "_blank");
    }

function dis6() {
    window.open("/files/KabasDiscussion_RSCF2025.pdf", "_blank");
    }

function dis7() {
    window.open("/files/KabasDiscussion_IBRN2025.pdf", "_blank");
    }

function dis8() {
    window.open("/files/KabasDiscussion_Benelux.pdf", "_blank");
    }

function dis9() {
    window.open("/files/KabasDiscussion_SGF2026.pdf", "_blank");
    }

function abs1() {
  const absContainer = document.getElementById("abs1");
  const pdfContainer = document.getElementById("pdf1");
  const presContainer = document.getElementById("pres1");
  const navContainer = document.getElementById("pdf-navigation1");

  // Toggle Abstract visibility
  if (absContainer.style.display === "block") {
    absContainer.style.display = "none";
  } else {
    absContainer.style.display = "block";
    pdfContainer.style.display = "none";
    presContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}


function abs2() {
  const absContainer = document.getElementById("abs2");
  const pdfContainer = document.getElementById("pdf2");
  const presContainer = document.getElementById("pres2");
  const navContainer = document.getElementById("pdf-navigation2");

  // Toggle Abstract visibility
  if (absContainer.style.display === "block") {
    absContainer.style.display = "none";
  } else {
    absContainer.style.display = "block";
    pdfContainer.style.display = "none";
    presContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}


function abs3() {
  const absContainer = document.getElementById("abs3");
  const pdfContainer = document.getElementById("pdf3");
  const presContainer = document.getElementById("pres3");
  const navContainer = document.getElementById("pdf-navigation3");

  // Toggle Abstract visibility
  if (absContainer.style.display === "block") {
    absContainer.style.display = "none";
  } else {
    absContainer.style.display = "block";
    pdfContainer.style.display = "none";
    presContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}


function abs4() {
  const absContainer = document.getElementById("abs4");
  const pdfContainer = document.getElementById("pdf4");
  const presContainer = document.getElementById("pres4");
  const navContainer = document.getElementById("pdf-navigation4");

  // Toggle Abstract visibility
  if (absContainer.style.display === "block") {
    absContainer.style.display = "none";
  } else {
    absContainer.style.display = "block";
    pdfContainer.style.display = "none";
    presContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

function abs5() {
  const absContainer = document.getElementById("abs5");
  const pdfContainer = document.getElementById("pdf5");
  const presContainer = document.getElementById("pres5");
  const navContainer = document.getElementById("pdf-navigation5");

  // Toggle Abstract visibility
  if (absContainer.style.display === "block") {
    absContainer.style.display = "none";
  } else {
    absContainer.style.display = "block";
    pdfContainer.style.display = "none";
    presContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

function abs6() {
  const absContainer = document.getElementById("abs6");
  const pdfContainer = document.getElementById("pdf6");
  const presContainer = document.getElementById("pres6");
  const navContainer = document.getElementById("pdf-navigation6");

  // Toggle Abstract visibility
  if (absContainer.style.display === "block") {
    absContainer.style.display = "none";
  } else {
    absContainer.style.display = "block";
    pdfContainer.style.display = "none";
    presContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

function abs7() {
  const absContainer = document.getElementById("abs7");
  const pdfContainer = document.getElementById("pdf7");
  const presContainer = document.getElementById("pres7");
  const navContainer = document.getElementById("pdf-navigation7");

  // Toggle Abstract visibility
  if (absContainer.style.display === "block") {
    absContainer.style.display = "none";
  } else {
    absContainer.style.display = "block";
    pdfContainer.style.display = "none";
    presContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}


function fig1() {
  var x = document.getElementById("fig1");
  var y = document.getElementById("abs1");
  var z = document.getElementById("pres1");
   if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
   if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "none";
  }
}


function pres1() {
  const presContainer = document.getElementById("pres1");
  const pdfContainer = document.getElementById("pdf1");
  const absContainer = document.getElementById("abs1");
  const navContainer = document.getElementById("pdf-navigation1");

  // Toggle Abstract visibility
  if (presContainer.style.display === "block") {
    presContainer.style.display = "none";
  } else {
    presContainer.style.display = "block";
    pdfContainer.style.display = "none";
    absContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

function pres2() {
  const presContainer = document.getElementById("pres2");
  const pdfContainer = document.getElementById("pdf2");
  const absContainer = document.getElementById("abs2");
  const navContainer = document.getElementById("pdf-navigation2");

  // Toggle Abstract visibility
  if (presContainer.style.display === "block") {
    presContainer.style.display = "none";
  } else {
    presContainer.style.display = "block";
    pdfContainer.style.display = "none";
    absContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

function pres3() {
  const presContainer = document.getElementById("pres3");
  const pdfContainer = document.getElementById("pdf3");
  const absContainer = document.getElementById("abs3");
  const navContainer = document.getElementById("pdf-navigation3");

  // Toggle Abstract visibility
  if (presContainer.style.display === "block") {
    presContainer.style.display = "none";
  } else {
    presContainer.style.display = "block";
    pdfContainer.style.display = "none";
    absContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

function pres4() {
  const presContainer = document.getElementById("pres4");
  const pdfContainer = document.getElementById("pdf4");
  const absContainer = document.getElementById("abs4");
  const navContainer = document.getElementById("pdf-navigation4");

  // Toggle Abstract visibility
  if (presContainer.style.display === "block") {
    presContainer.style.display = "none";
  } else {
    presContainer.style.display = "block";
    pdfContainer.style.display = "none";
    absContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

function pres5() {
  const presContainer = document.getElementById("pres5");
  const pdfContainer = document.getElementById("pdf5");
  const absContainer = document.getElementById("abs5");
  const navContainer = document.getElementById("pdf-navigation5");

  // Toggle Abstract visibility
  if (presContainer.style.display === "block") {
    presContainer.style.display = "none";
  } else {
    presContainer.style.display = "block";
    pdfContainer.style.display = "none";
    absContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

function pres6() {
  const presContainer = document.getElementById("pres6");
  const pdfContainer = document.getElementById("pdf6");
  const absContainer = document.getElementById("abs6");
  const navContainer = document.getElementById("pdf-navigation6");

  // Toggle Abstract visibility
  if (presContainer.style.display === "block") {
    presContainer.style.display = "none";
  } else {
    presContainer.style.display = "block";
    pdfContainer.style.display = "none";
    absContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

function pres7() {
  const presContainer = document.getElementById("pres7");
  const pdfContainer = document.getElementById("pdf7");
  const absContainer = document.getElementById("abs7");
  const navContainer = document.getElementById("pdf-navigation7");

  // Toggle Abstract visibility
  if (presContainer.style.display === "block") {
    presContainer.style.display = "none";
  } else {
    presContainer.style.display = "block";
    pdfContainer.style.display = "none";
    absContainer.style.display = "none";
    navContainer.style.display = "none"; // Hide navigation buttons
  }
}

//////////////////////////////////////////////////////////////
// This part onwards is for the Main Results button with PDFs

// Variables for first PDF
let pdfDoc1 = null; // Holds the PDF document
let pageNum1 = 1; // Start with the first page
let pageCount1 = 0; // Total number of pages in the PDF

function loadPDF1() {
  const url = "/files/BKO.pdf";
  const pdfViewer = document.getElementById("pdf1");

const renderPage = (num) => {
  pdfDoc1.getPage(num).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    // Get the actual width of the container (excluding menu width)
    const containerWidth = pdfViewer.getBoundingClientRect().width;

    // Calculate scale based on the container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Adjust for device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 1;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width * devicePixelRatio;
    canvas.height = scaledViewport.height * devicePixelRatio;
    canvas.style.width = `${scaledViewport.width}px`; // CSS width
    canvas.style.height = `${scaledViewport.height}px`; // CSS height

    // Set the canvas context scale for high DPI rendering
    context.scale(devicePixelRatio, devicePixelRatio);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    pdfViewer.innerHTML = ""; // Clear previous slide
    pdfViewer.appendChild(canvas);

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering page:", error);
    pdfViewer.innerHTML = "<p>Error rendering this page.</p>";
  });
};

  // --- MODIFIED LOGIC START: Use Cache First ---
  const loadAndRender = (pdf) => {
      pdfDoc1 = pdf;
      pageCount1 = pdf.numPages;
      renderPage(pageNum1);
  };
  
  // Check if PDF is already downloading/parsed in the cache
  if (pdfPreloadCache[1]) {
      // Use the cached promise (instant download/parse if already done by staged load)
      pdfPreloadCache[1].then(loadAndRender).catch((error) => {
          console.error("Error using preloaded PDF 1:", error);
          pdfViewer.innerHTML = "<p>Error loading PDF from cache. Falling back.</p>";
          // Fallback to direct load if preloading failed
          pdfjsLib.getDocument(url).promise.then(loadAndRender).catch((fallbackError) => {
              console.error("Error loading PDF 1 (fallback):", fallbackError);
              pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
          });
      });
  } else {
      // If user clicked before staged load reached this paper, start loading now
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(loadAndRender).catch((error) => {
          console.error("Error loading PDF 1 (direct load):", error);
          pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
      });
      // Update cache in case staged loading or other interaction uses it later
      pdfPreloadCache[1] = loadingTask.promise;
  }
  // --- MODIFIED LOGIC END ---
}




// Functions to toggle and navigate Cluster 6 PDF
function showPDFWithSlides1() {
  const pdfContainer = document.getElementById("pdf1");
  const navContainer = document.getElementById("pdf-navigation1");
  const absContainer = document.getElementById("abs1");
  const presContainer = document.getElementById("pres1");

  if (pdfContainer.style.display === "block") {
    pdfContainer.style.display = "none";
    navContainer.style.display = "none";
  } else {
    pdfContainer.style.display = "block";
    navContainer.style.display = "flex";
    absContainer.style.display = "none";
    presContainer.style.display = "none"; 
    if (!pdfContainer.dataset.loaded) {
      loadPDF1();
      pdfContainer.dataset.loaded = "true";
    }
  }
}

function nextSlide1() {
  if (pageNum1 < pageCount1) {
    pageNum1++;
    loadPDF1();
  }
}

function prevSlide1() {
  if (pageNum1 > 1) {
    pageNum1--;
    loadPDF1();
  }
}

function loadSlide1() {
  const pdfViewer = document.getElementById("pdf1");

  pdfDoc1.getPage(pageNum1).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Get the container's width
    const containerWidth = pdfViewer.offsetWidth;

    // Calculate scale based on container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Apply the scale
    const scaledViewport = page.getViewport({ scale });

    // Set canvas dimensions
    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    // Clear previous slide and append canvas
    pdfViewer.innerHTML = ""; // Clear the viewer
    pdfViewer.appendChild(canvas);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering slide:", error);
    pdfViewer.innerHTML = "<p>Error rendering this slide.</p>";
  });
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// This part onwards is for the Main Results button with PDFs

// Variables for first PDF
let pdfDoc2 = null; // Holds the PDF document
let pageNum2 = 1; // Start with the first page
let pageCount2 = 0; // Total number of pages in the PDF

function loadPDF2() {
  const url = "/files/KR.pdf";
  const pdfViewer = document.getElementById("pdf2");

const renderPage = (num) => {
  pdfDoc2.getPage(num).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    // Get the actual width of the container (excluding menu width)
    const containerWidth = pdfViewer.getBoundingClientRect().width;

    // Calculate scale based on the container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Adjust for device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 1;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width * devicePixelRatio;
    canvas.height = scaledViewport.height * devicePixelRatio;
    canvas.style.width = `${scaledViewport.width}px`; // CSS width
    canvas.style.height = `${scaledViewport.height}px`; // CSS height

    // Set the canvas context scale for high DPI rendering
    context.scale(devicePixelRatio, devicePixelRatio);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    pdfViewer.innerHTML = ""; // Clear previous slide
    pdfViewer.appendChild(canvas);

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering page:", error);
    pdfViewer.innerHTML = "<p>Error rendering this page.</p>";
  });
};

  // --- MODIFIED LOGIC START: Use Cache First ---
  const loadAndRender = (pdf) => {
      pdfDoc2 = pdf;
      pageCount2 = pdf.numPages;
      renderPage(pageNum2);
  };
  
  // Check if PDF is already downloading/parsed in the cache
  if (pdfPreloadCache[2]) {
      // Use the cached promise (instant download/parse if already done by staged load)
      pdfPreloadCache[2].then(loadAndRender).catch((error) => {
          console.error("Error using preloaded PDF 2:", error);
          pdfViewer.innerHTML = "<p>Error loading PDF from cache. Falling back.</p>";
          // Fallback to direct load if preloading failed
          pdfjsLib.getDocument(url).promise.then(loadAndRender).catch((fallbackError) => {
              console.error("Error loading PDF 2 (fallback):", fallbackError);
              pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
          });
      });
  } else {
      // If user clicked before staged load reached this paper, start loading now
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(loadAndRender).catch((error) => {
          console.error("Error loading PDF 2 (direct load):", error);
          pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
      });
      // Update cache in case staged loading or other interaction uses it later
      pdfPreloadCache[2] = loadingTask.promise;
  }
  // --- MODIFIED LOGIC END ---
}


// Functions to toggle and navigate Cluster 6 PDF
function showPDFWithSlides2() {
  const pdfContainer = document.getElementById("pdf2");
  const navContainer = document.getElementById("pdf-navigation2");
  const absContainer = document.getElementById("abs2");
  const presContainer = document.getElementById("pres2");

  if (pdfContainer.style.display === "block") {
    pdfContainer.style.display = "none";
    navContainer.style.display = "none";
  } else {
    pdfContainer.style.display = "block";
    navContainer.style.display = "flex";
    absContainer.style.display = "none";
    presContainer.style.display = "none"; 
    if (!pdfContainer.dataset.loaded) {
      loadPDF2();
      pdfContainer.dataset.loaded = "true";
    }
  }
}

function nextSlide2() {
  if (pageNum2 < pageCount2) {
    pageNum2++;
    loadPDF2();
  }
}

function prevSlide2() {
  if (pageNum2 > 1) {
    pageNum2--;
    loadPDF2();
  }
}

function loadSlide2() {
  const pdfViewer = document.getElementById("pdf2");

  pdfDoc2.getPage(pageNum2).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Get the container's width
    const containerWidth = pdfViewer.offsetWidth;

    // Calculate scale based on container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Apply the scale
    const scaledViewport = page.getViewport({ scale });

    // Set canvas dimensions
    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    // Clear previous slide and append canvas
    pdfViewer.innerHTML = ""; // Clear the viewer
    pdfViewer.appendChild(canvas);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering slide:", error);
    pdfViewer.innerHTML = "<p>Error rendering this slide.</p>";
  });
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// This part onwards is for the Main Results button with PDFs

// Variables for first PDF
let pdfDoc3 = null; // Holds the PDF document
let pageNum3 = 1; // Start with the first page
let pageCount3 = 0; // Total number of pages in the PDF

function loadPDF3() {
  const url = "/files/ADK.pdf";
  const pdfViewer = document.getElementById("pdf3");

const renderPage = (num) => {
  pdfDoc3.getPage(num).then((page) => {
        const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    // Get the actual width of the container (excluding menu width)
    const containerWidth = pdfViewer.getBoundingClientRect().width;

    // Calculate scale based on the container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Adjust for device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 1;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width * devicePixelRatio;
    canvas.height = scaledViewport.height * devicePixelRatio;
    canvas.style.width = `${scaledViewport.width}px`; // CSS width
    canvas.style.height = `${scaledViewport.height}px`; // CSS height

    // Set the canvas context scale for high DPI rendering
    context.scale(devicePixelRatio, devicePixelRatio);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    pdfViewer.innerHTML = ""; // Clear previous slide
    pdfViewer.appendChild(canvas);

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering page:", error);
    pdfViewer.innerHTML = "<p>Error rendering this page.</p>";
  });
};
  // --- MODIFIED LOGIC START: Use Cache First ---
  const loadAndRender = (pdf) => {
      pdfDoc3 = pdf;
      pageCount3 = pdf.numPages;
      renderPage(pageNum3);
  };
  
  // Check if PDF is already downloading/parsed in the cache
  if (pdfPreloadCache[3]) {
      // Use the cached promise (instant download/parse if already done by staged load)
      pdfPreloadCache[3].then(loadAndRender).catch((error) => {
          console.error("Error using preloaded PDF 3:", error);
          pdfViewer.innerHTML = "<p>Error loading PDF from cache. Falling back.</p>";
          // Fallback to direct load if preloading failed
          pdfjsLib.getDocument(url).promise.then(loadAndRender).catch((fallbackError) => {
              console.error("Error loading PDF 3 (fallback):", fallbackError);
              pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
          });
      });
  } else {
      // If user clicked before staged load reached this paper, start loading now
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(loadAndRender).catch((error) => {
          console.error("Error loading PDF 3 (direct load):", error);
          pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
      });
      // Update cache in case staged loading or other interaction uses it later
      pdfPreloadCache[3] = loadingTask.promise;
  }
  // --- MODIFIED LOGIC END ---
}


// Functions to toggle and navigate Cluster 6 PDF
function showPDFWithSlides3() {
  const pdfContainer = document.getElementById("pdf3");
  const navContainer = document.getElementById("pdf-navigation3");
  const absContainer = document.getElementById("abs3");
  const presContainer = document.getElementById("pres3");

  if (pdfContainer.style.display === "block") {
    pdfContainer.style.display = "none";
    navContainer.style.display = "none";
  } else {
    pdfContainer.style.display = "block";
    navContainer.style.display = "flex";
    absContainer.style.display = "none";
    presContainer.style.display = "none"; 
    if (!pdfContainer.dataset.loaded) {
      loadPDF3();
      pdfContainer.dataset.loaded = "true";
    }
  }
}

function nextSlide3() {
  if (pageNum3 < pageCount3) {
    pageNum3++;
    loadPDF3();
  }
}

function prevSlide3() {
  if (pageNum3 > 1) {
    pageNum3--;
    loadPDF3();
  }
}

function loadSlide3() {
  const pdfViewer = document.getElementById("pdf3");

  pdfDoc3.getPage(pageNum3).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Get the container's width
    const containerWidth = pdfViewer.offsetWidth;

    // Calculate scale based on container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Apply the scale
    const scaledViewport = page.getViewport({ scale });

    // Set canvas dimensions
    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    // Clear previous slide and append canvas
    pdfViewer.innerHTML = ""; // Clear the viewer
    pdfViewer.appendChild(canvas);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering slide:", error);
    pdfViewer.innerHTML = "<p>Error rendering this slide.</p>";
  });
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// This part onwards is for the Main Results button with PDFs

// Variables for first PDF
let pdfDoc4 = null; // Holds the PDF document
let pageNum4 = 1; // Start with the first page
let pageCount4 = 0; // Total number of pages in the PDF

function loadPDF4() {
  const url = "/files/DKO.pdf";
  const pdfViewer = document.getElementById("pdf4");

const renderPage = (num) => {
  pdfDoc4.getPage(num).then((page) => {
        const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    // Get the actual width of the container (excluding menu width)
    const containerWidth = pdfViewer.getBoundingClientRect().width;

    // Calculate scale based on the container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Adjust for device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 1;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width * devicePixelRatio;
    canvas.height = scaledViewport.height * devicePixelRatio;
    canvas.style.width = `${scaledViewport.width}px`; // CSS width
    canvas.style.height = `${scaledViewport.height}px`; // CSS height

    // Set the canvas context scale for high DPI rendering
    context.scale(devicePixelRatio, devicePixelRatio);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    pdfViewer.innerHTML = ""; // Clear previous slide
    pdfViewer.appendChild(canvas);

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering page:", error);
    pdfViewer.innerHTML = "<p>Error rendering this page.</p>";
  });
};

  // --- MODIFIED LOGIC START: Use Cache First ---
  const loadAndRender = (pdf) => {
      pdfDoc4 = pdf;
      pageCount4 = pdf.numPages;
      renderPage(pageNum4);
  };
  
  // Check if PDF is already downloading/parsed in the cache
  if (pdfPreloadCache[4]) {
      // Use the cached promise (instant download/parse if already done by staged load)
      pdfPreloadCache[4].then(loadAndRender).catch((error) => {
          console.error("Error using preloaded PDF 4:", error);
          pdfViewer.innerHTML = "<p>Error loading PDF from cache. Falling back.</p>";
          // Fallback to direct load if preloading failed
          pdfjsLib.getDocument(url).promise.then(loadAndRender).catch((fallbackError) => {
              console.error("Error loading PDF 4 (fallback):", fallbackError);
              pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
          });
      });
  } else {
      // If user clicked before staged load reached this paper, start loading now
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(loadAndRender).catch((error) => {
          console.error("Error loading PDF 4 (direct load):", error);
          pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
      });
      // Update cache in case staged loading or other interaction uses it later
      pdfPreloadCache[4] = loadingTask.promise;
  }
  // --- MODIFIED LOGIC END ---
}


// Functions to toggle and navigate Cluster 6 PDF
function showPDFWithSlides4() {
  const pdfContainer = document.getElementById("pdf4");
  const navContainer = document.getElementById("pdf-navigation4");
  const absContainer = document.getElementById("abs4");
  const presContainer = document.getElementById("pres4");

  if (pdfContainer.style.display === "block") {
    pdfContainer.style.display = "none";
    navContainer.style.display = "none";
  } else {
    pdfContainer.style.display = "block";
    navContainer.style.display = "flex";
    absContainer.style.display = "none";
    presContainer.style.display = "none"; 
    if (!pdfContainer.dataset.loaded) {
      loadPDF4();
      pdfContainer.dataset.loaded = "true";
    }
  }
}

function nextSlide4() {
  if (pageNum4 < pageCount4) {
    pageNum4++;
    loadPDF4();
  }
}

function prevSlide4() {
  if (pageNum4 > 1) {
    pageNum4--;
    loadPDF4();
  }
}

function loadSlide4() {
  const pdfViewer = document.getElementById("pdf4");

  pdfDoc4.getPage(pageNum4).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Get the container's width
    const containerWidth = pdfViewer.offsetWidth;

    // Calculate scale based on container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Apply the scale
    const scaledViewport = page.getViewport({ scale });

    // Set canvas dimensions
    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    // Clear previous slide and append canvas
    pdfViewer.innerHTML = ""; // Clear the viewer
    pdfViewer.appendChild(canvas);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering slide:", error);
    pdfViewer.innerHTML = "<p>Error rendering this slide.</p>";
  });
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// This part onwards is for the Main Results button with PDFs

// Variables for first PDF
let pdfDoc5 = null; // Holds the PDF document
let pageNum5 = 1; // Start with the first page
let pageCount5 = 0; // Total number of pages in the PDF

function loadPDF5() {
  const url = "/files/ADGKK.pdf";
  const pdfViewer = document.getElementById("pdf5");

const renderPage = (num) => {
  pdfDoc5.getPage(num).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    // Get the actual width of the container (excluding menu width)
    const containerWidth = pdfViewer.getBoundingClientRect().width;

    // Calculate scale based on the container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Adjust for device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 1;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width * devicePixelRatio;
    canvas.height = scaledViewport.height * devicePixelRatio;
    canvas.style.width = `${scaledViewport.width}px`; // CSS width
    canvas.style.height = `${scaledViewport.height}px`; // CSS height

    // Set the canvas context scale for high DPI rendering
    context.scale(devicePixelRatio, devicePixelRatio);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    pdfViewer.innerHTML = ""; // Clear previous slide
    pdfViewer.appendChild(canvas);

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering page:", error);
    pdfViewer.innerHTML = "<p>Error rendering this page.</p>";
  });
};

  // --- MODIFIED LOGIC START: Use Cache First ---
  const loadAndRender = (pdf) => {
      pdfDoc5 = pdf;
      pageCount5 = pdf.numPages;
      renderPage(pageNum5);
  };
  
  // Check if PDF is already downloading/parsed in the cache
  if (pdfPreloadCache[5]) {
      // Use the cached promise (instant download/parse if already done by staged load)
      pdfPreloadCache[5].then(loadAndRender).catch((error) => {
          console.error("Error using preloaded PDF 5:", error);
          pdfViewer.innerHTML = "<p>Error loading PDF from cache. Falling back.</p>";
          // Fallback to direct load if preloading failed
          pdfjsLib.getDocument(url).promise.then(loadAndRender).catch((fallbackError) => {
              console.error("Error loading PDF 5 (fallback):", fallbackError);
              pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
          });
      });
  } else {
      // If user clicked before staged load reached this paper, start loading now
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(loadAndRender).catch((error) => {
          console.error("Error loading PDF 5 (direct load):", error);
          pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
      });
      // Update cache in case staged loading or other interaction uses it later
      pdfPreloadCache[5] = loadingTask.promise;
  }
  // --- MODIFIED LOGIC END ---
}


// Functions to toggle and navigate Cluster 6 PDF
function showPDFWithSlides5() {
  const pdfContainer = document.getElementById("pdf5");
  const navContainer = document.getElementById("pdf-navigation5");
  const absContainer = document.getElementById("abs5");
  const presContainer = document.getElementById("pres5");

  if (pdfContainer.style.display === "block") {
    pdfContainer.style.display = "none";
    navContainer.style.display = "none";
  } else {
    pdfContainer.style.display = "block";
    navContainer.style.display = "flex";
    absContainer.style.display = "none";
    presContainer.style.display = "none"; 
    if (!pdfContainer.dataset.loaded) {
      loadPDF5();
      pdfContainer.dataset.loaded = "true";
    }
  }
}

function nextSlide5() {
  if (pageNum5 < pageCount5) {
    pageNum5++;
    loadPDF5();
  }
}

function prevSlide5() {
  if (pageNum5 > 1) {
    pageNum5--;
    loadPDF5();
  }
}

function loadSlide5() {
  const pdfViewer = document.getElementById("pdf5");

  pdfDoc5.getPage(pageNum5).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Get the container's width
    const containerWidth = pdfViewer.offsetWidth;

    // Calculate scale based on container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Apply the scale
    const scaledViewport = page.getViewport({ scale });

    // Set canvas dimensions
    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    // Clear previous slide and append canvas
    pdfViewer.innerHTML = ""; // Clear the viewer
    pdfViewer.appendChild(canvas);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering slide:", error);
    pdfViewer.innerHTML = "<p>Error rendering this slide.</p>";
  });
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Paper 6 PDF functions (Added to support the staged loading map and existing HTML placeholders)
let pdfDoc6 = null;
let pageNum6 = 1;
let pageCount6 = 0;

function loadPDF6() {
  const url = "/files/UI_ADGKK.pdf"; // Assumed URL based on pdf6() link
  const pdfViewer = document.getElementById("pdf6");

const renderPage = (num) => {
  pdfDoc6.getPage(num).then((page) => {
        const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    // Get the actual width of the container (excluding menu width)
    const containerWidth = pdfViewer.getBoundingClientRect().width;

    // Calculate scale based on the container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Adjust for device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 1;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width * devicePixelRatio;
    canvas.height = scaledViewport.height * devicePixelRatio;
    canvas.style.width = `${scaledViewport.width}px`; // CSS width
    canvas.style.height = `${scaledViewport.height}px`; // CSS height

    // Set the canvas context scale for high DPI rendering
    context.scale(devicePixelRatio, devicePixelRatio);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    pdfViewer.innerHTML = ""; // Clear previous slide
    pdfViewer.appendChild(canvas);

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering page:", error);
    pdfViewer.innerHTML = "<p>Error rendering this page.</p>";
  });
};
  // --- MODIFIED LOGIC START: Use Cache First ---
  const loadAndRender = (pdf) => {
      pdfDoc6 = pdf;
      pageCount6 = pdf.numPages;
      renderPage(pageNum6);
  };
  
  // Check if PDF is already downloading/parsed in the cache
  if (pdfPreloadCache[6]) {
      // Use the cached promise (instant download/parse if already done by staged load)
      pdfPreloadCache[6].then(loadAndRender).catch((error) => {
          console.error("Error using preloaded PDF 6:", error);
          pdfViewer.innerHTML = "<p>Error loading PDF from cache. Falling back.</p>";
          // Fallback to direct load if preloading failed
          pdfjsLib.getDocument(url).promise.then(loadAndRender).catch((fallbackError) => {
              console.error("Error loading PDF 6 (fallback):", fallbackError);
              pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
          });
      });
  } else {
      // If user clicked before staged load reached this paper, start loading now
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(loadAndRender).catch((error) => {
          console.error("Error loading PDF 6 (direct load):", error);
          pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
      });
      // Update cache in case staged loading or other interaction uses it later
      pdfPreloadCache[6] = loadingTask.promise;
  }
  // --- MODIFIED LOGIC END ---
}

function showPDFWithSlides6() {
  const pdfContainer = document.getElementById("pdf6");
  const navContainer = document.getElementById("pdf-navigation6");
  const absContainer = document.getElementById("abs6");
  const presContainer = document.getElementById("pres6");

  if (pdfContainer.style.display === "block") {
    pdfContainer.style.display = "none";
    navContainer.style.display = "none";
  } else {
    pdfContainer.style.display = "block";
    navContainer.style.display = "flex";
    absContainer.style.display = "none";
    presContainer.style.display = "none";
    if (!pdfContainer.dataset.loaded) {
      loadPDF6();
      pdfContainer.dataset.loaded = "true";
    }
  }
}

function nextSlide6() {
  if (pageNum6 < pageCount6) {
    pageNum6++;
    loadPDF6();
  }
}

function prevSlide6() {
  if (pageNum6 > 1) {
    pageNum6--;
    loadPDF6();
  }
}

function loadSlide6() {
  const pdfViewer = document.getElementById("pdf6");

  pdfDoc6.getPage(pageNum6).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const containerWidth = pdfViewer.offsetWidth;

    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    pdfViewer.innerHTML = "";
    pdfViewer.appendChild(canvas);

    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering slide:", error);
    pdfViewer.innerHTML = "<p>Error rendering this slide.</p>";
  });
}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

let pdfDoc7 = null;
let pageNum7 = 1;
let pageCount7 = 0;

function loadPDF7() {
  const url = "/files/ETS_2.pdf";
  const pdfViewer = document.getElementById("pdf7");

const renderPage = (num) => {
  pdfDoc7.getPage(num).then((page) => {
        const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    // Get the actual width of the container (excluding menu width)
    const containerWidth = pdfViewer.getBoundingClientRect().width;

    // Calculate scale based on the container width
    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    // Adjust for device pixel ratio
    const devicePixelRatio = window.devicePixelRatio || 1;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width * devicePixelRatio;
    canvas.height = scaledViewport.height * devicePixelRatio;
    canvas.style.width = `${scaledViewport.width}px`; // CSS width
    canvas.style.height = `${scaledViewport.height}px`; // CSS height

    // Set the canvas context scale for high DPI rendering
    context.scale(devicePixelRatio, devicePixelRatio);

    // Render the page on the canvas
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    pdfViewer.innerHTML = ""; // Clear previous slide
    pdfViewer.appendChild(canvas);

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering page:", error);
    pdfViewer.innerHTML = "<p>Error rendering this page.</p>";
  });
};

  // --- MODIFIED LOGIC START: Use Cache First ---
  const loadAndRender = (pdf) => {
      pdfDoc7 = pdf;
      pageCount7 = pdf.numPages;
      renderPage(pageNum7);
  };
  
  // Check if PDF is already downloading/parsed in the cache
  if (pdfPreloadCache[7]) {
      // Use the cached promise (instant download/parse if already done by staged load)
      pdfPreloadCache[7].then(loadAndRender).catch((error) => {
          console.error("Error using preloaded PDF 7:", error);
          pdfViewer.innerHTML = "<p>Error loading PDF from cache. Falling back.</p>";
          // Fallback to direct load if preloading failed
          pdfjsLib.getDocument(url).promise.then(loadAndRender).catch((fallbackError) => {
              console.error("Error loading PDF 7 (fallback):", fallbackError);
              pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
          });
      });
  } else {
      // If user clicked before staged load reached this paper, start loading now
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(loadAndRender).catch((error) => {
          console.error("Error loading PDF 7 (direct load):", error);
          pdfViewer.innerHTML = "<p>Unable to load PDF. Please check the file URL.</p>";
      });
      // Update cache in case staged loading or other interaction uses it later
      pdfPreloadCache[7] = loadingTask.promise;
  }
  // --- MODIFIED LOGIC END ---
}

function showPDFWithSlides7() {
  const pdfContainer = document.getElementById("pdf7");
  const navContainer = document.getElementById("pdf-navigation7");
  const absContainer = document.getElementById("abs7");
  const presContainer = document.getElementById("pres7");

  if (pdfContainer.style.display === "block") {
    pdfContainer.style.display = "none";
    navContainer.style.display = "none";
  } else {
    pdfContainer.style.display = "block";
    navContainer.style.display = "flex";
    absContainer.style.display = "none";
    presContainer.style.display = "none";
    if (!pdfContainer.dataset.loaded) {
      loadPDF7();
      pdfContainer.dataset.loaded = "true";
    }
  }
}

function nextSlide7() {
  if (pageNum7 < pageCount7) {
    pageNum7++;
    loadSlide7();
  }
}

function prevSlide7() {
  if (pageNum7 > 1) {
    pageNum7--;
    loadSlide7();
  }
}

function loadSlide7() {
  const pdfViewer = document.getElementById("pdf7");

  pdfDoc7.getPage(pageNum7).then((page) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const containerWidth = pdfViewer.offsetWidth;

    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;

    pdfViewer.innerHTML = "";
    pdfViewer.appendChild(canvas);

    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport,
    };

    page.render(renderContext);
  }).catch((error) => {
    console.error("Error rendering slide:", error);
    pdfViewer.innerHTML = "<p>Error rendering this slide.</p>";
  });
}


function updateButtonText() {
  const buttons = [
    {
      id: "main-results-fig1",
      smallText: "Abs.",
      largeText: "Abstract",
    },
     {
      id: "main-results-fig2",
      smallText: "Abs.",
      largeText: "Abstract",
    },
     {
      id: "main-results-fig3",
      smallText: "Abs.",
      largeText: "Abstract",
    },
     {
      id: "main-results-fig4",
      smallText: "Abs.",
      largeText: "Abstract",
    },
     {
      id: "main-results-fig5",
      smallText: "Abs.",
      largeText: "Abstract",
    },
    {
      id: "main-results-fig6",
      smallText: "Abs.",
      largeText: "Abstract",
    },
     {
      id: "main-results-fig7",
      smallText: "Abs.",
      largeText: "Abstract",
    },
    {
      id: "main-results-res1",
      smallText: "Results",
      largeText: "Main Results",
    },
    {
      id: "main-results-res2",
      smallText: "Results",
      largeText: "Main Results",
    },
    {
      id: "main-results-res3",
      smallText: "Results",
      largeText: "Main Results",
    },
    {
      id: "main-results-res4",
      smallText: "Results",
      largeText: "Main Results",
    },
    {
      id: "main-results-res5",
      smallText: "Results",
      largeText: "Main Results",
    },
    {
      id: "main-results-res6",
      smallText: "Results",
      largeText: "Main Results",
    },
    {
      id: "main-results-res7",
      smallText: "Results",
      largeText: "Main Results",
    },
    {
      id: "main-results-pres1",
      smallText: "Pres.",
      largeText: "Presentations",
    },
     {
      id: "main-results-pres2",
      smallText: "Pres.",
      largeText: "Presentations",
    },
     {
      id: "main-results-pres3",
      smallText: "Pres.",
      largeText: "Presentations",
    },
     {
      id: "main-results-pres4",
      smallText: "Pres.",
      largeText: "Presentations",
    },
     {
      id: "main-results-pres5",
      smallText: "Pres.",
      largeText: "Presentations",
    },
     {
      id: "main-results-pres6",
      smallText: "Pres.",
      largeText: "Presentations",
    },
    {
      id: "main-results-pres7",
      smallText: "Pres.",
      largeText: "Presentations",
    },
  ];

  buttons.forEach((button) => {
    const element = document.getElementById(button.id);
    if (element) {
      if (window.matchMedia("(max-width: 768px)").matches) {
        element.textContent = button.smallText;
      } else {
        element.textContent = button.largeText;
      }
    }
  });
}

// Initial check when the page loads
updateButtonText();

// Update button text when the window is resized
window.addEventListener("resize", updateButtonText);

let slideIndex = [1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

//function showSlides(n, no) {
//  let i;
//  let x = document.getElementsByClassName(slideId[no]);
//  if (n > x.length) {slideIndex[no] = 1}    
//  if (n < 1) {slideIndex[no] = x.length}
//  for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//  }
//  x[slideIndex[no]-1].style.display = "block";  
//}

function showSlides(n, no) {
  let i;

  // Check if slideId and slideIndex are defined
  if (!slideId || !slideId[no]) {
    console.error(`slideId[${no}] is undefined. Ensure slideId is properly initialized.`);
    return;
  }
  if (!slideIndex || typeof slideIndex[no] === 'undefined') {
    console.error(`slideIndex[${no}] is undefined. Ensure slideIndex is properly initialized.`);
    return;
  }

  // Get slides for the specified group
  let x = document.getElementsByClassName(slideId[no]);
  if (x.length === 0) {
    console.error(`No slides found for slideId[${no}] (${slideId[no]}).`);
    return;
  }

  // Handle slide index out of bounds
  if (n > x.length) {
    slideIndex[no] = 1; // Loop back to first slide
  }
  if (n < 1) {
    slideIndex[no] = x.length; // Loop back to last slide
  }

  // Hide all slides in the group
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Show the current slide
  x[slideIndex[no] - 1].style.display = "block";
}
