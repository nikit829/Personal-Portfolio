//header

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector(".headerUl");
const headerIcons=document.querySelectorAll(".icon");

hamburger.addEventListener('click', () => {

    navLinks.classList.toggle('show');
    //hide icons
    headerIcons.forEach(icon=>{
        icon.style.display="none";
    });

});

// -------------------------------------------------------------------------------------------- document's here
document.addEventListener("click",(event)=>{
    // hide navbar if click is outside the hamburger
    if (!hamburger.contains(event.target)) {
         // Hide nav links
        setTimeout(()=>{
            navLinks.classList.remove('show');
        },200);
    }
});

// About section
let hiddenAbout = document.querySelector(".aboutDetails");
let hiddenSkills = document.querySelector(".skillDetails");
let hiddenEdu = document.querySelector(".eduDetails");

let aboutButton = document.querySelector("#aboutLi")
let skillButton = document.querySelector("#skillLi")
let eduButton = document.querySelector("#eduLi")

// Function to reset button colors
function resetButtonColors() {
    aboutButton.style.color = "#000000"; // Default color
    skillButton.style.color = "#000000"; // Default color
    eduButton.style.color = "#000000"; // Default color
}

//bydefault about visibility --------------------------------------------------------------------- document's here
document.addEventListener("DOMContentLoaded", () => {
    //header section
    document.querySelector(".home").classList.remove("hide");

    //About Section
    aboutButton.style.color="#ff2323";
    hiddenAbout.classList.remove("hide");
    hiddenSkills.classList.add("hide");
    hiddenEdu.classList.add("hide");
});

//now dynamically button click changes happens
aboutButton.addEventListener("click", () => {
    resetButtonColors();
    aboutButton.style.color="#ff2323";
    hiddenAbout.classList.remove("hide")
    hiddenSkills.classList.add("hide")
    hiddenEdu.classList.add("hide")
})
skillButton.addEventListener("click", () => {
    resetButtonColors();
    skillButton.style.color="#ff2323";
    hiddenSkills.classList.remove("hide")
    hiddenAbout.classList.add("hide")
    hiddenEdu.classList.add("hide")
})
eduButton.addEventListener("click", () => {
    resetButtonColors();
    eduButton.style.color="#ff2323";
    hiddenEdu.classList.remove("hide")
    hiddenAbout.classList.add("hide")
    hiddenSkills.classList.add("hide")
})

//automatic scroll up and down
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = link.getAttribute('href').slice(1); // Get the id (without #)
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start', // Align to the top of the section
            });

            // Optionally update the URL hash
            history.pushState(null, '', `#${targetId}`);
        }
    });
});

// Resume download
let resumebtn = document.querySelector(".resume");
resumebtn.addEventListener('click', () => {
    const fileURL = "https://drive.google.com/file/d/1OP0wiGlecjO9Z8yP0S3gIFynbPrDo2dA/view?usp=drive_link";
    const fileName = "NIKIT_SINGH_resume"

    const anchor = document.createElement("a");
    anchor.href = fileURL;
    anchor.target = "_blank";
    anchor.download = fileName;

    anchor.click();
});

// Contact Access and operation / email generation
let contactSubmit = document.querySelector("#submit");

contactSubmit.addEventListener('click', async () => {
    // alert("Processing...")

    event.preventDefault();

    let contactName = document.querySelector("#contactName").value;
    let contactEmail = document.querySelector("#email").value;
    let contactSubject = document.querySelector("#subject").value;
    let contactMessage = document.querySelector("#message").value;

    if (contactName && contactEmail && contactSubject && contactMessage) {
        try {
            let response = await fetch('/api/contact/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify({
                    name: contactName,
                    email: contactEmail,
                    subject: contactSubject,
                    message: contactMessage
                })
            });
            if (response.ok)
                alert("Email successfully sent.");
            else
                alert(`Message not sent! \n ${response.status}`);
        } catch (error) {
            alert(`Message not sent! \n ${error.message}`);
        }
    } else {
        alert("All labels are mandatory.");
    }
});

