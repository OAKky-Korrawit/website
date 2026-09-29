// ==========================================
// CONFIGURATION URLS
// ==========================================
const SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbz6Z_HZXdM9kTKbX1RAYVabQtmGRp9uwJ3H79P_aFMEJ1kuNbUMU3IGyBcrFWCzSh8r/exec";
const CONTACT_API_URL = "https://script.google.com/macros/s/AKfycbxkIi5IdrGHMyQGruqccmZ5CLzqDebWwNgaTnkSjFxR8Xpgzz3sPZAwH2stU7GM5y-h/exec";


// ==========================================
// 1. BILINGUAL SYSTEM (i18n: TH / EN)
// ==========================================
const translations = {
    th: {
        nav_logo: "OAKky Portfolio",
        nav_home: "หน้าแรก",
        nav_home_sub: "นามบัตรดิจิทัล",
        nav_contact_menu: "ติดต่อ & ข้อมูล",
        nav_contact_sub: "ช่องทางติดต่อ",
        nav_edu_sub: "ประวัติการศึกษา",
        nav_socials: "โซเชียล",
        nav_cta: "ติดต่อเรา",
        nav_gravity: "Zero-G",
        nav_gravity_reset: "Reset G",
        
        // index.html
        feat_badge: "Featured Highlight",
        feat_title: "🎬 อยากให้แชทแสดงผลสตรีม? ลองวิธีนี้ส์! | OBS",
        feat_desc: "แนะนำเทคนิคการตั้งค่าสตรีมมิ่งผ่าน OBS ง่ายๆ ใครก็ทำได้",
        feat_watch: "Watch on YouTube 📺",
        profile_name: "OAKky",
        profile_bio: "เว็บไซต์นี้เป็นพื้นที่จัดเก็บและเผยแพร่ข้อมูลประวัติอย่างเป็นทางการของ",
        badge_msu: "🎓 (ปัจจุบัน) กำลังศึกษาอยู่ มหาวิทยาลัยมหาสารคาม | นิสิต CS",
        works_title: "🌟 ผลงานและช่องทางการติดตามผลงานต่างๆ",
        loading_works: "⏳ กำลังโหลดข้อมูลผลงานจาก Google Sheets...",
        empty_works: "⚠️ ไม่พบข้อมูลผลงานในระบบ",
        visit_site: "🌐 เปิดไปยังเว็บไซต์",
        
        // about.html
        edu_page_title: "ประวัติการศึกษา",
        edu_page_subtitle: "Education Background & Public Credentials",
        personal_details_title: "👤 ข้อมูลส่วนตัว (Personal Details)",
        name_th_label: "ชื่อ-นามสกุล:",
        name_en_label: "Name:",
        edu_section_title: "🎓 ประวัติการศึกษา (Education Background)",
        edu_uni_title: "🏫 กำลังศึกษาระดับอุดมศึกษา (ปัจจุบัน)",
        edu_uni_status: "สถานะ:",
        edu_uni_status_val: "นิสิตชั้นปีที่ 1 (ปริญญาตรี วท.บ.)",
        edu_uni_inst: "สถาบัน:",
        edu_uni_inst_val: "มหาวิทยาลัยมหาสารคาม",
        edu_uni_fac: "คณะ:",
        edu_uni_fac_val: "คณะวิทยาการสารสนเทศ",
        edu_uni_major: "สาขาวิชา:",
        edu_uni_major_val: "วิทยาการคอมพิวเตอร์ (CS)",
        
        edu_school_title: "🎓 สำเร็จการศึกษาระดับมัธยมศึกษา",
        edu_school_name: "โรงเรียน:",
        edu_school_name_val: "โรงเรียนสวนกุหลาบวิทยาลัย ชลบุรี",
        edu_school_plan: "แผนการเรียน:",
        edu_school_plan_val: "ศิลป์-ภาษาญี่ปุ่น",
        edu_ref_desc: "สามารถ ตรวจสอบข้อมูลอ้างอิง ได้ที่ลิงก์ต่อไปนี้:",
        edu_ref_m4: "• รายละเอียดประกาศ ม.4:",
        edu_ref_m1: "• รายละเอียดประกาศ ม.1:",
        
        cert_section_title: "📜 การอบรมและเกียรติบัตร (Certificates & Credentials)",
        cert_desc: "ตรวจสอบใบรับรองและประวัติการเรียนรู้ออนไลน์ทั้งหมดได้ที่ลิงก์นี้:",
        cert_btn_mooc: "🌐 ตรวจสอบ Thai MOOC Public Profile",
        cert_item_1_title: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL) / สถาบันชั้นนำ:",
        cert_item_1_desc: "ผ่านการอบรมหลักสูตรเสริมสร้างทักษะทางด้านเทคโนโลยีคอมพิวเตอร์",
        cert_item_2_title: "Thai MOOC:",
        cert_item_2_desc: "ผ่านการอบรมหลักสูตรการพัฒนาเว็บไซต์ด้วยมาตรฐาน HTML และ CSS",
        cert_item_3_title: "Thai MOOC:",
        cert_item_3_desc: "ผ่านการอบรมหลักสูตรพื้นฐานปัญญาประดิษฐ์ (AI & Machine Learning ด้วย Python)",
        cert_item_4_title: "สถาบันการบินและอวกาศ (APDI):",
        cert_item_4_desc: "ผ่านการอบรมโครงสร้างและภาพรวมอุตสาหกรรมการบินและการขนส่งทางอากาศ",
        
        more_courses_title: "📌 ประวัติคอร์สเรียน / อบรมที่อัปเดตเพิ่มเติม",
        more_courses_empty: "ยังไม่มีรายการอัปเดตเพิ่มเติม",
        
        // contact.html
        contact_page_title: "ช่องทางการติดต่อ",
        contact_page_subtitle: "Get in Touch with OAKky",
        contact_section_title: "🌐 ช่องทางติดต่อหลัก (Contact & Socials)",
        contact_desc: "สามารถติดตามผลงาน ทักทาย หรือพูดคุยแลกเปลี่ยนเรื่องเทคโนโลยีและเกมได้ตามช่องทางนี้ครับ:",
        contact_gh_title: "🌐 GitHub Portfolio",
        contact_yt_title: "📹 YouTube Channel (@OAKZA_AZ)",
        contact_yt_desc: "คอนเทนต์เกม คอนเทนต์เทคโนโลยี และเนื้อหาอื่นๆ ตามไลฟ์สไตล์",
        contact_ig_title: "📸 Instagram / Social Media",
        contact_ig_desc: "ติดตามไลฟ์สไตล์ ชีวิตมหาลัย และอัปเดตผลงาน",
        contact_more_edu_title: "🎓 ประวัติการศึกษาเพิ่มเติม",
        contact_more_edu_desc: "ดูรายละเอียดประวัติการศึกษา สายงานที่สนใจ และเกียรติบัตรการอบรมทั้งหมด",
        btn_visit_web: "ไปยังเว็บไซต์",
        btn_visit_yt: "เยี่ยมชมช่อง",
        btn_view_edu: "ดูประวัติการศึกษา",
        
        form_section_title: "✉️ ฝากข้อความติดต่อ (Send Message)",
        form_desc: "พิมพ์ข้อความและรายละเอียดเรื่องที่ต้องการติดต่อไว้ได้เลยครับ ข้อความจะถูกบันทึกลง Google Sheets ของผม และจะรีบตอบกลับโดยเร็วที่สุด:",
        label_name: "ชื่อของคุณ / ชื่อหน่วยงาน:",
        ph_name: "ระบุชื่อผู้ติดต่อ",
        label_email: "อีเมลของคุณ (สำหรับตอบกลับ):",
        ph_email: "example@email.com",
        label_subject: "เรื่องที่ต้องการติดต่อ:",
        ph_subject: "เช่น สอบถามเรื่องงาน, สนใจร่วมงาน, พูดคุยทั่วไป",
        label_message: "รายละเอียดข้อความ:",
        ph_message: "พิมพ์ข้อความรายละเอียดที่นี่...",
        btn_submit: "📩 ส่งข้อความ",
        
        footer_text: "© 2026 Korrawit Saenmueangchin (OAKky). All Rights Reserved.",
        gravity_toast_on: "🪐 เปิดโหมด Zero-G Antigravity! ลองใช้เมาส์จับโยนการ์ดต่างๆ ดูครับ",
        gravity_toast_off: "✨ คืนค่าแรงโน้มถ่วงปกติเรียบร้อยแล้ว"
    },
    en: {
        nav_logo: "OAKky Portfolio",
        nav_home: "Home",
        nav_home_sub: "Digital Card",
        nav_contact_menu: "Contact & Info",
        nav_contact_sub: "Get in Touch",
        nav_edu_sub: "Education",
        nav_socials: "Socials",
        nav_cta: "Contact Me",
        nav_gravity: "Zero-G",
        nav_gravity_reset: "Reset G",
        
        // index.html
        feat_badge: "Featured Highlight",
        feat_title: "🎬 Want Live Chat on Stream? Try This! | OBS",
        feat_desc: "Simple setup tutorial for streaming overlays with OBS Studio",
        feat_watch: "Watch on YouTube 📺",
        profile_name: "OAKky",
        profile_bio: "Official personal portfolio and academic credentials of",
        badge_msu: "🎓 (Present) 1st Year CS Undergraduate at Mahasarakham University",
        works_title: "🌟 Featured Projects & Online Channels",
        loading_works: "⏳ Loading projects from Google Sheets...",
        empty_works: "⚠️ No projects found in the system",
        visit_site: "🌐 Visit Website",
        
        // about.html
        edu_page_title: "Education Background",
        edu_page_subtitle: "Education Background & Public Credentials",
        personal_details_title: "👤 Personal Details",
        name_th_label: "Thai Name:",
        name_en_label: "English Name:",
        edu_section_title: "🎓 Education Background",
        edu_uni_title: "🏫 Higher Education (Current)",
        edu_uni_status: "Status:",
        edu_uni_status_val: "1st Year Student (B.Sc. Computer Science)",
        edu_uni_inst: "Institution:",
        edu_uni_inst_val: "Mahasarakham University (MSU)",
        edu_uni_fac: "Faculty:",
        edu_uni_fac_val: "Faculty of Informatics",
        edu_uni_major: "Major:",
        edu_uni_major_val: "Computer Science (CS)",
        
        edu_school_title: "🎓 High School Diploma",
        edu_school_name: "School:",
        edu_school_name_val: "Suankularb Wittayalai Chonburi School",
        edu_school_plan: "Program:",
        edu_school_plan_val: "Arts-Japanese Language",
        edu_ref_desc: "You can verify official credentials via these links:",
        edu_ref_m4: "• Grade 10-12 Official Notice:",
        edu_ref_m1: "• Grade 7-9 Official Notice:",
        
        cert_section_title: "📜 Certificates & Credentials",
        cert_desc: "Verify all accredited certificates and online learning records here:",
        cert_btn_mooc: "🌐 View Thai MOOC Public Profile",
        cert_item_1_title: "KMITL / Leading Institutes:",
        cert_item_1_desc: "Completed Computer Technology & Skill Enhancement training",
        cert_item_2_title: "Thai MOOC:",
        cert_item_2_desc: "Completed Web Development with HTML & CSS Standard Standards",
        cert_item_3_title: "Thai MOOC:",
        cert_item_3_desc: "Completed Foundations of Artificial Intelligence & Machine Learning with Python",
        cert_item_4_title: "Aviation & Aerospace Institute (APDI):",
        cert_item_4_desc: "Completed Aviation Industry & Air Transportation Overview course",
        
        more_courses_title: "📌 Additional Courses & Updates",
        more_courses_empty: "No additional updates at this time",
        
        // contact.html
        contact_page_title: "Contact Channels",
        contact_page_subtitle: "Get in Touch with OAKky",
        contact_section_title: "🌐 Contact & Socials",
        contact_desc: "Feel free to check out my projects, say hi, or chat about tech & gaming:",
        contact_gh_title: "🌐 GitHub Portfolio",
        contact_yt_title: "📹 YouTube Channel (@OAKZA_AZ)",
        contact_yt_desc: "Gaming, technology tutorials, and creative lifestyle content",
        contact_ig_title: "📸 Instagram / Social Media",
        contact_ig_desc: "Follow university life, daily updates, and behind the scenes",
        contact_more_edu_title: "🎓 Education Background",
        contact_more_edu_desc: "View academic milestones, career interests, and training certificates",
        btn_visit_web: "Visit Website",
        btn_visit_yt: "Visit Channel",
        btn_view_edu: "View Education",
        
        form_section_title: "✉️ Send a Message",
        form_desc: "Drop me a message below. Messages are saved directly to my Google Sheets and I will reply as soon as possible:",
        label_name: "Your Name / Organization:",
        ph_name: "Enter your name",
        label_email: "Your Email (for reply):",
        ph_email: "example@email.com",
        label_subject: "Subject:",
        ph_subject: "e.g. Inquiries, Collaboration, Networking",
        label_message: "Message Details:",
        ph_message: "Type your message here...",
        btn_submit: "📩 Send Message",
        
        footer_text: "© 2026 Korrawit Saenmueangchin (OAKky). All Rights Reserved.",
        gravity_toast_on: "🪐 Zero-G Antigravity activated! Click and fling elements around!",
        gravity_toast_off: "✨ Normal gravity restored."
    }
};

