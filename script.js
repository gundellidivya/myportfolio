document.addEventListener('DOMContentLoaded', function () {
  // ✅ Initialize EmailJS
  emailjs.init("ASo38piT6kLs8trzb"); // Replace with your actual public key if needed

  // ✅ EmailJS form submission
  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgvkanzl", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      const result = await response.json();
      console.log("📨 Response:", result);

      if (response.ok) {
        alert("✅ Thank you! Your message was sent.");
        form.reset();
      } else {
        alert("❌ Failed to send. Check console for errors.");
        console.error("❌ Error response:", result);
      }
    } catch (error) {
      alert("❌ Network error.");
      console.error("❌ Fetch error:", error);
    }
  });
});


  // ✅ Smooth scrolling for nav buttons
  document.querySelectorAll('.nav-buttons button').forEach(button => {
    const targetId = button.getAttribute('data-target');
    if (targetId) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  // ✅ Tab switching (Profile: Education, Certifications, Achievements)
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // ✅ Toggle button section logic (if used)
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      document.querySelectorAll('.toggle-content').forEach(content => {
        content.style.display = 'none';
      });

      const targetId = button.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.style.display = 'block';
    });
  });
});

// ✅ Pop-up controls for project overlays
function openPopup(id) {
  document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}
