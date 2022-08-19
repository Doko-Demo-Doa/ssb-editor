use tauri::{Menu, MenuItem};

pub struct MainMenu {}

impl MainMenu {
    pub fn init_menu() -> Menu {
        return Menu::new()
            .add_native_item(MenuItem::Separator)
            .add_native_item(MenuItem::Hide)
            .add_native_item(MenuItem::HideOthers)
            .add_native_item(MenuItem::ShowAll)
            .add_native_item(MenuItem::Separator)
            .add_native_item(MenuItem::Quit);
    }
}
