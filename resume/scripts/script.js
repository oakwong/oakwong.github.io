document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".projectTitle");
    const tooltip = document.getElementById("tooltip");
    const tooltipImg = document.getElementById("tooltip-img");
    const tooltipTitle = document.getElementById("tooltip-title");

    links.forEach(link => {
        link.addEventListener("mouseenter", (event) => {
            const title = link.getAttribute("data-title"); // 可以替换为其他属性名称
            const thumbnail = link.getAttribute("data-thumbnail"); // 可以替换为其他属性名称

            tooltipTitle.textContent = title;
            tooltipImg.src = thumbnail;
            tooltip.style.display = "block";

            const updateTooltipPosition = (e) => {
                tooltip.style.left = e.pageX + 10 + "px"; // 可以根据需要调整偏移量
                tooltip.style.top = e.pageY + 10 + "px"; // 可以根据需要调整偏移量
            };

            updateTooltipPosition(event);

            link.addEventListener("mousemove", updateTooltipPosition);
            link.addEventListener("mouseleave", () => {
                tooltip.style.display = "none";
                link.removeEventListener("mousemove", updateTooltipPosition);
            });
        });
    });
});





