# What is VAE (Variational Autoencoder)?

Canonical page: https://aiengineeringfromscratch.com/glossary/vae-variational-autoencoder
Category: Models & inference

A latent-variable model trained with a reconstruction objective and a regularization term that keeps an approximate posterior close to a chosen prior. The reparameterization estimator allows gradients through stochastic latent sampling.

What people say: "A probabilistic generative autoencoder."

## What is the common confusion about VAE (Variational Autoencoder)?

A VAE does not force every latent distribution to one fixed Gaussian; the exact prior and approximate posterior are modeling choices.

## Lessons

- [Autoencoders & Variational Autoencoders (VAE)](https://aiengineeringfromscratch.com/lesson?path=phases%2F08-generative-ai%2F02-autoencoders-vae) (Phase 08: Generative AI)
- [Sampling Methods](https://aiengineeringfromscratch.com/lesson?path=phases%2F01-math-foundations%2F16-sampling-methods) (Phase 01: Math Foundations)

## Related terms

- [Latent Space](https://aiengineeringfromscratch.com/glossary/latent-space)
- [Encoder](https://aiengineeringfromscratch.com/glossary/encoder)
- [Decoder](https://aiengineeringfromscratch.com/glossary#decoder)
- [Diffusion Model](https://aiengineeringfromscratch.com/glossary/diffusion-model)
- [Image Token](https://aiengineeringfromscratch.com/glossary/image-token)

## Sources

- [Auto-Encoding Variational Bayes](https://arxiv.org/abs/1312.6114)

[Glossary](https://aiengineeringfromscratch.com/glossary) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
