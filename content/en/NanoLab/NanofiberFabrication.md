---
title: Nanofiber Fabrication
description: 'Experiment notebook'
position: 1
category: Nano lab
---
## Nanofiber profile calculation
<alert type="info"> In order to achieve lossless transmission, the profile of tapered optical nanofiber needs to meet the so-called *adiabatic criterium*. </alert>

## Fabrication

 <alert type="info"> Tapered optical nanofiber is fabricated with "heat and pull" method. </alert>
Producing optical nanofiber requires clean environment and careful fiber cleaning before pulling.
Before the tapering of optical fiber starts, the polymeric jacket needs to be removed over the distance separating the fiber clamps.
Any dusts from the environment fell on to the fiber, the remaining detritus of fiber jacket or grease on fingers left on the fiber will burn when it's brought to the flame and create some defects on the fiber surface during pulling.
Therefore, the pulling system is installed in a box with air-flow.
Clean room gloves (as opposed to standard chemistry protection gloves)
are necessary to avoid contamination by the operator.
The optical fiber is cleaned with a few wipes of isopropanol on lens tissue to remove most of the particles on the surface, followed with a wipe of acetone to dissolve small remaining pieces, and finalized with a wipe of isopropanol to remove the remaining acetone. 
The clean environment can also avoid the dusts attaching to the nanofiber after tapering, which will cause the scattering of light and lower the entire transmission rate.

Then, we mount the cleaned fiber into the v-grooves on the clamps.

A camera continuously monitors the nanofiber from the side.
The focus plane of the camera is adjusted to be on the fiber.
The center of the flame needs to be aligned with the fiber based on the focus plane of the camera.

The transmission is detected with a photodiode, as shown in Fig. \ref{fig:Fiber_tapering_system}, and recorded.
The output signal is normalized to the initial laser power before pulling.

<article-image src="NanoLab/image841.png" alt="Setup" size="80" :center="true"></article-image>

<alert type="warning"> During the pulling, the hot air from the flame will slowly lift the nanofiber since the weight of the fiber region on top of the flame drops.
It is critical because the distance between flame and the fiber becomes larger than the setting.
The temperature of the fiber might not reach the softening point of silica.
The distance between the two transverse stage increases during the pulling process, and this will break the fiber rather than narrowing it.</alert>


