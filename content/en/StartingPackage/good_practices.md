---
title: Good practices in the lab room.
description: ''
position: 3
category: Polariton Lab
menuTitle: Good practices
---

## Lasers

In the lab rooms we use several lasers between 780nm and 860nm (NIR). These lasers are pumped by Coherent's Verdi laser shreding green light and can be monitored with their respective driver. Below we give an exhausitve explanation of the procedure you must follow between the moment you arrive un the lab room and the beginning of your experiments  

### Turn on pump lasers.

    1. Turn the key on the "on" position and wait until the current seeking displayed on the screen of the pump laser controller stabilize around a value.

    2. Press the button power level 1. The power value displayed on the screen of the controller represent the optical power the laser should provide. You can change it by turning the potentiometer on the controller. Depending on the laser you're using (V10 or V18) make sure this power setting does not exceed the maximum output power of the laser. 

    3. Press the buton "shutter" to open the shutter. Now you should see green laser light outcoming the cavity.




### Turn off pump lasers.

    1. Make sure the power value displayed on the controler screen is not set to his maximum value. In this case, lower the power at least 2W under the maximum value.  

    2. Press the button power level 1 to stop the cavity from lasing.   

    3. Close the shutter.  

    4. Wait for the current displayed on the screen to decrease and stabilize and then turn the key on the "off" position.

<alert type="warning">
Don't forget to turn of the pump lasers when you're done.
</alert>

### Monitoring the lasers

To get the best performance of your laser you must make sure it is properly aligned. To do so, use a powermeter at the laser output and maximise the optical power by using the appropriate mirrors screws.

A laser properly aligned should provide your the best optical output power and stability both in intensity and frequency. 
Each laser of the lab room has is own driver that you need to turn on if you want to monitor your laser. 

### Chiller 

Any laser in the lab room is water-cooled by a chiller. If the cooling is not properly done the laser can stop working and eventually break. As a consequence you must make sure there is always **dry-water** in the chiller. Usually we refill it every week/two weeks. If you see a water leak coming out from the chiller immediately turn the laser off and fix the leak (enjoy).
<alert type="warning">
Only dry water can be used in the chiller.
</alert>

## Polariton room peculiarities.
### Lasers

Matisse : monitored localy from the computer with the software Matisse Commander  
M2 : monitored through internet by entering the IP adress 192.168.1.213 in the searching bar (works only if your laptop is on the sub-network of the lab room)  
### Spectrometer

In the polariton lab room we use gratings spectrometer to make dispersion measurments. The principle scheme is presented just below.

<article-image src="StartingPackage/tools/spectro_grating.png" alt="Transit folder" size="100" :center="true"></article-image>

For a good use of the spectrometer the most important point is to make the Fourier Transform of your beam at the entry of the spectrometer exactly where the slit is located. Then the two parabolic mirrors inside the spectometer make the image of the reciprocal space on the output camera. As you can see on the scheme, a diffraction grating is placed just before the camera in order to spatially separate the photons of differents energies. This final grating can be changed to get different dispersive capacitiese. The smaller is the grating step the more it is dispersive.
#### Optical alignment

To use the whole sensor of the output camera you should use the right lense to match the numerical aperture of the spectrometer. 














