# gpu_app
gpu-viewer-project/
│
├── backend/                        <-- The C++ Native Library
│   ├── CMakeLists.txt              (Tells CMake how to build the .dll/.so)
│   ├── include/
│   │   └── gpu_backend.h           (C++ header defining your export functions)
│   └── src/
│       └── gpu_backend.cpp         (C++ source code with NVML/ADL logic)
│
└── frontend/                       <-- The Java GUI Application
    ├── pom.xml                     (Maven config containing JNA & JavaFX dependencies)
    └── src/
        └── main/
            ├── java/
            │   └── com/
            │       └── gpuviewer/
            │           ├── app/
            │           │   └── GpuViewerApp.java    (Your JavaFX GUI code)
            │           └── nativebridge/
            │               └── GpuBackend.java      (The JNA interface)
            │
            └── resources/          <-- Where compiled native files and UI assets go
                ├── styles.css                       (Optional: JavaFX styling)
                └── win32-x86-64/                    (Standard JNA folder for Windows 64-bit)
                    └── gpu_backend.dll              (The COMPILED C++ library goes here!)
