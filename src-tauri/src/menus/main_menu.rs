use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

pub struct MainMenu {}

impl MainMenu {
    pub fn init_menu() -> Menu {
        let open = CustomMenuItem::new("open".to_string(), "Open");
        let file_menu = Submenu::new("File", Menu::new().add_item(open));

        return Menu::new()
            .add_submenu(file_menu)
            .add_native_item(MenuItem::Separator)
            .add_native_item(MenuItem::Quit);
    }
}
