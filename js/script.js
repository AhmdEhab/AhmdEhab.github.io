/* Typewriter Effect */
document.addEventListener("DOMContentLoaded", function () {
    const roles = [
        { text: "Software Tester", color: "var(--accent)" },
        { text: "Mobile Developer", color: "var(--accent-2)" },
        { text: "Problem Solver", color: "var(--accent)" }
    ];

    let index = 0;
    const roleEl = document.getElementById("job-role");

    function showRole() {
        if (!roleEl) return;
        roleEl.style.opacity = 0;
        setTimeout(() => {
            roleEl.textContent = roles[index].text;
            roleEl.style.color = roles[index].color;
            roleEl.style.opacity = 1;
            index = (index + 1) % roles.length;
        }, 500);
    }

    showRole();
    setInterval(showRole, 3000);
});

/* Contact Form Handling */
(function () {
    const form = document.querySelector(".contact-form");
    const status = document.createElement("p");
    status.className = "form-status";
    if (form) form.parentNode.appendChild(status);

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            status.style.display = "block";
            status.className = "form-status";
            status.style.color = "var(--muted)";
            status.textContent = "…Sending";

            try {
                const res = await fetch("https://formspree.io/f/mandwvke", {
                    method: "POST",
                    body: new FormData(form),
                    headers: { Accept: "application/json" }
                });

                if (res.ok) {
                    form.reset();
                    status.className = "form-status success";
                    status.textContent = "Your Massage Delivered Succesfully ✅";
                } else {
                    const data = await res.json().catch(() => ({}));
                    status.className = "form-status error";
                    status.textContent =
                        (data && data.errors && data.errors[0] && data.errors[0].message) ||
                        "Eror, please try again ❌";
                }
            } catch {
                status.className = "form-status error";
                status.textContent = "Connection issue , please try again ‼️";
            }
        });
    }
})();

/* Smooth Scroll */
document.querySelectorAll('.nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
