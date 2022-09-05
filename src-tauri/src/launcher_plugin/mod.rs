use std::process::Command;

/**
 * Launch specific program.
 */
use tauri::{
    plugin::{Builder, TauriPlugin},
    Runtime,
};

#[tauri::command]
fn launch_exec() {
    let ouput = Command::new("open")
        .arg("/Applications/Safari.app")
        .spawn()
        .expect("Cannot open program");
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
