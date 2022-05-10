use notify_rust::*;

/**
 * Launch specific program.
 */
use tauri::{
    plugin::{Builder, TauriPlugin},
    Runtime,
};

#[tauri::command]
fn launch_exec() {
    println!("Launching...");

    Notification::new()
        .summary("Firefox News")
        .body("This will almost look like a real firefox notification.")
        .icon("firefox")
        .show();
}

#[tauri::command]
pub fn print_log() {
    println!("Testing...");
}

#[tauri::command]
pub fn init<R: Runtime>() -> TauriPlugin<R> {
    Builder::new("launch")
        .invoke_handler(tauri::generate_handler![launch_exec, print_log])
        .build()
}
