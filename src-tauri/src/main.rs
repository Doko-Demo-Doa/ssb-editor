#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::api::dialog;

mod launcher_plugin;
mod menus;

fn main() {
    launcher_plugin::print_log();

    tauri::Builder::default()
        .menu(menus::main_menu::MainMenu::init_menu())
        .on_menu_event(|event| match event.menu_item_id() {
            "open" => {
                dialog::FileDialogBuilder::default()
                    .add_filter("Subtitle files", &["ssb", "ssa", "ass", "png"])
                    .pick_file(|path_buf| match path_buf {
                        Some(p) => {}
                        _ => {}
                    });
            }
            _ => {}
        })
        .plugin(launcher_plugin::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
