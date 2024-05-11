type MenuItem = {
  menuItems: { [key: string]: MenuItem };
  menus: {
    [key: string]: MenuItem;
    byName: (name: string) => MenuItem;
  };
  class: () => string;
  click: () => void;
};

declare const Application: (name: string) => {
  activate: () => void;
  processes: {
    name: () => string[];
    byName: (name: string) => {
      menuBars: MenuItem[];
    };
  };
};
