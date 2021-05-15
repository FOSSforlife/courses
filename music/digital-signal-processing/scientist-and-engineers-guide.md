---
title: The Scientist and Engineer's Guide to Digital Signal Processing
author: Steven W. Smith
url: http://www.dspguide.com/pdfbook.htm
---

# FOUNDATIONS

## Chapter 1 - The Breadth and Depth of DSP

- [ ] The Roots of DSP
- [ ] Telecommunications
- [ ] Audio Processing
- [ ] Echo Location
- [ ] Image Processing

## Chapter 2 - Statistics, Probability and Noise

- [ ] Signal and Graph Terminology
- [ ] Mean and Standard Deviation
- [ ] Signal vs. Underlying Process
- [ ] The Histogram, Pmf and Pdf
- [ ] The Normal Distribution
- [ ] Digital Noise Generation
- [ ] Precision and Accuracy

## Chapter 3 - ADC and DAC

- [ ] Quantization
- [ ] The Sampling Theorem
- [ ] Digital-to-Analog Conversion
- [ ] Analog Filters for Data Conversion
- [ ] Selecting The Antialias Filter
- [ ] Multirate Data Conversion
- [ ] Single Bit Data Conversion

## Chapter 4 - DSP Software

- [ ] Computer Numbers
- [ ] Fixed Point (Integers)
- [ ] Floating Point (Real Numbers)
- [ ] Number Precision
- [ ] Execution Speed: Program Language
- [ ] Execution Speed: Hardware
- [ ] Execution Speed: Programming Tips

# FUNDAMENTALS

## Chapter 5 - Linear Systems

- [ ] Signals and Systems
- [ ] Requirements for Linearity
- [ ] Static Linearity and Sinusoidal Fidelity
- [ ] Examples of Linear and Nonlinear Systems
- [ ] Special Properties of Linearity
- [ ] Superposition: the Foundation of DSP
- [ ] Common Decompositions
- [ ] Alternatives to Linearity

## Chapter 6 - Convolution

- [ ] The Delta Function and Impulse Response
- [ ] Convolution
- [ ] The Input Side Algorithm
- [ ] The Output Side Algorithm
- [ ] The Sum of Weighted Inputs

## Chapter 7 - Properties of Convolution

- [ ] Common Impulse Responses
- [ ] Mathematical Properties
- [ ] Correlation
- [ ] Speed

## Chapter 8 - The Discrete Fourier Transform

- [ ] The Family of Fourier Transform
- [ ] Notation and Format of the Real DFT
- [ ] The Frequency Domain's Independent Variable
- [ ] DFT Basis Functions
- [ ] Synthesis, Calculating the Inverse DFT
- [ ] Analysis, Calculating the DFT
- [ ] Duality
- [ ] Polar Notation
- [ ] Polar Nuisances

## Chapter 9 - Applications of the DFT

- [ ] Spectral Analysis of Signals
- [ ] Frequency Response of Systems
- [ ] Convolution via the Frequency Domain

## Chapter 10 - Fourier Transform Properties

- [ ] Linearity of the Fourier Transform
- [ ] Characteristics of the Phase
- [ ] Periodic Nature of the DFT
- [ ] Compression and Expansion, Multirate methods
- [ ] Multiplying Signals (Amplitude Modulation)
- [ ] The Discrete Time Fourier Transform
- [ ] Parseval's Relation

## Chapter 11 - Fourier Transform Pairs

- [ ] Delta Function Pairs
- [ ] The Sinc Function
- [ ] Other Transform Pairs
- [ ] Gibbs Effect
- [ ] Harmonics
- [ ] Chirp Signals

## Chapter 12 - The Fast Fourier Transform

- [ ] Real DFT Using the Complex DFT
- [ ] How the FFT works
- [ ] FFT Programs
- [ ] Speed and Precision Comparisons
- [ ] Further Speed Increases

## Chapter 13 - Continuous Signal Processing

- [ ] The Delta Function
- [ ] Convolution
- [ ] The Fourier Transform
- [ ] The Fourier Series

# DIGITAL FILTERS

## Chapter 14 - Introduction to Digital Filters

- [ ] Filter Basics
- [ ] How Information is Represented in Signals
- [ ] Time Domain Parameters
- [ ] Frequency Domain Parameters
- [ ] High-Pass, Band-Pass and Band-Reject Filters
- [ ] Filter Classification

## Chapter 15 - Moving Average Filters

- [ ] Implementation by Convolution
- [ ] Noise Reduction vs. Step Response
- [ ] Frequency Response
- [ ] Relatives of the Moving Average Filter
- [ ] Recursive Implementation

## Chapter 16 - Windowed-Sinc Filters

- [ ] Strategy of the Windowed-Sinc
- [ ] Designing the Filter
- [ ] Examples of Windowed-Sinc Filters
- [ ] Pushing it to the Limit

## Chapter 17 - Custom Filters

- [ ] Arbitrary Frequency Response
- [ ] Deconvolution
- [ ] Optimal Filters

