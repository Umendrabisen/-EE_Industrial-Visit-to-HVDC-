"use strict";

/**
 * PCE Nagpur | Electrical Engineering Department
 * Industrial Visit Report: HVDC Section of CTPS Chandrapur
 * Date: April 10, 2026
 */

const ReportConfig = {
            collegeName: "Priyadarshini College of Engineering, Nagpur",
            department: "Department of Electrical Engineering",
            visitLocation: "Chandrapur Thermal Power Station (CTPS) - HVDC Section",
            visitDate: "April 10, 2026",
            hvdcSpecs: {
                        terminal: "Chandrapur-Padghe Bipole",
                        powerRating: "1500 MW",
                        voltageRating: "±500 kV DC",
                        lineLength: "752 km",
                        thyristorRating: "5 kV / 3000 A",
                        valvesPerBridge: "12-Pulse Converter"
            },
            hodInfo: {
                        name: "Dr. K. B. Porate",
                        designation: "Head of Department",
                        avatar: "https://i.pravatar.cc/150?u=hodpce"
            }
};

/**
 * Initialize the application components
 */
document.addEventListener('DOMContentLoaded', () => {
            initNavbarBehavior();
            renderReportContent();
            setupPrintFunctionality();
            initScrollAnimations();
});

/**
 * Handles navbar interactions, mobile toggles, and scroll effects
 */
function initNavbarBehavior() {
            const navbar = document.querySelector('.navbar');
            const navLinks = document.querySelectorAll('.nav-link');
            const menuToggle = document.querySelector('.navbar-collapse');

            // Close mobile menu after clicking a link
            navLinks.forEach(link => {
                        link.addEventListener('click', () => {
                                    if (menuToggle.classList.contains('show')) {
                                                const bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
                                                bsCollapse.hide();
                                    }
                        });
            });

            // Add shadow on scroll
            window.addEventListener('scroll', () => {
                        if (window.scrollY > 50) {
                                    navbar.classList.add('shadow-lg');
                        } else {
                                    navbar.classList.remove('shadow-lg');
                        }
            });
}

/**
 * Dynamically renders the comprehensive 10-page content structure
 */
