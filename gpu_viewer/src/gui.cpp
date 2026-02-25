#include "gui.h"
#include "imgui.h"
#include <cstdio>  

void RenderGpuWindow(const GpuStats& stats) {
    ImGui::Begin("GPU Monitor", nullptr, ImGuiWindowFlags_AlwaysAutoResize);

    ImGui::Text("Core Temperature: %d C", stats.temperature);
    ImGui::Text("Core Clock Speed: %d MHz", stats.coreClockMHz);
    
    ImGui::Separator(); 
    
    ImGui::Text("GPU Core Load:");
    float loadFraction = stats.loadPercentage / 100.0f; 
  
    char loadOverlay[32];
    snprintf(loadOverlay, sizeof(loadOverlay), "%d%%", stats.loadPercentage);
    
    
    ImGui::ProgressBar(loadFraction, ImVec2(-1.0f, 0.0f), loadOverlay);

    ImGui::Spacing(); 
  
    ImGui::Text("VRAM Usage: %d MB / %d MB", stats.vramUsedMB, stats.vramTotalMB);
    
    float vramFraction = 0.0f;
    if (stats.vramTotalMB > 0) {
         vramFraction = (float)stats.vramUsedMB / (float)stats.vramTotalMB;
    }
    
    ImGui::ProgressBar(vramFraction, ImVec2(-1.0f, 0.0f));

    ImGui::End();
}
