# Heatwave Impact on European Electricity Grids


Please visit our [webpage](https://emliang.github.io/HEAT-GRID/webpage/) for a more detailed view


<!-- ## Table of Contents
- [Heatwave Impact on European Electricity Grids](#heatwave-impact-on-european-electricity-grids)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Package Requirements](#package-requirements)
  - [Datasets Requirements](#datasets-requirements)
  - [Methodology](#methodology)
  - [Demos](#demos)
  - [License](#license) -->

## Overview
This code repository contains the implementation and analysis for the study of [**HEATWAVE**](https://climate.copernicus.eu/heatwaves-brief-introduction) effects on European electricity grids. As climate change increases the frequency, intensity, and duration of heatwaves, it is crucial to understand their impact on electricity grids to enhance societal security and resilience.

<center>
<figure>
  <img src="webpage/images/temperature.png" width="700" />
  <figcaption>European air temperature anomalies (<a href="https://climate.copernicus.eu/european-heatwave-july-2023-longer-term-context">source</a>)</figcaption>
</figure>
</center>

## Package Requirements
- Python packages: See [requirements.txt](/requirements.txt)
- Solver requirement: IPOPT 3.14.16 ([Installation Guide](https://coin-or.github.io/Ipopt/INSTALL.html))

## Datasets Requirements
The following table lists the key data sources used in this study:

| Data | Description |
|------|-------------|
| [PyPSA-Eur](https://pypsa-eur.readthedocs.io/) | Open-source dataset of European transmission network |
| [ERA5](https://cds.climate.copernicus.eu/datasets/reanalysis-era5-pressure-levels?tab=overview) | Historical hourly global climate data from ECMWF reanalysis |
| [C3S](https://cds.climate.copernicus.eu/datasets/sis-energy-derived-projections?tab=overview) | Future reference climate data from C3S Energy operational service |
| [ENTSO-E](https://www.entsoe.eu/data/power-stats/) | Historical hourly country-level power demand data |
| [Demand.ninja](https://demand.ninja/) | Future weather-dependent energy demand models |
| [Atlite](https://github.com/PyPSA/atlite) | Open-source model for renewable generation calculation |

## Methodology
![Methodology Framework](webpage/images/Framework_2025.png)

The methodology employed in this study includes the following key components:

1. **Future Heatwave Projection**
   - Generates projected heatwave events from 2025 to 2050
   - Based on historical heatwaves from 2019 and 2022

2. **Future Demand Modeling**
   - Utilizes [Demand.ninja](https://demand.ninja/)
   - Models power demand considering weather conditions and annual growth

3. **Renewable Generation**
   - Leverages [Atlite](https://github.com/PyPSA/atlite) framework
   - Calculates renewable generation based on weather conditions

4. **Conductor Thermal Modeling**
   - Analyzes impact of elevated temperatures on conductor properties
   - Evaluates effects on thermal limits

5. **Multi-Segment Modeling**
   - Models transmission lines at segmented levels
   - Identifies localized stress points and potential bottlenecks

6. **Optimal Power Flow Analysis**
   - Integrates all components for grid simulation
   - Reveals capacity bottlenecks and load shedding regions

## Demos
The code contains the following [demos](/demos/) for the Methodology:

1. Heatwave generation based on morphing approach
2. Demand calibration based on demand.ninja
3. Heat balance equation calculation and visualization
4. OPF solving by IPOPT with Pyomo-based modeling
5. A country-level analysis based on the proposed methodology

## License
CC-BY-4.0


