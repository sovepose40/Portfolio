const galleryItems = document.querySelectorAll(".gallery-item");

if (galleryItems.length > 0) {
	const viewer = document.createElement("div");
	const viewerImage = document.createElement("img");
	const closeButton = document.createElement("button");

	viewer.className = "image-viewer";
	viewer.setAttribute("aria-hidden", "true");
	viewerImage.className = "image-viewer-image";
	closeButton.className = "image-viewer-close";
	closeButton.type = "button";
	closeButton.setAttribute("aria-label", "Close image viewer");
	closeButton.textContent = "×";

	viewer.append(viewerImage, closeButton);
	document.body.appendChild(viewer);

	const closeViewer = () => {
		viewer.classList.remove("is-open");
		viewer.setAttribute("aria-hidden", "true");
		document.body.classList.remove("viewer-open");
	};

	galleryItems.forEach((item) => {
		const image = item.querySelector("img");

		if (!image) {
			return;
		}

		item.setAttribute("tabindex", "0");
		item.setAttribute("role", "button");

		const openViewer = () => {
			viewerImage.src = image.src;
			viewerImage.alt = image.alt;
			viewer.classList.add("is-open");
			viewer.setAttribute("aria-hidden", "false");
			document.body.classList.add("viewer-open");
		};

		item.addEventListener("click", openViewer);
		item.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				openViewer();
			}
		});
	});

	closeButton.addEventListener("click", closeViewer);
	viewer.addEventListener("click", (event) => {
		if (event.target === viewer) {
			closeViewer();
		}
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeViewer();
		}
	});
}
