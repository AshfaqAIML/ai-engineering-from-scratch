# Learn Deep Learning from Scratch: 13 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/deep-learning-core

Neural networks from first principles. No frameworks until you build one yourself.

## Lessons in Phase 03: Deep Learning Core

01. [The Perceptron](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F01-the-perceptron): The perceptron is the atom of neural networks. Split it open and you find weights, a bias, and a decision. Implement a perceptron from scratch in Python, including the weight update rule and step… (Build, Python, ~60 min)
02. [Multi-Layer Networks and Forward Pass](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F02-multi-layer-networks): One neuron draws a line. Stack them, and you can draw anything. Build a multi-layer network from scratch with Layer and Network classes that perform a complete forward pass. (Build, Python, ~90 min)
03. [Backpropagation from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F03-backpropagation): Backpropagation is the algorithm that makes learning possible. Without it, neural networks are just expensive random number generators. (Build, Python, ~120 min)
04. [Activation Functions](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F04-activation-functions): Without nonlinearity, your 100-layer network is a fancy matrix multiply. Activations are the gates that let neural networks think in curves. (Build, Python, ~75 min)
05. [Loss Functions](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F05-loss-functions): Your network makes a prediction. The ground truth says otherwise. How wrong is it? That number is the loss. Pick the wrong loss function and your model optimizes for the wrong thing entirely. (Build, Python, ~75 min)
06. [Optimizers](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F06-optimizers): Gradient descent tells you which direction to move. It says nothing about how far or how fast. SGD is a compass. Adam is GPS with traffic data. (Build, Python, ~75 min)
07. [Regularization](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F07-regularization): Your model gets 99% on training data and 60% on test data. It memorized instead of learning. Regularization is the tax you impose on complexity to force generalization. (Build, Python, ~75 min)
08. [Weight Initialization and Training Stability](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F08-weight-initialization): Initialize wrong and training never starts. Initialize right and 50 layers train as smoothly as 3. Implement zero, random, Xavier/Glorot, and Kaiming/He initialization strategies and measure their… (Build, Python, ~90 min)
09. [Learning Rate Schedules and Warmup](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F09-learning-rate-schedules): The learning rate is the single most important hyperparameter. Not the architecture. Not the dataset size. Not the activation function. The learning rate. If you tune nothing else, tune this. (Build, Python, ~90 min)
10. [Build Your Own Mini Framework](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F10-mini-framework): You have built neurons, layers, networks, backprop, activations, loss functions, optimizers, regularization, initialization, and LR schedules. All as separate pieces. (Build, Python, ~120 min)
11. [Introduction to PyTorch](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F11-intro-to-pytorch): You built the engine from pistons and crankshafts. Now learn the one everyone actually drives. Build and train neural networks using PyTorch's nn.Module, nn.Sequential, and autograd. (Build, Python, ~75 min)
12. [Introduction to JAX](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F12-intro-to-jax): PyTorch mutates tensors. TensorFlow builds graphs. JAX compiles pure functions. That last one changes how you think about deep learning. (Build, Python, ~90 min)
13. [Debugging Neural Networks](https://aiengineeringfromscratch.com/lesson?path=phases%2F03-deep-learning-core%2F13-debugging-neural-networks): Your network compiled. It ran. It produced a number. The number is wrong and nothing crashed. Welcome to the hardest kind of debugging -- the kind where there is no error message. (Build, Python, ~90 min)

## Start

Run this command from the repository root:

```bash
python3 phases/03-deep-learning-core/01-the-perceptron/code/perceptron.py
```

## Glossary terms in this phase

- [Activation Function](https://aiengineeringfromscratch.com/glossary#activation-function)
- [Adam (Optimizer)](https://aiengineeringfromscratch.com/glossary/adam-optimizer)
- [AdamW](https://aiengineeringfromscratch.com/glossary/adamw)
- [Autograd](https://aiengineeringfromscratch.com/glossary#autograd)
- [Backpropagation](https://aiengineeringfromscratch.com/glossary/backpropagation)
- [Cross-Entropy](https://aiengineeringfromscratch.com/glossary/cross-entropy)
- [Data Augmentation](https://aiengineeringfromscratch.com/glossary/data-augmentation)
- [Dropout](https://aiengineeringfromscratch.com/glossary#dropout)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Gradient](https://aiengineeringfromscratch.com/glossary/gradient)
- [Gradient Descent](https://aiengineeringfromscratch.com/glossary#gradient-descent)
- [Hyperparameter](https://aiengineeringfromscratch.com/glossary/hyperparameter)
- [JAX](https://aiengineeringfromscratch.com/glossary/jax)
- [Learning Rate](https://aiengineeringfromscratch.com/glossary/learning-rate)
- [Learning Rate Schedule](https://aiengineeringfromscratch.com/glossary/learning-rate-schedule)
- [Loss Function](https://aiengineeringfromscratch.com/glossary/loss-function)
- [NaN (Not a Number)](https://aiengineeringfromscratch.com/glossary/nan-not-a-number)
- [Normalization](https://aiengineeringfromscratch.com/glossary/normalization)
- [Optimizer](https://aiengineeringfromscratch.com/glossary/optimizer)
- [Overfitting](https://aiengineeringfromscratch.com/glossary/overfitting)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [ReLU](https://aiengineeringfromscratch.com/glossary#relu)
- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)
- [Stochastic Gradient Descent (SGD)](https://aiengineeringfromscratch.com/glossary/stochastic-gradient-descent-sgd)
- [Tensor](https://aiengineeringfromscratch.com/glossary#tensor)
- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [Warmup](https://aiengineeringfromscratch.com/glossary/warmup)
- [Weight](https://aiengineeringfromscratch.com/glossary/weight)
- [Weight Decay](https://aiengineeringfromscratch.com/glossary/weight-decay)

## Frequently asked questions

### How many lessons are in Phase 03: Deep Learning Core?

Phase 03 has 13 lessons, all Build lessons. The lesson code uses Python.

### What should I know before I start Phase 03?

The phase guide gives these prerequisites: Phase 1 Linear Algebra Intuition. Phase 2 is recommended for model evaluation vocabulary. In the course roadmap, this phase builds on Phase 02: ML Fundamentals.

### Is Phase 03 free?

Yes. All 13 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 03 take?

The time estimates of all 13 lessons add up to about 19 hours.

### What comes after Phase 03?

Phase 04: Computer Vision, Phase 05: NLP: Foundations to Advanced, Phase 06: Speech & Audio and Phase 09: Reinforcement Learning build on this phase.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