function applyLanguage(lang) {
    const dict = translations[lang] || translations.th;
    document.documentElement.lang = lang;
    localStorage.setItem("preferred_lang", lang);

    // อัปเดตข้อความที่มี data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // อัปเดต placeholder
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
        const key = el.getAttribute("data-i18n-ph");
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    // อัปเดตปุ่มสลับภาษา
    const langLabel = document.getElementById("langLabel");
    if (langLabel) {
        langLabel.textContent = lang === "th" ? "EN" : "TH";
    }

    // อัปเดตปุ่ม Zero-G
    const gravityLabel = document.querySelector(".gravity-text");
    if (gravityLabel) {
        gravityLabel.textContent = isAntigravity ? dict.nav_gravity_reset : dict.nav_gravity;
    }
}


// ==========================================
// 2. APPLE-STYLE TOAST NOTIFICATION
// ==========================================
function showToast(message) {
    let toast = document.getElementById("appleToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "appleToast";
        toast.className = "apple-toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}


// ==========================================
// 3. ANTIGRAVITY PHYSICS ENGINE (MATTER.JS)
// ==========================================
let isAntigravity = false;
let matterEngine = null;
let matterRunner = null;
let physicsItems = [];
let mouseConstraint = null;

function toggleAntigravity() {
    if (!window.Matter) {
        showToast("⚠️ ไม่พบไลบรารี Matter.js");
        return;
    }

    if (!isAntigravity) {
        startAntigravity();
    } else {
        stopAntigravity();
    }
}

function startAntigravity() {
    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

    // เลือกองค์ประกอบที่จะนำมาเล่นฟิสิกส์ (การ์ด, บัตร, กล่องข้อความ, ส่วนหัวข้อ)
    const elements = Array.from(document.querySelectorAll(
        ".card, .contact-item, ul.cert-list li, .business-card-header, .page-header-left, .page-hero, .featured-video-section, .badge-msu"
    ));

    if (elements.length === 0) return;

    matterEngine = Engine.create({
        gravity: { x: 0, y: 1.2, scale: 0.001 }
    });
    matterRunner = Runner.create();

    const w = window.innerWidth;
    const h = window.innerHeight;

    physicsItems = [];

    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        // บันทึกตำแหน่งเดิมเพื่อใช้ตอน Reset
        const originalStyle = {
            position: el.style.position,
            top: el.style.top,
            left: el.style.left,
            width: el.style.width,
            height: el.style.height,
            transform: el.style.transform,
            transition: el.style.transition,
            zIndex: el.style.zIndex,
            margin: el.style.margin
        };

        // ตรึงตำแหน่งไว้ที่พิกัดปัจจุบันบนหน้าจอ
        el.style.position = "fixed";
        el.style.left = `${rect.left}px`;
        el.style.top = `${rect.top}px`;
        el.style.width = `${rect.width}px`;
        el.style.height = `${rect.height}px`;
        el.style.margin = "0";
        el.style.zIndex = "90";
        el.style.transition = "none";
        el.classList.add("antigravity-active-item");

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const body = Bodies.rectangle(cx, cy, rect.width, rect.height, {
            restitution: 0.75, // ความเด้ง
            friction: 0.1,
            frictionAir: 0.02,
            density: 0.0015
        });

        // กระตุ้นแรงสุ่มเล็กน้อยตอนเริ่ม (Antigravity Scatter)
        Body.setVelocity(body, {
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 6 - 2
        });
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.08);

        Composite.add(matterEngine.world, body);

        physicsItems.push({
            element: el,
            body: body,
            originalStyle: originalStyle,
            initialCenter: { x: cx, y: cy }
        });
    });

    // กำแพงขอบหน้าจอ (พื้น, เพดาน, ขวา, ซ้าย)
    const wallThick = 120;
    const floor = Bodies.rectangle(w / 2, h + wallThick / 2, w * 2, wallThick, { isStatic: true });
    const leftWall = Bodies.rectangle(-wallThick / 2, h / 2, wallThick, h * 2, { isStatic: true });
    const rightWall = Bodies.rectangle(w + wallThick / 2, h / 2, wallThick, h * 2, { isStatic: true });
    const ceiling = Bodies.rectangle(w / 2, -wallThick / 2 - 300, w * 2, wallThick, { isStatic: true });

    Composite.add(matterEngine.world, [floor, leftWall, rightWall, ceiling]);

    // เมาส์จับลากโยนองค์ประกอบ (Mouse Constraint)
    const mouse = Mouse.create(document.body);
    mouseConstraint = MouseConstraint.create(matterEngine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.25,
            render: { visible: false }
        }
    });
    Composite.add(matterEngine.world, mouseConstraint);

    // ซิงค์ตำแหน่ง Matter.js Body กับ DOM Elements
    Events.on(matterEngine, "afterUpdate", () => {
        physicsItems.forEach(item => {
            const dx = item.body.position.x - item.initialCenter.x;
            const dy = item.body.position.y - item.initialCenter.y;
            const angle = item.body.angle;
            item.element.style.transform = `translate(${dx}px, ${dy}px) rotate(${angle}rad)`;
        });
    });

    Runner.run(matterRunner, matterEngine);

    isAntigravity = true;

    // อัปเดตสถานะปุ่ม
    const btn = document.getElementById("gravityToggleBtn");
    if (btn) {
        btn.classList.add("active-zero-g");
        const label = btn.querySelector(".gravity-text");
        const currentLang = localStorage.getItem("preferred_lang") || "th";
        if (label) label.textContent = translations[currentLang].nav_gravity_reset;
    }

    const currentLang = localStorage.getItem("preferred_lang") || "th";
    showToast(translations[currentLang].gravity_toast_on);
}

