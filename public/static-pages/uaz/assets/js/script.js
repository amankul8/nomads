

const tabButtons = document.querySelectorAll('.configurator-tabs__item');
const tabPanels = document.querySelectorAll('.configurator__screen');
const configuratorTabs = document.querySelector('.configurator-tabs');

function switchTab(clickedButton) {
    tabButtons.forEach(btn => {
        btn.classList.remove('is_active', 'is_selected');
        btn.setAttribute('aria-selected', 'false');
    });

    tabPanels.forEach(panel => {
        panel.style.display = 'none';
    });

    configuratorTabs?.classList.remove('comfort-mode');

    clickedButton.classList.add('is_active', 'is_selected');
    clickedButton.setAttribute('aria-selected', 'true');

    const tabId = clickedButton.id;
    const panelTypes = {
        '1': 'home',
        '2': 'wheels',
        '3': 'comfort',
        '4': 'offroad',
        '5': '360-view',
    };

    const activePanel = document.querySelector(`.configurator__screen_${panelTypes[tabId]}`);
    if (activePanel) {
        activePanel.style.display = 'block';
        if (tabId === '3') configuratorTabs?.classList.add('comfort-mode');
    }
}

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => switchTab(button));
    });
    switchTab(tabButtons[0]); // Activate the first tab by default
}

// Popup logic
const popup = document.querySelector('.popup');
const body = document.body;
const html = document.documentElement;

const disableScroll = () => {
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.width = '100%';
};

const enableScroll = () => {
    body.style.overflow = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.width = '';
};

document.querySelector('.popup__close')?.addEventListener('click', () => {
    if (popup) popup.style.display = 'none';
    enableScroll();
});

document.querySelector('.popup__overlay')?.addEventListener('click', () => {
    if (popup) popup.style.display = 'none';
    enableScroll();
});

document.querySelectorAll('.button-to-open-popup').forEach(button => {
    button.addEventListener('click', () => {
        if (popup) popup.style.display = 'block';
        disableScroll();
    });
});

// Scroll to sections (specs)
document.querySelectorAll('.configurator-specifications-menu__item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            document.querySelectorAll('.configurator-specifications-menu__item').forEach(i => {
                i.classList.remove('is_active');
            });
            item.classList.add('is_active');
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Scroll spy nav
const navLinks = document.querySelectorAll('.program-nav__item-link[data-goto]');
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetClass = link.getAttribute('data-goto');
            const targetBlock = document.querySelector(`.${targetClass}`);
            if (targetBlock) {
                const navHeight = document.querySelector('.program-nav')?.offsetHeight || 0;
                const top = targetBlock.getBoundingClientRect().top + scrollY - navHeight - 30;
                window.scrollTo({
                    top,
                    behavior: 'smooth',
                });
            }
        });
    });

    const changeNav = (entries) => {
        entries.forEach(entry => {
            const section = entry.target.getAttribute('data-section');
            const link = document.querySelector(`[data-goto="${section}"]`);
            if (link?.parentElement) {
                link.parentElement.classList.toggle('program-nav__list-item--active', entry.isIntersecting);
            }
        });
    };

    const observer = new IntersectionObserver(changeNav, { threshold: 0.1 });
    document.querySelectorAll('section[data-section]').forEach(section => {
        observer.observe(section);
    });
}


