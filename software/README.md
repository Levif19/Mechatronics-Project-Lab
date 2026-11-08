# Software - High-Level Control & Kinematics Engine

This directory contains high-level control software, motion planning engines, and joint kinematics solvers for the 7-DOF robotic arm.

## 🧠 Software Architecture

- **Host Platform:** Raspberry Pi 5.
- **Language:** Python 3.
- **Kinematics Engine:** Implements Forward Kinematics (FK), Inverse Kinematics (IK), differential kinematics, trajectory generation, and serial protocol communication to send joint angles to the Arduino Mega low-level controller.

## 📂 Subdirectories

- [`pi5_control/`](pi5_control/): Python source packages, kinematics algorithms, motion controllers, and hardware communication scripts for the Raspberry Pi 5.
