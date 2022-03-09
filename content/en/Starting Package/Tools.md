---
title: Useful tools
description: 'Summary of all the tools available for the team'
position: 1
category: Tutorials
---

## Introduction:
Here you will find informations you need to know about the different tools used by the team to help you in your work. You can finds tutorials for each of them.
The tools : **Mattermost, Notion, Github, Zotero, Arxiv, Overleaf, Mobaxterm, HAL, Orcid**

### Mattermost
##### [mattermost](https://mattermost.com/)
Mattermost is our social network. It will allows you to talk with the other team member, share your data or planified your task.
To be able to connect on the **EQ15B** server you have 2 solutions : be connected on the LKB network or you can use the VPN given by the lab (if you don't have acces to it please contact support@lkb.upmc.fr).

### Notion
##### [Notion](https://www.notion.so/desktop/)
It can be a very powerfull tool if you are an untidy person. **Notion** can be used as a digital lab book that everybody can follow. Moreover, you will quickly realize the versatility of this tool, for example to write your to-do list or to backup your data (but beware of the 5 Mo).

### Github
##### [Github](https://github.com/)
Github will be our best friend for code managing. Here everybody in the team share their code and get feedback from others. Also it will allows you to save your code and have backup (just in case).\
You need to ask a permanent staff member to add your GitHub account to the Quantum-Optics-LKB *organization* in order to gain access to the team's repositories.

### Zotero
##### [Zotero](https://www.zotero.org/)
"I present you my best friend.." M. Jacquet.  
Zotero is the database where all scientific articles of interest to us are listed and accessible. You are free to navigate inside it and find a lot of information (from previous team paper or other group).
For all the different project (or maybe for your own interest) you can create a repository where you can store the literrature and get pdf. Also, it allows you to transfert any repository in **tex** to save you time on wrtiting the bibliography.

### ArXiv
##### [arXiv](https://arxiv.org/)
This website gathers all the articles published or in the process of being published in the whole world (as long as their authors have put them on it). It is a simple way to consult articles, reviews or books. This site also allows you to get the reference of these articles in tex format or even better to put them in zotero :)

### Python
##### [Python](https://www.anaconda.com/)
The most used language in the team. Mandatory to interface with the lab's equipment. **YOU MUST INSTALL PYTHON THROUGH ANACONDA : PERIOD !**\
Unless you need specific Python installs for a project and you *know exactly what you are doing*, this is the safest most complete Python install. \
On **Linux**, it is more than recommanded to add the Python version of Anaconda to your `PATH` by running `conda init` at the end of the install (explained in the installer's messages).\
On **Windows**, this last step is **discouraged** ! Windows handle very differently Python installs, and you should not try to mess with it. Just do whatever the installer tells you to do ...\
On **Mac**, it's your problem cowboy !

### Julia
##### [Julia](https://julialang.org/)
A very nice JIT-compiled langage that is gaining a lot of popularity in the scientific community. Offers a lot of performance for numerical calculations. 

### CUDA
##### [CUDA](https://developer.nvidia.com/cuda-toolkit)
CUDA is a variant of C++ used to do computations on Nvidia GPU's. It is very useful if you have a Nvidia GPU on your computer to massively speed up FFT calculations (that occur a lot in optics simulation, NLSE simulations) in conjuction with [CuPy](https://cupy.dev/).

### VS Code
##### [VSCode](https://code.visualstudio.com/)
The world's most used code editor : not for nothing. In thi editor you will be able to run any language you want but also write your papers in Latex or your lab book in Markdown. A list of mandatory extensions :
- autoDocstring : for Python
- Jupyter
- Pylance
- Julia
- LaTex Workshop
- Markdown All in One
- markdownlint
