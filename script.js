/* ==========================================================================
   AELEX™ - Modern Architectural Hardware & Precision Fittings
   Master JavaScript - Interactive PVD Studio, Technical Specs & Smooth Filter Tabs
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. Preloader Initialization
    // ----------------------------------------------------------------------
    const preloader = document.getElementById('preloader');
    const loaderBar = document.getElementById('loader-bar');

    if (loaderBar && preloader) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 25;
            loaderBar.style.width = `${progress}%`;
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add('hidden');
                }, 200);
            }
        }, 80);
    }

    // ----------------------------------------------------------------------
    // 2. Smooth Scroll Reveal Animations Observer
    // ----------------------------------------------------------------------
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        
        const observerOptions = {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => revealObserver.observe(el));
    }
    initScrollReveal();

    // ----------------------------------------------------------------------
    // 3. Header Scroll Shadow & Back to Top Button
    // ----------------------------------------------------------------------
    const siteHeader = document.getElementById('site-header');
    const topScrollBtn = document.getElementById('top-scroll');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }

        if (window.scrollY > 300) {
            topScrollBtn.classList.add('visible');
        } else {
            topScrollBtn.classList.remove('visible');
        }
    });

    if (topScrollBtn) {
        topScrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const primaryNav = document.getElementById('primary-nav');

    if (menuToggle && primaryNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            primaryNav.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });

        // Close nav when clicking links
        const navLinks = primaryNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                primaryNav.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // ----------------------------------------------------------------------
    // 4. Interactive PVD Studio Filter
    // ----------------------------------------------------------------------
    const swatchCards = document.querySelectorAll('.swatch-card');
    const finishImg = document.getElementById('finish-img');
    const finishTitle = document.getElementById('finish-title');
    const finishDesc = document.getElementById('finish-desc');

    const finishFilters = {
        'gold-pvd': 'sepia(0.8) hue-rotate(5deg) saturate(3) brightness(1.1)',
        'rose-gold-pvd': 'sepia(0.6) hue-rotate(320deg) saturate(2.2) brightness(1.05)',
        'antique-brass': 'sepia(0.9) hue-rotate(25deg) saturate(1.8) contrast(1.1) brightness(0.95)',
        'matt-satin': 'sepia(0.4) hue-rotate(15deg) saturate(1.4) brightness(1.08)',
        'copper-antique': 'sepia(0.95) hue-rotate(345deg) saturate(2.5) contrast(1.15)',
        'graphite-black': 'grayscale(1) contrast(1.6) brightness(0.4)',
        'cp-glossy': 'grayscale(1) brightness(1.25) contrast(1.2)',
        'z-black-pvd': 'grayscale(1) contrast(2) brightness(0.2)'
    };

    swatchCards.forEach(card => {
        card.addEventListener('click', () => {
            swatchCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const finishKey = card.getAttribute('data-finish');
            const name = card.getAttribute('data-name');
            const desc = card.getAttribute('data-desc');

            if (finishTitle) finishTitle.textContent = name;
            if (finishDesc) finishDesc.textContent = desc;

            if (finishImg && finishFilters[finishKey]) {
                finishImg.style.filter = finishFilters[finishKey];
            }
        });
    });

    // ----------------------------------------------------------------------
    // 5. Portfolio Category Filter (Zero Flicker Synchronized Transitions)
    // ----------------------------------------------------------------------
    const filterTabs = document.querySelectorAll('.filter-tab');
    const productItems = document.querySelectorAll('.product-item');
    let isFiltering = false;

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (isFiltering || tab.classList.contains('active')) return;
            isFiltering = true;

            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filterValue = tab.getAttribute('data-filter');

            // Phase 1: Smooth fade & scale out all product items together
            productItems.forEach(item => {
                item.classList.add('filtering-out');
                item.classList.remove('filtering-in');
            });

            // Phase 2: After fade out, switch display states & smooth fade back in
            setTimeout(() => {
                productItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        item.style.display = 'flex';
                        item.classList.add('reveal-active');
                    } else {
                        item.style.display = 'none';
                    }
                });

                requestAnimationFrame(() => {
                    productItems.forEach(item => {
                        if (item.style.display === 'flex') {
                            item.classList.remove('filtering-out');
                            item.classList.add('filtering-in');
                        }
                    });
                    isFiltering = false;
                });
            }, 220);
        });
    });

    // ----------------------------------------------------------------------
    // 6. Side Drawer Quick Quote Logic
    // ----------------------------------------------------------------------
    const drawerBtn = document.getElementById('drawer-btn');
    const drawerPanel = document.getElementById('drawer-panel');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose = document.getElementById('drawer-close');

    function openDrawer() {
        if (drawerPanel && drawerOverlay) {
            drawerPanel.classList.add('open');
            drawerOverlay.classList.add('open');
            document.body.classList.add('no-scroll');
        }
    }

    function closeDrawer() {
        if (drawerPanel && drawerOverlay) {
            drawerPanel.classList.remove('open');
            drawerOverlay.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    }

    if (drawerBtn) drawerBtn.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    window.openInquiryDrawer = openDrawer;

    // ----------------------------------------------------------------------
    // 7. Catalog Search Modal Engine
    // ----------------------------------------------------------------------
    const searchBtn = document.getElementById('search-btn');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchBtn && searchModal && searchClose) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.add('open');
            document.body.classList.add('no-scroll');
            if (searchInput) searchInput.focus();
        });

        searchClose.addEventListener('click', () => {
            searchModal.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    }

    const searchCatalogDB = [
        { code: 'BHB01 - BHB18', title: 'Brass Butt & Railway Hinges', cat: 'hinges', specId: 'hinges-butt' },
        { code: 'BHRL01 - BHRL30', title: 'Brass Ryl Locking & Spring Hinges', cat: 'hinges', specId: 'hinges-locking' },
        { code: 'BHB01 - BHBI16', title: 'Brass Bearing & Italian Tip Hinges', cat: 'hinges', specId: 'hinges-bearing' },
        { code: 'BT01 - BT53', title: 'Brass Tower Bolt Round & Hex (9.5mm / 12mm)', cat: 'towerbolt', specId: 'tb-round' },
        { code: 'BT99 - BT175', title: 'Brass Tapper, Neck & Mexico NX Latches', cat: 'towerbolt', specId: 'tb-tapper' },
        { code: 'SH01 - ST36', title: 'Steel Welded Hinges & Heavy Aluminium Fittings', cat: 'steel', specId: 'steel-fittings' }
    ];

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                searchResults.innerHTML = '<p class="search-placeholder-msg">Type product code to view exact dimensions, box packing, and screw sizes.</p>';
                return;
            }

            const matches = searchCatalogDB.filter(item => 
                item.code.toLowerCase().includes(query) || 
                item.title.toLowerCase().includes(query) ||
                item.cat.toLowerCase().includes(query)
            );

            if (matches.length === 0) {
                searchResults.innerHTML = '<p class="search-placeholder-msg">No matching hardware specifications found.</p>';
            } else {
                searchResults.innerHTML = matches.map(item => `
                    <div class="search-result-row" onclick="openTechSpecsFromSearch('${item.specId}')">
                        <div>
                            <strong>${item.code}</strong>
                            <div style="font-size:0.78rem; color:#64748b;">${item.title}</div>
                        </div>
                        <i class="fa-solid fa-chevron-right" style="color:#c5a059;"></i>
                    </div>
                `).join('');
            }
        });
    }

    window.openTechSpecsFromSearch = function(specId) {
        if (searchModal) searchModal.classList.remove('open');
        openTechSpecsModal(specId);
    };

});

// --------------------------------------------------------------------------
// 8. Technical Specifications Modal DB Engine (Extracted from Aelex Brochure.pdf)
// --------------------------------------------------------------------------
const techSpecsDB = {
    'hinges-butt': {
        title: 'Brass Butt & Railway Hinges (Pages 5-7)',
        badge: 'BHB01 - BHB18 CATALOG DATA',
        rows: [
            { code: 'BHB01', sizeMM: '75 x 9 mm', sizeInch: '3 x 3/8"', thickness: '2.5 mm', screw: '6 x 15', box: '20 Pcs', case: '400 Pcs' },
            { code: 'BHB02', sizeMM: '75 x 12 mm', sizeInch: '3 x 1/2"', thickness: '2.5 mm', screw: '6 x 15', box: '20 Pcs', case: '400 Pcs' },
            { code: 'BHB04', sizeMM: '100 x 12 mm', sizeInch: '4 x 1/2"', thickness: '2.5 mm', screw: '6 x 15', box: '20 Pcs', case: '300 Pcs' },
            { code: 'BHB06', sizeMM: '100 x 19 mm', sizeInch: '4 x 3/4"', thickness: '3.0 mm', screw: '7 x 19', box: '10 Pcs', case: '200 Pcs' },
            { code: 'BHB08', sizeMM: '100 x 25 mm', sizeInch: '4 x 1"', thickness: '3.0 mm', screw: '8 x 19', box: '10 Pcs', case: '150 Pcs' },
            { code: 'BHB12', sizeMM: '125 x 25 mm', sizeInch: '5 x 1"', thickness: '3.0 mm', screw: '8 x 25', box: '10 Pcs', case: '100 Pcs' }
        ]
    },
    'hinges-locking': {
        title: 'Brass Ryl Locking & Spring Hinges (Pages 8-9)',
        badge: 'BHRL01 - BHRL30 CATALOG DATA',
        rows: [
            { code: 'BHRL01', sizeMM: '50 mm', sizeInch: '2 Inch', thickness: '3/16"', screw: '6 x 15', box: '10 Pcs', case: '200 Pcs' },
            { code: 'BHRL04', sizeMM: '100 mm', sizeInch: '4 Inch', thickness: '3/16"', screw: '8 x 19', box: '10 Pcs', case: '100 Pcs' },
            { code: 'BHRL08', sizeMM: '150 mm', sizeInch: '6 Inch', thickness: '3/16"', screw: '8 x 25', box: '4 Pcs', case: '60 Pcs' },
            { code: 'BHRL15', sizeMM: '200 mm', sizeInch: '8 Inch', thickness: '1/4"', screw: '10 x 30', box: '2 Pcs', case: '40 Pcs' }
        ]
    },
    'hinges-bearing': {
        title: 'Brass Bearing & Italian Tip Hinges (Pages 10-12)',
        badge: 'BHB01 - BHBI16 CATALOG DATA',
        rows: [
            { code: 'BHB01', sizeMM: '75 x 50 mm', sizeInch: '3 x 2 Inch', thickness: '3.0 mm', screw: '7 x 19', box: '10 Pcs', case: '150 Pcs' },
            { code: 'BHB04', sizeMM: '100 x 75 mm', sizeInch: '4 x 3 Inch', thickness: '3.0 mm', screw: '8 x 19', box: '10 Pcs', case: '100 Pcs' },
            { code: 'BHB08', sizeMM: '100 x 75 mm', sizeInch: '4 x 3 Inch', thickness: '4.0 mm Heavy', screw: '8 x 25', box: '4 Pcs', case: '60 Pcs' },
            { code: 'BHBI02', sizeMM: '125 x 88 mm', sizeInch: '5 x 3.5 Inch', thickness: '4.0 mm', screw: '10 x 30', box: '2 Pcs', case: '40 Pcs' }
        ]
    },
    'tb-round': {
        title: 'Brass Tower Bolt Round & Hex - 9.5mm / 12mm (Pages 13-14)',
        badge: 'BT01 - BT53 CATALOG DATA',
        rows: [
            { code: 'BT01', sizeMM: '75 mm', sizeInch: '3 Inch', thickness: '9.5 mm Rod', screw: '6 x 15', box: '10 Pcs', case: '200 Pcs' },
            { code: 'BT03', sizeMM: '150 mm', sizeInch: '6 Inch', thickness: '9.5 mm Rod', screw: '6 x 15', box: '10 Pcs', case: '100 Pcs' },
            { code: 'BT06', sizeMM: '250 mm', sizeInch: '10 Inch', thickness: '9.5 mm Rod', screw: '6 x 15', box: '5 Pcs', case: '60 Pcs' },
            { code: 'BT22', sizeMM: '300 mm', sizeInch: '12 Inch', thickness: '12.0 mm Heavy', screw: '8 x 19', box: '2 Pcs', case: '40 Pcs' }
        ]
    },
    'tb-tapper': {
        title: 'Brass Tapper, Neck & Mexico NX Latches (Pages 15-16)',
        badge: 'BT99 - BT175 CATALOG DATA',
        rows: [
            { code: 'BT99', sizeMM: '100 mm', sizeInch: '4 Inch', thickness: 'Tapper NX', screw: '6 x 15', box: '10 Pcs', case: '120 Pcs' },
            { code: 'BT105', sizeMM: '200 mm', sizeInch: '8 Inch', thickness: 'Super Neck', screw: '8 x 19', box: '5 Pcs', case: '60 Pcs' },
            { code: 'BT120', sizeMM: '300 mm', sizeInch: '12 Inch', thickness: 'Mexico NX', screw: '8 x 19', box: '2 Pcs', case: '40 Pcs' }
        ]
    },
    'steel-fittings': {
        title: 'Steel Welded Hinges & Heavy Aluminium Fittings (Page 17)',
        badge: 'SH01 - ST36 CATALOG DATA',
        rows: [
            { code: 'SH01', sizeMM: '100 mm', sizeInch: '4 Inch', thickness: 'Heavy Welded', screw: 'M8 Bolt', box: '10 Pcs', case: '100 Pcs' },
            { code: 'ST12', sizeMM: '250 mm', sizeInch: '10 Inch', thickness: '10mm Steel Rod', screw: '8 x 19', box: '5 Pcs', case: '50 Pcs' }
        ]
    }
};

window.openTechSpecsModal = function(specKey) {
    const data = techSpecsDB[specKey];
    if (!data) return;

    const modal = document.getElementById('specs-modal');
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalTitle) modalTitle.textContent = data.title;

    let tableHTML = `
        <table class="clean-table">
            <thead>
                <tr>
                    <th>Product Code</th>
                    <th>Size (MM)</th>
                    <th>Size (Inches)</th>
                    <th>Rod / Leaf Thickness</th>
                    <th>Screw Size</th>
                    <th>Box Packing</th>
                    <th>Outer Case</th>
                </tr>
            </thead>
            <tbody>
    `;

    data.rows.forEach(row => {
        tableHTML += `
            <tr>
                <td><strong>${row.code}</strong></td>
                <td>${row.sizeMM}</td>
                <td>${row.sizeInch}</td>
                <td>${row.thickness}</td>
                <td>${row.screw}</td>
                <td>${row.box}</td>
                <td>${row.case}</td>
            </tr>
        `;
    });

    tableHTML += '</tbody></table>';
    if (modalBody) modalBody.innerHTML = tableHTML;
    if (modal) modal.classList.add('open');
    document.body.classList.add('no-scroll');
};

window.closeTechSpecsModal = function() {
    const modal = document.getElementById('specs-modal');
    if (modal) modal.classList.remove('open');
    document.body.classList.remove('no-scroll');
};

// --------------------------------------------------------------------------
// 9. Contact Form Submission Handler
// --------------------------------------------------------------------------
window.submitContactForm = function(event) {
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    const name = document.getElementById('c-name').value;
    
    if (feedback) {
        feedback.innerHTML = `<span style="color:#25D366; font-weight:700;"><i class="fa-solid fa-circle-check"></i> Thank you ${name}! Your inquiry has been logged. Our Jamnagar factory team will contact you shortly.</span>`;
    }
    event.target.reset();
};

// --------------------------------------------------------------------------
// 10. WhatsApp Inquiry Direct Composer
// --------------------------------------------------------------------------
window.sendWhatsAppInquiry = function() {
    const cat = document.getElementById('q-cat').value;
    const finish = document.getElementById('q-finish').value;
    const qty = document.getElementById('q-qty').value || 'Not specified';
    const name = document.getElementById('q-name').value || 'Client';

    const text = `Hello AELEX / Shreenathji Metal Team,%0A%0AI would like to get a business quotation for:%0A- *Product Category:* ${cat}%0A- *PVD Finish:* ${finish}%0A- *Approx Quantity:* ${qty}%0A- *My Name/City:* ${name}%0A%0APlease share your best trade catalog prices.`;
    
    window.open(`https://wa.me/919913408752?text=${text}`, '_blank');
};

window.filterPortfolio = function(catKey) {
    const filterBtn = document.querySelector(`.filter-tab[data-filter="${catKey}"]`);
    if (filterBtn) filterBtn.click();
};
