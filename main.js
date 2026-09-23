// ==========================================
// CONFIGURATION URLS
// ==========================================
// 1. ลิงก์ Web App สำหรับดึงข้อมูลพอร์ตโฟลิโอและตั้งค่าเว็บ
const SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbz6Z_HZXdM9kTKbX1RAYVabQtmGRp9uwJ3H79P_aFMEJ1kuNbUMU3IGyBcrFWCzSh8r/exec";

// 2. ลิงก์ Web App สำหรับรับข้อความติดต่อ (Contact Form)
const CONTACT_API_URL = "https://script.google.com/macros/s/AKfycbxkIi5IdrGHMyQGruqccmZ5CLzqDebWwNgaTnkSjFxR8Xpgzz3sPZAwH2stU7GM5y-h/exec";


// ==========================================
// 1. FETCH DATA FROM GOOGLE SHEETS WEB APP
// ==========================================
async function loadSheetsData() {
    if (!SHEETS_API_URL) return;

    // ตรวจสอบข้อมูลใน LocalStorage เพื่อให้โหลดไวขึ้นในกรณีที่เคยโหลดมาแล้ว
    const cachedData = localStorage.getItem("portfolio_cache_data");
    if (cachedData) {
        try {
            const data = JSON.parse(cachedData);
            renderData(data); // เรนเดอร์ข้อมูลเก่าขึ้นมาก่อนทันที
        } catch (e) {
            console.error("Cache parse error:", e);
        }
    }

    try {
        const response = await fetch(SHEETS_API_URL);
        const data = await response.json();

        // บันทึกข้อมูลล่าสุดลง LocalStorage ไว้ใช้รอบหน้า
        localStorage.setItem("portfolio_cache_data", JSON.stringify(data));
        
        // เรนเดอร์ข้อมูลสดใหม่จาก Google Sheets
        renderData(data);

    } catch (error) {
        console.error("Error loading data from Google Sheets:", error);
        // ถ้าไม่มี Cache และดึงเว็บพลาด ให้แสดงข้อความแจ้งเตือน
        if (!cachedData) {
            const worksContainer = document.getElementById("worksGrid");
            if (worksContainer) {
                worksContainer.innerHTML = `<p style="color: #ef4444; grid-column: 1/-1;">❌ ไม่สามารถโหลดข้อมูลได้ กรุณาตรวจสอบอินเทอร์เน็ตหรือลิงก์ Web App</p>`;
            }
        }
    }
}

// ฟังก์ชันสำหรับนำข้อมูลไปแสดงผลบนหน้าเว็บไซต์
function renderData(data) {
    // 1.1 อัปเดตข้อมูลโปรไฟล์จาก Config
    if (data && data.config) {
        const avatarEl = document.getElementById("profileAvatar");
        const nameEl = document.getElementById("profileName");
        const bioEl = document.getElementById("profileBio");

        if (avatarEl && data.config.profile_img) avatarEl.src = data.config.profile_img;
        if (nameEl && data.config.profile_name) nameEl.innerText = data.config.profile_name;
        if (bioEl && data.config.profile_bio) bioEl.innerText = data.config.profile_bio;
    }

    // 1.2 เรนเดอร์การ์ดผลงานจาก Works
    const worksContainer = document.getElementById("worksGrid");
    if (data && data.works && worksContainer) {
        worksContainer.innerHTML = ""; // ล้างข้อความกำลังโหลด

        if (data.works.length === 0) {
            worksContainer.innerHTML = `<p class="loading-text">⚠️ ไม่พบข้อมูลผลงานในระบบ</p>`;
            return;
        }

        data.works.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            let mediaHTML = "";
            let itemType = item.type ? item.type.toLowerCase().trim() : "image";

            // ตรวจสอบประเภทสื่อ (Video YouTube, Website หรือ Image)
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
                    <div class="card-media website-preview" style="padding: 28px; background: linear-gradient(135deg, #0284c7, #0369a1); color: #fff; text-align: center; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <span style="font-size: 1.3rem;">🌐</span> เว็บไซต์ / ลิงก์ภายนอก
                    </div>`;
            } 
            else if (itemType === "image" && item.media_url) {
                mediaHTML = `
                    <div class="card-media image-container">
                        <img src="${item.media_url}" alt="${item.title || 'Portfolio Image'}" loading="lazy">
                    </div>`;
            }

            let categoryHTML = item.category ? `<span class="card-badge">${item.category}</span>` : "";
            let linkBtnHTML = (item.link_url && item.link_url.trim() !== "") 
                ? `<a href="${item.link_url.trim()}" target="_blank" rel="noopener noreferrer" class="card-external-btn">
                     🌐 เปิดไปยังเว็บไซต์
                   </a>` 
                : "";

            card.innerHTML = `
                ${mediaHTML}
                <div class="card-body">
                    ${categoryHTML}
                    <h3>${item.title || 'ไม่มีชื่อหัวข้อ'}</h3>
                    <p class="card-text">${item.description || ''}</p>
                    ${linkBtnHTML}
                </div>
            `;

            worksContainer.appendChild(card);
        });
    }
}


// ==========================================
// 2. DARK MODE TOGGLE & INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") document.body.classList.add("dark-mode");

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        });
    }

    loadSheetsData();
});


// ==========================================
// 3. CARD NAV GSAP ANIMATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const navEl = document.getElementById("cardNav");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    if (!navEl || !hamburgerBtn) return;

    let isExpanded = false;
    hamburgerBtn.addEventListener("click", () => {
        isExpanded = !isExpanded;
        navEl.classList.toggle("open", isExpanded);
        
        if (window.gsap) {
            gsap.to(navEl, { 
                height: isExpanded ? 230 : 65, 
                duration: 0.4, 
                ease: "power3.out" 
            });
        }
    });
});


// ==========================================
// 4. CONTACT FORM SUBMISSION HANDLER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีเฟรชแบบปกติ

            const submitBtn = document.getElementById("submitBtn");
            const formStatus = document.getElementById("formStatus");

            submitBtn.disabled = true;
            submitBtn.innerText = "กำลังส่งข้อมูล...";
            formStatus.style.display = "block";
            formStatus.style.color = "var(--text-primary)";
            formStatus.innerText = "⏳ กำลังส่งข้อความ กรุณารอสักครู่...";

            // สร้าง iframe ล่องหนเพื่อหลีกเลี่ยงปัญหา CORS Policy ของ Google Apps Script
            let iframe = document.getElementById("hidden_iframe");
            if (!iframe) {
                iframe = document.createElement("iframe");
                iframe.name = "hidden_iframe";
                iframe.id = "hidden_iframe";
                iframe.style.display = "none";
                document.body.appendChild(iframe);
            }

            // กำหนดค่าการส่งฟอร์มไปยังลิงก์รับข้อความติดต่อ
            contactForm.action = CONTACT_API_URL;
            contactForm.method = "POST";
            contactForm.target = "hidden_iframe";

            // สั่งส่งข้อมูล
            contactForm.submit();

            // แสดงสถานะสำเร็จหลังส่งข้อมูล
            setTimeout(() => {
                formStatus.style.color = "#10b981"; // สีเขียว
                formStatus.innerText = "✅ ส่งข้อความสำเร็จ ขอบคุณครับ!";
                contactForm.reset(); // ล้างฟอร์ม
                
                submitBtn.disabled = false;
                submitBtn.innerText = "📩 ส่งข้อความ";
            }, 1200);
        });
    }
});