function stopAntigravity() {
    const { Runner, World, Engine } = Matter;

    if (matterRunner) Runner.stop(matterRunner);
    if (matterEngine) {
        World.clear(matterEngine.world, false);
        Engine.clear(matterEngine);
    }

    // แอนิเมชันคืนค่ากลับสู่ตำแหน่งเดิมอย่างนุ่มนวล
    physicsItems.forEach(item => {
        item.element.style.transition = "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)";
        item.element.style.transform = "translate(0px, 0px) rotate(0rad)";
    });

    setTimeout(() => {
        physicsItems.forEach(item => {
            const el = item.element;
            const os = item.originalStyle;
            el.style.position = os.position;
            el.style.top = os.top;
            el.style.left = os.left;
            el.style.width = os.width;
            el.style.height = os.height;
            el.style.transform = os.transform;
            el.style.transition = os.transition;
            el.style.zIndex = os.zIndex;
            el.style.margin = os.margin;
            el.classList.remove("antigravity-active-item");
        });
        physicsItems = [];
    }, 650);

    isAntigravity = false;

    // อัปเดตสถานะปุ่ม
    const btn = document.getElementById("gravityToggleBtn");
    if (btn) {
        btn.classList.remove("active-zero-g");
        const label = btn.querySelector(".gravity-text");
        const currentLang = localStorage.getItem("preferred_lang") || "th";
        if (label) label.textContent = translations[currentLang].nav_gravity;
    }

    const currentLang = localStorage.getItem("preferred_lang") || "th";
    showToast(translations[currentLang].gravity_toast_off);
}


