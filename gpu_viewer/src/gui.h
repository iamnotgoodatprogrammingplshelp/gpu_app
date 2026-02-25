#pragma once

struct GpuStats {
    int temperature;       
    int loadPercentage;    
    int vramUsedMB;     
    int vramTotalMB;       
    int coreClockMHz;      
};

void RenderGpuWindow(const GpuStats& stats);
