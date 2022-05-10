#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod launcher_plugin;

fn main() {
  launcher_plugin::print_log();

  tauri::Builder::default()
    .plugin(launcher_plugin::init())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