// ==========================================
// 4. SCROLL REVEAL (INTERSECTION OBSERVER)
// ==========================================
let scrollObserver;

function initScrollReveal() {
    if (!("IntersectionObserver" in window)) {
        document.querySelectorAll("section, .business-card-header, .page-header-left, .page-hero, .featured-video-section, .contact-item, ul.cert-list li")
            .forEach(el => el.classList.add("is-visible"));
        return;
    }

    scrollObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
    });

    observeRevealElements();
}

function observeRevealElements() {
    if (!scrollObserver) return;
    const elements = document.querySelectorAll(
        "section, .business-card-header, .page-header-left, .page-hero, .featured-video-section, .contact-item, ul.cert-list li, .card"
    );
    elements.forEach(el => {
        if (!el.classList.contains("is-visible") && !el.classList.contains("reveal-on-scroll")) {
            el.classList.add("reveal-on-scroll");
            scrollObserver.observe(el);
        }
    });
}


// ==========================================
// 5. FETCH DATA FROM GOOGLE SHEETS
// ==========================================
async function loadSheetsData() {
    if (!SHEETS_API_URL) return;

    const cachedData = localStorage.getItem("portfolio_cache_data");
    if (cachedData) {
        try {
            const data = JSON.parse(cachedData);
            renderData(data);
        } catch (e) {
            console.error("Cache parse error:", e);
        }
    }

    try {
        const response = await fetch(SHEETS_API_URL);
        const data = await response.json();
        localStorage.setItem("portfolio_cache_data", JSON.stringify(data));
        renderData(data);
    } catch (error) {
        console.error("Error loading data from Google Sheets:", error);
        if (!cachedData) {
            const worksContainer = document.getElementById("worksGrid");
            if (worksContainer) {
                worksContainer.innerHTML = `<p style="color: #ff453a; grid-column: 1/-1;">❌ ไม่สามารถโหลดข้อมูลได้ กรุณาตรวจสอบอินเทอร์เน็ตหรือลิงก์ Web App</p>`;
            }
        }
    }
}

