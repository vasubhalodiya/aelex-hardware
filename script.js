/* ==========================================================================
   AELEX™ - Modern Architectural Hardware & Precision Fittings
   Master JavaScript File - Interactivity & Tech Specs Database
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Technical Specs Database (AELEX Brochure PDF)
// --------------------------------------------------------------------------
const techSpecsDB = {
    'hinges-butt': {
        title: "BRASS HINGES - BUTT & RAILWAY SERIES",
        badge: "THICKNESS: 2.5mm & 3.0mm",
        columns: ["CODE NO.", "SIZE (MM)", "SIZE (INCHES)", "PCS / BOX", "PCS / CASE", "SCREW SIZE"],
        rows: [
            ["BHB01", "75 x 9 x 16", "3 x 3/8 x 5/8", "20", "240", "6 x 15"],
            ["BHB02", "75 x 16 x 16", "3 x 5/8 x 5/8", "20", "240", "6 x 15"],
            ["BHB03", "75 x 12 x 9", "3 x 1/2 x 3/4", "20", "240", "6 x 15"],
            ["BHB04", "75 x 19 x 19", "3 x 3/4 x 3/4", "20", "240", "6 x 15"],
            ["BHB05", "75 x 12 x 25", "3 x 1/2 x 1", "20", "240", "6 x 15"],
            ["BHB06", "75 x 19 x 25", "3 x 3/4 x 1", "20", "240", "6 x 15"],
            ["BHB07", "75 x 25 x 25", "3 x 1 x 1", "20", "240", "6 x 15"],
            ["BHB10", "100 x 9 x 16", "4 x 3/8 x 5/8", "20", "240", "6 x 15"],
            ["BHB13", "100 x 19 x 19", "4 x 3/4 x 3/4", "20", "240", "6 x 15"],
            ["BHB18", "100 x 19 x 38", "4 x 3/4 x 1.1/2", "20", "240", "6 x 15"],
            ["BHR01", "75 x 19 x 19", "3 x 3/4 x 3/4 (Railway)", "20", "240", "6 x 15"]
        ]
    },

    'hinges-locking': {
        title: "BRASS RYL HINGES - LOCKING & SPRING SERIES",
        badge: "THICKNESS: 2.0mm & 4.5mm (3/16)",
        columns: ["CODE NO.", "TYPE / SIZE MM", "SIZE INCHES", "PCS / BOX", "PCS / CASE", "SCREW SIZE"],
        rows: [
            ["BHRL01", "75 x 22 x 22", "3 x 7/8 x 7/8", "20", "240", "7 x 30"],
            ["BHRL04", "100 x 25 x 25", "4 x 1 x 1", "5", "80", "7 x 30"],
            ["BHRL07", "125 x 28 x 28", "5 x 1.1/8 x 1.1/8", "5", "60", "7 x 30"],
            ["BHRL18", "100 x 38 x 38", "4 x 1.1/2 x 1.1/2", "5", "80", "8 x 35"],
            ["BHRL24", "150 x 50 x 50", "6 x 2 x 2", "5", "30", "8 x 35"],
            ["BHRL30", "300 x 50 x 50", "12 x 2 x 2", "5", "24", "8 x 35"],
            ["BHS01", "Single Action 100", "4 Inch Spring", "5", "80", "8 x 30"],
            ["BHS03", "Double Action 100", "4 Inch Spring", "5", "48", "8 x 30"]
        ]
    },

    'hinges-bearing': {
        title: "BRASS HINGES - BEARING & ITALIAN TIP",
        badge: "FRICTIONLESS STAINLESS STEEL BALL BEARINGS",
        columns: ["CODE NO.", "SIZE MM", "SIZE INCHES", "PCS / BOX", "PCS / CASE", "SCREW SIZE"],
        rows: [
            ["BHB01", "75 x 50 x 62", "3 x 2 x 2.5", "20", "240", "8 x 30"],
            ["BHB03", "125 x 75", "5 x 3", "5", "60", "8 x 30"],
            ["BHB07", "125 x 88", "5 x 3.1/2", "5", "60", "10 x 35"],
            ["BHB11", "300 x 88", "12 x 3.1/2", "3", "24", "10 x 35"],
            ["BHBI01", "75 x 50 x 62", "3 x 2 x 2.5 (Italian Tip)", "20", "240", "8 x 30"],
            ["BHBI07", "125 x 88", "5 x 3.1/2 (Italian Tip)", "5", "60", "10 x 35"],
            ["BHBI16", "300 x 125", "12 x 5 (Italian Tip)", "3", "24", "10 x 35"]
        ]
    },

    'tb-round': {
        title: "BRASS TOWER BOLT - ROUND, HEX & BULLET (3/8 & 1/2 DIA)",
        badge: "SOLID EXTRUDED BRASS ROD",
        columns: ["CODE NO.", "SIZE MM", "SIZE INCHES", "PCS / BOX", "PCS / CASE", "SCREW SIZE"],
        rows: [
            ["BT01", "9.5 x 75", "3/8 x 3 Round", "10", "120", "5 x 20"],
            ["BT03", "9.5 x 150", "3/8 x 6 Round", "5", "60", "5 x 20"],
            ["BT06", "9.5 x 300", "3/8 x 12 Round", "5", "30", "5 x 20"],
            ["BT07", "9.5 x 75", "3/8 x 3 Hex", "10", "120", "5 x 20"],
            ["BT12", "9.5 x 300", "3/8 x 12 Hex", "5", "30", "5 x 20"],
            ["BT29", "10 x 100", "10mm x 4 Bullet", "5", "100", "5 x 25"],
            ["BT45", "12 x 100", "1/2 x 4 Round", "5", "100", "6 x 25"],
            ["BT49", "12 x 300", "1/2 x 12 Round", "5", "30", "6 x 25"],
            ["BT53", "12 x 750", "1/2 x 30 Round Heavy", "3", "24", "6 x 25"]
        ]
    },

    'tb-tapper': {
        title: "BRASS TOWER BOLT - TAPPER, NECK, CRUZ & MEXICO NX",
        badge: "HIGH SECURITY ARCHITECTURAL DESIGN",
        columns: ["CODE NO.", "SIZE MM", "SIZE INCHES", "PCS / BOX", "PCS / CASE", "SCREW SIZE"],
        rows: [
            ["BT88", "100mm", "4 Inch Cruz", "5", "100", "6 x 20"],
            ["BT92", "300mm", "12 Inch Cruz", "5", "30", "6 x 20"],
            ["BT93", "75mm", "3 Inch Mexico NX", "10", "120", "5 x 20"],
            ["BT98", "300mm", "12 Inch Mexico NX", "5", "30", "5 x 20"],
            ["BT99", "100mm", "4 Inch Tapper 9.5mm", "5", "100", "6 x 20"],
            ["BT103", "300mm", "12 Inch Tapper 9.5mm", "5", "30", "6 x 20"],
            ["BT123", "75mm", "3 Inch Neck", "10", "120", "5 x 20"],
            ["BT133", "75mm", "3 Inch Tapper Neck", "10", "120", "6 x 20"],
            ["BT174", "Zen x 75", "Zen 3 Inch Latch", "10", "120", "5 x 20"]
        ]
    },

    'steel-fittings': {
        title: "STEEL & ALUMINIUM FITTINGS",
        badge: "HEAVY DUTY WELDED & EXTRUDED FITTINGS",
        columns: ["CODE NO.", "SIZE MM", "SPECIFICATION", "PCS / BOX", "PCS / CASE", "SCREW SIZE"],
        rows: [
            ["SH01", "3 x 1/2 x 3/4", "Steel Welded Hinge", "50", "1200", "6 x 20"],
            ["SH07", "3 x 14", "Steel Welded Hinge", "30", "720", "7 x 20"],
            ["SH16", "4 Inch Stone", "Stone Hinges Heavy", "25", "375", "8 x 35"],
            ["ST01", "100mm", "Steel Tower Bolt 10mm Round", "10", "240", "6 x 20"],
            ["ST06", "450mm", "Steel Tower Bolt 10mm Round", "5", "90", "6 x 20"],
            ["ST13", "100mm", "Steel Tower Bolt 12mm Square", "10", "240", "6 x 25"],
            ["AL01", "100mm", "Aluminium Tapper 9.5mm", "5", "240", "6 x 20"],
            ["AL30", "100mm", "Aluminium Super Neck", "5", "240", "5 x 25"]
        ]
    }
};

// --------------------------------------------------------------------------
// 2. Initialization & Listeners
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCursor();
    initSwatches();
    initPortfolioFilters();
    initSearch();
    initDrawer();
    initScrollHeader();
});

// --------------------------------------------------------------------------
// 3. Preloader
// --------------------------------------------------------------------------
function initLoader() {
    const loader = document.getElementById('preloader');
    const fill = document.getElementById('loader-bar');
    
    let progress = 0;
    const timer = setInterval(() => {
        progress += Math.floor(Math.random() * 20) + 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 300);
        }
        fill.style.width = progress + '%';
    }, 40);
}

// --------------------------------------------------------------------------
// 4. Subtle Cursor Follower
// --------------------------------------------------------------------------
function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    function renderRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        requestAnimationFrame(renderRing);
    }
    renderRing();
}

// --------------------------------------------------------------------------
// 5. Interactive PVD Finish Studio
// --------------------------------------------------------------------------
function initSwatches() {
    const swatchCards = document.querySelectorAll('.swatch-card');
    const finishImg = document.getElementById('finish-img');
    const finishTitle = document.getElementById('finish-title');
    const finishDesc = document.getElementById('finish-desc');

    const filtersMap = {
        'gold-pvd': 'sepia(0.8) hue-rotate(5deg) saturate(3) brightness(1.05)',
        'rose-gold-pvd': 'sepia(0.7) hue-rotate(325deg) saturate(2.4) brightness(1.05)',
        'antique-brass': 'sepia(0.85) hue-rotate(15deg) saturate(1.4) brightness(0.9)',
        'matt-satin': 'sepia(0.5) hue-rotate(10deg) saturate(1.8) brightness(1.1)',
        'copper-antique': 'sepia(0.9) hue-rotate(340deg) saturate(2.6) brightness(0.92)',
        'graphite-black': 'grayscale(1) brightness(0.3) contrast(1.6)',
        'cp-glossy': 'grayscale(1) brightness(1.2) contrast(1.1)',
        'z-black-pvd': 'grayscale(1) brightness(0.2) contrast(1.8)'
    };

    swatchCards.forEach(card => {
        card.addEventListener('click', () => {
            swatchCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const key = card.dataset.finish;
            const name = card.dataset.name;
            const desc = card.dataset.desc;

            finishTitle.textContent = name;
            finishDesc.textContent = desc;

            if (filtersMap[key]) {
                finishImg.style.filter = filtersMap[key];
            }
        });
    });
}

// --------------------------------------------------------------------------
// 6. Portfolio Category Filters
// --------------------------------------------------------------------------
function initPortfolioFilters() {
    const tabs = document.querySelectorAll('.filter-tab');
    const items = document.querySelectorAll('.product-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const cat = tab.dataset.filter;

            items.forEach(item => {
                if (cat === 'all' || item.dataset.category === cat) {
                    item.style.display = 'flex';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
}

function filterPortfolio(category) {
    const tab = document.querySelector(`.filter-tab[data-filter="${category}"]`);
    if (tab) tab.click();
}

// --------------------------------------------------------------------------
// 7. Tech Specs Modal Popup Handler
// --------------------------------------------------------------------------
function openTechSpecsModal(specKey) {
    const modal = document.getElementById('specs-modal');
    const title = document.getElementById('modal-title');
    const badge = document.getElementById('modal-badge');
    const body = document.getElementById('modal-body');

    const data = techSpecsDB[specKey];
    if (!data) return;

    title.textContent = data.title;
    badge.textContent = data.badge;

    let html = `
        <table class="clean-table">
            <thead>
                <tr>${data.columns.map(c => `<th>${c}</th>`).join('')}</tr>
            </thead>
            <tbody>
                ${data.rows.map(row => `
                    <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                `).join('')}
            </tbody>
        </table>
    `;

    body.innerHTML = html;
    modal.classList.add('open');
}

function closeTechSpecsModal() {
    document.getElementById('specs-modal').classList.remove('open');
}

// --------------------------------------------------------------------------
// 8. Catalog Search Overlay
// --------------------------------------------------------------------------
function initSearch() {
    const btn = document.getElementById('search-btn');
    const modal = document.getElementById('search-modal');
    const close = document.getElementById('search-close');
    const input = document.getElementById('search-input');
    const container = document.getElementById('search-results');

    btn.addEventListener('click', () => modal.classList.add('open'));
    close.addEventListener('click', () => modal.classList.remove('open'));

    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            container.innerHTML = '<p class="search-placeholder-msg">Type product code to view exact dimensions, box packing, and screw sizes.</p>';
            return;
        }

        let matches = [];
        Object.keys(techSpecsDB).forEach(key => {
            const db = techSpecsDB[key];
            db.rows.forEach(row => {
                if (row[0].toLowerCase().includes(query) || row[1].toLowerCase().includes(query) || row[2].toLowerCase().includes(query)) {
                    matches.push({ key, code: row[0], mm: row[1], inch: row[2] });
                }
            });
        });

        if (matches.length === 0) {
            container.innerHTML = '<p class="search-placeholder-msg">No hardware codes matched. Try "BHB" or "BT".</p>';
            return;
        }

        container.innerHTML = matches.map(m => `
            <div class="search-result-row" onclick="openTechSpecsModal('${m.key}'); document.getElementById('search-modal').classList.remove('open');">
                <div><strong>${m.code}</strong> - <span>${m.inch} (${m.mm})</span></div>
                <span style="font-size: 0.8rem; color: var(--accent-gold); font-weight: 700;">View Spec &rarr;</span>
            </div>
        `).join('');
    });
}

// --------------------------------------------------------------------------
// 9. Side Drawer Quick Quote
// --------------------------------------------------------------------------
function initDrawer() {
    const openBtn = document.getElementById('drawer-btn');
    const panel = document.getElementById('drawer-panel');
    const overlay = document.getElementById('drawer-overlay');
    const closeBtn = document.getElementById('drawer-close');

    openBtn.addEventListener('click', openInquiryDrawer);
    closeBtn.addEventListener('click', closeInquiryDrawer);
    overlay.addEventListener('click', closeInquiryDrawer);
}

function openInquiryDrawer() {
    document.getElementById('drawer-panel').classList.add('open');
    document.getElementById('drawer-overlay').classList.add('open');
}

function closeInquiryDrawer() {
    document.getElementById('drawer-panel').classList.remove('open');
    document.getElementById('drawer-overlay').classList.remove('open');
}

function sendWhatsAppInquiry() {
    const cat = document.getElementById('q-cat').value;
    const finish = document.getElementById('q-finish').value;
    const qty = document.getElementById('q-qty').value || 'Standard Order';
    const name = document.getElementById('q-name').value || 'Buyer';

    const text = `Hello AELEX (Shreenathji Metal)! I would like an inquiry:%0A- Category: ${cat}%0A- Finish: ${finish}%0A- Quantity: ${qty}%0A- Name: ${name}`;
    window.open(`https://wa.me/919913408752?text=${text}`, '_blank');
}

function submitContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('c-name').value;
    const phone = document.getElementById('c-phone').value;
    const cat = document.getElementById('c-category').value;
    const msg = document.getElementById('c-message').value;

    const feedback = document.getElementById('form-feedback');
    feedback.innerHTML = `<span style="color: #059669; font-weight: 600;"><i class="fa-solid fa-check-circle"></i> Thank you ${name}! Inquiry submitted. We will call you at ${phone}.</span>`;

    const text = `Hello AELEX Team! Form Inquiry:%0A- Name: ${name}%0A- Phone: ${phone}%0A- Product: ${cat}%0A- Requirement: ${msg}`;
    setTimeout(() => {
        window.open(`https://wa.me/919913408752?text=${text}`, '_blank');
    }, 1000);
}

// --------------------------------------------------------------------------
// 10. Scroll Header & Back To Top
// --------------------------------------------------------------------------
function initScrollHeader() {
    const header = document.getElementById('site-header');
    const topScroll = document.getElementById('top-scroll');
    const menuToggle = document.getElementById('menu-toggle');
    const primaryNav = document.getElementById('primary-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
            topScroll.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            topScroll.classList.remove('visible');
        }
    });

    topScroll.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    menuToggle.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
    });
}
