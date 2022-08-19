#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod launcher_plugin;
mod menus;

fn main() {
    launcher_plugin::print_log();

    tauri::Builder::default()
        .menu(menus::main_menu::MainMenu::init_menu())
        .plugin(launcher_plugin::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
