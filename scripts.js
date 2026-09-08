const projects = {

    games: [

        {
            name: "MY STEAM GAME",

            date: "2026",

            description:
                "A multiplayer game built in Unreal Engine. I worked on gameplay programming, networking and player systems.",

            tech:
                "Unreal Engine 5 / Blueprints / Multiplayer",

            mediaType: "image",

            media:
                "images/game1.gif",

            links: [
                {
                    text: "Steam",
                    url: "https://store.steampowered.com/developer/sovestudio"
                },

                {
                    text: "itch.io",
                    url: "https://sovepose40.itch.io/"
                }
            ]
        },


        {
            name: "SECOND GAME",

            date: "2026",

            description:
                "Put information about your second game here.",

            tech:
                "Unreal Engine 5",

            mediaType: "image",

            media:
                "images/game2.jpg",

            links: []
        }

    ],



    systems: [

        {
            name: "PARKOUR",

            date: "2026",

            description:
                "A responsive third-person movement system featuring wallrunning, vaulting, sliding and climbing.",

            tech:
                "Unreal Engine 5 / Blueprints / Animation",

            mediaType: "video",

            media:
                "videos/parkour.mp4",

            links: []
        },


        {
            name: "COMBAT",

            date: "2026",

            description:
                "Third-person combat prototype focused on satisfying shooting, melee and physics reactions.",

            tech:
                "Unreal Engine 5 / Physics / Animation",

            mediaType: "image",

            media:
                "images/combat.gif",

            links: []
        },


        {
            name: "DIGGING",

            date: "2026",

            description:
                "An experimental system allowing the player to dig or create holes in parts of the environment.",

            tech:
                "Unreal Engine 5 / Gameplay Systems",

            mediaType: "video",

            media:
                "videos/digging.mp4",

            links: []
        }

    ],



    art: [

        {
            name: "3D MODELS",

            date: "2026",

            description:
                "A selection of modelling and asset work created in Blender.",

            tech:
                "Blender / GIMP",

            mediaType: "image",

            media:
                "images/blender1.jpg",

            links: []
        },


        {
            name: "ANIMATION",

            date: "2026",

            description:
                "Character rigging and animation work created for my game projects.",

            tech:
                "Blender / Unreal Engine",

            mediaType: "video",

            media:
                "videos/animation.mp4",

            links: []
        },


        {
            name: "PIXEL ART",

            date: "2026",

            description:
                "Sprites, graphics and UI experiments created using Aseprite.",

            tech:
                "Aseprite / GIMP",

            mediaType: "image",

            media:
                "images/pixelart.png",

            links: []
        }

    ]

};



const blogPosts = [

    {
        date: "08 SEP 2026",

        title: "BUILDING MY PORTFOLIO",

        text:
            "Started building this website. I wanted something closer to an old personal game developer website rather than a modern corporate portfolio."
    },


    {
        date: "05 SEP 2026",

        title: "PARKOUR SYSTEM",

        text:
            "Worked on improving my movement system, including wallrunning and character movement."
    },


    {
        date: "01 SEP 2026",

        title: "NEW PROTOTYPE",

        text:
            "Started experimenting with a new gameplay idea in Unreal Engine."
    }

];



let currentCategory = "games";



const projectButtons =
    document.getElementById("project-buttons");


const mediaElement =
    document.getElementById("project-media");


const titleElement =
    document.getElementById("project-title");


const descriptionElement =
    document.getElementById("project-description");


const dateElement =
    document.getElementById("project-date");


const techElement =
    document.getElementById("project-tech");


const linksElement =
    document.getElementById("project-links");



function loadCategory(category) {

    currentCategory = category;

    projectButtons.innerHTML = "";


    projects[category].forEach((project, index) => {

        const button =
            document.createElement("button");


        button.className = "tab";

        button.textContent = project.name;


        button.addEventListener("click", () => {

            loadProject(index);

        });


        projectButtons.appendChild(button);

    });


    loadProject(0);

}



function loadProject(index) {

    const project =
        projects[currentCategory][index];


    const buttons =
        projectButtons.querySelectorAll(".tab");


    buttons.forEach((button) => {

        button.classList.remove("active");

    });


    buttons[index].classList.add("active");


    titleElement.textContent =
        project.name;


    descriptionElement.textContent =
        project.description;


    dateElement.textContent =
        `[${project.date}]`;


    techElement.textContent =
        project.tech;


    /* MEDIA */

    if (project.mediaType === "video") {

        mediaElement.innerHTML = `
            <video
                autoplay
                muted
                loop
                playsinline
            >
                <source
                    src="${project.media}"
                    type="video/mp4"
                >
            </video>
        `;

    }

    else {

        mediaElement.innerHTML = `
            <img
                src="${project.media}"
                alt="${project.name}"
            >
        `;

    }


    /* LINKS */

    linksElement.innerHTML = "";


    project.links.forEach((link) => {

        const anchor =
            document.createElement("a");


        anchor.href =
            link.url;


        anchor.target =
            "_blank";


        anchor.textContent =
            link.text;


        linksElement.appendChild(anchor);

    });

}



/* CATEGORY BUTTONS */

document
    .querySelectorAll(".category-tabs .tab")
    .forEach((button) => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".category-tabs .tab")
                .forEach((other) => {

                    other.classList.remove("active");

                });


            button.classList.add("active");


            loadCategory(
                button.dataset.category
            );

        });

    });



/* BLOG */

const blogButtons =
    document.getElementById("blog-buttons");


function loadBlog(index) {

    const post =
        blogPosts[index];


    document.getElementById("blog-date")
        .textContent =
        `[${post.date}]`;


    document.getElementById("blog-title")
        .textContent =
        post.title;


    document.getElementById("blog-text")
        .textContent =
        post.text;


    const buttons =
        blogButtons.querySelectorAll(".tab");


    buttons.forEach((button) => {

        button.classList.remove("active");

    });


    buttons[index].classList.add("active");

}



blogPosts.forEach((post, index) => {

    const button =
        document.createElement("button");


    button.className =
        "tab";


    button.textContent =
        post.date;


    button.addEventListener("click", () => {

        loadBlog(index);

    });


    blogButtons.appendChild(button);

});



/* INITIAL PAGE */

loadCategory("games");

loadBlog(0);