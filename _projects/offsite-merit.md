---
title: "A cyber-physical system to improve production monitoring, planning and scheduling in off-site construction environments"
collection: portfolio
year: 2026

tech_stack:
  - "Coding: Python, Microsoft PowerApp, Power Automate"
  - "Libraries: Pytorch, Pandas, Scikit-learn"
  - "API: REST"
  - "Frameworks: Django, React"
  - "Protocols: Wi-Fi, TCP"
  - "Databases: Microsoft SQL Server"

description: >
  Off-site construction offers a novel approach that moves the core of the building process from the jobsite into controlled manufacturing environments to improve project planning and overall productivity. However, construction factories serving as a critical bridge between Building Information Models and site installation may suffer from cost overruns due to the non-repetitive nature of building modules. In this scenario, lean principles are utterly inadequate to monitor manufacturing operations and thus are complemented or even replaced with Industry 4.0 enabling technologies. This work presents a cyber-physical system to improve production scheduling, monitoring and planning of fast-paced and non-standardized off-site environments. The proposed system digitizes manufacturing operations by acquiring machine working times, product design features, and process-driven events via a in-house built Manufacturing Execution System (MES). While the first two multidimensional datastreams are processed by a cyber layer that benchmarks machine learning algorithms to forecast production working times, MES data are pivotal to evaluate production efficiency as well as monitor shipping out events. These outputs flows into a native dashboard (Django + React) that supports manufacturing stakeholders in the following production areas: 
  1- Scheduling: send production run list to machine. The TCP protocol is used to send data to machines and integrate with the MES
  2- Monitoring: evaluates the efficiency of production resources, workforce as well as material usages and production cost.
  3- Planning: forecast products production times before physical execution. The Random Forest is the most performing algorithm on the collected dataset, achieving a Median Absolute Percentage Error equal to 10.84%  and a percentage residual error of 0.02% on a production order of 420 frames.

figures:
  - "/images/projects/OFFSITE/framework_ktp.jpg"
  - "/images/projects/OFFSITE/acquisition_layer.png"
  - "/images/projects/OFFSITE/merit.png"
  - "/images/projects/OFFSITE/dash1.png"
  - "/images/projects/OFFSITE/dash2.png"
  - "/images/projects/OFFSITE/mes1.png"
  - "/images/projects/OFFSITE/mes2.png"
  - "/images/projects/OFFSITE/mes3.png"
  - "/images/projects/OFFSITE/mes4.png"
  - "/images/projects/OFFSITE/mes5.png"
  - "/images/projects/OFFSITE/mes6.png"
  - "/images/projects/OFFSITE/mes7.png"
  - "/images/projects/OFFSITE/spearman_correlation.png"
  - "/images/projects/OFFSITE/bench.png"
  - "/images/projects/OFFSITE/abs_residuals.png"
---