function renderData(data) {
    if (data && data.config) {
        const avatarEl = document.getElementById("profileAvatar");
        const nameEl = document.getElementById("profileName");
        const bioEl = document.getElementById("profileBio");

        if (avatarEl && data.config.profile_img) avatarEl.src = data.config.profile_img;
        if (nameEl && data.config.profile_name) nameEl.innerText = data.config.profile_name;
        if (bioEl && data.config.profile_bio) bioEl.innerText = data.config.profile_bio;
    }

    const worksContainer = document.getElementById("worksGrid");
    if (data && data.works && worksContainer) {
        worksContainer.innerHTML = "";

        const currentLang = localStorage.getItem("preferred_lang") || "th";
        const dict = translations[currentLang] || translations.th;

        if (data.works.length === 0) {
            worksContainer.innerHTML = `<p class="loading-text">${dict.empty_works}</p>`;
            return;
        }

        data.works.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            let mediaHTML = "";
            let itemType = item.type ? item.type.toLowerCase().trim() : "image";

            if (itemType === "video" && item.media_url) {
                let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                let match = item.media_url.match(regExp);
                let videoId = (match && match[2].length === 11) ? match[2] : null;

                if (videoId) {
                    mediaHTML = `
                        <div class="card-media video-container">
                            <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>`;
                }
            } 
            else if (itemType === "website") {
                mediaHTML = `
                    <div class="card-media website-preview" style="padding: 24px; background: var(--accent-gradient); color: #fff; text-align: center; font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <span style="font-size: 1.2rem;">🌐</span> Website
                    </div>`;
            } 
            else if (itemType === "image" && item.media_url) {
                mediaHTML = `
                    <div class="card-media image-container">
                        <img src="${item.media_url}" alt="${item.title || 'Portfolio'}" loading="lazy">
                    </div>`;
            }

            let categoryHTML = item.category ? `<span class="card-badge">${item.category}</span>` : "";
            let linkBtnHTML = (item.link_url && item.link_url.trim() !== "") 
                ? `<a href="${item.link_url.trim()}" target="_blank" rel="noopener noreferrer" class="card-external-btn">
                     ${dict.visit_site}
                   </a>` 
                : "";

            card.innerHTML = `
                ${mediaHTML}
                <div class="card-body">
                    ${categoryHTML}
                    <h3>${item.title || ''}</h3>
                    <p class="card-text">${item.description || ''}</p>
                    ${linkBtnHTML}
                </div>
            `;

            worksContainer.appendChild(card);
        });

        observeRevealElements();
    }
}


