use tauri::{
    plugin::{Builder, TauriPlugin},
    Runtime,
};

#[tauri::command]
fn launch_exec() {}

#[tauri::command]
async fn init<R: Runtime>() -> TauriPlugin<R> {
    Builder::new("launch")
        .invoke_handler(tauri::generate_handler![launch_exec])
        .build()
}
