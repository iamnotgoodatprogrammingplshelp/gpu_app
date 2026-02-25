C++ GPU Viewer

A simple C++ command-line tool that displays information about the system’s GPU.

Description

GPU Viewer detects the installed graphics card and prints basic details such as:

GPU Name

Vendor

Driver Version

Total VRAM

The project is written in modern C++ and is designed to be lightweight and easy to extend.

Requirements

C++17 or newer

GCC / Clang / MSVC

CMake (optional but recommended)

Build
Using CMake
mkdir build
cd build
cmake ..
cmake --build .
Manual Compile (example)
g++ -std=c++17 src/main.cpp -o gpuviewer
Usage

Run the executable:

./gpuviewer

Example output:

GPU Name: NVIDIA GeForce RTX 4070
Vendor: NVIDIA
Driver Version: 551.23
Total VRAM: 12288 MB
Project Structure
gpu-viewer/
│
├── src/
│   └── main.cpp
│
└── README.md
