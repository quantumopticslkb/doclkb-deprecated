---
title: General
description: 'Useful papers and tools'
position: 2
category: Rubidium Lab
---

## Bibliogrpahy

A page to find relevant papers to understand what you do. All of the references (unless if otherwise stated) are available on [**Zotero**](/StartingPackage/Tools#zotero).

### Bogoliubov theory

In this section, we will give useful references to treat the cubic hamiltonian of the non linear propagation in a $\chi^{(3)}$ medium.\
These paper describe how to treat your system in second quantized formalism, using field operators ($\hat{a}$ and $\hat{a}^\dagger$). If you are not familiarized with these tools, we strongly suggest you take a look at any serious quantum mechanics book (such as *Quantum Field Theory for the gifted amateur* by Lancaster and Blundell).

### Index measurement

### Temperature measurement

### Atomic numbers

## General spirit of the experiments

The idea you always need to keep in mind is that you are doing a **science experiment**. You need to be able to **control everything that you do**, and **know at every moment what are the relevant parameters** of your experiment. In that sense, we strongly suggest that all your experiment be controlled through a Python code that is on your computer (and of course kept up to date on the team's [GitHub](StartingPackage/Tools#github)). This will allow you to reproduce easily your results and encourage you to store your data systematically in an orderly fashion. The goal is very simple : anybody with your lab book should be able to replicate your setup. The easier this is to do, the stronger your results will be. Furthermore, this will help you to be much more systematical in your data acquisition (namely changing only one thing at a time).

### Control

#### Python code structure
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

#### A library for each instrument

You will hereafter find a list of Python libraries to control almost all of the equipment you will find in the lab.