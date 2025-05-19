# Heatwave Impact on European Electricity Grids
<!-- [toc] -->


## Overview
This code repository contains the implementation and analysis for the study of [**<font color="red">HEATWAVE</font>**
](https://climate.copernicus.eu/heatwaves-brief-introduction) effects on European electricity grids. As climate change increases the frequency, intensity, and duration of heatwaves, it is crucial to understand their impact on electricity grids to enhance societal security and resilience.

<center>
<figure>
  <img src="/images/temperature.png" width="700" />
  <figcaption>European air temperature anomalies (<a href="https://climate.copernicus.eu/european-heatwave-july-2023-longer-term-context">source</a>)</figcaption>
</figure>
</center>




## Package Requirements
- The code requires Python packages in [requirements.txt](/requirements.txt)
- Solver requirement: IPOPT 3.14.16 (https://coin-or.github.io/Ipopt/INSTALL.html)





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
![Alt text](/images/framework.png)
The methodology employed in this study includes the following key components:

- **Future Heatwave Projection:** It generates projected heatwave events from 2025 to 2050 based on historical heatwaves from 2019 and 2022.
- **Future Demand Modeling:** It utilizes [Demand.ninja](https://demand.ninja/) to model power demand considering the weather condition and annual growth.
- **Renewable Generation:** It leverages existing frameworks from [Atlite](https://github.com/PyPSA/atlite) to calculate renewable generation given weather conditions.
- **Conductor Thermal Modeling:** It analyzes the impact of elevated temperatures on conductor physical properties and their effects on thermal limits.
- **Multi-Segment Modeling:** It models the transmission line at segmented levels to identify localized stress points and potential bottlenecks.
- **Optimal Power Flow Analysis:** It integrates these components to simulate the grid's response under thermal and demand stresses, revealing potential capacity bottlenecks and load shedding regions.






## Demos
The code contains the following [demos](/demos/) for the Methodology:
1. Heatwave generation based on morphing approach
2. Demand calibration based on demand.ninja
3. Heat balance equation calculation and visualization
4. OPF solving by IPOPT with Pyomo-based modeling
5. A country-level analysis based on the proposed methodology

## Liscence
CC-BY-4.0


