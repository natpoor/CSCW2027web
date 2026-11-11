const container = document.querySelector(".container");
const allMenus = Array.from(document.querySelectorAll("details.menu"));

const closeMenus = except => {
  allMenus.forEach(menu => {
    if (menu !== except) {
      menu.open = false;
    }
  });
};

// Native details/summary controls work without JavaScript. These listeners only
// add familiar menu conveniences when scripting is available.
document.addEventListener("click", event => {
  closeMenus(event.target.closest("details.menu"));
});

window.addEventListener("resize", () => closeMenus());

allMenus.forEach(menu => {
  const trigger = menu.querySelector(":scope > .menu__trigger");
  const dropdown = menu.querySelector(":scope > .menu__dropdown");

  if (!trigger || !dropdown) {
    return;
  }

  trigger.setAttribute("aria-expanded", String(menu.open));

  menu.addEventListener("toggle", () => {
    trigger.setAttribute("aria-expanded", String(menu.open));

    if (!menu.open) {
      dropdown.style.left = "";
      dropdown.style.right = "";
      return;
    }

    closeMenus(menu);

    if (
      container &&
      dropdown.getBoundingClientRect().right >
        container.getBoundingClientRect().right
    ) {
      dropdown.style.left = "auto";
      dropdown.style.right = 0;
    }
  });

  menu.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      trigger.focus();
    }
  });
});
