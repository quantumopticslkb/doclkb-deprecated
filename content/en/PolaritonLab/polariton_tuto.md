---
title: Polariton room experiment tutos
description: ''
position: 3
category: Polariton Lab
---

# Open-flow cryostat cooling procedure

---

1. **Pumping of the cryostat**
    1. Open the inlet valve of the cryostat
    2. Launch the Pascal vacuum pump: the pressure should reach ~ **5x10^-2 mbar**
    3. Launch the turbo pump (0 -> 25000 rpm): final pressure ~ **9x10^-4 mbar**
    <alert type="danger">Do not launch the turbo pump if the vacuum is greater than 5x10^-2</alert>

2. **Injection of the helium rod into the dewar**
    1. Close the dewar outlet valve
    2. Connect the Jussieu pipe to the rod
    3. Put the rod on the dewar entrance
    4. Tighten the joint in order to lock the rod 
        <alert type="danger">The rod doesn't must fall too fast inside the dewar</alert>
    5. Open the dewar inlet valve
    6. Let the rod slides gently against the joint, adjust the tightening to adjust its speed
        <alert type="danger">The rod speed must be regular to not create ice that would block the circulation</alert>
    7. The dewar pressure MUST increase to 5mbar in order to initiate the helium flow inside the cryostat
        <alert type="danger">Do not let the pressure exceed 5mbar, open the outlet valve to decrease it</alert>  
    8. Reach the bottom of the dewar

3. **Connection to the cryostat**
    1. Insert the cold finger of the helium rod inside the cryostat 
    2. Launch the motorized circulation and open the flow regulation valve to its maximum
    3. Slightly raise the helium rod in the dewar
        <alert type="warning">Adjust the dewar position to reduce the pressure in the cryostats if it is greater than 3x10^-3mbar</alert>
    <alert type="success">The cryostat temperature should fall to 3.8K in 5 minutes</alert>

4. **Self-sustained helium circulation**
    <alert type="success">Useful to eliminate the vibrations due to the motorized circulation. The pressure in the dewar should be at least equal to 4mbar in order to feed the helium circulation</alert>
    1. Once the temperature in the cryostat is stabilized, switch off the motorized circulation
    2. Wait again for the temperature stabilization
    3. Close progressively the regulation valve until the temperature icreases again
    4. If needed, cut the Pascal pump
---



# All our good working cavities

| Cavity name | Description | Resonance energy |
| ------ | ----------- | ----------- | 

## Closed circuit cryostat cooling procedure

In the polariton Lab room we also use a closed cycle cryostat made by MyCryoFirm. The advantage of the closed cycle is that we don't need to get Helium every week and that once the cryostat is cold and at vacuum it can stay cold for weeks. On the other hands this brings several complication and constraints on the way we arrange the optical table around the cryostat. This turorial aim at giving a quick presentation of the cryostat and explaining what are the procedures to know to use it from optical alignment to expected cooling performance.

### Optical alignment

*Once the cryostat is closed we don't have access to the optics that are inside. We thus, use piezo-electric transducers to move the each optic along the dimensions of space. Inside the cryostat there are basically two optics :  
    -A condenser to focus the light on the sample  
    -A microscope objective to make the imagery of the sample
Each one is mounted on a 3-axis motor which is designed to be very precisely movable and tolerate vacuum. We list below the procedure to follow in order to make the optical alignement of the optics inside the cryostat 