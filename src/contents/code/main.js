function addDesktop () {
  workspace.desktops++;
}

function removeDesktop() {
  workspace.desktops--;
}

if (registerShortcut) {
  registerShortcut(
    "Add a desktop",
    "Add a new virtual desktop.",
    "Alt+Insert",
    addDesktop
  );

  registerShortcut(
    "Remove last desktop",
    "Remove last virtual desktop.",
    "Alt+Delete",
    removeDesktop
  );
}