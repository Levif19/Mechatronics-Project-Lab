# Firmware - Low-Level Controller

This directory contains embedded firmware for controlling the stepper motors, joint encoders, and endstops of the 7-DOF robotic arm.

## ⚡ Hardware Architecture

- **Microcontroller:** Arduino Mega 2560 board.
- **Shield:** RAMPS 1.6 control shield with modular stepper driver modules (A4988 / DRV8825 / TMC2209).
- **Communication:** Serial communication protocol receiving joint movement commands and trajectory stream data from the Raspberry Pi 5 software host.

## 📂 Subdirectories

- [`arduino_mega_ramps/`](arduino_mega_ramps/): Firmware source code, PlatformIO configuration, and Arduino sketch files for RAMPS 1.6 motor driver control.
