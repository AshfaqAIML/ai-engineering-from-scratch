# Learn Computer Vision from Scratch: 28 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/computer-vision

From pixels to understanding across image, video, and 3D.

## Lessons in Phase 04: Computer Vision

01. [Image Fundamentals — Pixels, Channels, Color Spaces](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F01-image-fundamentals): An image is a tensor of light samples. Every vision model you will ever use starts from this one fact. Explain how a continuous scene gets discretized into pixels and why sampling/quantization… (Learn, Python, ~45 min)
02. [Convolutions from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F02-convolutions-from-scratch): A convolution is a tiny dense layer you slide across an image, sharing the same weights at every location. Implement 2D convolution from scratch using only NumPy, including the nested-loop version… (Build, Python, ~75 min)
03. [CNNs — LeNet to ResNet](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F03-cnns-lenet-to-resnet): Every major CNN of the last thirty years is the same conv–nonlinearity–downsample recipe with one new idea bolted on. Learn the ideas in order. (Build, Python, ~75 min)
04. [Image Classification](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F04-image-classification): A classifier is a function from pixels to a probability distribution over classes. Everything else is plumbing. Build an end-to-end image classification pipeline on CIFAR-10: dataset, augmentation,… (Build, Python, ~75 min)
05. [Transfer Learning & Fine-Tuning](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F05-transfer-learning): Somebody else spent a million GPU hours teaching a network what edges, textures, and object parts look like. You should borrow those features before training your own. (Build, Python, ~75 min)
06. [Object Detection — YOLO from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F06-object-detection-yolo): Detection is classification plus regression, run at every position in a feature map, then cleaned up with non-maximum suppression. (Build, Python, ~75 min)
07. [Semantic Segmentation — U-Net](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F07-semantic-segmentation-unet): Segmentation is classification at every pixel. U-Net makes it work by pairing a downsampling encoder with an upsampling decoder and wiring skip connections between them. (Build, Python, ~75 min)
08. [Instance Segmentation — Mask R-CNN](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F08-instance-segmentation-mask-rcnn): Add a tiny mask branch to a Faster R-CNN detector and you have instance segmentation. The hard part is RoIAlign, and it is harder than it looks. (Build, Python, ~75 min)
09. [Image Generation — GANs](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F09-image-generation-gans): A GAN is two neural networks in a fixed game. One draws, one critiques. They get better together until the drawings fool the critic. (Build, Python, ~75 min)
10. [Image Generation — Diffusion Models](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F10-image-generation-diffusion): A diffusion model learns to denoise. Train it to remove a tiny bit of noise from a noisy image, repeat that backwards a thousand times, and you have an image generator. (Build, Python, ~75 min)
11. [Stable Diffusion — Architecture & Fine-Tuning](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F11-stable-diffusion): Stable Diffusion is a DDPM that runs in the latent space of a pretrained VAE, conditioned on text via cross-attention, sampled with a fast deterministic ODE solver, and steered by classifier-free… (Build, Python, ~75 min)
12. [Video Understanding — Temporal Modeling](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F12-video-understanding): A video is a sequence of images plus the physics that connects them. Every video model either treats time as an extra axis (3D conv), a sequence to attend over (transformer), or a feature to extract… (Build, Python, ~45 min)
13. [3D Vision — Point Clouds & NeRFs](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F13-3d-vision-nerf): 3D vision comes in two flavours. Point clouds are the sensor's raw output. NeRFs are the learned volumetric field. Both answer "what is where in space." Distinguish explicit (point cloud, mesh,… (Build, Python, ~45 min)
14. [Vision Transformers (ViT)](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F14-vision-transformers): Cut the image into patches, treat each patch as a word, run a standard transformer. Don't look back. Implement patch embedding, learned positional embedding, class token, and transformer encoder… (Build, Python, ~45 min)
15. [Real-Time Vision — Edge Deployment](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F15-real-time-edge): Edge inference is the discipline of getting a 90-accuracy model to run at 30 fps on a device with 2 GB of RAM. Every percentage point of accuracy is traded against milliseconds of latency. (Build, Python, ~75 min)
16. [Build a Complete Vision Pipeline — Capstone](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F16-vision-pipeline-capstone): A production vision system is a chain of models and rules stitched with data contracts. The pieces are already in this phase; the capstone wires them together end-to-end. (Build, Python, ~120 min)
17. [Self-Supervised Vision — SimCLR, DINO, MAE](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F17-self-supervised-vision): Labels are the bottleneck of supervised vision. Self-supervised pretraining removes them: learn visual features from 100M unlabelled images, fine-tune on 10k labelled ones. (Build, Python, ~75 min)
18. [Open-Vocabulary Vision — CLIP](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F18-open-vocab-clip): Train an image encoder and a text encoder together so that matching (image, caption) pairs land at the same point in a shared space. That is the whole trick. (Build, Python, ~45 min)
19. [OCR & Document Understanding](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F19-ocr-document-understanding): OCR is a three-stage pipeline — detect text boxes, recognise the characters, then lay them out. Every modern OCR system reorders these stages or merges them. (Build, Python, ~45 min)
20. [Image Retrieval & Metric Learning](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F20-image-retrieval-metric): A retrieval system ranks candidates by a distance in embedding space. Metric learning is the discipline of shaping that space so the distances mean what you want. (Build, Python, ~45 min)
21. [Keypoint Detection & Pose Estimation](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F21-keypoint-pose): A pose is a set of ordered keypoints. A keypoint detector is a heatmap regressor. Everything else is bookkeeping. Distinguish top-down and bottom-up pose estimation and state when each is used. (Build, Python, ~45 min)
22. [3D Gaussian Splatting from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F22-3d-gaussian-splatting): A scene is a cloud of millions of 3D Gaussians. Each one has a position, orientation, scale, opacity, and a colour that depends on viewing direction. (Build, Python, ~90 min)
23. [Diffusion Transformers & Rectified Flow](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F23-diffusion-transformers-rectified-flow): The U-Net is not the secret of diffusion. Replace it with a transformer, swap the noise schedule for a straight-line flow, and suddenly you have SD3, FLUX, and every 2026 text-to-image model. (Build, Python, ~75 min)
24. [SAM 3 & Open-Vocabulary Segmentation](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F24-sam3-open-vocab-segmentation): Give a model a text prompt and an image and get masks for every matching object. SAM 3 made that a single forward pass. Distinguish SAM (visual prompts only), Grounded SAM / SAM 2 (detector + SAM),… (Build, Python, ~60 min)
25. [Vision-Language Models — The ViT-MLP-LLM Pattern](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F25-vision-language-models): A vision encoder converts an image into tokens. An MLP projector maps those tokens into the LLM's embedding space. A language model does the rest. (Build, Python, ~75 min)
26. [Monocular Depth & Geometry Estimation](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F26-monocular-depth): A depth map is a single-channel image where each pixel is a distance from the camera. Predicting it from one RGB frame used to be impossible without stereo or LiDAR. (Build, Python, ~60 min)
27. [Multi-Object Tracking & Video Memory](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F27-multi-object-tracking): Tracking is detection plus association. Detect every frame. Match this frame's detections to last frame's tracks by ID. Distinguish tracking-by-detection from query-based tracking and name the… (Build, Python, ~60 min)
28. [World Models & Video Diffusion](https://aiengineeringfromscratch.com/lesson?path=phases%2F04-computer-vision%2F28-world-models-video-diffusion): A video model that predicts the next seconds of a scene is a world simulator. Condition that prediction on actions and you have a learned game engine. (Build, Python, ~75 min)

## Start

Run this command from the repository root:

```bash
python3 phases/04-computer-vision/01-image-fundamentals/code/main.py
```

## Glossary terms in this phase

- [Agent](https://aiengineeringfromscratch.com/glossary/agent)
- [Alignment](https://aiengineeringfromscratch.com/glossary/alignment)
- [Attention](https://aiengineeringfromscratch.com/glossary/attention)
- [CNN (Convolutional Neural Network)](https://aiengineeringfromscratch.com/glossary/cnn-convolutional-neural-network)
- [Contrastive Learning](https://aiengineeringfromscratch.com/glossary#contrastive-learning)
- [Cosine Similarity](https://aiengineeringfromscratch.com/glossary/cosine-similarity)
- [Cross-Entropy](https://aiengineeringfromscratch.com/glossary/cross-entropy)
- [Decoder](https://aiengineeringfromscratch.com/glossary#decoder)
- [Diffusion Model](https://aiengineeringfromscratch.com/glossary/diffusion-model)
- [Embedding](https://aiengineeringfromscratch.com/glossary/embedding)
- [Encoder](https://aiengineeringfromscratch.com/glossary/encoder)
- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Feature](https://aiengineeringfromscratch.com/glossary/feature)
- [Fine-tuning](https://aiengineeringfromscratch.com/glossary/fine-tuning)
- [GAN (Generative Adversarial Network)](https://aiengineeringfromscratch.com/glossary#gan-generative-adversarial-network)
- [Image Token](https://aiengineeringfromscratch.com/glossary/image-token)
- [Inference](https://aiengineeringfromscratch.com/glossary/inference)
- [Latent Space](https://aiengineeringfromscratch.com/glossary/latent-space)
- [Learning Rate](https://aiengineeringfromscratch.com/glossary/learning-rate)
- [Logits](https://aiengineeringfromscratch.com/glossary/logits)
- [LoRA (Low-Rank Adaptation)](https://aiengineeringfromscratch.com/glossary/lora-low-rank-adaptation)
- [Parameter](https://aiengineeringfromscratch.com/glossary/parameter)
- [Patch](https://aiengineeringfromscratch.com/glossary/patch)
- [Patch Embedding](https://aiengineeringfromscratch.com/glossary/patch-embedding)
- [QLoRA](https://aiengineeringfromscratch.com/glossary/qlora)
- [Recall@K](https://aiengineeringfromscratch.com/glossary/recall-k)
- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)
- [Tensor](https://aiengineeringfromscratch.com/glossary#tensor)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Transfer Learning](https://aiengineeringfromscratch.com/glossary/transfer-learning)
- [Transformer](https://aiengineeringfromscratch.com/glossary/transformer)
- [Vision Transformer (ViT)](https://aiengineeringfromscratch.com/glossary/vision-transformer-vit)
- [Vision-Language Model (VLM)](https://aiengineeringfromscratch.com/glossary/vision-language-model-vlm)
- [Zero-Shot](https://aiengineeringfromscratch.com/glossary#zero-shot)

## Frequently asked questions

### How many lessons are in Phase 04: Computer Vision?

Phase 04 has 28 lessons: 27 Build lessons and 1 Learn lesson. The lesson code uses Python.

### What should I know before I start Phase 04?

The phase guide gives these prerequisites: Phase 1 Lesson 12, Tensor Operations, and Phase 3 Lesson 11, Introduction to PyTorch. The first demo needs only NumPy. In the course roadmap, this phase builds on Phase 03: Deep Learning Core.

### Is Phase 04 free?

Yes. All 28 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 04 take?

The time estimates of all 28 lessons add up to about 31 hours.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
