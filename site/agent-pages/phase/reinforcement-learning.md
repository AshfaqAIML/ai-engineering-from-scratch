# Learn Reinforcement Learning from Scratch: 12 Free Lessons

Canonical page: https://aiengineeringfromscratch.com/phase/reinforcement-learning

Agents that learn by doing. The foundation of RLHF.

## Lessons in Phase 09: Reinforcement Learning

01. [MDPs, States, Actions & Rewards](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F01-mdps-states-actions-rewards): A Markov Decision Process is five things: states, actions, transitions, rewards, a discount. Everything in RL — Q-learning, PPO, DPO, GRPO — optimizes over this shape. (Learn, Python, ~45 min)
02. [Dynamic Programming — Policy Iteration & Value Iteration](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F02-dynamic-programming): Dynamic programming is RL with cheating. You already know the transition and reward functions; you just iterate the Bellman equation until V or π stops moving. (Build, Python, ~75 min)
03. [Monte Carlo Methods — Learning from Complete Episodes](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F03-monte-carlo-methods): Dynamic programming needs a model. Monte Carlo needs nothing but episodes. Run the policy, watch the returns, average them. The simplest idea in RL — and the one that unlocks everything downstream. (Build, Python, ~75 min)
04. [Temporal Difference — Q-Learning & SARSA](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F04-q-learning-sarsa): Monte Carlo waits until the episode ends. TD updates after every step by bootstrapping the next value estimate. Q-learning is off-policy and optimistic; SARSA is on-policy and cautious. (Build, Python, ~75 min)
05. [Deep Q-Networks (DQN)](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F05-dqn): 2013: Mnih trained one Q-learning network on raw pixels, beat every classical RL agent on seven Atari games. 2015: extended to 49 games, published in Nature, sparked the deep-RL era. (Build, Python, ~75 min)
06. [Policy Gradient — REINFORCE from Scratch](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F06-policy-gradients-reinforce): Stop estimating value. Parameterize the policy directly, compute the gradient of expected return, step uphill. Williams (1992) wrote it in one theorem. (Build, Python, ~75 min)
07. [Actor-Critic — A2C and A3C](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F07-actor-critic-a2c-a3c): REINFORCE is noisy. Add a critic that learns V̂(s), subtract it from the return, and you get an advantage that has the same expectation but far lower variance. That is actor-critic. (Build, Python, ~75 min)
08. [Proximal Policy Optimization (PPO)](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F08-ppo): A2C throws away each rollout after one update. PPO wraps the policy gradient in a clipped importance ratio so you can do 10+ epochs on the same data without the policy exploding. Schulman et al. (Build, Python, ~75 min)
09. [Reward Modeling & RLHF](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F09-reward-modeling-rlhf): Humans cannot write a reward function for "good assistant response," but they can compare two responses and pick the better one. (Build, Python, ~45 min)
10. [Multi-Agent RL](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F10-multi-agent-rl): Single-agent RL assumes the environment is stationary. Put two learning agents in the same world and that assumption breaks: each agent is part of the other's environment, and both are changing. (Build, Python, ~45 min)
11. [Sim-to-Real Transfer](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F11-sim-to-real-transfer): A policy trained in a simulator that fails on hardware is a policy that memorized the simulator. Domain randomization, domain adaptation, and system identification are the three tools to make… (Build, Python, ~45 min)
12. [RL for Games — AlphaZero, MuZero, and the LLM-Reasoning Era](https://aiengineeringfromscratch.com/lesson?path=phases%2F09-reinforcement-learning%2F12-rl-for-games): 1992: TD-Gammon beat human champions at backgammon with pure TD. 2016: AlphaGo beat Lee Sedol. 2017: AlphaZero dominated chess, shogi, and Go from scratch. (Build, Python, ~120 min)

## Start

Run this command from the repository root:

```bash
python3 phases/09-reinforcement-learning/01-mdps-states-actions-rewards/code/main.py
```

## Glossary terms in this phase

- [Evaluation (Eval)](https://aiengineeringfromscratch.com/glossary/evaluation-eval)
- [Gradient](https://aiengineeringfromscratch.com/glossary/gradient)
- [Hyperparameter](https://aiengineeringfromscratch.com/glossary/hyperparameter)
- [RLHF (Reinforcement Learning from Human Feedback)](https://aiengineeringfromscratch.com/glossary/rlhf-reinforcement-learning-from-human-feedback)
- [Softmax](https://aiengineeringfromscratch.com/glossary/softmax)
- [Token](https://aiengineeringfromscratch.com/glossary/token)
- [Zero-Shot](https://aiengineeringfromscratch.com/glossary#zero-shot)

## Frequently asked questions

### How many lessons are in Phase 09: Reinforcement Learning?

Phase 09 has 12 lessons: 11 Build lessons and 1 Learn lesson. The lesson code uses Python.

### What should I know before I start Phase 09?

The phase guide gives these prerequisites: Phase 1 probability and distributions, plus Phase 2 Lesson 01 for the ML taxonomy. In the course roadmap, this phase builds on Phase 03: Deep Learning Core.

### Is Phase 09 free?

Yes. All 12 lessons are free to read on this site, and you do not need an account. The lesson code is open source under the MIT license.

### How long does Phase 09 take?

The time estimates of all 12 lessons add up to about 14 hours.

[Course catalog](https://aiengineeringfromscratch.com/catalog) | [Curriculum index](https://aiengineeringfromscratch.com/llms.txt)
