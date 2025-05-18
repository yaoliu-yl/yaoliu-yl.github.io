document.addEventListener('DOMContentLoaded', function () {
        const expandableImages = document.querySelectorAll('.expandable-image');

        expandableImages.forEach(function (img) {
                img.addEventListener('click', function () {
                        const imageContainer = this.closest('.publication-image-container');

                        if (imageContainer) {
                                imageContainer.classList.toggle('expanded');
                        }
                });
        });
});
