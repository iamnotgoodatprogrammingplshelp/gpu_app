# Consciousness Monitor GUI



## Overview
The **Consciousness Monitor** is a C++ graphical user interface (GUI) application built using the Qt framework. It serves as a simulation of human-like internal state monitoring. The application visualizes simulated biological and cognitive processes, including a baseline "heartbeat," autonomous thought generation, energy management, and physiological reactions to sudden external stimuli.

## Features
* **Real-Time Vitals Simulation:** Utilizes Qt's event loop and `QTimer` to mimic a biological heartbeat, generating automated internal state logs (e.g., "Consolidating short-term memory...", "Regulating internal temperature...").
* **Dynamic Stimulus Reaction:** Features an interactive "Apply Stimulus" mechanism. When triggered, the system simulates a stress response: the logging rate increases, the text turns red to indicate urgency, and energy levels deplete rapidly.
* **Automated Energy Management:** Implements a background recovery system using `QProgressBar`. Energy gradually restores over time when the system returns to its baseline resting state.
* **Clean Architecture:** Built using standard Qt object-oriented paradigms, separating the main window logic (`Gui`) from the monitoring component (`GuiMonitor`).

## Prerequisites
* **C++ Compiler:** GCC, Clang, or MSVC (supporting C++11 or higher).
* **Qt Framework:** Qt 5 or Qt 6 (with the `Widgets` module installed).
* **Build System:** `qmake` or `CMake`.

## Project Structure
* `main.cpp` - Application entry point and theme configuration.
* `gui.h` / `gui.cpp` - Main window initialization and layout structure.
* `guimonitor.h` / `guimonitor.cpp` - Core simulation logic, UI updates, and timer management.

## Build Instructions

### Using qmake
1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/consciousness-monitor.git](https://github.com/yourusername/consciousness-monitor.git)
   cd consciousness-monitor
2. Generate the Makefile:
    ```Bash
    qmake
3. Compile the application:
    ```bash
    make  # Use 'nmake' or 'mingw32-make' on Windows depending on your toolchain
4. run the executable:
    ```Bash
    ./ConsciousnessMonitor  # Exact executable name depends on your .pro file
   
   anyone who wants to contribute can 