function renderReportContent() {
            const mainContainer = document.querySelector('main');

            // 1. Completion of the Hero Section (Page 1)
            const heroContent = `
        <div class="container text-center">
            <h1 class="hero-title">Industrial Visit Report 2026</h1>
            <p class="lead mb-4">A Detailed Technical Study of HVDC Systems at CTPS Chandrapur</p>
            <div class="d-flex justify-content-center gap-3">
                <span class="badge bg-warning text-dark p-2 px-3"><i class="fas fa-calendar-alt me-2"></i>10/04/2026</span>
                <span class="badge bg-light text-dark p-2 px-3"><i class="fas fa-map-marker-alt me-2"></i>Chandrapur, Maharashtra</span>
            </div>
        </div>
    `;
            document.querySelector('.hero-section').innerHTML = heroContent;

            // 2. Department Profile Section (Page 2)
            const profileSection = createSection('profiles', 'Institutional Leadership', `
        <div class="row align-items-center g-5">
            <div class="col-md-4 text-center">
                <div class="profile-card p-4 bg-white shadow-sm rounded">
                    <img src="${ReportConfig.hodInfo.avatar}" class="rounded-circle mb-3 border border-4 border-warning" width="180" alt="HOD">
                    <h4>${ReportConfig.hodInfo.name}</h4>
                    <p class="text-primary fw-bold">${ReportConfig.hodInfo.designation}</p>
                    <p class="small text-muted">Department of Electrical Engineering, PCE Nagpur</p>
                </div>
            </div>
            <div class="col-md-8">
                <h3 class="mb-4">Academic Foreword</h3>
                <p>The Electrical Engineering Department at Priyadarshini College of Engineering, Nagpur, emphasizes bridging the gap between theoretical concepts and industrial realities. This visit to the HVDC section of CTPS Chandrapur was organized to provide final year students with deep insights into high-voltage direct current transmission, a critical component of the National Grid.</p>
                <div class="alert alert-info">
                    <i class="fas fa-info-circle me-2"></i> This report documents the technical operational procedure, thyristor valve configurations, and control logic observed during the site visit on April 10, 2026.
                </div>
            </div>
        </div>
    `);

            // 3. HVDC Process Section (Page 3-4)
            const processSection = createSection('hvdc-process', 'The HVDC Conversion Process', `
        <div class="row g-4">
            <div class="col-lg-6">
                <img src="https://picsum.photos/seed/hvdc/800/600" class="img-fluid rounded shadow" alt="HVDC Station Yard">
            </div>
            <div class="col-lg-6">
                <h4 class="mb-3 text-primary">Rectification & Inversion Workflow</h4>
                <ol class="list-group list-group-flush">
                    <li class="list-group-item d-flex align-items-start">
                        <span class="badge bg-primary me-3 mt-1">01</span>
                        <div><strong>AC Input:</strong> 400kV AC supply from the CTPS thermal generation units.</div>
                    </li>
                    <li class="list-group-item d-flex align-items-start">
                        <span class="badge bg-primary me-3 mt-1">02</span>
                        <div><strong>AC Filtering:</strong> Removal of characteristic harmonics (5th, 7th, 11th, 13th) using capacitive banks.</div>
                    </li>
                    <li class="list-group-item d-flex align-items-start">
                        <span class="badge bg-primary me-3 mt-1">03</span>
                        <div><strong>Converter Transformers:</strong> Stepping up/down voltage and providing phase shift for 12-pulse operation.</div>
                    </li>
                    <li class="list-group-item d-flex align-items-start">
                        <span class="badge bg-primary me-3 mt-1">04</span>
                        <div><strong>Thyristor Conversion:</strong> Converting AC to DC (Rectification) for the Chandrapur end.</div>
                    </li>
                    <li class="list-group-item d-flex align-items-start">
                        <span class="badge bg-primary me-3 mt-1">05</span>
                        <div><strong>Smoothing Reactors:</strong> Reduction of DC ripple and protection against lightning surges.</div>
                    </li>
                </ol>
            </div>
        </div>
    `);

            // 4. Thyristor Valve Diagram Section (Page 5-6)
            const thyristorSection = createSection('thyristor-valves', 'Thyristor Valve Hall Architecture', `
        <div class="bg-dark text-white p-5 rounded">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <h3 class="text-warning mb-4">Valve Hall Specifications</h3>
                    <p>The heart of the HVDC terminal is the Valve Hall, a controlled environment containing the thyristor valves. At CTPS, these are arranged in a quadruple valve structure.</p>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i> <strong>Type:</strong> Water-cooled, air-insulated thyristor valves.</li>
                        <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i> <strong>Cooling:</strong> De-ionized water circulation system with heat exchangers.</li>
                        <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i> <strong>Firing:</strong> Fiber-optic light triggered (LTT) for electrical isolation.</li>
                    </ul>
                    <div id="thyristor-diagram-container" class="mt-4 border border-secondary p-3 text-center">
                        <!-- SVG Diagram will be injected here -->
                    </div>
                </div>
                <div class="col-lg-5">
                    <img src="https://picsum.photos/seed/valve/500/700" class="img-fluid rounded opacity-75" alt="Valve Hall Inside">
                </div>
            </div>
        </div>
    `);

            // 5. Technical Ratings Table (Page 7-8)
            const ratingsSection = createSection('ratings', 'Technical Parameter Matrix', `
        <div class="table-responsive">
            <table class="table table-bordered table-striped align-middle">
                <thead class="table-primary">
                    <tr>
                        <th>Parameter</th>
                        <th>Rating / Value</th>
                        <th>Component Significance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Nominal DC Voltage</td><td>±500 kV</td><td>Standard transmission for Chandrapur-Padghe link.</td></tr>
                    <tr><td>Power Capability</td><td>1500 MW (Continuous)</td><td>Bulk power transfer to Mumbai region.</td></tr>
                    <tr><td>Overload Capacity</td><td>2000 MW (Short term)</td><td>Handling peak demand surges.</td></tr>
                    <tr><td>Thyristor Current</td><td>3000 Amperes</td><td>High current density semiconductors.</td></tr>
                    <tr><td>Transformer Rating</td><td>234 MVA (Single Phase)</td><td>Banks of 3 for 3-phase configuration.</td></tr>
                    <tr><td>Smoothing Reactor</td><td>250 mH</td><td>L-type filter for DC smoothing.</td></tr>
                </tbody>
            </table>
        </div>
    `);

            // 6. Conclusion & Download (Page 9-10)
            const downloadSection = createSection('download', 'Report Summary & Certification', `
        <div class="card shadow-lg border-0">
            <div class="card-body p-5 text-center">
                <h2 class="mb-4">Visit Conclusion</h2>
                <p class="lead mb-5">The visit provided a comprehensive understanding of the 12-pulse converter operation, the complexities of reactive power management in HVDC, and the critical importance of the cooling systems in maintaining thyristor integrity. This report serves as a formal academic record for the 2025-26 academic session.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="generatePdfBtn" class="btn btn-warning btn-lg px-5 py-3 fw-bold">
                        <i class="fas fa-file-pdf me-2"></i>Download Full Technical Report (PDF)
                    </button>
                    <button class="btn btn-outline-dark btn-lg px-5 py-3" onclick="window.print()">
                        <i class="fas fa-print me-2"></i>Print Summary
                    </button>
                </div>
                <div class="mt-5 pt-5 border-top d-flex justify-content-around">
                    <div class="text-center">
                        <div style="height:60px; width:150px; border-bottom: 1px solid #000; margin-bottom:10px;"></div>
                        <p class="fw-bold mb-0">Visit Coordinator</p>
                        <small>EE Dept, PCE</small>
                    </div>
                    <div class="text-center">
                        <div style="height:60px; width:150px; border-bottom: 1px solid #000; margin-bottom:10px;"></div>
                        <p class="fw-bold mb-0">HOD Approval</p>
                        <small>Electrical Engineering</small>
                    </div>
                </div>
            </div>
        </div>
    `);

            // Append all sections to main
            mainContainer.appendChild(profileSection);
            mainContainer.appendChild(processSection);
            mainContainer.appendChild(thyristorSection);
            mainContainer.appendChild(ratingsSection);
            mainContainer.appendChild(downloadSection);

            // Render the SVG Diagram
            renderThyristorSVG();
}

