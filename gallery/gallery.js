const viewer = document.querySelector(".gallery-viewer");
const viewerImage = viewer.querySelector(".gallery-viewer-image");

for (const thumbnail of document.querySelectorAll(".gallery-thumb")) {
	const image = thumbnail.querySelector("img");

	thumbnail.addEventListener("click", () => {
		viewerImage.src = image.currentSrc || image.src;
		viewerImage.alt = image.alt;
		viewer.showModal();
	});
}

viewer.addEventListener("click", () => viewer.close());
