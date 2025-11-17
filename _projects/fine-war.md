---
title: "From Sensing to Segmentation: Transformer-Based Worker Activity Recognition for Industrial Assembly"
collection: portfolio
year: 2025

tech_stack:
  - "Coding: Python"
  - "Libraries: PyTorch, Pandas, Numpy"
  - "Protocols: Bluetooth, Wi-Fi"
  - "Ingestion: Node-Red"
  - "Databases: InfluxDB"

description: >
  Human operators still provide strategic, value-added contributions to modern manufacturing systems, despite the widespread adoption of automation. This paper presents a cyber-physical system designed to perform fine-grained Worker Activity Recognition (WAR) and segment manual operations in human-centric assembly environments. The proposed system includes a modular and low-intrusion IoT acquisition layer that digitizes worker movements using Inertial Measurement Units (IMUs) and a radio frequency-based smart glove. While the IMUs track hand and back motion, the glove captures process interactions such as picking and depositing components. These multimodal data streams are processed by a cyber layer that performs time- and frequency-domain feature extraction and feeds the data into a Transformer-based neural network to classify five common assembly tasks. The results are post-processed by a Decision Support System to generate interpretable task segments and provide key performance indicators for industrial supervisors. The system is validated through a real-world deployment involving three workers assembling a vertical centrifugal pump, resulting in over 7 hours of annotated data. The Transformer model achieves an F1-score of 82% on this dataset. Thanks to its unobtrusive sensors, low deployment cost, and robustness to occlusions, the proposed solution offers a practical and scalable approach to enhancing visibility and traceability in manual industrial operations.

figure: "/images/projects/framework_war.jpg"
---