/**
 * Utility to create a section wrapper
 */
function createSection(id, title, contentHtml) {
            const section = document.createElement('section');
            section.id = id;
            section.className = 'py-5 container';
            section.innerHTML = `
        <div class="row mb-5">
            <div class="col-12 text-center">
                <h2 class="display-5 fw-bold text-uppercase">${title}</h2>
                <div class="mx-auto bg-warning" style="height: 4px; width: 80px;"></div>
            </div>
        </div>
        ${contentHtml}
    `;
            return section;
}

/**
 * Generates an SVG diagram for the Thyristor Valve Structure
 */
function renderThyristorSVG() {
            const container = document.getElementById('thyristor-diagram-container');
            if (!container) return;

            const svg = `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="img-fluid" style="max-height: 400px;">
            <!-- Valve Tower -->
            <rect x="150" y="50" width="100" height="200" fill="none" stroke="#ffc107" stroke-width="3" />
            <text x="165" y="40" fill="#fff" font-size="12">Valve Tower (Quad)</text>
            
            <!-- Thyristor Modules -->
            <rect x="160" y="60" width="80" height="30" rx="5" fill="#2c3e50" stroke="#fff" />
            <rect x="160" y="100" width="80" height="30" rx="5" fill="#2c3e50" stroke="#fff" />
            <rect x="160" y="140" width="80" height="30" rx="5" fill="#2c3e50" stroke="#fff" />
            <rect x="160" y="180" width="80" height="30" rx="5" fill="#2c3e50" stroke="#fff" />
            
            <text x="175" y="80" fill="#fff" font-size="10">Module 1</text>
            <text x="175" y="120" fill="#fff" font-size="10">Module 2</text>
            <text x="175" y="160" fill="#fff" font-size="10">Module 3</text>
            <text x="175" y="200" fill="#fff" font-size="10">Module 4</text>

            <!-- Connections -->
            <line x1="200" y1="10" x2="200" y2="50" stroke="#ffc107" stroke-width="2" marker-end="url(#arrowhead)" />
            <line x1="200" y1="250" x2="200" y2="290" stroke="#ffc107" stroke-width="2" />
            
            <!-- Labels -->
            <text x="210" y="25" fill="#aaa" font-size="10">From Conv. Trans.</text>
            <text x="210" y="285" fill="#aaa" font-size="10">To DC Bus</text>

            <!-- Coolant Pipes -->
            <path d="M 140 70 L 160 70" stroke="#00d2ff" stroke-width="2" fill="none" />
            <path d="M 140 110 L 160 110" stroke="#00d2ff" stroke-width="2" fill="none" />
            <text x="90" y="95" fill="#00d2ff" font-size="8">Water Cooling In</text>
        </svg>
    `;
            container.innerHTML = svg;
}

