---
title: Polariton room experiment tutos
description: ''
position: 2
category: Polariton Lab
---

## Helium
### Service Basse Températures (Helium staff)

| Phones | |
| --- | --- |
| Main | +33 1 44 27 44 28 |
| Boss | +33 6 18 09 29 40 |

<alert type="warning">Order your dewar 2 days in advance</alert>

Online orders infos:
- link: xxx.xxx.x.x
- id/pass
- room: 12-13 311


### WARNINGS
<alert type="danger">An excess pressure can destroy the turbo pump. It should always be activated with the Pascal pump working and isolated from the cryostat during the warming up process.</alert>
<alert type="danger">The dewar contains several safety valves which are unlocked when P>0.5 mbar. Avoid to reach this threshold in order to avoid a drastic change in the pressure of your system.</alert>

### Open-flow cryostat cooling procedure

---

1. **Pumping of the cryostat**
    1. Open the inlet valve of the cryostat
    2. Launch the Pascal vacuum pump: the pressure should reach ~ **5x10^-2 mbar**
    3. Launch the turbo pump (0 -> 25000 rpm): final pressure ~ **9x10^-4 mbar**
    <alert type="danger">Do not launch the turbo pump if the vacuum is greater than 5x10^-2</alert>

2. **Injection of the transfer cane into the dewar**
    1. Close the dewar outlet valve
    2. Connect the Jussieu input to the tranfer cane
    3. Put the transfer cane on the dewar entrance
    4. Tighten the joint in order to lock the transfer cane
        <alert type="danger">The transfer cane doesn't must fall too fast inside the dewar</alert>
    5. Open the dewar inlet valve
    6. Let the transfer cane slides gently against the joint, adjust the tightening to change its speed
        <alert type="danger">The transfer cane speed must be regular to not create ice that would block the circulation</alert>
    7. The dewar pressure MUST increase to 0.5 mbar in order to initiate the helium flow inside the cryostat
        <alert type="danger">Do not let the pressure exceed 0.5 mbar, open the outlet valve to decrease it</alert>  
    8. Reach the bottom of the dewar

3. **Connection to the cryostat**
    1. Insert the cold finger of the transfer cane inside the cryostat 
    2. Launch the motorized circulation and open the flow regulation valve to its maximum
    3. Slightly raise the transfer cane in the dewar
        <alert type="warning">Adjust the dewar position to reduce the pressure in the cryostats if it is greater than 3x10^-3mbar</alert>
    <alert type="success">The cryostat temperature should fall to 3.8K in 5 minutes</alert>

4. **Self-sustained helium circulation**
    <alert type="success">Useful to eliminate the vibrations due to the motorized circulation. The pressure in the dewar should be at least equal to 4mbar in order to feed the helium circulation</alert>
    1. Once the temperature in the cryostat is stabilized, switch off the motorized circulation
    2. Wait again for the temperature stabilization
    3. Close progressively the regulation valve until the temperature icreases again
    4. If needed, cut the Pascal pump

---

### Open-flow cryostat warming up procedure
1. Isolate the cryostat from the Turbo pump by closing ist inlet valve
2. Open the dewar outlet valve 
3. If not already done, switch off the motorized circulation
4. Wait for the temperature to reach T>120K
5. Click on the STOP button of the Turbo pump
6. Wait for 0 rpm
7. Remove the transfer cane cold finger from the cryostat
8. Remove the transfer cane from the dewar (**put gloves**)
9. Close the dewar inlet
10. Unconnect the Jussieu input from the transfer cane
11. Block the Jussieu input

### FAQ 
- **The pressure in the dewar exceeds 0.5 mbar during the experiment**
    1. Open the motorized circulation if closed
    2. Gently open the dewar outlet valve
    3. Let the pressure decrease to ~ 0.4 mbar
    4. Close the outlet valve
    5. Stop again the motorized circulation 

- **The temperature in cryostat is increasing drastically**
    1. Open the motorized circulation AND the flow controller valve if closed
    2. IF the temperature decreases again, wait for T = 4K then closes the circulation again
    3. ELSE do the warming up procedure to put an end to the experiment

- **One of the rubber pipe is broken**
    1. Close the Jussieu valve in the Rubiroom
    2. Open the dewar manual safety valve 
    3. Do the warming up procedure

- **The temperature doesn't reach 4K after the cooling process**
    1. You need to redo the cooling, do the warming up procedure 



## Close circuit cryostat 

### Vacuum pumping

### Cooling & warming procedure

### Piezo
 

