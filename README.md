# Mechatronics Project Lab

Welcome to the **Mechatronics Project Lab** repository! This open-source monorepo hosts the complete design, hardware engineering, electronics schematics, embedded firmware, high-level control software, and web documentation for a custom **7-DOF Robotic Arm**.

## 🚀 Overview

The 7-DOF Robotic Arm is engineered for precision control, high torque density, and accessibility:
- **Hardware:** Features custom 3D-printed compound planetary gearboxes and structural components designed for FDM printers like the Creality K1.
- **Electronics:** Powered by robust motor drivers and an Arduino Mega with a RAMPS 1.6 shield.
- **Firmware:** Real-time motor step execution, endstop monitoring, and low-level motion primitives.
- **Software:** High-level kinematics (forward & inverse kinematics), trajectory planning, and system orchestration running on a Raspberry Pi 5 using Python.
- **Web:** Public documentation and project portal built with Docusaurus.

---

## 📁 Monorepo Structure

```text
Mechatronics-Project-Lab/
├── hardware/              # CAD models, assembly files, and 3D printable parts (STL/STEP)
│   ├── assemblies/        # Assembly models and CAD sources (.step, .f3d, etc.)
│   └── parts_printed/     # Printable 3D parts (.stl, .3mf) designed for Creality K1
├── electronics/           # Electrical schematics and wiring diagrams
│   ├── schematics/        # Circuit diagrams and PCB designs
│   └── wiring/            # Wiring harnesses and pinout diagrams
├── firmware/              # Low-level micro-controller code
│   └── arduino_mega_ramps/# Arduino Mega 2560 + RAMPS 1.6 control firmware
├── software/              # High-level control & kinematics engine
│   └── pi5_control/       # Python 3 kinematics and control suite for Raspberry Pi 5
├── web/                   # Web documentation site source code
└── .github/
    └── workflows/         # CI/CD deployment and release automation workflows
```

---

## 📚 Subfolder Directory Guides

- [`/hardware/`](hardware/README.md): Details on 3D-printed compound planetary gearboxes, STL files, and CAD assemblies.
- [`/electronics/`](electronics/README.md): Wiring charts and schematic diagrams for power distribution and motor drivers.
- [`/firmware/`](firmware/README.md): Low-level C++/Arduino firmware for Arduino Mega + RAMPS 1.6 shield.
- [`/software/`](software/README.md): High-level Python control software for Raspberry Pi 5 kinematics calculation.
- [`/web/`](web/README.md): Source files for the project documentation site.

---

## 🛠️ Getting Started

Refer to the individual README files in each directory for specific setup instructions, hardware requirements, software dependencies, and build steps.

