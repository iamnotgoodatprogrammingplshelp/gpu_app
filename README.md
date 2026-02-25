C++ GPU Viewer

A lightweight C++ application that detects and displays detailed GPU information using system APIs.
Designed for developers who need a fast and minimal hardware inspection tool.

Features

Detects installed GPU(s)

Displays:

GPU name

Vendor

Driver version

Total VRAM

Available VRAM

GPU temperature (if supported)

Cross-platform architecture (platform-specific backends)

Clean CLI interface

Modular design for easy extension

Supported Platforms

Windows (WMI / DXGI backend)

Linux (NVML / lspci backend)

macOS (Metal / system_profiler backend)

Requirements
Compiler

C++17 or newer

GCC 9+ / Clang 10+ / MSVC 2019+

Optional GPU SDKs

Depending on your platform:

NVIDIA: CUDA Toolkit (for NVML)

AMD: ROCm (optional extensions)

DirectX SDK (Windows)

Project Structure
gpu-viewer/
│
├── include/
│   ├── GPUInfo.h
│   └── PlatformBackend.h
│
├── src/
│   ├── main.cpp
│   ├── GPUInfo.cpp
│   ├── WindowsBackend.cpp
│   ├── LinuxBackend.cpp
│   └── MacBackend.cpp
│
├── CMakeLists.txt
└── README.md
Build Instructions
Using CMake (Recommended)
mkdir build
cd build
cmake ..
cmake --build .
Manual Compile (Example Linux)
g++ -std=c++17 src/*.cpp -o gpuviewer
Usage

Run the executable:

./gpuviewer

Example Output:

Detected GPU: NVIDIA GeForce RTX 4070
Vendor: NVIDIA
Driver Version: 551.23
Total VRAM: 12288 MB
Available VRAM: 10234 MB
Temperature: 54 °C
Architecture Overview

The project uses a backend abstraction model:

                +----------------+
                |    GPUInfo     |
                +----------------+
                         |
        +----------------+----------------+
        |                                 |
 WindowsBackend                 LinuxBackend / MacBackend

Each backend implements a common interface:

class PlatformBackend {
public:
    virtual GPUInfo getGPUInfo() = 0;
    virtual ~PlatformBackend() = default;
};

This allows clean platform separation.

Extending the Project

You can:

Add OpenGL / Vulkan detection

Add real-time monitoring mode

Export results as JSON

Add GUI using Qt or ImGui

Add multi-GPU support

Future Improvements

Real-time GPU usage monitoring

Power consumption reporting

Cross-platform GUI

Logging system

Unit tests