// ==========================================
// 6. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // 6.1 ภาษาเริ่มต้น (Bilingual init)
    const savedLang = localStorage.getItem("preferred_lang") || "th";
    applyLanguage(savedLang);

    const langToggleBtn = document.getElementById("langToggleBtn");
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const current = localStorage.getItem("preferred_lang") || "th";
            const target = current === "th" ? "en" : "th";
            applyLanguage(target);
        });
    }

    // 6.2 Dark Mode init
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") document.body.classList.add("dark-mode");

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        });
    }

    // 6.3 Zero-G Antigravity Button
    const gravityToggleBtn = document.getElementById("gravityToggleBtn");
    if (gravityToggleBtn) {
        gravityToggleBtn.addEventListener("click", toggleAntigravity);
    }

    // 6.4 Scroll Reveal init
    initScrollReveal();

    // 6.5 โหลดข้อมูล Google Sheets
    loadSheetsData();

    // 6.6 Card Nav Animation
    const navEl = document.getElementById("cardNav");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    if (navEl && hamburgerBtn) {
        let isExpanded = false;
        hamburgerBtn.addEventListener("click", () => {
            isExpanded = !isExpanded;
            navEl.classList.toggle("open", isExpanded);
            
            if (window.gsap) {
                const isMobile = window.innerWidth <= 768;
                const targetHeight = isExpanded ? (isMobile ? 320 : 225) : 62;
                gsap.to(navEl, { 
                    height: targetHeight, 
                    duration: 0.35, 
                    ease: "power2.out" 
                });
            }
        });

        document.querySelectorAll(".nav-card-link").forEach(link => {
            link.addEventListener("click", () => {
                if (isExpanded) {
                    isExpanded = false;
                    navEl.classList.remove("open");
                    if (window.gsap) {
                        gsap.to(navEl, { height: 62, duration: 0.3, ease: "power2.out" });
                    }
                }
            });
        });
    }

    // 6.7 Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById("submitBtn");
            const formStatus = document.getElementById("formStatus");

            submitBtn.disabled = true;
            submitBtn.innerText = "กำลังส่งข้อมูล...";
            formStatus.style.display = "block";
            formStatus.style.color = "var(--text-primary)";
            formStatus.innerText = "⏳ กำลังส่งข้อความ กรุณารอสักครู่...";

            let iframe = document.getElementById("hidden_iframe");
            if (!iframe) {
                iframe = document.createElement("iframe");
                iframe.name = "hidden_iframe";
                iframe.id = "hidden_iframe";
                iframe.style.display = "none";
                document.body.appendChild(iframe);
            }

            contactForm.action = CONTACT_API_URL;
            contactForm.method = "POST";
            contactForm.target = "hidden_iframe";
            contactForm.submit();

            setTimeout(() => {
                formStatus.style.color = "#34c759";
                formStatus.innerText = "✅ ส่งข้อความสำเร็จ ขอบคุณครับ!";
                contactForm.reset();
                submitBtn.disabled = false;
                const lang = localStorage.getItem("preferred_lang") || "th";
                submitBtn.innerText = translations[lang].btn_submit;
            }, 1200);
        });
    }
});