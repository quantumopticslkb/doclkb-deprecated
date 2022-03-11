---
title: General
description: 'Useful papers and tools'
position: 2
category: Rubidium Lab
---
## Introduction
To have a better understanding of propagating photon fluids in hot rubidium vapors the The tools and methods used to generate and characterise  are introduced. An important part is dedicated to presenting the method used to measure the vapor nonlinear refractive index. 

## Bibliogrpahy

A page to find relevant papers to understand what you do. All of the references (unless if otherwise stated) are available on [**Zotero**](/StartingPackage/Tools#zotero).

### Bogoliubov theory

In this section, we will give useful references to treat the cubic hamiltonian of the non linear propagation in a $\chi^{(3)}$ medium.\
These paper describe how to treat your system in second quantized formalism, using field operators ($\hat{a}$ and $\hat{a}^\dagger$). If you are not familiarized with these tools, we strongly suggest you take a look at any serious quantum mechanics book (such as *Quantum Field Theory for the gifted amateur* by Lancaster and Blundell).

### Index measurement
The strength of the photon-photon interaction ralated to the third-order susceptibility $chi^{(3)}$ which links to nonlinear refractive index n2.  Although methods have been proposed by other groups such as the z-scan and the ring image in the far field,  all these ways exist some limitations and disadvantages. So it would be important to find an easy and precise way to measure this index. Tangui and Murad proposed a method based on wavefront measurement using interferometric techniques. The general idea is to place the non-linear medium in one arm of an interferometer (typically a Mach–Zehnder interferometer) and use phase retrieval algorithm to reconstruct the accumulated phase from the interferogram. You will find more details in the [arxiv](https://arxiv.org/abs/2202.05764).
### Temperature measurement
Temoperature is a key parameter controls not only the atoms velocity,  the filling and transit rates but transport length scales and the atomic density. Our basic idea is fitting the transmissioin spectrum of a low power beam pass through the vapour cell with the saturated absorption spectrum. I would recommend you to look at the Quentin Fontain's thesis to find more.
### Atomic structure
#### Fine structure − LS coupling
The structure of the rubidium D-line arises from the coupling between the angular
orbital momentum L of the valence electron and its spin angular momentum S. The total
electron angular momentum J is then defined by: $J = L + S$; the associated quantum
number J lies in the range $|L − S|<J<L + S$.
```markdown
|     Rb       |   L   |  S  |    J     |
| -------------|-------|-----|----------|
| ground state |   0   | 1/2 |    1/2   |
| excited state|   1   | 1/2 | 1/2, 3/2 |
```
#### Hyperfine structure − IJ coupling
We can go one step further by introducing the atomic hyperfine structure, which arises
from the coupling between the total electron angular momentum, J, and the nuclear spin
angular momentum, I. As before, the quantum number F, associated to the atomic angular
momentum $F = J+I $, lies in between $|J −I| and J +I$.
```markdown
|     Rb87     |    I    |     J    |       F     |
| -------------|---------|----------|-------------|
| ground state |   3/2   |    1/2   |     1, 2    |    
|      D1      |   3/2   |    1/2   |     1, 2    | 
|      D2      |   3/2   |    3/2   |  0, 1, 2, 3 |
```
```markdown
|     Rb85     |    I    |     J    |       F     |
| -------------|---------|----------|-------------|
| ground state |   5/2   |    1/2   |     2, 3    |    
|      D1      |   5/2   |    1/2   |     2, 3    | 
|      D2      |   5/2   |    3/2   |  1, 2, 3, 4 |
```
## General spirit of the experiments

<<<<<<< HEAD
### Control


=======
The idea you always need to keep in mind is that you are doing a **science experiment**. You need to be able to **control everything that you do**, and **know at every moment what are the relevant parameters** of your experiment. In that sense, we strongly suggest that all your experiment be controlled through a Python code that is on your computer (and of course kept up to date on the team's [GitHub](StartingPackage/Tools#github)). This will allow you to reproduce easily your results and encourage you to store your data systematically in an orderly fashion. The goal is very simple : anybody with your lab book should be able to replicate your setup. The easier this is to do, the stronger your results will be. Furthermore, this will help you to be much more systematical in your data acquisition (namely changing only one thing at a time).

### Control

<<<<<<< HEAD
#### muquans
The lasers can be connected via an Ethernet cable to a computer network. They are identified with IP address and named them with mountain names:  
IP: 192.168.1.107, Name: Shakhdag  
IP: 192.168.1.108, Name: Kapaz  
To control it we use a terminal that remotely drives the laser diode and the optical pump. Power control possible by setting the power of the Erbium Doped Fibre Amplifier (EDFA) to a value between 0 and 2.5 W. 


<alert type="warning">Always turn on the diode before the pump or you will break the laser (and it is not cheap). Also, always switch off the pump before the diode.</alert>
The code to turn on the diode is:
 ```bash
  slm1780_tool Enable_Current_Laser_Diode <on or off>
 ```  
The code to turn on the pump is:
 ```bash
  slm1780_tool edfa_set 1
 ```   
The code to turn off the pump is:  
 ```bash
 slm1780_tool edfa_shutdown
 ```   
  </code-block>

=======
#### **Python code structure**
>>>>>>> 8bb56533bec7bec80047f6852119a09f065a9624
For the code structure, we suggest that you write a class that should contain all of the methods you use to run your experiments. Here is a simple example :
<code-block label="Python" active>

```python
from ScopeInterface import USBArbitraryFG
import EasyPySpin
import numpy as np

class Experiment:
    def __init__(self, afg: USBArbitraryFG, cam: EasyPySpin.VideoCapture) -> None:
        """
        Instantiates an Experiment object 
        :param afg: A USBArbitraryFG instance for the Arbitrary Function Generator
        :param cam: An EasyPySpin.VideoCapture instance for the PointGrey camera
        """
        self.afg = afg
        self.cam = cam
    def close(self):
        """
        A method to release connection to all instruments
        """
        self.afg.close()
        self.cam.release()
```

</code-block>

Here you have an experiment class that will control two instruments :
- An arbitrary function generator (AFG) to control a laser for instance
- A camera
  
The libraries to control both of theses instruments are imported at the begining of the file to be able to properly type the `__init__` method. This `__init__` function tells the class the recipe to build an `Experiment` instance. Here, it only has two attributes which are the AFG and camera objects. This is essentially a virtual representation of your setup.\
The `close` method will simply close the connections to all instruments. When you control remotely instruments, you should always take care to close connections once you're done or else the connection will be blocked for other programms to access the instrument.\
Now you can for instance add a method that will put the AFG in DC mode at a specific voltage and take a picture :
<code-block label="Python" active>
```python
def setAFG_takepic(self, voltage: float, output: int = 1) -> np.ndarray:
    """
    Sets the AFG to a specific voltage and takes a picture
    :param float voltage: DC voltage in volts
    :param int output: AFG port (1 or 2)
    """
    self.afg.dc_offset(ouptut, offset=voltage)
    ret, frame = self.cam.read()
    return frame
```
</code-block>

You can find more examples on the group's [GitHub](https://github.com/Quantum-Optics-LKB).

#### **A library for each instrument**

You will hereafter find a list of Python libraries to control almost all of the equipment you will find in the lab.
<<<<<<< HEAD
>>>>>>> 390212ce1eb25809366eb5c3f909ad9396b418c6
=======

##### Cameras

Hamamatsu : 
>>>>>>> 8bb56533bec7bec80047f6852119a09f065a9624
