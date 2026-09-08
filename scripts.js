document.addEventListener("DOMContentLoaded", () => {

    console.log("Adam's portfolio loaded.");


    // -----------------------------------------------------
    // Optional:
    // Only keep one project open at a time
    // -----------------------------------------------------

    const entries = document.querySelectorAll(".entry");


    entries.forEach((entry) => {

        entry.addEventListener("toggle", () => {

            if (!entry.open) {
                return;
            }


            entries.forEach((otherEntry) => {

                if (otherEntry !== entry) {
                    otherEntry.open = false;
                }

            });

        });

    });



    // -----------------------------------------------------
    // Smooth navigation
    // -----------------------------------------------------

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (targetId === "#") {
                event.preventDefault();
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});