/**
 * Handles the PDF generation simulation
 */
function setupPrintFunctionality() {
            const downloadBtn = document.getElementById('generatePdfBtn');
            if (!downloadBtn) return;

            downloadBtn.addEventListener('click', async () => {
                        try {
                                    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Compiling Report...';
                                    downloadBtn.disabled = true;

                                    // Simulate file generation delay
                                    await new Promise(resolve => setTimeout(resolve, 2500));

                                    // Trigger browser print as the primary "PDF" method for a web report
                                    window.print();

                                    downloadBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Report Generated';
                                    downloadBtn.classList.replace('btn-warning', 'btn-success');
                        } catch (error) {
                                    console.error("PDF Generation failed:", error);
                                    alert("An error occurred while generating the report. Please use the Print Summary button.");
                        } finally {
                                    setTimeout(() => {
                                                downloadBtn.innerHTML = '<i class="fas fa-file-pdf me-2"></i>Download Full Technical Report (PDF)';
                                                downloadBtn.disabled = false;
                                                downloadBtn.classList.replace('btn-success', 'btn-warning');
                                    }, 5000);
                        }
            });
}

/**
 * Scroll reveal animations for sections
 */
function initScrollAnimations() {
            const observerOptions = {
                        threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                                    if (entry.isIntersecting) {
                                                entry.target.classList.add('animate-fadeIn');
                                                observer.unobserve(entry.target);
                                    }
                        });
            }, observerOptions);

            document.querySelectorAll('section').forEach(section => {
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(20px)';
                        section.style.transition = 'all 0.8s ease-out';
                        observer.observe(section);
            });
}

/**
 * Custom CSS injection for animations (since only JS is allowed, we inject styles via JS)
 */
const style = document.createElement('style');
style.textContent = `
    .animate-fadeIn {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    @media print {
        .navbar, #download, footer, .btn { display: none !important; }
        body { padding: 0; background: #fff; }
        .container { width: 100%; max-width: 100%; }
        section { page-break-after: always; padding-top: 2rem !important; }
        .hero-section { min-height: auto; padding: 100px 0 !important; color: #000 !important; background: none !important; border-bottom: 2px solid #000; }
        .hero-title { color: #000 !important; }
    }
`;
document.head.appendChild(style);