## Chapter 18 - FFT Convolution

- [ ] The Overlap-Add Method
- [ ] FFT Convolution
- [ ] Speed Improvements

## Chapter 19 - Recursive Filters

- [ ] The Recursive Method
- [ ] Single Pole Recursive Filters
- [ ] Narrow-band Filters
- [ ] Phase Response
- [ ] Using Integers

## Chapter 20 - Chebyshev Filters

- [ ] The Chebyshev and Butterworth Responses
- [ ] Designing the Filter
- [ ] Step Response Overshoot
- [ ] Stability

## Chapter 21 - Filter Comparison

- [ ] Match #1: Analog vs. Digital Filters
- [ ] Match #2: Windowed-Sinc vs. Chebyshev
- [ ] Match #3: Moving Average vs. Single Pole

# APPLICATIONS

## Chapter 22 - Audio Processing

- [ ] Human Hearing
- [ ] Timbre
- [ ] Sound Quality vs. Data Rate
- [ ] High Fidelity Audio
- [ ] Companding
- [ ] Speech Synthesis and Recognition
- [ ] Nonlinear Audio Processing

## Chapter 23 - Image Formation & Display

- [ ] Digital Image Structure
- [ ] Cameras and Eyes
- [ ] Television Video Signals
- [ ] Other Image Acquisition and Display
- [ ] Brightness and Contrast Adjustments
- [ ] Grayscale Transforms
- [ ] Warping

## Chapter 24 - Linear Image Processing

- [ ] Convolution
- [ ] 3x3 Edge Modification
- [ ] Convolution by Separability
- [ ] Example of a Large PSF: Illumination Flattening
- [ ] Fourier Image Analysis
- [ ] FFT Convolution
- [ ] A Closer Look at Image Convolution

## Chapter 25 - Special Imaging Techniques

- [ ] Spatial Resolution
- [ ] Sample Spacing and Sampling Aperture
- [ ] Signal-to-Noise Ratio
- [ ] Morphological Image Processing
- [ ] Computed Tomography

## Chapter 26 - Neural Networks (and more!)

- [ ] Target Detection
- [ ] Neural Network Architecture
- [ ] Why Does it Work?
- [ ] Training the Neural Network
- [ ] Evaluating the Results
- [ ] Recursive Filter Design

## Chapter 27 - Data Compression

- [ ] Data Compression Strategies
- [ ] Run-Length Encoding
- [ ] Huffman Encoding
- [ ] Delta Encoding
- [ ] LZW Compression
- [ ] JPEG (Transform Compression)
- [ ] MPEG

## Chapter 28 - Digital Signal Processors

- [ ] How DSPs are Different from Other Microprocessors
- [ ] Circular Buffering
- [ ] Architecture of the Digital Signal Processor
- [ ] Fixed versus Floating Point
- [ ] C versus Assembly
- [ ] How Fast are DSPs?
- [ ] The Digital Signal Processor Market

## Chapter 29 - Getting Started with DSPs

- [ ] The ADSP-2106x family
- [ ] The SHARC EZ-KIT Lite
- [ ] Design Example: An FIR Audio Filter
- [ ] Analog Measurements on a DSP System
- [ ] Another Look at Fixed versus Floating Point
- [ ] Advanced Software Tools

# COMPLEX TECHNIQUES

## Chapter 30 - Complex Numbers

- [ ] The Complex Number System
- [ ] Polar Notation
- [ ] Using Complex Numbers by Substitution
- [ ] Complex Representation of Sinusoids
- [ ] Complex Representation of Systems
- [ ] Electrical Circuit Analysis

## Chapter 31 - The Complex Fourier Transform

- [ ] The Real DFT
- [ ] Mathematical Equivalence
- [ ] The Complex DFT
- [ ] The Family of Fourier Transforms
- [ ] Why the Complex Fourier Transform is Used

## Chapter 32 - The Laplace Transform

- [ ] The Nature of the s-Domain
- [ ] Strategy of the Laplace Transform
- [ ] Analysis of Electric Circuits
- [ ] The Importance of Poles and Zeros
- [ ] Filter Design in the s-Domain

## Chapter 33 - The z-Transform

- [ ] The Nature of the z-Domain
- [ ] Analysis of Recursive Systems
- [ ] Cascade and Parallel Stages
- [ ] Spectral Inversion
- [ ] Gain Changes
- [ ] Chebyshev-Butterworth Filter Design
- [ ] The Best and Worst of DSP

## Chapter 34 - Explaining Benford's Law

- [ ] Frank Benford's Discovery
- [ ] Homomorphic Processing
- [ ] The Ones Scaling Test
- [ ] Writing Benford's Law as a Convolution
- [ ] Solving in the Frequency Domain
- [ ] Solving Mystery #1
- [ ] Solving Mystery #2
- [ ] More on Following Benford's law
- [ ] Analysis of the Log-Normal Distribution
- [ ] The Power of Signal Processing
