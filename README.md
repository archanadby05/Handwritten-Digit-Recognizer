## MNIST Digit Classifier Model

This repository contains a pre-trained Keras model (`mnist_model.h5`) for classifying handwritten digits from the MNIST dataset.

---

### File Description

- **`mnist_model.h5`**  
  A trained Keras/TensorFlow model saved in HDF5 format. This model can recognize digits (0–9) from 28x28 grayscale images based on the MNIST dataset.

---

### Model Details

- **Dataset**: [MNIST Handwritten Digits](http://yann.lecun.com/exdb/mnist/)
- **Input shape**: `(28, 28, 1)` (grayscale images)
- **Output**: 10-class softmax layer (digit classes: 0 to 9)
- **Framework**: TensorFlow / Keras
- **Format**: HDF5 (`.h5`)

---

### Usage

### 🔧 Load the Model

```python
from tensorflow.keras.models import load_model

model = load_model("mnist_model.h5")
